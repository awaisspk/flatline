import React from 'react';
import { Image } from 'react-datocms';

import { FlatLink } from '@/components/ui/FlatLink';

type IPostCard = {
  title: string;
  excerpt: string;
  coverImage: any;
  slug: string;
};

export const PostCard = ({ slug, title, excerpt, coverImage }: IPostCard) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="order-3 basis-1/2 md:order-1">
        <div className="max-w-[350px] space-y-5">
          <h2 className="text-4xl leading-[45px]">{title}</h2>
          <p className="text-sm leading-4 text-neutral-400">{excerpt}</p>
          <FlatLink
            href={`/blog/${slug}`}
            style={{ width: 'max-content' }}
            size="sm"
          >
            Read more
          </FlatLink>
        </div>
      </div>
      <div className="relative order-2 h-[250px] sm:h-[350px] md:basis-1/2">
        <Image
          data={coverImage.responsiveImage}
          layout="fill"
          objectFit="cover"
        />
        <p
          className="absolute top-3 right-3 text-3xl leading-9 text-white sm:top-5 sm:right-4"
          style={{ writingMode: 'vertical-rl' }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
