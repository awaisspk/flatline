import Image from 'next/image';
import React from 'react';

import { brands } from '@/utils/data/brands';

export const OurClients = () => {
  return (
    <section className="mx-auto max-w-flat px-5 pt-16 sm:pt-32">
      <h2 className="mb-10 px-3 text-4xl sm:px-12">Our Clients</h2>
      <div className="flex flex-wrap">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
          >
            <p className="absolute translate-y-[-100%] text-center text-xs leading-4 opacity-0 transition-all delay-75 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[0%] group-hover:opacity-100">
              {brand.description}
            </p>
            <div className="absolute h-[50px] w-full max-w-[150px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
              <Image src={brand.url} objectFit="contain" layout="fill" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
