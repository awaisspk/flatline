import 'react-intl-tel-input/dist/main.css';

import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import React from 'react';
import { Image, renderMetaTags, useQuerySubscription } from 'react-datocms';
import IntlTelInput from 'react-intl-tel-input';

import { Accordion } from '@/components/ui/Accordian';
import { BrandsList } from '@/components/ui/BrandsList';
import { MainHeading } from '@/components/ui/MainHeading';
import { PageLayout } from '@/layouts';
import { request } from '@/utils/datocms';
import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/utils/datocms/fragments';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allServices { slug } }` });

  return {
    paths: data.allServices?.map((post: any) => `/services/${post.slug}`),
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
        service(filter: { slug: { eq: $slug } }) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          excerpt
          bannerImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 1200, h: 500, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
          feature {
            title
            detail
            image {
              responsiveImage(
                imgixParams: { fit: clamp, w: 350, auto: format }
              ) {
                ...responsiveImageFragment
              }
            }
          }
          technique {
            shortDetail
            list
          }
          faq {
            header
            content
          }
          formSideImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 400, h: 600, auto: format }
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

const ServicesDetail = ({
  subscription,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { site, service },
  } = useQuerySubscription(subscription);
  console.log({ preview });
  const metaTags = service.seo.concat(site.favicon);
  const { feature, technique, faq, formSideImage } = service;
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat space-y-8 px-8 sm:space-y-12 sm:px-12">
          <div className="max-w-2xl space-y-8 overflow-hidden pt-3">
            <MainHeading
              title={service.title}
              subtitle={service.excerpt}
              color="dark"
            />
          </div>
          <motion.button
            className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black py-5 px-9 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, ease: 'easeInOut' },
            }}
          >
            Plan a Call
          </motion.button>
          <motion.div
            className="relative h-[370px] sm:h-[470px]"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { ease: 'easeInOut', duration: 0.8 },
            }}
            viewport={{ amount: 'all', once: true }}
          >
            <Image
              data={service.bannerImage?.responsiveImage}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="sm:pt-20">
            <BrandsList color="dark" animateOnce={true} />
          </div>
        </section>
        <section className="mx-auto grid max-w-flat grid-cols-1 grid-rows-2 justify-between space-y-8  overflow-hidden px-8 py-20 sm:space-y-12 sm:px-12 md:grid-cols-2 md:grid-rows-1">
          <motion.div
            className="max-w-[440px] basis-1/2 space-y-10 md:space-y-20"
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { ease: 'easeInOut', duration: 0.6 },
            }}
            viewport={{ amount: 0.8, once: true }}
          >
            <h2 className="text-4xl leading-10 text-white sm:text-6xl md:leading-[60px]">
              {feature[0].title}
            </h2>
            <p className="text-[16px] text-neutral-100 md:text-lg">
              {feature[0].detail}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { ease: 'easeInOut', duration: 0.6 },
            }}
            viewport={{ amount: 0.8, once: true }}
            className="mx-auto"
          >
            <Image data={feature[0].image?.responsiveImage} />
          </motion.div>
        </section>
        <section className="overflow-hidden bg-body px-8 pt-20 sm:px-12">
          <div className="relative  mx-auto flex min-h-[480px] max-w-flat items-center justify-center space-y-8 bg-black px-8 py-10  sm:space-y-12 sm:px-12">
            <div className="flex flex-col gap-20 pr-10 text-white md:pl-20 lg:flex-row">
              <motion.p
                className="basis-1/4"
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  transition: { ease: 'easeInOut', duration: 0.6 },
                }}
                viewport={{ amount: 0.8, once: true }}
              >
                {technique[0].shortDetail}
              </motion.p>
              <ul className="grid gap-5 sm:grid-cols-2">
                {technique[0].list.map((item: string, i: number) => (
                  <li key={i} className="text-2xl md:text-3xl">
                    <span className="mr-3 text-[16px]">
                      {i + 1 < 9 && '0'}
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.p
              className="absolute top-0 right-4 text-white sm:right-8 md:right-12 md:text-3xl"
              style={{ writingMode: 'vertical-rl' }}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
              }}
              viewport={{ amount: 0.8, once: true }}
            >
              Techniques
            </motion.p>
          </div>
        </section>
        <section className="overflow-hidden bg-body">
          <div className="mx-auto flex max-w-flat flex-col justify-between px-8 py-20 sm:px-12 lg:flex-row">
            <motion.div
              className="mx-auto max-w-[500px] space-y-16 lg:mx-0 lg:space-y-24"
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
              }}
              viewport={{ amount: 0.8, once: true }}
            >
              <div className="flex flex-col space-y-5">
                <h2 className="text-4xl">Free brainstorm session?</h2>
                <p className="text-neutral-400">
                  Are you ready to help think bigger and truly defy everyone
                  standing in your way? We will guide you through the essential
                  next steps.
                </p>
              </div>
              <form>
                <div className="flex max-w-[500px] flex-col space-y-8">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-16 max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-16 max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                  />
                  <IntlTelInput
                    defaultCountry="nl"
                    placeholder="Phone"
                    containerClassName="intl-tel-input"
                    inputClassName="form-control h-16 rounded-full border border-gray-300  w-full pr-5"
                  />
                  <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-[100px] bg-black text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10">
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              className="relative mx-auto mt-24 h-[250px] w-full max-w-[400px] md:h-full md:min-h-[580px] lg:mx-0 lg:mt-0 lg:ml-auto"
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
              }}
              viewport={{ amount: 0.8, once: true }}
            >
              <Image data={formSideImage?.responsiveImage} />
            </motion.div>
          </div>
        </section>
        <section className="bg-body">
          <div className="mx-auto max-w-flat py-10 px-8 sm:px-12 md:py-24">
            <h2 className="pb-5 text-3xl sm:pb-10 sm:text-5xl">FAQ</h2>
            <Accordion data={faq} />
          </div>
        </section>
      </main>
    </>
  );
};

ServicesDetail.getLayout = (page: any) => (
  <div className="bg-black">
    <PageLayout>{page}</PageLayout>
  </div>
);
export default ServicesDetail;
