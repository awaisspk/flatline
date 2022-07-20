import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Image } from 'react-datocms';

import { FlatLink } from '@/components/ui/FlatLink';
import { bottomReveal } from '@/utils/animations';

type IJoinUs = {
  title: string;
  image: any;
};

type Props = {
  jobs: IJoinUs[];
};

export const JoinUs = ({ jobs }: Props) => {
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
                {jobs[0]?.title}
              </span>
              <Image
                data={jobs[0]?.image.responsiveImage}
                layout="fill"
                objectFit="cover"
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
                {jobs[1]?.title}
              </span>
              <Image
                data={jobs[1]?.image.responsiveImage}
                layout="fill"
                objectFit="cover"
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
                {jobs[2]?.title}
              </span>
              <Image
                data={jobs[2]?.image.responsiveImage}
                layout="fill"
                objectFit="cover"
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
