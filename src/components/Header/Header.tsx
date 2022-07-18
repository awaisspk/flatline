import Link from 'next/link';
import React from 'react';

import { useCursorVariant } from '@/hooks/useCursorVariant';

import { DesktopNavigation, MobileNavigation } from '../Navigation';
import { FlatLink } from '../ui/FlatLink';
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
        <FlatLink
          href="/contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          Contact us
        </FlatLink>
      </div>
      <div className="pt-[150px] sm:pt-[206px]" />
    </>
  );
};
