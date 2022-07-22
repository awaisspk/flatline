import cx from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { Image } from 'react-datocms';

import { BrandsList } from '@/components/ui/BrandsList';
import { bottomReveal } from '@/utils/animations';

type IOurCulture = {
  culture: any[];
};

export const OurCulture = ({ culture }: IOurCulture) => {
  return (
    <section className="bg-black pt-28 pb-24 sm:pt-40">
      <div className="mx-auto max-w-flat px-1 sm:px-12">
        <h2 className="text-center text-4xl text-white md:text-[82px]">
          Our culture
        </h2>
        <div className="mt-10 grid h-[300px] grid-cols-2 grid-rows-2  gap-2 sm:mt-16 sm:gap-4 md:mt-24 md:h-[630px]">
          {culture.map((item, i) => (
            <motion.div
              key={i}
              className={cx('relative', {
                'col-span-1 row-span-2': i === 0,
                'col-start-2 row-span-1': i === 1,
                'col-start-2 row-start-2': i === 2,
              })}
              variants={bottomReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.3, once: true }}
            >
              <Image
                data={item.responsiveImage}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20 px-8 sm:px-12">
        <BrandsList color="dark" />
      </div>
    </section>
  );
};
