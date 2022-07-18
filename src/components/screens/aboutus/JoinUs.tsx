import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FlatLink } from '@/components/ui/FlatLink';
import { bottomReveal } from '@/utils/animations';

export const JoinUs = () => {
  return (
    <section className="mx-auto flex max-w-flat flex-col px-8 pt-40 pb-24  sm:px-12">
      <h2 className="text-2xl sm:text-5xl md:text-right">
        Come join our crew.
      </h2>
      <div className="mt-10 grid grid-cols-1 justify-items-end gap-5 sm:mt-20 md:mt-32 md:grid-cols-[2.5fr,1fr] md:grid-rows-[max-content,1fr]">
        <motion.div
          className="min-h-[230px] w-full bg-orange-100 sm:h-[340px] md:mr-10 md:w-[60%]"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ margin: '300px 0px 0px 0px' }}
        >
          <Link href="contact">
            <a className="relative block h-full w-full">
              <span
                className="absolute top-6 right-5 z-10 text-3xl text-white"
                style={{ writingMode: 'vertical-rl' }}
              >
                Fontend
              </span>
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/12/Job3.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </a>
          </Link>
        </motion.div>
        <motion.div
          className="row-start-2 min-h-[230px] w-full max-w-[680px] bg-orange-200 sm:min-h-[340px] md:min-h-[460px]"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ margin: '300px 0px 0px 0px' }}
        >
          <Link href="contact">
            <a className="relative block h-full w-full">
              <span
                className="absolute top-6 right-5 z-10 text-3xl text-white"
                style={{ writingMode: 'vertical-rl' }}
              >
                NodeJs
              </span>
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/12/Job2-3.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </a>
          </Link>
        </motion.div>
        <motion.div
          className="h-[230px] w-full bg-orange-50 sm:h-[340px] md:col-start-2 md:row-start-2 md:h-[230px] md:max-w-[425px]"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ margin: '300px 0px 0px 0px' }}
        >
          <Link href="contact">
            <a className="relative block h-full w-full">
              <span
                className="absolute top-6 right-3 z-10 text-3xl text-white"
                style={{ writingMode: 'vertical-rl' }}
              >
                PHP
              </span>
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/12/Job1-1.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </a>
          </Link>
        </motion.div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center space-y-16">
        <h3 className="max-w-2xl text-center text-3xl leading-[40px] sm:leading-[50px]">
          Do you want to join our team? We’d love to hear from you
        </h3>
        <FlatLink href="contact" style={{ width: 'max-content' }}>
          Apply now
        </FlatLink>
      </div>
    </section>
  );
};
