import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { PostCard } from '@/components/screens/blog/PostCard';
import { Divider } from '@/components/ui/Divider';
import { PageLayout } from '@/layouts';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

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
    data: { posts, blogPage, site },
  } = useQuerySubscription(subscription);
  const metaTags = blogPage.seo.concat(site.favicon);
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <h1 className="my-20 text-center text-6xl">Blog</h1>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <Divider />
          {posts.map((post: any) => (
            <div key={post.id}>
              <PostCard key={post.id} {...post} />
              <Divider />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

BlogPage.getLayout = (page: any) => {
  return <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
