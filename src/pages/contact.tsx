import 'react-intl-tel-input/dist/main.css';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import IntlTelInput from 'react-intl-tel-input';

import { OfficeCarousal } from '@/components/Carousal/OfficeCarousal';
import { Main, Meta, PageLayout } from '@/layouts';
import { bottomReveal } from '@/utils/animations';
import { offices } from '@/utils/data';

const Contact = () => {
  const variants: Variants = {
    initial: {
      translateY: '100%',
      gap: '50px',
      opacity: 0,
    },
    animate: {
      translateY: '0%',
      gap: '20px',
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
      opacity: 1,
    },
  };

  return (
    <Main meta={<Meta title="Say hi" description="Flatline" />}>
      <main>
        <section className="mx-auto mb-24 max-w-flat space-y-5 overflow-hidden px-8 pt-5 sm:px-12">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="grid auto-rows-auto"
          >
            <h1 className="text-5xl">Ready to scale?</h1>
            <p className="max-w-xl leading-7">
              Ready to build something real together with your favorite
              creatives and tech leads? Get into contact or fill out an inquiry
              form.
            </p>
          </motion.div>
        </section>
        <section>
          <OfficeCarousal />
        </section>
        <motion.section
          className="mx-auto mt-20 flex max-w-flat flex-col justify-between gap-10 px-8 sm:px-12 md:flex-row"
          variants={bottomReveal}
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          initial="initial"
          viewport={{ once: true }}
        >
          <div className="mb-24 space-y-14">
            <h2 className="text-4xl">Inquiries</h2>
            <form>
              <div className="flex w-[440px] max-w-full flex-col space-y-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
                />
                <IntlTelInput
                  defaultCountry="nl"
                  placeholder="Phone"
                  containerClassName="intl-tel-input"
                  inputClassName="form-control w-full h-16 rounded-full border border-gray-300  pr-5"
                />
                <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-[100px] bg-black text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-[430px] max-w-full">
            {offices.map((office, i) => (
              <div key={i}>
                <h2 className="text-3xl md:text-4xl">
                  {office.city}
                  <span>{office.time}</span>
                </h2>
                <p className="my-10 flex flex-col text-sm leading-7 text-neutral-500">
                  <span>{office.location[0]}</span>
                  <span>{office.location[1]}</span>
                  <span>{office.email}</span>
                  <span>{office.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.div
          className="aspect-w-16 aspect-h-9 relative mx-auto mt-20 max-w-[1200px] sm:mb-28 sm:w-[calc(100%-60px)] lg:aspect-h-5"
          variants={bottomReveal}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2022/01/Group-46-1536x769.jpg"
            layout="fill"
            alt=""
          />
        </motion.div>
      </main>
    </Main>
  );
};

Contact.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Contact;
