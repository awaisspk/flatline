import cx from 'classnames';
import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useState } from 'react';

type ICarousal = {
  children: ReactNode;
  btnPosition?: 'top' | 'bottom';
  hideBtn?: boolean;
  loop?: boolean;
};

export const Carousal = ({
  children,
  btnPosition = 'top',
  hideBtn = false,
  loop = false,
}: ICarousal) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: 'start',
      loop,
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
    <div className="relative flex cursor-pointer flex-col">
      <div
        className="w-full overflow-x-hidden"
        ref={viewportRef}
        style={{
          order: btnPosition === 'top' ? 3 : 1,
        }}
      >
        {children}
      </div>
      {!hideBtn && (
        <div className="relative right-[calc((100vw-1200px)/2)] mb-6 flex justify-end space-x-10 text-sm text-white">
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
      )}
    </div>
  );
};
