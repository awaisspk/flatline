import 'swiper/css';

import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SimpleSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      centeredSlides
      centeredSlidesBounds
      wrapperClass="swiper-wrapper"
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i} className="slide-card">
          <div>
            <figure className="h-[200px] sm:h-[370px]">
              <div className="h-full w-full bg-gray-600"></div>
            </figure>
            <figcaption className="mt-5">
              <h3 className="text-[16px]">
                Lorem ipsum dolor sit amet, qui minim labore
              </h3>
              <Link href="blog">
                <a className="text-sm text-[#888] underline hover:text-black hover:no-underline">
                  Read more
                </a>
              </Link>
            </figcaption>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="last-card">
        <div className="h-full w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export const Blog = () => {
  return (
    <section className="mb-10 pt-20 pb-28 sm:pt-40">
      <div className="mx-auto flex max-w-flat flex-col px-12">
        <h2 className="text-5xl font-semibold text-[#dbdbdb] sm:text-6xl md:text-[104px]">
          Thinking
        </h2>
      </div>
      <div className="mt-16 flex flex-wrap justify-end gap-5 sm:mt-20">
        <SimpleSlider />
      </div>
    </section>
  );
};
