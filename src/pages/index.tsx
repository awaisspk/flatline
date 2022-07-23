import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Image, renderMetaTags, useQuerySubscription } from 'react-datocms';
import { useMediaQuery } from 'react-responsive';

import { Blog } from '@/components/screens/home/Blog';
import { ChatBot } from '@/components/screens/home/ChatBot';
import { OurClients } from '@/components/screens/home/OurClients';
import { OurWork } from '@/components/screens/home/OurWork';
import { Services } from '@/components/screens/home/Services';
import { useCursorVariant } from '@/hooks/useCursorVariant';
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
        homePage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          banner {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
        }
        allCases(
          filter: { slug: { in: ["just-eat-takeaway", "budweiser", "mystic"] } }
        ) {
          slug
          brandSlogan
          cardPreviewImage {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          cardVideo {
            url
          }
        }
        allServices(orderBy: _createdAt_ASC) {
          serviceCardTitle
          excerpt
          slug
          coverImage {
            responsiveImage(
              imgixParams: { fit: clamp, w: 360, h: 440, auto: format }
            ) {
              ...responsiveImageFragment
            }
          }
        }
        allPosts(first: 10) {
          title
          slug
          coverImage {
            responsiveImage(
              imgixParams: { fit: clamp, w: 540, h: 360, auto: format }
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

const Index = ({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { homePage, site, allCases, allServices, allPosts },
  } = useQuerySubscription(subscription);
  const metaTags = homePage.seo.concat(site.favicon);
  const { setCursorVariant } = useCursorVariant();
  const isMobile = useMediaQuery({ query: '(max-width : 768px)' });

  const headingVariant: Variants = {
    initial: {
      translateY: '100%',
      lineHeight: isMobile ? '40px' : '70px',
      opacity: 0,
    },
    animate: {
      translateY: '0%',
      lineHeight: isMobile ? '30px' : '60px',
      transition: {
        duration: 0.8,
      },
      opacity: 1,
    },
  };

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="mb-12 overflow-hidden">
            <motion.h1
              className=" text-2xl font-normal leading-10 sm:text-4xl md:text-5xl"
              variants={headingVariant}
              initial="initial"
              animate="animate"
            >
              Global disruptor in custom development
              <br />
              <span className="text-neutral-500/80">We make you pulse</span>
            </motion.h1>
          </div>
          <motion.div
            className="flex space-x-2 pb-28 sm:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
          >
            <Link href="cases">
              <a
                className="flex w-max cursor-pointer items-center justify-center rounded-[100px]   border-[1px] border-[#dedede] bg-transparent py-5 px-8 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white sm:px-10"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Learn more
              </a>
            </Link>
            <button
              className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black py-5 px-8 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Plan a call
            </button>
          </motion.div>
        </section>

        <motion.section
          className="relative h-[230px] w-full sm:h-[330px] md:h-[628px]"
          variants={headingVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            data={homePage.banner.responsiveImage}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </motion.section>
        <OurWork work={allCases} />
        <Services services={allServices} />
        <OurClients />
        <Blog posts={allPosts} />
        <ChatBot />
      </main>
    </>
  );
};

Index.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Index;
