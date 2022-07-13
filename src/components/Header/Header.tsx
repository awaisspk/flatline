import Link from 'next/link';
import React from 'react';

import { DesktopNavigation, MobileNavigation } from '../Navigation';
import { Logo } from '../ui/icons/Logo';

export const Header = () => {
  return (
    <>
      <header>
        <div className="fixed inset-x-0 top-14 z-50 px-5 mix-blend-difference">
          <div className="mx-auto  flex w-full max-w-[1300px] items-center">
            <Link href="/">
              <a className="z-50 bg-transparent text-inherit">
                <Logo />
              </a>
            </Link>
            <DesktopNavigation />
          </div>
        </div>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        <div className="fixed top-[50px] right-[50px] z-50 hidden md:block">
          <Link href="/contact">
            <a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
              Contact us
            </a>
          </Link>
        </div>
      </header>

      <div className="pt-[150px] sm:pt-[206px]" />
    </>
  );
};
