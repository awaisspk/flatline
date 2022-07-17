import 'react-intl-tel-input/dist/main.css';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import IntlTelInput from 'react-intl-tel-input';

import { Accordion } from '@/components/ui/Accordian';
import { BrandsList } from '@/components/ui/BrandsList';
import { Main, Meta, PageLayout } from '@/layouts';

const faqs = [
  {
    header: 'Shopify versus WooCommerce - which one should you choose?',
    content:
      'If your core requirement is complete flexibility, you should use an open-source platform like WordPress – WooCommerce. While this helps you to easily import data feeds, customize every part of your site, manage your personal security and maintenance protocols.',
  },
];

const ServicesDetail = () => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      translateY: 80,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.6,
      },
    },
  };
  return (
    <Main
      meta={
        <Meta
          title="Ecommerce - Flatline Agency"
          description="flatline agency"
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat space-y-8 px-8 sm:space-y-12 sm:px-12">
          <div className="space-y-8 overflow-hidden pt-3">
            <motion.h1
              className="text-[28px] text-white sm:text-5xl"
              variants={variants}
              initial="initial"
              animate="animate"
            >
              E-commerce
            </motion.h1>
            <motion.p
              className="max-w-[80ch] text-neutral-500"
              variants={variants}
              initial="initial"
              animate="animate"
            >
              Proud partner of Shopify, WooCommerce, and end-to-end production
              partner of large players within the e-commerce industry. We
              don&apos;t simply build your webshop, we set up your entire
              digital architecture.
            </motion.p>
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
            className="relative h-[300px] bg-gray-900 sm:h-[470px]"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { ease: 'easeInOut', duration: 0.8 },
            }}
            viewport={{ amount: 'all', once: true }}
          >
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/11/header-kota-win-header-e1641305413505-914x477.jpeg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </motion.div>
          <BrandsList color="dark" animateOnce={true} />
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
              It’s a certain kind of person, who doesn’t wait for greatness
            </h2>
            <p className="text-[16px] text-neutral-100 md:text-lg">
              Proud partner of Shopify, WooCommerce, and end-to-end production
              partner of large players within the e-commerce industry. We
              don&apos;t simply build your webshop, we set up your entire
              digital architecture.
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
          >
            <div className="relative mx-auto h-full max-w-[260px]">
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/11/shopify1.png"
                className="object-contain"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
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
                We map every e-commerce and retail-related process in your
                company, set up the necessary automation, and build custom
                modules and connectors.
              </motion.p>
              <ul className="grid gap-5 sm:grid-cols-2">
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">01</span>
                  Custom connectors
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">02</span>
                  Webshop
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">03</span>
                  Automations
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">04</span>
                  Data strategy
                </li>
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
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/11/alex-knight-2EJCSULRwC8-unsplash.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </motion.div>
          </div>
        </section>
        <section className="bg-body">
          <div className="mx-auto max-w-flat py-10 px-8 sm:px-12 md:py-24">
            <h2 className="pb-5 text-3xl sm:pb-10 sm:text-5xl">FAQ</h2>
            <Accordion data={faqs} />
          </div>
        </section>
      </main>
    </Main>
  );
};

ServicesDetail.getLayout = (page: any) => (
  <div className="bg-black">
    <PageLayout>{page}</PageLayout>
  </div>
);
export default ServicesDetail;
