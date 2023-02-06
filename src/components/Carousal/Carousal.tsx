import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import React, { useCallback, useEffect } from 'react';

type ICarousal = {
  children: ReactNode;
  btnPosition?: 'top' | 'bottom';
  align?: 'end' | 'start' | 'center';
  hideBtn?: boolean;
  loop?: boolean;
};

export const Carousal = ({
  children,
  btnPosition = 'top',
  hideBtn = false,
  loop = false,
  align = 'start',
}: ICarousal) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align,
      loop,
      containScroll: 'trimSnaps',
    },
    [AutoHeight()]
  );

  console.log(hideBtn);

  const onSelect = useCallback(() => {
    if (!embla) return;
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
    </div>
  );
};
