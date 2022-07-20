import 'react-intl-tel-input/dist/main.css';

import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import { Image, renderMetaTags, useQuerySubscription } from 'react-datocms';
import IntlTelInput from 'react-intl-tel-input';

import { OfficeCarousal } from '@/components/Carousal/OfficeCarousal';
import { PageLayout } from '@/layouts';
import { bottomReveal, headingReveal } from '@/utils/animations';
import { offices } from '@/utils/data';
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
        contactPage {
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
          mapImage {
            responsiveImage(
              imgixParams: { fit: crop, w: 1200, h: 600, auto: format }
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

const Contact = ({
  subscription,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const {
    data: { contactPage, site },
  } = useQuerySubscription(subscription);

  const metaTags = contactPage.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto mb-24 max-w-flat space-y-5 overflow-hidden px-8 pt-5 sm:px-12">
          <motion.div
            variants={headingReveal}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid auto-rows-auto"
          >
            <h1 className="text-5xl">Ready to scale?</h1>
            <p className="max-w-xl leading-7">
              Ready to build something real together with your favorite
              creatives and tech leads? Get into contact or fill out an inquiry
              form.
            </p>
          </motion.div>
        </section>
        <section>
          <OfficeCarousal images={contactPage.carousal} />
        </section>
        <motion.section
          className="mx-auto mt-20 flex max-w-flat flex-col justify-between gap-10 px-8 sm:px-12 md:flex-row"
          variants={bottomReveal}
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          initial="initial"
          viewport={{ once: true }}
        >
          <div className="mb-24 space-y-14">
            <h2 className="text-4xl">Inquiries</h2>
            <form>
              <div className="flex w-[440px] max-w-full flex-col space-y-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
                />
                <IntlTelInput
                  defaultCountry="nl"
                  placeholder="Phone"
                  containerClassName="intl-tel-input"
                  inputClassName="form-control w-full h-16 rounded-full border border-gray-300  pr-5"
                />
                <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-[100px] bg-black text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-[430px] max-w-full">
            {offices.map((office, i) => (
              <div key={i}>
                <h2 className="text-3xl md:text-4xl">
                  {office.city}
                  <span className="ml-6">{office.time}</span>
                </h2>
                <p className="my-10 flex flex-col text-sm leading-7 text-neutral-500">
                  <span>{office.location[0]}</span>
                  <span>{office.location[1]}</span>
                  <span>{office.email}</span>
                  <span>{office.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.div
          className="aspect-w-16 aspect-h-9 relative mx-auto mt-20 max-w-[1200px] sm:mb-28 sm:w-[calc(100%-60px)] lg:aspect-h-5"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image data={contactPage.mapImage?.responsiveImage} layout="fill" />
        </motion.div>
      </main>
    </>
  );
};

Contact.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Contact;
