import cx from 'classnames';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useMeasure from 'react-use-measure';

import { Main, Meta, PageLayout } from '@/layouts';

type IWorkCard = {
  title: string;
  subtitle: string;
  creation: string[];
};

const WorkCard = ({ title, subtitle, creation }: IWorkCard) => {
  const [cardRef, bounds] = useMeasure({
    scroll: false,
    debounce: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(
    mouseX,
    [-bounds.width / 2, bounds.width / 2],
    [-10, 10]
  );

  const y = useTransform(
    mouseY,
    [-bounds.height / 2, bounds.height / 2],
    [-5, 5]
  );

  const isDesktop = useMediaQuery({
    query: '(min-width : 986px)',
  });

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  return (
    <div>
      <motion.section
        ref={containerRef}
        initial={false}
        style={{
          translateX: x,
          translateY: y,
        }}
        className={cx('relative mx-auto max-w-3xl')}
      >
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
          ref={cardRef}
          className="relative cursor-pointer"
          onHoverStart={() => {
            setIsHovered(true);
            resetMousePosition();
            ref.current?.play();
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            resetMousePosition();
            ref.current?.pause();
          }}
          initial={{
            scale: 1,
            clipPath: 'polygon(100% 0,100% 100%,100% 100%,0 100%,0 0%,0% 0)',
          }}
          animate={{
            scale: isHovered ? 0.95 : 1,
            transition: {
              ease: [0, 0.55, 0.45, 1],
            },
          }}
          whileHover={{
            clipPath: 'polygon(100% 0,100% 75%,82% 100%,0 100%,0 25%,18% 0)',
            transition: {
              delay: 0.3,
              type: 'tween',
              duration: 0.4,
            },
          }}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.video
            ref={ref}
            autoPlay={false}
            className="w-full"
            src="https://www.flatlineagency.com/wp-content/uploads/2022/05/videoplayback.mp4"
            playsInline
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
      </motion.section>
      <div className="mt-5 space-y-3">
        <h3 className="text-2xl sm:text-3xl">{subtitle}</h3>
        <p className="flex items-start space-x-2">
          <div className="flex items-center space-x-2">
            <span>Creation</span>
            <span className="block h-2 w-2 rounded-full bg-black" />
          </div>
          <span>{creation.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

const data = [
  {
    title: 'Just Eat Takeaway',
    subtitle: "Europe's leading food delivery service",
    creation: ['Development', 'Design'],
  },
  {
    title: 'Bud',
    subtitle: 'King of beers',
    creation: ['Development', 'Design'],
  },
  {
    title: 'Mystic',
    subtitle: 'Brutal action sports',
    creation: ['PIM', 'ERP', 'E-commerce'],
  },
  {
    title: 'Vanilla',
    subtitle: 'Fashion,redefined',
    creation: ['UX', 'animations', 'flow'],
  },
  {
    title: 'MG motor',
    subtitle: 'Iconic cars',
    creation: ['Coding', 'Design'],
  },
  {
    title: 'Hugo Boss',
    subtitle: 'Welcome to metaverse',
    creation: ['Metaverse', 'Web 3.0', 'AR', 'VR'],
  },
  {
    title: 'Kingdom OS',
    subtitle: '',
    creation: ['Development', 'Design', 'Animation'],
  },
];

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
        <section className="mx-auto  flex max-w-flat flex-wrap justify-between gap-10 px-8 pb-24">
          {data.map((d, i) => {
            return (
              <div
                key={i}
                className={cx(
                  'relative basis-full pb-10 md:pb-0 md:basis-[45%]',
                  {
                    'md:mt-24': i % 2 !== 0,
                    'md:-mt-10': i % 2 === 0,
                  }
                )}
              >
                <WorkCard
                  title={d.title}
                  subtitle={d.subtitle}
                  creation={d.creation}
                />
              </div>
            );
          })}
        </section>
      </main>
    </Main>
  );
};

Cases.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Cases;
