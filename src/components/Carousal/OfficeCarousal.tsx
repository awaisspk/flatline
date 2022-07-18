import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { useCursorVariant } from '@/hooks/useCursorVariant';
import { bottomReveal } from '@/utils/animations';

import { Carousal } from './Carousal';

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

export const OfficeCarousal = () => {
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
          className="relative flex select-none items-start"
          onMouseEnter={() => setCursorVariant('carousal')}
          onMouseLeave={() => setCursorVariant('default')}
        >
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
      </Carousal>
    </motion.div>
  );
};
