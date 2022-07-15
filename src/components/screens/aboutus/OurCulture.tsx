import Image from 'next/image';
import React from 'react';

import { brands } from '@/utils/data/brands';

const images = [
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0222_Roxy-Ali--scaled.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0262_Roxy-Ali--scaled.jpg',
  'https://www.flatlineagency.com/wp-content/uploads/2022/05/20220323-Flatline-Agency_DSC0368_Roxy-Ali--scaled.jpg',
];

export const OurCulture = () => {
  return (
    <section className="bg-black pt-28 pb-24 sm:pt-40">
      <div className="mx-auto max-w-flat px-8 sm:px-12">
        <h2 className="text-center text-[82px] text-white">Our culture</h2>
        <div className="mt-24 grid h-[680px] grid-cols-2 grid-rows-2 gap-4">
          <div className="relative col-span-1 row-span-2">
            <Image src={images[0]!} layout="fill" objectFit="cover" alt="" />
          </div>
          <div className="relative">
            <Image src={images[1]!} layout="fill" alt="" />
          </div>
          <div className="relative">
            <Image src={images[2]!} layout="fill" alt="" />
          </div>
        </div>
      </div>
      <section className="mt-20 flex flex-wrap px-8 sm:px-12">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
          >
            <p className="absolute translate-y-[-100%] text-center text-xs leading-4 text-[#848484] opacity-0 transition-all delay-75 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[0%] group-hover:opacity-100">
              {brand.description}
            </p>
            <div className="absolute h-[50px] w-full max-w-[150px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
              <Image
                src={brand.url}
                objectFit="contain"
                layout="fill"
                className="brightness-105 contrast-100 hue-rotate-30 invert saturate-[11%] sepia-[3%]"
                alt=""
              />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
