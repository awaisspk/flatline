import cx from 'classnames';
import type { Variants } from 'framer-motion';
import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { mainNavigation } from '@/utils/AppConfig';

import { CrossIcon, MenuIcon } from '../ui/icons';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();
  const variants: Variants = {
    initial: {
      translateY: '100%',
      opacity: 0,
    },
    animate: (i) => ({
      translateY: '0%',
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.2 * i,
      },
    }),
  };

  useEffect(() => {
    if (isOpen) {
      controls.start('animate');
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="fixed top-[50px] right-[30px] z-50 h-10 w-10 -translate-y-1/4 overflow-hidden rounded-full bg-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={cx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
            {
              '-translate-y-1/2': isOpen,
              '-translate-y-[200%]': !isOpen,
            }
          )}
        >
          <CrossIcon color="black" />
        </div>

        <motion.div
          className={cx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
            {
              '-translate-y-1/2': !isOpen,
              'translate-y-[200%]': isOpen,
            }
          )}
        >
          <MenuIcon />
        </motion.div>
      </button>
      <div
        className={cx(
          'flex flex-col px-8 bg-white fixed z-40 top-0 left-0 w-full h-[100vh] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
          {
            'translate-y-0': isOpen,
            '-translate-y-[100%]': !isOpen,
          }
        )}
      >
        <motion.nav className="flex grow items-center justify-center sm:justify-start">
          <ul className="flex flex-col items-center space-y-7 sm:items-start">
            {mainNavigation.map((link, i) => (
              <motion.li key={i} className="overflow-hidden">
                <Link href={link.url}>
                  <motion.a
                    className="relative block text-3xl"
                    variants={variants}
                    initial="initial"
                    animate={isOpen ? 'animate' : 'initial'}
                    custom={i + 1}
                  >
                    {link.label}
                  </motion.a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        <div className="fixed inset-x-5 bottom-10">
          <Link href="/contact">
            <a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-black/40 bg-black py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:py-5 sm:px-10">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
