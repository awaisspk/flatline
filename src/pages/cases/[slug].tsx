import { gql } from 'graphql-request';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
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
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allCases { slug } }` });

  return {
    paths: data.allCases?.map((item: any) => `/cases/${item.slug}`),
    fallback: true,
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
          banner {
            title
            brandName
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
          }
          caseDetail {
            title
            detail
            achievements {
              field1
              field2
            }
          }
          carousal {
            url
            mimeType
            blurhash
          }
          aboutCompany {
            title
            detail
            quote {
              value
            }
            coverImage {
              text
              image {
                responsiveImage(
                  imgixParams: { fit: clamp, w: 1200, h: 500, auto: format }
                ) {
                  ...responsiveImageFragment
                }
              }
            }
          }
        }
        nextCases: allCases(filter: { slug: { neq: $slug } }) {
          slug
          card {
            coverImage {
              responsiveImage(
                imgixParams: { fit: clamp, w: 400, h: 520, auto: format }
              ) {
                ...responsiveImageFragment
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

const CaseDetails = ({ subscription }: any) => {
  const {
    data: { site, caseDetails, nextCases },
  } = useQuerySubscription(subscription);

  const metaTags = caseDetails.seo.concat(site.favicon);
  const { banner, caseDetail, aboutCompany } = caseDetails;
  const details = caseDetail[0];
  const caseBanner = banner[0];
  const company = aboutCompany[0];

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <div>
          <div className="z-1 absolute inset-x-0 top-0 h-[50vh] min-h-[650px] md:min-h-0">
            <h1 className="absolute bottom-14 z-20 ml-10 pr-14 text-[40px] leading-[50px] text-white md:ml-[calc((100vw-1200px)/2)]">
              {caseBanner?.title}
            </h1>
            <p
              className="absolute right-[3%] bottom-24 z-20 text-xl text-white placeholder:text-red-50  sm:text-3xl"
              style={{ writingMode: 'vertical-rl' }}
            >
              {caseBanner?.brandName}
            </p>
            <Image
              data={caseBanner?.image.responsiveImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="block pb-[450px] sm:pb-[300px]" />
        </div>
        <section className="mx-auto flex max-w-flat flex-col items-start justify-between  gap-10 px-8 py-32 sm:px-12 md:flex-row">
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-3xl space-y-10">
              <h2 className="text-4xl">{details?.title}</h2>
              <p className="text-xl leading-9 text-black/70 sm:text-3xl">
                {details?.detail}
              </p>
            </div>
            <ul className="mt-20 flex flex-wrap justify-between gap-5">
              {details?.achievements.map((item: any, i: number) => (
                <li key={i} className="flex items-center space-x-10">
                  <span className="text-3xl sm:text-5xl">{item.field1}</span>
                  <span className="text-2xl text-neutral-500 sm:text-3xl">
                    {item.field2}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <FlatLink
            href="contact"
            variant="secondary"
            style={{ width: 'max-content' }}
          >
            contact
          </FlatLink>
        </section>
        <section className="mb-10 overflow-x-hidden bg-black py-24">
          <GalleryCarousal images={caseDetails.carousal} />
        </section>
        <section className="mx-auto max-w-flat space-y-20 p-8 sm:px-12">
          <h2 className="text-4xl leading-10">{company.title}</h2>
          <div
            className="flex flex-col gap-10 text-lg md:flex-row"
            dangerouslySetInnerHTML={{ __html: company.detail }}
          ></div>
          <div className="mx-auto space-y-5">
            <Image data={company.coverImage[0].image.responsiveImage} />
            <p>{company.coverImage[0]?.text}</p>
          </div>
          <StructuredText data={company.quote} />
        </section>
        <div className="mx-auto max-w-xl space-y-10 py-24 sm:py-40">
          <h3 className="text-center text-4xl underline">
            Let’s grab a coffee?
          </h3>
          <Button>Schedule a meeting</Button>
        </div>
        <section className="bg-black">
          <div className="mx-auto max-w-flat px-8 py-20 sm:px-12">
            <h2 className="text-4xl text-white sm:text-6xl">Next Case</h2>
          </div>
          <NextCase cases={nextCases} />
        </section>
      </main>
    </>
  );
};

CaseDetails.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CaseDetails;
