import { gql } from 'graphql-request';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { Categories } from '@/components/screens/blog/CategoryHeader';
import { PostsList } from '@/components/screens/blog/PostsList';
import { Divider } from '@/components/ui/Divider';
import { PageLayout } from '@/layouts';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allCategories { slug } }` });

  const paths = data.allCategories?.map(
    (post: any) => `/blog/category/${post.slug}`
  );
  const newPaths = [...paths, '/blog'];
  return {
    paths: newPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
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
          slug
        }
        posts: allPosts {
          id
          title
          excerpt
          slug
          coverImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 600, h: 350, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
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
    },
  };
};

const BlogPage = ({ subscription }: any) => {
  const {
    data: { posts, blogPage, allCategories, site },
  } = useQuerySubscription(subscription);
  const metaTags = blogPage.seo.concat(site.favicon);
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat px-8 pb-24 sm:px-12">
          <Categories categories={allCategories} />
          <Divider />
          <PostsList posts={posts} />
        </section>
      </main>
    </>
  );
};

BlogPage.getLayout = (page: any) => {
  return <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
