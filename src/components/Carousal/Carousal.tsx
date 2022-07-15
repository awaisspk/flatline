import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

export const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  //
  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative max-w-[100vw]">
      <div className="w-full overflow-x-hidden" ref={viewportRef}>
        <div className="-ml-5 flex select-none">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div
              className="relative min-w-[90vw] max-w-[670px] pl-3 md:min-w-[60vw] md:pl-9"
              key={index}
            >
              <div className="relative h-[230px] overflow-hidden md:h-[490px]">
                <div className="relative h-full w-full">
                  <Image
                    src="https://www.flatlineagency.com/wp-content/uploads/2021/12/NYC-Club135-Conference1-1230x820-1-655x409.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /> */}
      {/* <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};
