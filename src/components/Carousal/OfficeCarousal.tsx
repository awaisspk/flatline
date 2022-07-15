import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

const images = [
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/Amsterdam-office-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Lounge-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Conference1-1230x820-1-655x409.jpg',
];

export const OfficeCarousal = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      inViewThreshold: 0.7,
    },
    [AutoHeight()]
  );
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
    <div className="relative cursor-pointer">
      <div className="w-full overflow-x-hidden" ref={viewportRef}>
        <div className="flex select-none items-start">
          {images.map((image, index) => (
            <div
              className="relative mr-10 shrink-0 grow-0 basis-1/2"
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="relative h-[409px] w-full">
                  <Image src={image} layout="fill" objectFit="cover" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative right-[8%] mt-3 flex justify-end space-x-10 text-sm">
        <button
          onClick={scrollPrev}
          disabled={prevBtnEnabled}
          className="cursor-pointer text-neutral-800"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnEnabled}
          className="cursor-pointer text-neutral-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};
