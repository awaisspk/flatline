import Link from 'next/link';
import React, { useState } from 'react';
import { Image } from 'react-datocms';

import { FlatLink } from '@/components/ui/FlatLink';

import { WhitePaperFormModal } from '../form/WhitePaperFormModal';

type IWhitePaperCard = {
  title: string;
  excerpt: string;
  coverImage: any;
  slug: string;
};

export const WhitePaperCard = ({
  slug,
  title,
  excerpt,
  coverImage,
}: IWhitePaperCard) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const card = (
    <div className="flex w-full flex-col gap-10 md:flex-row">
      <div className="order-3 basis-1/2 md:order-1">
        <div className="max-w-[350px] space-y-5">
          <Link href={`/blog/${slug}`}>
            <a
              style={{
                pointerEvents: isSubmitted ? 'auto' : 'none',
              }}
            >
              <h2 className="text-start text-4xl leading-[45px]">{title}</h2>
            </a>
          </Link>
          <p className="text-start text-sm leading-4 text-neutral-400">
            {excerpt}
          </p>
          <div className="flex items-center space-x-5">
            <FlatLink
              href={`/blog/${slug}`}
              size="sm"
              style={{ pointerEvents: isSubmitted ? 'auto' : 'none' }}
            >
              Read more
            </FlatLink>
            <button className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] px-7 py-3 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white">
              Download Now
            </button>
          </div>
        </div>
      </div>
      <Link href={`/blog/${slug}`}>
        <a
          className="relative order-2 h-[250px] sm:h-[350px] md:basis-1/2"
          style={{
            pointerEvents: isSubmitted ? 'auto' : 'none',
          }}
        >
          <Image
            data={coverImage.responsiveImage}
            layout="fill"
            objectFit="cover"
          />
          <p
            className="absolute top-3 right-3 h-[90%] text-3xl leading-9 text-white sm:top-5 sm:right-4"
            style={{ writingMode: 'vertical-rl' }}
          >
            {title}
          </p>
        </a>
      </Link>
    </div>
  );
  return (
    <>
      {isSubmitted ? (
        card
      ) : (
        <WhitePaperFormModal setisSubmitted={setSubmitted}>
          {card}
        </WhitePaperFormModal>
      )}
    </>
  );
};
