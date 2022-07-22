import type { Variants } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';

type IGalleryCarousal = {
  url: string;
  mimeType: string;
  blurhash: string;
};
type Props = {
  images: IGalleryCarousal[];
};

export const GalleryCarousal = ({ images }: Props) => {
  const { setCursorVariant } = useCursorVariant();
  const ref = useRef(null);
  const inView = useInView(ref);

  const variants: Variants = {
    initial: {
      translateY: 150,
      translateX: -150,
      opacity: 0,
    },
    animate: {
      translateY: 0,
      translateX: 0,
      opacity: 1,
    },
  };

  return (
    <div ref={ref}>
      <Carousal>
        <div
          className="relative ml-10 flex select-none items-start md:ml-[calc((100vw-1200px)/2)]"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {images.map((image, index) => (
            <motion.div
              className="grow-1 relative mr-3 max-w-[350px] shrink-0 basis-[90%] sm:mr-10 "
              variants={variants}
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              transition={{ delay: 0.1 + index / 10 }}
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="relative h-[450px] w-full">
                  {image.mimeType.includes('image') ? (
                    <Image
                      src={image.url}
                      blurDataURL={image.blurhash}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  ) : (
                    <video
                      autoPlay
                      className="h-full w-full object-cover"
                      src={image.url}
                      playsInline
                      loop
                      muted
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Carousal>
    </div>
  );
};
