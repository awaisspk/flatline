import Image from 'next/image';
import React from 'react';

import { Accordion } from '@/components/ui/Accordian';
import { customDevelopmentFaqs } from '@/utils/data/faq-data';

export const Faqs = () => {
  return (
    <section className="mx-auto max-w-flat gap-20 px-8 pt-32 pb-52 sm:px-12">
      <div className="flex flex-col md:flex-row">
        <div className="basis-[60%] space-y-10">
          <h2 className="text-6xl">FAQ</h2>
          <Accordion data={customDevelopmentFaqs} />
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
      <div className="mt-40 flex flex-col items-center space-y-16">
        <p className="text-5xl underline">Let&apos;s grab a coffee?</p>
        <button className="flex w-full max-w-lg cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:py-5 sm:px-10">
          Schedule a meeting
        </button>
      </div>
    </section>
  );
};
