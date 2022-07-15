import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const JoinUs = () => {
  return (
    <section className="mx-auto flex  max-w-flat flex-col px-8 pt-40 pb-24  sm:px-12">
      <h2 className="text-right text-5xl">Come join our crew.</h2>
      <div className="grid h-[600px] w-full grid-cols-[2.4fr,1fr] grid-rows-2">
        <div className="col-span-1 h-full w-full">
          <Link href="contact">
            <a className="relative">
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/12/Job3.jpg"
                layout="fill"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10">
        <h3 className="max-w-2xl text-center text-4xl leading-[50px]">
          Do you want to join our team? We’d love to hear from you
        </h3>
        <Link href="contact">
          <a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
            Apply now
          </a>
        </Link>
      </div>
    </section>
  );
};
