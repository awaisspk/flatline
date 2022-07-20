import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';
import type { ResponsiveImageType } from 'react-datocms';
import { Image } from 'react-datocms';

import { Carousal } from '@/components/Carousal/Carousal';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { rightReveal } from '@/utils/animations';

type INextCase = {
  href: string;
  image: ResponsiveImageType;
};

type Props = {
  cases: INextCase[];
};

export const NextCase = ({ cases }: Props) => {
  const { setCursorVariant } = useCursorVariant();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      {cases.length > 0 && (
        <Carousal hideBtn loop={false}>
          <div
            ref={ref}
            className="ml-10 flex cursor-pointer select-none md:ml-[calc((100vw-1200px)/2)]"
            onMouseEnter={() => setCursorVariant('carousal')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {cases?.map((item: any, index: number) => (
              <motion.div
                className="relative mr-4 shrink-0 grow-0 sm:mr-14"
                variants={rightReveal}
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.2 * index + 1, ease: 'easeInOut' }}
                key={index}
              >
                <Link href={item.slug}>
                  <a className="h-full w-full">
                    <Image data={item?.card[0]?.coverImage.responsiveImage} />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </Carousal>
      )}
    </div>
  );
};
