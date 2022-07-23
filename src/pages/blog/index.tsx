import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { PaginatePosts } from '@/components/pagination';
import { Categories } from '@/components/screens/blog/CategoryHeader';
import { PostsList } from '@/components/screens/blog/PostsList';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { PageLayout } from '@/layouts';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const graphqlRequest = {
    query: gql`
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blogPage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allCategories {
          id
          name
        }
        posts: allPosts(first: 10) {
          id
          title
          excerpt
          slug
          category {
            name
          }
          coverImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 600, h: 350, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
        }
        totalPosts: _allPostsMeta {
          count
        }
      }
      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            enabled: true,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
};

const BlogPage = ({ subscription, preview }: any) => {
  const {
    data: { blogPage, site, posts, allCategories, totalPosts },
  } = useQuerySubscription(subscription);
  const [postsData, setPostsData] = useState(posts);

  const metaTags = blogPage.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat px-8 pb-24 sm:px-12">
          <Categories categories={allCategories} />
          <Divider />
          <PostsList posts={postsData} />
        </section>
        <div className="flex w-full justify-center space-x-4">
          <PaginatePosts
            initialData={postsData}
            allCategories={allCategories}
            setPostsData={setPostsData}
            preview={preview}
            totalPosts={totalPosts.count}
          />
        </div>

        <div className="my-20 flex flex-col items-center space-y-10">
          <p className="sm:leading-1 text-5xl leading-[60px] underline">
            So, Challenge us.
          </p>
          <Button style={{ maxWidth: '32rem' }}>Schedule a meeting</Button>
        </div>
      </main>
    </>
  );
};

BlogPage.getLayout = (page: any) => {
  return <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
