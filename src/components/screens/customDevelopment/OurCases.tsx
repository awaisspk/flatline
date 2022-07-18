import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

const data = [
  {
    title: 'Just Eat Takeaway',
    description:
      'Leading Food Delivery Service Just Eat Takeaway is the largest online meal delivery marketplace in the world, connecting customers to over 634,000 partners in 25 countries. The food delivery service is the most popular takeaway service in the world. But how did they manage it? By using engaging campaigns to spread the word, they ensure',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2022/05/justeattakeaway-386x539.jpg',
  },
  {
    title: 'Bud',
    description:
      'The biggest fish out there While AB-InBev is one of the largest companies in the world, it decided to strengthen its dominance with AB-InBev’s Budweiser. Starting with an almost monopolistic 50% percent market share in the USA, we were honoured to help them take the next step. Just like Bud, we love to build and',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2022/05/bud-dreambottle-386x547.webp',
  },
  {
    title: 'Mystic',
    description:
      'The big, the bold, the best The North Actionsports Group is one of the boldest brands in the world. They love to challenge every human being to be better, bolder, with no fear. They are have elevated the actionsport gear market, creating robust, high-tech products. Flatline helped to try and change a perspective. By building',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/10/header-mystic-hp-fw-desktop-banner-2-386x547.jpeg',
  },
  {
    title: 'Vanilia',
    description:
      'Life is too short to wear boring clothes Have you ever spent hours scrolling online to find that perfect outfit? We know it’s hard to decide whether an item will suit your expectation when it arrives to your door, but with the latest technology this is a problem of the past! Through research of Vanilia’s',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/10/banner-desk-386x547.jpeg',
  },
  {
    title: 'MG motor',
    description:
      'Historic and still roaring As part of SAIC Motors, MG has earned its spot as number 27 on the fortune 500 list. Automotive giants, like MG Motors focus on the quality, safety & due diligence in all aspects of their company. With this in mind, it was a perfect collaboration. We created a web app',
    imgUrl:
      'https://www.flatlineagency.com/wp-content/uploads/2021/12/MG-banner-386x547.jpg',
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
          className="ml-5 flex cursor-pointer select-none items-start sm:ml-10 md:ml-[calc((100vw-1200px)/2)]"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {data.map((office, index) => (
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
                    src={office.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </figure>
                <figcaption className="ml-5 flex max-w-lg flex-col justify-center sm:ml-0">
                  <h3 className="text-3xl text-white md:text-5xl">
                    {office.title}
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

export const OurCases = () => {
  return (
    <>
      <section className="bg-black pt-28 pb-24">
        <h2 className="mx-auto max-w-flat px-4 text-5xl text-white sm:px-8 md:px-12 md:text-[82px]">
          Our cases
        </h2>
        <div className="mt-10 sm:mt-16 md:mt-24">
          <Carousel />
        </div>
      </section>
    </>
  );
};
