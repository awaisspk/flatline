import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
import { getPostsByCategories } from '@/utils/queries/blog';

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
      preview,
    },
  };
};

const BlogPage = ({ subscription, preview }: any) => {
  const {
    data: { blogPage, site, posts, allCategories },
  } = useQuerySubscription(subscription);

  const router = useRouter();
  const { category } = router.query;

  const [postsData, setpostsData] = useState(posts);
  const metaTags = blogPage.seo.concat(site.favicon);

  useEffect(() => {
    if (category) {
      const { id } = allCategories.find(
        (item: any) => item.name === (category as string)
      );
      const graphqlRequest = {
        query: getPostsByCategories,
        variables: {
          category: id,
        },
        preview,
      };
      const fetchPostsByCategory = async () => {
        const res = await request(graphqlRequest);
        setpostsData(res.posts);
      };
      fetchPostsByCategory();
    }
  }, [category]);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat px-8 pb-24 sm:px-12">
          <Categories categories={allCategories} />
          <Divider />
          <PostsList posts={postsData} />
        </section>
      </main>
    </>
  );
};

BlogPage.getLayout = (page: any) => {
  return <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
