import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { useCursorVariant } from '@/utils/context/cursorContext';

const data = [
  {
    location: 'Amsterdam',
    description:
      'Our proud headquarters and creative hub is based in one of the hotspots of Amsterdam – De Pijp. Besides business, we love to see this as our ‘play room’.',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/12/Amsoffice.jpg',
  },
  {
    location: 'New York',
    description:
      'The ‘big one’. One of our core expansion areas and development stronghold in the United States. Definitely, one to have a well-deserved latte macchiato.',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYoffice-.jpg',
  },
  {
    location: 'Bali',
    description:
      'Our team’s ‘pleasure hub’ – combining work and sun during the colder months in the western continent. Flatline’s way to build the perfect work-life balance.',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/12/Screenshot-2021-12-04-at-12.54.07.png',
  },
];

const Carousel = () => {
  const { setCursorVariant } = useCursorVariant();
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: false,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [AutoHeight()]
  );

  const variants: Variants = {
    initial: {
      opacity: 0,
      translateX: 130,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative">
      <div className="w-full overflow-x-hidden" ref={viewportRef}>
        <div
          className="ml-5 flex select-none items-start sm:ml-10 md:ml-[calc((100vw-1200px)/2)]"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {data.map((office, index) => (
            <motion.div
              className="relative mr-5 shrink-0 grow-0 basis-[90%] md:basis-[85%]"
              variants={variants}
              initial="initial"
              whileInView="animate"
              key={index}
            >
              <div className="relative grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-[1fr,2fr] md:gap-16">
                <figure className="relative h-[230px] w-full min-w-[270px] sm:h-[350px] md:h-[550px] md:w-[390px]">
                  <Image
                    src={office.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </figure>
                <figcaption className="ml-5 flex max-w-lg flex-col justify-center sm:ml-0">
                  <h3 className="text-3xl text-white md:text-5xl">
                    {office.location}
                  </h3>
                  <p className="mt-7 mb-5 text-[16px] leading-6 text-[#636363] sm:mt-4 sm:leading-6 md:mt-10 md:text-xl">
                    {office.description}
                  </p>
                  <a className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-5 px-10 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black">
                    Contact us
                  </a>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const OurOffices = () => {
  return (
    <>
      <section className="bg-black pt-28 pb-24">
        <h2 className="mx-auto max-w-flat px-4 text-5xl text-white sm:px-8 md:px-12 md:text-[82px]">
          Our Offices
        </h2>
        <div className="mt-10 sm:mt-16 md:mt-24">
          <Carousel />
        </div>
      </section>
    </>
  );
};
