import type { Variants } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import NextLink from 'next/link';
import React, { useRef } from 'react';

import { offices } from '@/utils/data';

const pages = [
  {
    label: 'Custom development',
    url: '/custom-development',
  },
  {
    label: 'About Us',
    url: '/about-us',
  },
  {
    label: 'Thinking',
    url: '/blog',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    link: 'https://instagram.com/flatline.agency',
  },
  {
    label: 'Facebook',
    link: 'https://facebook.com/flatline.agency',
  },
  {
    label: 'Linkedin',
    link: 'https://www.flatlineagency.com/custom-development/',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@flatline-agency',
  },
];

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const rightVariants: Variants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: (i) => ({
      opacity: 1,
      translateX: 0,
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const leftVariants: Variants = {
    hidden: {
      translateY: 100,
      translateX: -100,
      opacity: 0,
    },
    visible: {
      translateY: 0,
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <footer className=" w-full bg-black text-white" ref={ref}>
      <div className="mx-auto flex min-h-screen max-w-flat flex-col justify-between p-[90px_25px_90px] sm:p-[150px_45px_90px]">
        <div className="grid gap-7 sm:grid-cols-[3fr_1fr] md:grid-cols-[5fr_1fr]">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-4xl">
              Let’s work <i>together</i>.
            </h2>
            <div className="mt-8 flex space-x-6">
              <motion.a
                className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px]   border-[#dedede] bg-white py-4 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white sm:w-max sm:py-5 sm:px-10"
                href="#"
                initial={{
                  translateX: -100,
                  opacity: 0,
                }}
                animate={{
                  translateX: isInView ? 0 : -100,
                  opacity: isInView ? 1 : 0,
                  transitionDuration: '0.6s',
                  transitionTimingFunction: 'ease',
                }}
              >
                Plan a call
              </motion.a>
              <motion.a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
                Send email
              </motion.a>
            </div>
          </motion.div>
          <div>
            <h3 className="text-xs">Pages</h3>
            <motion.ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-1 lg:whitespace-nowrap">
              {pages.map((page, i) => (
                <motion.li
                  key={i}
                  className="text-[16px] leading-5 sm:text-xl"
                  variants={rightVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={i}
                >
                  <NextLink href={page.url}>
                    <a>{page.label}</a>
                  </NextLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="mt-[100px] grid sm:grid-cols-[4fr_1fr] md:grid-cols-[5fr_1fr]">
          <div className="flex flex-col flex-wrap gap-16 md:flex-row">
            {offices.map((office, i) => (
              <div key={i} className="w-max">
                <h3>
                  {office.city}
                  <span className="ml-1 text-[#bebebe]">{office.time}</span>
                </h3>
                <p className="flex flex-col text-[#808080]">
                  <span>
                    <small>{office.location[0]}</small>
                  </span>
                  <span>
                    <small>{office.location[1]}</small>
                  </span>
                  <span>
                    <small>{office.email}</small>
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[70px] max-w-[220px]  text-sm text-[#cecece] sm:mt-0">
            <hr className="mb-5 sm:hidden" />
            <ul className="flex flex-wrap gap-3 sm:flex-col sm:gap-1">
              {socialLinks.map((social, i) => (
                <li key={i} className="leading-4">
                  <a href={social.link}>{social.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-3 hidden sm:block">
              <NextLink href="/privacy-policy">
                <a>Privacy Policy</a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
