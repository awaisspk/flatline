import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Accordion } from '@/components/ui/Accordian';
import { Button } from '@/components/ui/Button';

type IFaqs = {
  faqs: {
    header: string;
    content: string;
  }[];
};

export const Faqs = ({ faqs }: IFaqs) => {
  return (
    <section className="mx-auto max-w-flat gap-20 px-8 pt-32 pb-52 sm:px-12">
      <div className="flex flex-col justify-between gap-20 md:flex-row">
        <div className="max-w-[530px] basis-[60%] space-y-10">
          <h2 className="text-6xl">FAQ</h2>
          <Accordion data={faqs} />
        </div>
        <div className="relative mt-10 h-[230px] w-full sm:h-[600px] md:-mt-10 lg:w-[400px] ">
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2021/11/alex-knight-2EJCSULRwC8-unsplash.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <motion.div
        className="mt-40 flex flex-col items-center space-y-16"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <p className="sm:leading-1 text-5xl leading-[60px] underline">
          Let&apos;s grab a coffee?
        </p>
        <Button style={{ maxWidth: '32rem' }}>Schedule a meeting</Button>
      </motion.div>
    </section>
  );
};
