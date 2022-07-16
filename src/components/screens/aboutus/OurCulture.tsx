import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { BrandsList } from '@/components/ui/BrandsList';

const images = [
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0222_Roxy-Ali--scaled.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0262_Roxy-Ali--scaled.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0368_Roxy-Ali--scaled.jpg',
];

export const OurCulture = () => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      translateY: 100,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <section className="bg-black pt-28 pb-24 sm:pt-40">
      <div className="mx-auto max-w-flat px-1 sm:px-12">
        <h2 className="text-center text-4xl text-white md:text-[82px]">
          Our culture
        </h2>
        <div className="mt-10 grid h-[300px] grid-cols-2 grid-rows-2  gap-2 sm:mt-16 sm:gap-4 md:mt-24 md:h-[630px]">
          <motion.div
            className="relative col-span-1 row-span-2"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Image src={images[0]!} layout="fill" objectFit="cover" alt="" />
          </motion.div>
          <motion.div
            className="relative"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Image src={images[1]!} layout="fill" objectFit="cover" alt="" />
          </motion.div>
          <motion.div
            className="relative"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Image src={images[2]!} layout="fill" objectFit="cover" alt="" />
          </motion.div>
        </div>
      </div>
      <div className="mt-20 px-8 sm:px-12">
        <BrandsList color="dark" />
      </div>
    </section>
  );
};
