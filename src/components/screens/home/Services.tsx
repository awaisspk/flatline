import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Image } from 'react-datocms';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

type IService = {
  serviceCardTitle: string;
  excerpt: string;
  slug: string;
  coverImage: any;
};
type Props = {
  services: IService[];
};

const ServicesCarousal = ({ services }: Props) => {
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
            className="relative mr-4 shrink-0 grow-0 basis-[90%] sm:mr-14 sm:basis-[350px]"
            variants={rightReveal}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.2 * index + 1, ease: 'easeInOut' }}
            key={index}
          >
            <Link href={`/services/${service.slug}`}>
              <a>
                <div>
                  <figure className="relative min-h-[450px] w-full bg-gray-800">
                    <Image
                      data={service.coverImage.responsiveImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </figure>
                  <figcaption className="mt-10">
                    <h3 className="my-5 text-3xl text-white">
                      <span className="mr-3 text-lg">0{index + 1}</span>
                      {service.serviceCardTitle}
                    </h3>
                    <p className="h-[calc(16px*3)] overflow-hidden text-sm leading-4 text-[#8b8b8b]">
                      {service.excerpt}
                    </p>
                  </figcaption>
                </div>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </Carousal>
  );
};

export const Services = ({ services }: Props) => {
  return (
    <section className="mb-10 bg-black py-28">
      <div className="mx-auto">
        <h2 className="mx-auto max-w-flat px-8 text-6xl text-white sm:px-12 md:text-[76px]">
          Services
        </h2>
        <div className="mt-20">
          <ServicesCarousal services={services} />
        </div>
      </div>
    </section>
  );
};
