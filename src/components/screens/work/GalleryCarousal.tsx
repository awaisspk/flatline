import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { bottomReveal } from '@/utils/animations';

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

  return (
    <motion.div
      variants={bottomReveal}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Carousal>
        <div
          className="relative ml-10 flex select-none items-start md:ml-[calc((100vw-1200px)/2)]"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {images.map((image, index) => (
            <div
              className="grow-1 relative mr-3 shrink-0 basis-[360px] sm:mr-10 "
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
            </div>
          ))}
        </div>
      </Carousal>
    </motion.div>
  );
};
