import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Main, Meta, PageLayout } from '@/layouts';

type IWorkCard = {
  title: string;
  subtitle: string;
  creation: string[];
};

const WorkCard = ({ title, subtitle, creation }: IWorkCard) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery({
    query: '(min-width : 986px)',
  });
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <section className="relative mx-auto max-w-3xl">
      <div className="absolute inset-x-0 flex justify-center">
        <motion.h2
          className="absolute -mt-16 w-max text-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{
            delay: 0.15,
            duration: 1,
            ease: [0, 0.55, 0.45, 1],
          }}
          animate={{
            scale: isHovered && isDesktop ? 1 : 0.8,
            opacity: isHovered && isDesktop ? 1 : 0,
          }}
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => {
          setIsHovered(true);
          ref.current?.play();
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          ref.current?.pause();
        }}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: isHovered ? 0.9 : 1,
          transition: {
            ease: [0, 0.55, 0.45, 1],
          },
        }}
      >
        <motion.video
          ref={ref}
          autoPlay={false}
          className="w-full"
          src="https://www.flatlineagency.com/wp-content/uploads/2022/05/videoplayback.mp4"
          playsInline
          // webkitPlaysInline
          loop
          muted
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
        >
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2022/05/justeattakeaway-579x320.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </motion.div>
      </motion.div>
      <div className="mt-5 space-y-3">
        <h3 className="text-3xl">{subtitle}</h3>
        <p className="flex items-center space-x-2">
          <span>Creation</span>
          <span className="block h-2 w-2 rounded-full bg-black" />
          <span>{creation.join(' ,')}</span>
        </p>
      </div>
    </section>
  );
};

const Cases = () => {
  return (
    <Main
      meta={
        <Meta
          title="Cases - Flatline Agency"
          description="flatline agency services"
        />
      }
    >
      <main className="overflow-x-hidden">
        <section className="mx-auto flex max-w-flat px-8 pt-16 pb-24 sm:px-12 md:h-96 md:justify-end  md:pt-24">
          <h1 className="text-5xl font-semibold text-[#dbdbdb]  sm:text-[104px]">
            Our work
          </h1>
        </section>
        <section className="mx-auto grid min-h-[2500px] max-w-flat auto-rows-fr grid-cols-1 px-8 sm:gap-32 lg:grid-cols-11 lg:gap-0">
          <div className="h-[400px] lg:col-span-5">
            <WorkCard
              title="Just Eat Takeaway"
              subtitle="Europe's leading food delivery service"
              creation={['Development', 'Design']}
            />
          </div>
          <div className="h-[400px] lg:col-start-7 lg:col-end-12 lg:translate-y-52">
            <WorkCard
              title="Bud"
              subtitle="King of beers"
              creation={['Development', 'Design']}
            />
          </div>

          <div className="h-[400px] lg:col-span-5">
            <WorkCard
              title="Mystic"
              subtitle="Brutal action sports"
              creation={['PIM', 'ERP', 'E-commerce']}
            />
          </div>
          <div className="relative h-[400px] lg:col-start-7  lg:col-end-12 lg:translate-y-48">
            <WorkCard
              title="Vanilla"
              subtitle="Fashion,redefined"
              creation={['UX', 'animations', 'flow']}
            />
          </div>
          <div className="h-[400px] lg:col-span-5">
            <WorkCard
              title="MG motor"
              subtitle="Iconic cars"
              creation={['Coding', 'Design']}
            />
          </div>
          <div className="h-[400px] lg:col-start-7  lg:col-end-12 lg:translate-y-48">
            <WorkCard
              title="Hugo Boss"
              subtitle="Welcome to metaverse"
              creation={['Metaverse', 'Web 3.0', 'AR', 'VR']}
            />
          </div>
          <div className="h-[400px] lg:col-span-5">
            <WorkCard
              title="Kingdom OS"
              subtitle=""
              creation={['Development', 'Design', 'Animation']}
            />
          </div>
        </section>
      </main>
    </Main>
  );
};

Cases.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Cases;