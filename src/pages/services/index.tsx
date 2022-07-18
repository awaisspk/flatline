import { motion } from 'framer-motion';
import React, { Fragment } from 'react';

import { ServicesCard } from '@/components/screens/services/ServiceCard';
import { Main, Meta, PageLayout } from '@/layouts';
import { headingReveal } from '@/utils/animations';

const Services = () => {
  return (
    <Main
      meta={
        <Meta
          title="Services - Flatline Agency"
          description="flatline agency services"
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="overflow-hidden pt-3">
            <motion.div
              className="grid auto-rows-auto justify-items-end"
              variants={headingReveal}
              transition={{ duration: 0.6 }}
              initial="initial"
              animate="animate"
            >
              <motion.h1 className="text-2xl sm:text-5xl md:text-end">
                Our services
              </motion.h1>
              <motion.p className="max-w-[600px] text-sm leading-4 text-neutral-500/80 md:text-end md:text-lg md:leading-7 md:text-neutral-800">
                We code and improve everything from E-commerce, Custom
                platforms, progressive web apps, apps, websites, SAAS, and AI /
                Deep learning applications
              </motion.p>
            </motion.div>
          </div>

          <hr className="mt-20 mb-7 border-black sm:mt-32" />
        </section>
        <section className="max-w-flat overflow-hidden sm:ml-auto sm:w-[calc(100%-60px)] md:mx-auto lg:px-8">
          {[...Array(5)].map((_, i) => (
            <Fragment key={i}>
              <ServicesCard key={i} />
              <hr className="mx-auto my-5 w-[98%] border-black" />
            </Fragment>
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
    </Main>
  );
};

Services.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Services;
