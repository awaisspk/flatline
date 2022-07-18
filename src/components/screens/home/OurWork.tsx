import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { Expand } from '@/components/ui/icons';
import Dialog from '@/components/ui/VideoModal';
import { useCursorVariant } from '@/hooks/useCursorVariant';

const Player = dynamic(() => import('react-player'), { ssr: false });

type ICard = {
  videoUrl: string;
  imgUrl: string;
  title: string;
};
const Card = ({ videoUrl, imgUrl, title }: ICard) => {
  const { setCursorVariant } = useCursorVariant();
  const ref = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setCursorVariant('view')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <p
        className="absolute right-5 top-5 z-20 text-xl text-white sm:text-3xl "
        style={{ writingMode: 'vertical-rl' }}
      >
        {title}
      </p>
      <motion.div
        className="relative h-full w-full cursor-pointer bg-black"
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
      >
        <Player
          playing={isHovered}
          light
          muted
          ref={ref}
          url={videoUrl}
          playsinline
          type="video/mp4"
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                preload: 'true',
              },
            },
          }}
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
        >
          <Image src={imgUrl} layout="fill" objectFit="cover" alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute right-5 bottom-5 z-50 cursor-pointer rounded-full"
        onMouseEnter={() => setCursorVariant('dot')}
        onMouseLeave={() => setCursorVariant('view')}
      >
        <Dialog url={videoUrl}>
          <Expand isHovered={isHovered} />
        </Dialog>
      </motion.div>
    </div>
  );
};

export const OurWork = () => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      translateY: 200,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <section className="mx-auto flex max-w-flat flex-col px-8 pt-14 pb-24 sm:px-12 sm:pt-32">
        <h2 className="text-5xl font-medium text-[#dbdbdb] sm:text-6xl md:text-[104px]">
          Our work
        </h2>
        <div className="mt-20 flex flex-wrap justify-end gap-5 md:mt-32">
          <motion.div
            className="h-[230px] w-full sm:h-[430px] md:w-[800px]"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/videoplayback.mp4"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/justeattakeaway-579x320.jpg"
              title="Just Eat Takeaway"
            />
          </motion.div>
          <motion.div
            className="mb-auto h-[230px] w-full sm:h-[430px] md:h-[250px] md:w-1/2 md:max-w-[425px]"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2021/12/Dream-Bottle-Defano-Holwijn-copy.mov"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/bud-dreambottle-425x240.webp"
              title="Bud"
            />
          </motion.div>
          <motion.div
            className="h-[230px] w-full sm:h-[430px] md:h-[350px] md:w-1/2 md:max-w-[660px]"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2021/12/Mystic-video-trimmed.mp4"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2021/10/header-mystic-hp-fw-desktop-banner-2-594x346.jpeg"
              title="Mystic"
            />
          </motion.div>
        </div>
        <Link href="cases">
          <a className="mt-10 flex w-max cursor-pointer items-center justify-center self-end rounded-[100px]   border-[1px] border-[#dedede] bg-white py-5 px-10 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white">
            See all cases
          </a>
        </Link>
      </section>
    </>
  );
};
