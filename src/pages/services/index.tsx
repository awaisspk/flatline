import { gql } from 'graphql-request';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { ServicesCard } from '@/components/screens/services/ServiceCard';
import { MainHeading } from '@/components/ui/MainHeading';
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
        servicesPage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }

        servicesList: allServices(orderBy: _createdAt_ASC) {
          title
          excerpt
          slug
          serviceCardTitle
          serviceCardMedia {
            video {
              url
            }
            title
            color {
              hex
            }
            previewImage {
              responsiveImage(
                imgixParams: { fit: crop, w: 400, h: 400, auto: format }
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

const Services = ({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { servicesList, site, servicesPage },
  } = useQuerySubscription(subscription);

  const metaTags = servicesPage.seo.concat(site.favicon);
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="max-w-2xl">
            <MainHeading
              title="Our services"
              subtitle="We code and improve everything from E-commerce, Custom platforms, progressive web apps, apps, websites, SAAS, and AI / Deep learning applications"
            />
          </div>
          <hr className="mt-20 mb-7 border-black sm:mt-32" />
        </section>
        <section className="max-w-flat overflow-hidden sm:ml-auto sm:w-[calc(100%-60px)] md:mx-auto lg:px-8">
          {servicesList.map((service: any, i: number) => (
            <ServicesCard
              key={i}
              id={i + 1}
              title={service.serviceCardTitle}
              excerpt={service.excerpt}
              slug={service.slug}
              media={service.serviceCardMedia}
            />
          ))}
        </section>
        <section className="mx-auto max-w-flat px-10 pt-28 pb-52 md:pl-40">
          <h2 className="text-5xl leading-[50px] md:text-[100px] md:leading-[100px]">
            <span>So,</span>
            <br />
            <a href="" className="cursor-pointer underline hover:no-underline">
              Challenge us.
            </a>
          </h2>
        </section>
      </main>
    </>
  );
};

Services.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Services;
