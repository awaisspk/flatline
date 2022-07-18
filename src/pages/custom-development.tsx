import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Faqs } from '@/components/screens/customDevelopment/Faqs';
import { OurCases } from '@/components/screens/customDevelopment/OurCases';
import { BrandsList } from '@/components/ui/BrandsList';
import { Button } from '@/components/ui/Button';
import { Check } from '@/components/ui/icons/Check';
import { Main, Meta, PageLayout } from '@/layouts';

const services = [
  'We build websites and web apps.',
  'We build native, hybrid, and progressive apps.',
  'We build software applications.',
  'We build E-commerce stores and applications.',
  'We simply blow your mind, and ehmm, we design.',
];
const services2 = ['Web', 'App', 'Software', 'E-commerce'];

const CustomDevelopment = () => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      translateY: 100,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };
  return (
    <Main meta={<Meta title="Custom Development" description="Flatline" />}>
      <main>
        <motion.section
          className="mx-auto flex max-w-flat flex-col justify-between  px-8 sm:px-12 lg:flex-row"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-xl pt-10 pb-20 sm:pb-32 ">
            <h1 className="text-4xl leading-10 sm:text-5xl">
              Custom development
            </h1>
            <p className="mt-14 mb-8 text-neutral-500">
              Our partners and clients consist of Fortune 500 companies, SMEs,
              the Dutch government, and non-profit organizations, leveraging us
              as an end-to-end production partner.
            </p>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2 text-neutral-500"
                >
                  <Check />
                  <span className="-mt-2">{service}</span>
                </li>
              ))}
            </ul>
            <Button style={{ width: 'max-content', marginTop: '2.5rem' }}>
              Have a chat
            </Button>
          </div>
          <div className="relative h-[230px] w-full sm:h-[500px] lg:mt-10 lg:w-[400px] ">
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/12/pexels-photo-5875844-1.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </motion.section>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <BrandsList half />
        </section>
        <section className="mx-auto max-w-flat  py-32 px-8 sm:px-12">
          <motion.div
            className="space-y-10"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl leading-10">Why build it custom</h2>
            <div className="flex flex-col gap-20 pb-32 sm:flex-row sm:gap-10 md:gap-20">
              <p>
                Building custom means building it exactly the way you want.
                Making it lean, fast, UX or UI focussed, and therefore creating
                the perfect fit for your target group(s). Simply put, you just
                imagine and we build the perfect fit. Our ‘unique selling point’
                is that we begin where every other agency stops.
              </p>
              <p>
                We deliver high-quality work, fast – while leveraging the newest
                and best techniques available. All our products are
                breathtaking, responsive, and focused on the mobile-first
                generation – The perfect starting point for SMEs and the
                necessary creative push for the brands and larger corporations.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="aspect-w-16 aspect-h-4 relative "
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/12/image-4.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </motion.div>
        </section>
        <OurCases />
        <section className="mx-auto flex max-w-flat flex-col gap-10 space-y-10 py-32 px-8 sm:px-12 md:flex-row md:gap-20">
          <div className="basis-1/2 space-y-10">
            <h2 className="text-4xl ">Services</h2>
            <p className="text-neutral-500">
              As a production partner, we do not only help you with just
              building an application. We go beyond this minimal perspective and
              help you to set your future goals and create success as a service.
            </p>
          </div>
          <div className="md:self-end">
            <ul className="grid grid-cols-2 gap-y-5 sm:gap-5">
              {services2.map((s, i) => (
                <motion.li
                  key={i}
                  className="text-xl sm:text-3xl"
                  variants={variants}
                  initial="initial"
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.1 + (i + 1) / 10 }}
                >
                  <span className="mr-2 text-[16px] sm:mr-5">01</span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
        <Faqs />
      </main>
    </Main>
  );
};

CustomDevelopment.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CustomDevelopment;
