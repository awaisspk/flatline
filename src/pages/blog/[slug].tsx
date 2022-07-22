import { gql } from 'graphql-request';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { LongPost } from '@/components/screens/blog/LongPost';
import { SmallPost } from '@/components/screens/blog/SmallPost';
import { SharePost } from '@/components/ui/SharePost';
import { PageLayout } from '@/layouts';
import { formatDate, formatReadTime } from '@/utils';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts?.map((post: any) => `/blog/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const graphqlRequest = {
    query: gql`
      query ServiceBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: { slug: { eq: $slug } }) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          excerpt
          slug
          coverImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 1200, h: 500, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
          date: _publishedAt
          contentWordCounter
          content {
            type: __typename
            ... on SmallPostRecord {
              structuredContent {
                value
                blocks {
                  type: __typename
                  ... on ImageRecord {
                    image {
                      responsiveImage {
                        srcSet # cannot use fragments inside blocks :(
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        alt
                        title
                        base64
                      }
                    }
                  }
                }
              }
            }
            ... on LongPostRecord {
              structuredContent {
                value
                blocks {
                  type: __typename
                  ... on ImageRecord {
                    id # id is required here. Time wasted here 10 hours :(
                    image {
                      responsiveImage {
                        srcSet # cannot use fragments inside blocks :(
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        alt
                        title
                        base64
                      }
                    }
                  }
                  ... on FaqRecord {
                    id
                    header
                    content
                  }
                }
              }
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
    variables: {
      slug: params?.slug,
    },
  };
  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            enabled: true,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
};

const BlogPost = ({ subscription }: any) => {
  const {
    data: { post, site },
  } = useQuerySubscription(subscription);
  const metaTags = post.seo.concat(site.favicon);
  const content = post.content[0];

  return (
    <>
      <PageLayout color={content.type === 'SmallPostRecord' ? 'dark' : 'light'}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <main className="mx-auto max-w-flat px-8 text-white sm:px-12">
          <article>
            <div className="flex flex-col-reverse justify-between gap-3  sm:flex-row">
              <div className="space-x-1 text-[15px]">
                <span>
                  {formatReadTime(post.contentWordCounter.readingTime)}
                </span>
                {' //'}
                <span>{formatDate(post.date)}</span>
              </div>
              <SharePost slug={post.slug} />
            </div>
            {content.type === 'SmallPostRecord' && (
              <SmallPost post={post} content={content} />
            )}
            {content.type === 'LongPostRecord' && (
              <LongPost post={post} content={content} />
            )}
          </article>
        </main>
      </PageLayout>
    </>
  );
};

export default BlogPost;
