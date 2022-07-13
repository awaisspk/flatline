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
        className="ml-20 hidden grow md:block"
        initial={{ opacity: 1 }}
        animate={{
          opacity: direction === 'down' ? 0 : 1,
          transition: {
            duration: 0.5,
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
                className="-mt-1 block h-0.5 w-0 bg-gray-600 duration-300 group-hover:w-full"
                style={{
                  width: router.pathname === link.url ? '100%' : '0%',
                }}
              />
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};
