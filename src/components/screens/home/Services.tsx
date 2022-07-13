import 'swiper/css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SimpleSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        500: {
          spaceBetween: 30,
        },
      }}
      slidesPerView="auto"
      centeredSlides
      centeredSlidesBounds
      wrapperClass="swiper-wrapper"
    >
      {[...Array(9)].map((_, i) => (
        <SwiperSlide key={i} className="slide-card">
          <div>
            <figure>
              <div className="min-h-[430px] bg-gray-600"></div>
            </figure>
            <figcaption className="mt-10">
              <h3 className="my-5 text-3xl text-white sm:text-4xl">
                <span className="mr-2 text-lg">0{i + 1}</span>
                Ecommerce
              </h3>
              <p className="text-sm leading-5 text-[#8b8b8b]">
                Lorem ipsum dolor sit amet, qui minim labore minim sint cillum
                sint consectetur cupidatat.
              </p>
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

export const Services = () => {
  return (
    <section className="mb-10 bg-black py-28">
      <div className="mx-auto">
        <h2 className="mx-auto max-w-flat px-8 text-6xl text-white sm:px-12 md:text-[76px]">
          Services
        </h2>
        <div className="mt-20">
          <SimpleSlider />
        </div>
      </div>
    </section>
  );
};
