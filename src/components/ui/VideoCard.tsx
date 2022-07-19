import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import type { ResponsiveImageType } from 'react-datocms';
import { Image } from 'react-datocms';

import { Expand } from './icons';
import Dialog from './VideoModal';

type IVideoCard = {
  videourl: string;
  title?: string;
  href: string;
  color?: string;
  previewImage?: ResponsiveImageType;
  showExpandButton: boolean;
};

export const VideoCard = ({
  videourl,
  previewImage,
  color,
  title,
  href,
  showExpandButton,
}: IVideoCard) => {
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
      <Link href={href}>
        <a>
          {previewImage && (
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
          )}
          <video
            ref={videoRef}
            autoPlay={false}
            className="h-full w-full object-cover"
            src={videourl}
            playsInline
            poster={previewImage?.src || undefined}
            loop
            muted
          />
          {title && (
            <p
              className="absolute top-5 right-5 z-50 text-3xl"
              style={{ color, writingMode: 'vertical-rl' }}
            >
              {title}
            </p>
          )}
        </a>
      </Link>
      {showExpandButton && (
        <div className="absolute bottom-3 right-3">
          <Dialog url={videourl}>
            <Expand isHovered={isHovered} color={color} />
          </Dialog>
        </div>
      )}
    </motion.div>
  );
};
