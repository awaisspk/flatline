import Link from 'next/link';
import React from 'react';

export const OurWork = () => {
  return (
    <section className="mx-auto flex max-w-flat flex-col px-8 pt-10 pb-24 sm:px-12 sm:pt-24">
      <h2 className="text-5xl font-semibold text-[#dbdbdb] sm:text-6xl md:text-[104px]">
        Our work
      </h2>
      <div className="mt-20 flex flex-wrap justify-end gap-5 md:mt-32">
        <div className="h-[235px] w-full bg-orange-500 sm:h-[410px] md:h-[450px] md:w-[800px]"></div>
        <div className="h-[235px] w-full bg-red-500 sm:h-[410px] md:h-[240px] md:w-1/2 md:max-w-[425px]"></div>
        <div className="h-[235px] w-full bg-red-500 sm:h-[410px] md:h-[340px] md:w-1/2 md:max-w-[660px]"></div>
      </div>
      <Link href="cases">
        <a className="mt-10 flex w-max cursor-pointer items-center justify-center self-end rounded-[100px]   border-[1px] border-[#dedede] bg-white py-5 px-10 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white">
          See all cases
        </a>
      </Link>
    </section>
  );
};
