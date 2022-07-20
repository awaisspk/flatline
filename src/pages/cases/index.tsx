import cx from 'classnames';
import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { WorkCard } from '@/components/screens/work/WorkCard';
import { PageLayout } from '@/layouts';
import { bottomReveal, headingReveal } from '@/utils/animations';
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
        casesPage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        cases: allCases {
          title
          slug
          card {
            title
            creation {
              list
            }
            video {
              url
            }
            coverImage {
              responsiveImage(
                imgixParams: { fit: crop, w: 580, h: 320, auto: format }
              ) {
                ...responsiveImageFragment
              }
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

const Cases = ({ subscription }: any) => {
  const {
    data: { cases, site, casesPage },
  } = useQuerySubscription(subscription);
  const metaTags = casesPage.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <div className="mx-auto mb-24 mt-10 flex max-w-flat overflow-hidden  px-8  sm:px-12 md:justify-end">
          <motion.div
            className="text-5xl font-semibold leading-[100px] text-[#dbdbdb] sm:text-[104px]"
            variants={headingReveal}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            Our work
          </motion.div>
        </div>
        <section className="mx-auto mt-40 flex max-w-flat flex-wrap justify-between gap-10 px-8 pb-24 lg:px-0">
          {cases?.map((item: any, i: number) => {
            return (
              <motion.div
                variants={bottomReveal}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6 }}
                key={i}
                className={cx(
                  'relative basis-full pb-10 md:pb-0 md:basis-[45%]',
                  {
                    'md:mt-40': i % 2 !== 0,
                    'md:-mt-10': i % 2 === 0,
                  }
                )}
              >
                <WorkCard
                  title={item.title}
                  subtitle={item.card[0].title}
                  creation={item.card[0].creation[0]?.list}
                  imageUrl={item.card[0].coverImage.responsiveImage}
                  videoUrl={item.card[0].video.url}
                  href={`/cases/${item.slug}`}
                />
              </motion.div>
            );
          })}
        </section>
      </main>
    </>
  );
};

Cases.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Cases;
