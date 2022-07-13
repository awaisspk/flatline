import { motion } from 'framer-motion';
import NextLink from 'next/link';
import React, { useRef } from 'react';

const offices = [
  {
    city: 'New York',
    time: '10: 30 AM', // temp
    location: ['447 Broadway 2nd floor', '10013 NYC'],
    email: 'ny@flatlineagency.com',
  },
  {
    city: 'Bali',
    time: '10: 30 PM',
    location: ['Jl. Raya Semat No.1, Tibubeneng, Kec.', '80361 Canggu'],
    email: 'bali@flatlineagency.com',
  },
  {
    city: 'Amsterdam',
    time: '04: 30 PM',
    location: ['Gerard Doustraat 246', '1073XD Amsterdam'],
    email: 'amsterdam@flatlineagency.com',
  },
];

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
    label: 'instagram',
    link: 'https://instagram.com/flatline.agency',
  },
  {
    label: 'facebook',
    link: 'https://facebook.com/flatline.agency',
  },
  {
    label: 'linkedin',
    link: 'https://www.flatlineagency.com/custom-development/',
  },
  {
    label: 'linkedin',
    link: 'https://medium.com/@flatline-agency',
  },
];

export const Footer = () => {
  const ref = useRef(null);

  // const variants: Variants = {
  //   initial: {
  //     translateX: -300,
  //     opacity: 0,
  //   },
  //   animate: (i) => ({
  //     translateX: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: i * 0.05,
  //       duration: 0.5,
  //     },
  //   }),
  // };
  return (
    <footer className=" w-full bg-black text-white" ref={ref}>
      <div className="mx-auto flex min-h-screen max-w-flat flex-col justify-between p-[90px_25px_90px] sm:p-[150px_45px_90px]">
        <div className="grid gap-7 sm:grid-cols-[3fr_1fr] md:grid-cols-[5fr_1fr]">
          <div>
            <h2 className="text-4xl">
              Let’s work <i>together</i>.
            </h2>
            <div className="mt-8 flex space-x-6">
              <motion.a
                className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px]   border-[#dedede] bg-white py-4 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white sm:w-max sm:py-5 sm:px-10"
                href="#"
              >
                Plan a call
              </motion.a>
              <a
                href="mailto:inquiries@flatlineagency.com"
                className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-[#dedede50] bg-transparent py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10"
              >
                Send email
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs">Pages</h3>
            <motion.ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-1 md:whitespace-nowrap">
              {pages.map((page, i) => (
                <motion.li
                  key={i}
                  className="text-[16px] leading-5 sm:text-xl"
                  // variants={variants}
                  // custom={i}
                  // initial="initial"
                  // whileInView="animate"
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
