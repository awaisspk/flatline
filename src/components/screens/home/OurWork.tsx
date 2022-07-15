import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { Expand } from '@/components/ui/icons';
import Dialog from '@/components/ui/VideoModal';

type ICard = {
  videoUrl: string;
  imgUrl: string;
  title: string;
};
const Card = ({ videoUrl, imgUrl, title }: ICard) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <p
        className="absolute right-5 top-5 z-20 text-xl text-white sm:text-3xl "
        style={{ writingMode: 'vertical-rl' }}
      >
        {title}
      </p>
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
      >
        <motion.video
          ref={ref}
          autoPlay={false}
          className="w-full"
          src={videoUrl}
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
          <Image src={imgUrl} layout="fill" objectFit="cover" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="absolute right-5 bottom-5 z-50 cursor-pointer rounded-full">
        <Dialog url={videoUrl}>
          <Expand isHovered={isHovered} />
        </Dialog>
      </motion.div>
    </div>
  );
};

export const OurWork = () => {
  return (
    <>
      <section className="mx-auto flex max-w-flat flex-col px-8 pt-14 pb-24 sm:px-12 sm:pt-32">
        <h2 className="text-5xl font-medium text-[#dbdbdb] sm:text-6xl md:text-[104px]">
          Our work
        </h2>
        <div className="mt-20 flex flex-wrap justify-end gap-5 md:mt-32">
          <div className="w-full md:w-[800px]">
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/videoplayback.mp4"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/justeattakeaway-579x320.jpg"
              title="Just Eat Takeaway"
            />
          </div>
          <div className="w-full md:w-1/2 md:max-w-[425px]">
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2021/12/Dream-Bottle-Defano-Holwijn-copy.mov"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2022/05/bud-dreambottle-425x240.webp"
              title="Bud"
            />
          </div>
          <div className="w-full md:w-1/2 md:max-w-[660px]">
            <Card
              videoUrl="https://www.flatlineagency.com/wp-content/uploads/2021/12/Dream-Bottle-Defano-Holwijn-copy.mov"
              imgUrl="https://www.flatlineagency.com/wp-content/uploads/2021/10/header-mystic-hp-fw-desktop-banner-2-594x346.jpeg"
              title="Mystic"
            />
          </div>
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
