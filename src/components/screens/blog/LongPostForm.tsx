import React from 'react';
import { Image } from 'react-datocms';

import { BrandsList } from '@/components/ui/BrandsList';

import { ContactForm } from '../form/ContactForm';

type ILongPostForm = {
  title: string;
  subTitle: string;
  image: any;
};

export const LongPostForm = ({ title, image, subTitle }: ILongPostForm) => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-flat px-8 py-32  sm:px-12">
        <div className="flex flex-col justify-between gap-20 md:flex-row">
          <div className="max-w-[530px] basis-[60%] space-y-10 text-white">
            <span>Free advice</span>
            <h3 className="text-4xl leading-[50px]">{title}</h3>
            <p className="text-neutral-500">{subTitle}</p>
            <ContactForm btnVariant="bordered" />
          </div>
          <div className="relative h-[230px] w-full sm:h-[650px] lg:w-[450px] ">
            <Image
              data={image.responsiveImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-20">
          <BrandsList half color="dark" />
        </div>
      </div>
    </div>
  );
};
