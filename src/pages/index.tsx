import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Blog } from '@/components/screens/home/Blog';
import { ChatBot } from '@/components/screens/home/ChatBot';
import { OurClients } from '@/components/screens/home/OurClients';
import { OurWork } from '@/components/screens/home/OurWork';
import { Services } from '@/components/screens/home/Services';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import { Main, Meta, PageLayout } from '@/layouts';

const Index = () => {
  const { setCursorVariant } = useCursorVariant();
  const isMobile = useMediaQuery({ query: '(max-width : 768px)' });
  const headingVariant: Variants = {
    initial: {
      translateY: '100%',
      lineHeight: isMobile ? '40px' : '70px',
      opacity: 0,
    },
    animate: {
      translateY: '0%',
      lineHeight: isMobile ? '30px' : '60px',
      transition: {
        duration: 0.8,
      },
      opacity: 1,
    },
  };
  useEffect(() => {
    console.log('home');
  });
  return (
    <Main
      meta={
        <Meta
          title="Flatline Agency - Custom development, Challenge the status quo"
          description=""
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="mb-12 overflow-hidden">
            <motion.h1
              className=" text-2xl font-normal leading-10 sm:text-4xl md:text-5xl"
              variants={headingVariant}
              initial="initial"
              animate="animate"
            >
              Global disruptor in custom development
              <br />
              <span className="text-neutral-500/80">We make you pulse</span>
            </motion.h1>
          </div>
          <motion.div
            className="flex space-x-2 pb-28 sm:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
          >
            <Link href="cases">
              <a
                className="flex w-max cursor-pointer items-center justify-center rounded-[100px]   border-[1px] border-[#dedede] bg-transparent py-5 px-8 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white sm:px-10"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Learn more
              </a>
            </Link>
            <button
              className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black py-5 px-8 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Plan a call
            </button>
          </motion.div>
        </section>

        <motion.section
          className="relative h-[230px] w-full sm:h-[330px] md:h-[628px]"
          variants={headingVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2022/05/mystic-boarding-banner-e1644150425277-1-e1649283384532-1536x502.jpg"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
            alt=""
          />
        </motion.section>
        <OurWork />
        <Services />
        <OurClients />
        <Blog />
        <ChatBot />
      </main>
    </Main>
  );
};

Index.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Index;
