import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { OfficeCarousal } from '@/components/Carousal/OfficeCarousal';
import { JoinUs } from '@/components/screens/aboutus/JoinUs';
import { OurCulture } from '@/components/screens/aboutus/OurCulture';
import { OurOffices } from '@/components/screens/aboutus/OurOffices';
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
        aboutUsPage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          carousal {
            responsiveImage(
              imgixParams: { fit: crop, w: 660, h: 410, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
          joinUs {
            title
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
          }

          office {
            location
            info
            image {
              responsiveImage(
                imgixParams: { fit: crop, w: 360, h: 510, auto: format }
              ) {
                ...responsiveImageFragment
              }
            }
          }
          culture {
            responsiveImage {
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

const Aboutus = ({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { site, aboutUsPage },
  } = useQuerySubscription(subscription);
  const metaTags = aboutUsPage.seo.concat(site.favicon);
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section>
          <div className="mx-auto mb-32 max-w-flat overflow-hidden px-8 sm:px-12">
            <motion.div
              variants={headingReveal}
              initial="initial"
              animate="animate"
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="grid auto-rows-auto"
            >
              <h1 className="text-4xl leading-10 md:text-5xl">
                We make you <span className="text-[#808080]">Pulse</span>.
              </h1>
              <motion.p className="max-w-[620px] text-sm leading-5 text-[#808080] md:text-xl md:leading-7 md:text-black/80">
                Flatline Agency is a global disruptor in custom development &
                design experiences based in Amsterdam. We deliver high-quality
                work - while leveraging the newest and best techniques
                available.
              </motion.p>
            </motion.div>
          </div>
          <section>
            <OfficeCarousal images={aboutUsPage.carousal} />
          </section>
          <motion.div
            className="mx-auto grid max-w-flat grid-cols-1  gap-10 px-8 pb-24 pt-20 sm:grid-cols-2 sm:px-12 sm:pt-28"
            variants={bottomReveal}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="max-w-md text-3xl leading-10 sm:text-4xl">
              Global disruptor in custom development & end-to-end production
              partner.
            </h3>
            <p className="max-w-md">
              We begin where every other agency stops. Delivering high-quality
              work, fast – while leveraging the newest and best techniques
              available. Of course, all our products are built to scale out of
              the box – future proof as to the standard.
            </p>
          </motion.div>
        </section>
        <OurOffices offices={aboutUsPage.office} />
        <OurCulture culture={aboutUsPage.culture} />
        <section className="mx-auto flex  h-screen max-w-flat flex-col px-8  pb-24 sm:px-12">
          <h2 className="mt-20 text-center text-3xl leading-10 sm:text-5xl">
            Want to talk real-time? Get in touch.
          </h2>
        </section>
        <JoinUs jobs={aboutUsPage.joinUs} />
      </main>
    </>
  );
};

Aboutus.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Aboutus;
