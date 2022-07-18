import cx from 'classnames';
import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import type { Variants } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useCursorVariant } from '@/hooks/useCursorVariant';

const services = [
  {
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/11/Schermafbeelding-2021-11-10-om-15.45-348x433.jpg',
    title: 'Ecommerce',
    description:
      " Proud partner of Shopify, WooCommerce, and end-to-end production partner of large players within the e-commerce industry. We don't simply build your webshop, we set up your entire digital architecture.",
  },
  {
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/11/Screenshot-2021-12-10-at-13.29-2-348x433.jpg',
    title: 'Custom development',
    description:
      " Building something from scratch is just the beginning. The real 'game' starts, as soon as you start to scale and grow beyond your comfort zone. We can help you achieve your goals!",
  },
  {
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/11/Screenshot-2021-12-10-at-13.27-1-348x433.jpg',
    title: 'Apps',
    description:
      ' Hoping to increase your brand recognition & loyalty? We are here to help you build an app to achieve this, prioritising your users needs.',
  },
  {
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/11/image-39-348x433.jpg',
    title: 'Sites & Platforms',
    description:
      ' The best in class, automated websites and platforms. Ready to scale out of the box and mind-blowing far beyond the status quo.',
  },
  {
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/11/Screenshot-2021-12-10-at-13.29-2-348x433.jpg',
    title: 'Web 3.0',
    description:
      ' From augmented reality, and artificial intelligence to machine learning and blockchain, these technologies have allowed new possibilities for innovation around the globe! Elevate your brand to the next digital generation with Flatline Agency.',
  },
];

const ServicesCarousal = () => {
  const { setCursorVariant } = useCursorVariant();
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
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
    animate: (i) => ({
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.3 * i,
        ease: 'easeInOut',
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative">
      <div className="relative right-14 mb-6 flex justify-end space-x-10 text-sm text-white">
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className={cx({
            'opacity-0 transition-opacity duration-300': !prevBtnEnabled,
            'opacity-100 transition-opacity duration-300': prevBtnEnabled,
          })}
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className={cx({
            'opacity-0 transition-opacity duration-300': !nextBtnEnabled,
            'opacity-100 transition-opacity duration-300': nextBtnEnabled,
          })}
        >
          Next
        </button>
      </div>
      <div className="w-full overflow-x-hidden" ref={viewportRef}>
        <div
          className="ml-10 flex cursor-pointer select-none md:ml-[calc((100vw-1200px)/2)]"
          ref={ref}
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {services.map((service, index) => (
            <motion.div
              className="relative mr-4 shrink-0 grow-0 basis-[90%] sm:mr-14 sm:basis-[330px]"
              variants={variants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              custom={index + 1}
              key={index}
            >
              <div>
                <figure className="relative min-h-[450px] w-full bg-gray-800">
                  <Image
                    src={service.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </figure>
                <figcaption className="mt-10">
                  <h3 className="my-5 text-3xl text-white">
                    <span className="mr-3 text-lg">0{index + 1}</span>
                    {service.title}
                  </h3>
                  <p className="h-[calc(16px*3)] overflow-hidden text-sm leading-4 text-[#8b8b8b]">
                    {service.description}
                  </p>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section className="mb-10 bg-black py-28">
      <div className="mx-auto">
        <h2 className="mx-auto max-w-flat px-8 text-6xl text-white sm:px-12 md:text-[76px]">
          Services
        </h2>
        <div className="mt-20">
          <ServicesCarousal />
        </div>
      </div>
    </section>
  );
};
