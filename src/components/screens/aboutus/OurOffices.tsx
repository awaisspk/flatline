import { motion } from 'framer-motion';
import React from 'react';
import { Image } from 'react-datocms';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

type IOffice = {
  location: string;
  info: string;
  image: any;
};

type IOurOffices = {
  offices: IOffice[];
};

const Carousel = ({ offices }: IOurOffices) => {
  const { setCursorVariant } = useCursorVariant();

  return (
    <Carousal>
      <div
        className="ml-5 flex select-none items-start sm:ml-10 md:ml-[calc((100vw-1200px)/2)]"
        onMouseEnter={() => setCursorVariant('carousal')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        {offices.map((office, index) => (
          <motion.div
            className="relative mr-5 shrink-0 grow-0 basis-[90%] md:basis-[85%]"
            variants={rightReveal}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            key={index}
          >
            <div className="relative grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-[1fr,2fr] md:gap-16">
              <figure className="relative h-[230px] w-full min-w-[270px] sm:h-[350px] md:h-[550px] md:w-[390px]">
                <Image
                  data={office.image.responsiveImage}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <figcaption className="ml-5 flex max-w-lg flex-col justify-center sm:ml-0">
                <h3 className="text-3xl text-white md:text-5xl">
                  {office.location}
                </h3>
                <p className="mt-7 mb-5 text-[16px] leading-6 text-[#636363] sm:mt-4 sm:leading-6 md:mt-10 md:text-xl">
                  {office.info}
                </p>
                <a className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-5 px-10 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black">
                  Contact us
                </a>
              </figcaption>
            </div>
          </motion.div>
        ))}
      </div>
    </Carousal>
  );
};
export const OurOffices = ({ offices }: IOurOffices) => {
  return (
    <>
      <section className="bg-black pt-28 pb-24">
        <h2 className="mx-auto max-w-flat px-4 text-5xl text-white sm:px-8 md:px-12 md:text-[82px]">
          Our Offices
        </h2>
        <div className="mt-10 sm:mt-16 md:mt-24">
          <Carousel offices={offices} />
        </div>
      </section>
    </>
  );
};
