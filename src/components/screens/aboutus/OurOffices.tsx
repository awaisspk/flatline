import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

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
                  <h3 className="text-5xl text-white">{office.location}</h3>
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

export const OurOffices = () => {
  return (
    <>
      <section className="bg-black pt-28 pb-24">
        <h2 className="mx-auto max-w-flat px-8 text-[82px] text-white sm:px-12">
          Our offices
        </h2>
        <div className="mt-24">
          <Carousel />
        </div>
      </section>
    </>
  );
};
