import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

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
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Carousal>
      <div
        className="ml-10 flex cursor-pointer select-none md:ml-[calc((100vw-1200px)/2)]"
        ref={ref}
        onMouseEnter={() => setCursorVariant('carousal')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        {services.map((service, index) => (
          <motion.div
            className="relative mr-4 shrink-0 grow-0 basis-[90%] sm:mr-14 sm:basis-[330px]"
            variants={rightReveal}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.2 * index + 1, ease: 'easeInOut' }}
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
    </Carousal>
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
