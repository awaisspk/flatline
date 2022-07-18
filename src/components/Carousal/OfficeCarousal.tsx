import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { useCursorVariant } from '@/hooks/useCursorVariant';
import { bottomReveal } from '@/utils/animations';

const images = [
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/Amsterdam-office-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Lounge-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Conference1-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/Amsterdam-office-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Lounge-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Conference1-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/Amsterdam-office-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Lounge-1230x820-1-655x409.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Conference1-1230x820-1-655x409.jpg',
];

type Props = {
  btnPosition?: 'top' | 'bottom';
};

export const OfficeCarousal = ({ btnPosition = 'bottom' }: Props) => {
  const { setCursorVariant } = useCursorVariant();
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
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
    <motion.div
      className="relative flex cursor-pointer flex-col"
      variants={bottomReveal}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div
        className="w-full overflow-x-hidden"
        ref={viewportRef}
        style={{
          order: btnPosition === 'top' ? 3 : 1,
        }}
        onMouseEnter={() => setCursorVariant('carousal')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="relative flex select-none items-start">
          {images.map((image, index) => (
            <div
              className="relative mr-3 shrink-0 grow-0 basis-[85%] sm:mr-10 sm:basis-[90%] md:basis-[660px]"
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="relative h-[230px] w-full sm:h-[409px]">
                  <Image src={image} layout="fill" objectFit="cover" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative right-[8%] order-2 my-5 flex justify-end space-x-10 text-sm">
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="cursor-pointer text-neutral-800"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="cursor-pointer text-neutral-800"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};
