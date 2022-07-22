import cx from 'classnames';
import React from 'react';
import { Image, StructuredText } from 'react-datocms';

import { AccordianItem } from '@/components/ui/Accordian';

type IPost = {
  title: string;
};
type ISmallPost = {
  content: any;
  post: IPost;
};

export const LongPost = ({ content, post }: ISmallPost) => {
  return (
    <>
      <div className="mt-5 mb-20 space-y-10">
        <h1 className="text-3xl leading-10 text-black md:text-5xl">
          {post.title}
        </h1>
      </div>
      <section>
        <div className={cx('prose prose-xl')} style={{ maxWidth: 1200 }}>
          <StructuredText
            data={content.structuredContent}
            renderBlock={({ record }: any) => {
              if (record.type === 'ImageRecord') {
                return (
                  <Image
                    data={record.image.responsiveImage}
                    objectFit="cover"
                    className="my-10 min-h-[300px]  sm:mt-20"
                  />
                );
              }
              if (record.type === 'FaqRecord') {
                return (
                  <AccordianItem
                    header={record.header}
                    content={record.content}
                    key={record.id}
                  />
                );
              }
              return null;
            }}
          />
        </div>
      </section>
    </>
  );
};
