import cx from 'classnames';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { brands } from '@/utils/data/brands';

type Props = {
  color?: 'dark' | 'light';
  half?: boolean;
};
export const BrandsList = ({ color = 'light', half = false }: Props) => {
  const variants: Variants = {
    initial: {
      translateY: 150,
      translateX: -100,
      opacity: 0,
    },
    animate: (i) => ({
      translateY: 0,
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.2 + i / (i > 5 ? 20 : 10),
        ease: 'easeInOut',
      },
    }),
  };
  const list = half ? brands.slice(0, 5) : brands;
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {list.map((brand, i) => (
          <motion.div
            key={i}
            className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
            variants={variants}
            initial="initial"
            whileInView="animate"
            custom={i + 1}
          >
            <p
              className={cx(
                'absolute translate-y-[-100%] text-center text-xs leading-4 opacity-0 transition-all delay-75 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[0%] group-hover:opacity-100',
                {
                  'text-neutral-500': color === 'dark',
                  'text-black': color === 'light',
                }
              )}
            >
              {brand.description}
            </p>
            <div className="absolute h-[50px] w-full max-w-[100px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
              <Image
                src={brand.url}
                objectFit="contain"
                layout="fill"
                alt=""
                className={cx({
                  'brightness-105 contrast-100 hue-rotate-30 invert saturate-[11%] sepia-[3%]':
                    color === 'dark',
                })}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
