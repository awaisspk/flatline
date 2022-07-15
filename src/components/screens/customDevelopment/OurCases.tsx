import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

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
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
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
        <div className="ml-20 flex select-none items-start">
          {data.map((office, index) => (
            <div className="relative shrink-0 grow-0 basis-[85%]" key={index}>
              <div className="relative grid grid-cols-[1fr,2fr] gap-16 overflow-hidden">
                <figure className="relative h-[550px] w-[390px]">
                  <Image
                    src={office.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </figure>
                <figcaption className="flex max-w-md flex-col justify-center">
                  <h3 className="text-5xl text-white">{office.title}</h3>
                  <p className="mt-10 mb-5 text-xl text-[#636363]">
                    {office.description}
                  </p>
                  <a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
                    Contact us
                  </a>
                </figcaption>
              </div>
            </div>
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
        <h2 className="mx-auto max-w-flat px-8 text-[82px] text-white sm:px-12">
          Our cases
        </h2>
        <div className="mt-24">
          <Carousel />
        </div>
      </section>
    </>
  );
};
