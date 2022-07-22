import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import type { ResponsiveImageType } from 'react-datocms';
import {
  Image,
  renderMetaTags,
  StructuredText,
  useQuerySubscription,
} from 'react-datocms';

import { GalleryCarousal } from '@/components/screens/work/GalleryCarousal';
import { NextCase } from '@/components/screens/work/NextCase';
import { Button } from '@/components/ui/Button';
import { FlatLink } from '@/components/ui/FlatLink';
import { PageLayout } from '@/layouts';
import styles from '@/styles/case.module.css';
import { bottomReveal } from '@/utils/animations';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allCases { slug } }` });

  return {
    paths: data.allCases?.map((item: any) => `/cases/${item.slug}`),
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
        caseDetails: case(filter: { slug: { eq: $slug } }) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          bannerTitle
          brandSlogan
          bannerImage {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          achivementTitle
          achivementDetails
          achivementStats {
            stat
            label
          }
          carousal {
            url
            mimeType
            blurhash
          }
          companyDetail {
            value
            blocks {
              id
              type: __typename
              ... on TextImageRecord {
                image {
                  responsiveImage(
                    imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
                  ) {
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
        nextCases: allCases(filter: { slug: { neq: $slug } }) {
          slug
          cardPreviewImage {
            responsiveImage(
              imgixParams: { fit: clamp, w: 400, h: 520, auto: format }
            ) {
              ...responsiveImageFragment
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
      preview,
    },
  };
};

type IBanner = {
  title: string;
  slogan: string;
  image: ResponsiveImageType;
};

const Banner = ({ image, title, slogan }: IBanner) => {
  return (
    <div className="overflow-hidden">
      <div className="z-1 absolute inset-x-0 top-0 h-[50vh] min-h-[650px] md:min-h-0">
        <motion.h1
          className="absolute bottom-14 z-20 ml-10 pr-14 text-[35px] leading-[40px] text-white md:ml-[calc((100vw-1200px)/2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="absolute right-[3%] top-0 z-20 h-[90%] whitespace-nowrap text-end text-xl text-white placeholder:text-red-50 sm:text-3xl md:h-[85%]"
          style={{ writingMode: 'vertical-rl' }}
          initial={{ translateY: '100%' }}
          animate={{ translateY: '0%' }}
          transition={{
            type: 'tween',
          }}
        >
          {slogan}
        </motion.p>
        <Image data={image} layout="fill" objectFit="cover" />
      </div>
      <span className="block pb-[450px] sm:pb-[300px] lg:pb-[100px]" />
    </div>
  );
};

const CaseDetails = ({ subscription }: any) => {
  const {
    data: { site, caseDetails, nextCases },
  } = useQuerySubscription(subscription);

  const metaTags = caseDetails.seo.concat(site.favicon);
  const { companyDetail } = caseDetails;

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <Banner
          title={caseDetails.bannerTitle}
          slogan={caseDetails.brandSlogan}
          image={caseDetails?.bannerImage.responsiveImage}
        />
        <section className="mx-auto  max-w-flat  px-8 py-32 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="flex flex-col items-start justify-between">
              <motion.div
                className="max-w-3xl space-y-10"
                initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl">{caseDetails.achivementTitle}</h2>
                <p className="text-xl leading-9 text-black/70 sm:text-3xl">
                  {caseDetails.achivementDetails}
                </p>
              </motion.div>
            </div>
            <FlatLink
              href="contact"
              variant="secondary"
              style={{ width: 'max-content' }}
            >
              contact
            </FlatLink>
          </div>
          <ul className="mt-20 flex w-full flex-wrap justify-between gap-5">
            {caseDetails?.achivementStats.map((item: any, i: number) => (
              <motion.li
                key={i}
                className="flex items-center space-x-5 sm:space-x-10"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3 * i + 1 / 10 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl sm:text-5xl">{item.stat}</span>
                <span className="text-2xl text-neutral-500 sm:text-3xl">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </section>
        <section className="mb-10 overflow-x-hidden bg-black py-24">
          <GalleryCarousal images={caseDetails.carousal} />
        </section>
        <motion.section
          className="mx-auto max-w-flat space-y-20 p-8 sm:px-12"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className={styles.companyInfo}>
            <StructuredText
              data={companyDetail}
              renderBlock={({ record }: any) => {
                if (record.type === 'TextImageRecord') {
                  return (
                    <Image
                      data={record.image.responsiveImage}
                      objectFit="cover"
                      className="my-10 min-h-[300px]  sm:mt-20"
                    />
                  );
                }
                return null;
              }}
            />
          </div>
        </motion.section>
        <div className="mx-auto max-w-xl space-y-10 py-24 sm:py-40">
          <h3 className="text-center text-4xl underline">
            Let’s grab a coffee?
          </h3>
          <Button>Schedule a meeting</Button>
        </div>
        <section className="bg-black">
          <NextCase cases={nextCases} />
        </section>
      </main>
    </>
  );
};

CaseDetails.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CaseDetails;
