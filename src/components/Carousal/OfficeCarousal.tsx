import { motion } from 'framer-motion';
import React from 'react';
import { Image } from 'react-datocms';

import { useCursorVariant } from '@/hooks/useCursorVariant';
import { bottomReveal } from '@/utils/animations';

import { Carousal } from './Carousal';

type IOfficeCarousal = {
  images: any[];
};

export const OfficeCarousal = ({ images }: IOfficeCarousal) => {
  const { setCursorVariant } = useCursorVariant();

  const carousalImages = images.length < 4 ? [...images, ...images] : images;

  return (
    <motion.div
      variants={bottomReveal}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Carousal loop>
        <div
          className="relative flex select-none items-start"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {carousalImages.map((image, index) => (
            <div
              className="relative mr-3 shrink-0 grow-0 basis-[85%] sm:mr-10 sm:basis-[90%] md:basis-[660px]"
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="relative h-[230px] w-full bg-orange-400 sm:h-[409px]">
                  <Image
                    data={image.responsiveImage}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Carousal>
    </motion.div>
  );
};
