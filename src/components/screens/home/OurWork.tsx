import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { VideoCard } from '@/components/ui/VideoCard';
import { bottomReveal } from '@/utils/animations';

type Work = {
  slug: string;
  banner: {
    title: string;
  }[];
  card: {
    coverImage: any;
    video: {
      url: string;
    };
    slug: string;
  }[];
};

type IOurWork = {
  work: Work[];
};

export const OurWork = ({ work }: IOurWork) => {
  console.log(work);
  return (
    <>
      <section className="mx-auto flex max-w-flat flex-col px-8 pt-14 pb-24 sm:px-12 sm:pt-32">
        <h2 className="text-5xl font-medium text-[#dbdbdb] sm:text-6xl md:text-[104px]">
          Our work
        </h2>
        <div className="mt-20 flex flex-wrap justify-end gap-5 md:mt-32">
          <motion.div
            className="h-[230px] w-full sm:h-[430px] md:w-[800px]"
            variants={bottomReveal}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <VideoCard
              videourl={work[0]?.card[0]?.video.url}
              previewImage={work[0]?.card[0]?.coverImage.responseImage}
              title={work[0]?.banner[0]?.title}
              showExpandButton={true}
              href={`/cases/${work[0]?.slug!}`}
            />
          </motion.div>
          <motion.div
            className="mb-auto h-[230px] w-full sm:h-[430px] md:h-[250px] md:w-1/2 md:max-w-[425px]"
            variants={bottomReveal}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <VideoCard
              videourl={work[1]?.card[0]?.video.url}
              previewImage={work[1]?.card[0]?.coverImage.responseImage}
              title={work[1]?.banner[0]?.title}
              showExpandButton={true}
              href={`/cases/${work[1]?.slug!}`}
            />
          </motion.div>
          <motion.div
            className="h-[230px] w-full sm:h-[430px] md:h-[350px] md:w-1/2 md:max-w-[660px]"
            variants={bottomReveal}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            viewport={{ margin: '300px 0px 0px 0px' }}
          >
            <VideoCard
              videourl={work[2]?.card[0]?.video.url}
              previewImage={work[2]?.card[0]?.coverImage.responseImage}
              title={work[2]?.banner[0]?.title}
              showExpandButton={true}
              href={`/cases/${work[2]?.slug!}`}
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
