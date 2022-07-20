import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { VideoCard } from '@/components/ui/VideoCard';
import { bottomReveal } from '@/utils/animations';

type Work = {
  slug: string;
  brandSlogan: string;
  cardPreviewImage: any;
  cardVideo: {
    url: string;
  };
};

type IOurWork = {
  work: Work[];
};

export const OurWork = ({ work }: IOurWork) => {
  const card1 = work[0];
  const card2 = work[1];
  const card3 = work[2];
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
              videourl={card1?.cardVideo.url}
              previewImage={card1?.cardPreviewImage.responsiveImage}
              title={card1?.brandSlogan}
              showExpandButton={true}
              href={`/cases/${card1?.slug!}`}
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
              videourl={card2?.cardVideo.url}
              previewImage={card2?.cardPreviewImage.responsiveImage}
              title={card2?.brandSlogan}
              showExpandButton={true}
              href={`/cases/${card2?.slug!}`}
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
              videourl={card3?.cardVideo.url}
              previewImage={card3?.cardPreviewImage.responsiveImage}
              title={card3?.brandSlogan}
              showExpandButton={true}
              href={`/cases/${card3?.slug!}`}
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
