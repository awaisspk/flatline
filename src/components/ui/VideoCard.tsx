import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import type { ResponsiveImageType } from 'react-datocms';
import { Image } from 'react-datocms';

type IVideoCard = {
  videourl: string;
  previewImage: ResponsiveImageType;
};

export const VideoCard = ({ videourl, previewImage }: IVideoCard) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative block h-full w-full cursor-pointer"
      onHoverStart={() => {
        setIsHovered(true);
        videoRef.current?.play();
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        videoRef.current?.pause();
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
      >
        <Image
          data={previewImage}
          objectFit="cover"
          className="h-full w-full"
        />
      </motion.div>
      <video
        ref={videoRef}
        autoPlay={false}
        className="h-full w-full object-cover"
        src={videourl}
        playsInline
        poster={previewImage.src!}
        loop
        muted
      />
    </motion.div>
  );
};
