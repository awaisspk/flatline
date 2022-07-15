import cx from 'classnames';
import Image from 'next/image';

import { brands } from '@/utils/data/brands';

type Props = {
  color?: 'dark' | 'light';
};
export const BrandsList = ({ color = 'light' }: Props) => {
  return (
    <div>
      <div className="flex flex-wrap">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
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
            <div className="absolute h-[50px] w-full max-w-[150px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
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
          </div>
        ))}
      </div>
    </div>
  );
};
