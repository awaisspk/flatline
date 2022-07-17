import cx from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import { mainNavigation } from '@/utils/AppConfig';

export const DesktopNavigation = () => {
  const router = useRouter();
  const direction = useScrollDirection();
  return (
    <>
      <motion.nav
        className="visible ml-20 hidden grow md:block"
        initial={{ opacity: 1 }}
        animate={{
          opacity: direction === 'down' ? 0 : 1,
          transitionTimingFunction: 'ease',
          transition: {
            duration: 0.6,
          },
        }}
      >
        <ul className="flex gap-8 text-sm lg:gap-12">
          {mainNavigation.map((link, i) => (
            <li key={i} className="group text-gray-500">
              <Link href={link.url}>
                <a>{link.label}</a>
              </Link>
              <span
                className={cx(
                  '-mt-1 block h-0.5 bg-gray-600 duration-300 group-hover:w-full',
                  {
                    'w-full': router.pathname === link.url,
                    'w-[0%]': router.pathname !== link.url,
                  }
                )}
              />
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};
