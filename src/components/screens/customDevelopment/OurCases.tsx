import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Image } from 'react-datocms';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

type Cases = {
  title: string;
  excerpt: string;
  slug: string;
  bannerImage: any;
};
type Props = {
  cases: Cases[];
};

const Carousel = ({ cases }: Props) => {
  const { setCursorVariant } = useCursorVariant();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div ref={ref}>
      <Carousal>
        <motion.div
          variants={rightReveal}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="ml-5 flex cursor-pointer select-none items-start sm:ml-10 md:ml-[calc((100vw-1200px)/2)]"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {cases.map((item, index) => (
            <div
              className="relative mr-5 shrink-0 grow-0 basis-[90%] md:basis-[85%]"
              key={index}
            >
              <Link href={`/cases/${item.slug}`}>
                <div className="relative grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-[1fr,2fr] md:gap-16">
                  <figure className="relative h-[230px] w-full min-w-[270px] sm:h-[350px] md:h-[550px] md:w-[390px]">
                    <Image
                      data={item.bannerImage.responsiveImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </figure>
                  <figcaption className="ml-5 flex max-w-lg flex-col justify-center sm:ml-0">
                    <h3 className="text-3xl text-white md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-7 mb-5 text-[16px] leading-6 text-[#636363] sm:mt-4 sm:leading-6 md:mt-10 md:text-xl">
                      {item.excerpt}
                    </p>
                    <a className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-5 px-10 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black">
                      Contact us
                    </a>
                  </figcaption>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </Carousal>
    </div>
  );
};

export const OurCases = ({ cases }: Props) => {
  return (
    <>
      <section className="bg-black pt-28 pb-24">
        <h2 className="mx-auto max-w-flat px-4 text-5xl text-white sm:px-8 md:px-12 md:text-[82px]">
          Our cases
        </h2>
        <div className="mt-10 sm:mt-16 md:mt-24">
          <Carousel cases={cases} />
        </div>
      </section>
    </>
  );
};
