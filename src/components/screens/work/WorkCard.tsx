import cx from 'classnames';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useMeasure from 'react-use-measure';

type IWorkCard = {
  title: string;
  subtitle: string;
  creation: string[];
};

export const WorkCard = ({ title, subtitle, creation }: IWorkCard) => {
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
        <Link href={`cases/1`}>
          <motion.a
            ref={cardRef}
            className="relative block cursor-pointer"
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
          </motion.a>
        </Link>
      </motion.section>
      <div className="mt-5 space-y-3">
        <h3 className="text-2xl sm:text-3xl">{subtitle}</h3>
        <p className="flex items-start space-x-2">
          <span className="flex items-center space-x-2">
            <span>Creation</span>
            <span className="block h-2 w-2 rounded-full bg-black" />
          </span>
          <span>{creation.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};
