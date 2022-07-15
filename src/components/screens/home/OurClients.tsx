import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { brands } from '@/utils/data/brands';

export const OurClients = () => {
  const variantts: Variants = {
    initial: {
      translateY: 150,
      translateX: -100,
      opacity: 0,
    },
    animate: (i) => ({
      translateY: 0,
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.2 + i / (i > 5 ? 20 : 10),
        ease: 'easeInOut',
      },
    }),
  };
  return (
    <section className="mx-auto max-w-flat px-5 pt-16 sm:pt-32">
      <h2 className="mb-10 px-3 text-4xl sm:px-12">Our Clients</h2>
      <div className="flex flex-wrap">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
            variants={variantts}
            initial="initial"
            whileInView="animate"
            custom={i + 1}
          >
            <p className="absolute translate-y-[-100%] text-center text-xs leading-4 opacity-0 transition-all delay-75 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[0%] group-hover:opacity-100">
              {brand.description}
            </p>
            <div className="absolute h-[50px] w-full max-w-[100px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
              <Image src={brand.url} objectFit="contain" layout="fill" alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
