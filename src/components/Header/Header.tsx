import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { useCursorVariant } from '@/utils/context/cursorContext';

import { DesktopNavigation, MobileNavigation } from '../Navigation';
import { Logo } from '../ui/icons/Logo';

export const Header = () => {
  const { setCursorVariant } = useCursorVariant();
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
      </header>
      <div className="fixed top-[50px] right-5 z-50 float-right hidden md:block xl:right-[calc((100vw-1280px)/2)]">
        <Link href="/contact">
          <motion.a
            className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.7 } }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Contact us
          </motion.a>
        </Link>
      </div>

      <div className="pt-[150px] sm:pt-[206px]" />
    </>
  );
};
