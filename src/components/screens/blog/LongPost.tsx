import cx from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { Image, StructuredText } from 'react-datocms';

import { Accordion } from '@/components/ui/Accordian';
import { bottomReveal } from '@/utils/animations';

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
      <motion.section
        variants={bottomReveal}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className={cx(
            'prose ',
            'prose-h3:text-4xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-normal',
            'prose-h5:text-xl',
            'prose-li:marker:text-black',
            'prose-p:text-black/90'
          )}
          style={{ maxWidth: 1000 }}
        >
          <StructuredText
            data={content.structuredContent}
            renderBlock={({ record }: any) => {
              switch (record.type) {
                case 'ImageRecord':
                  return (
                    <Image
                      data={record.image.responsiveImage}
                      objectFit="cover"
                      className="my-10 min-h-[300px]  sm:mt-20"
                    />
                  );
                case 'ContactFormRecord':
                  return null;
                default:
                  return null;
              }
            }}
            // customNodeRules={[
            //   renderNodeRule(isListItem, ({ node, children, key }) => {
            //     return (
            //       <li key={key} className="flex">
            //         <span className='w-1.5 h-1.5 shrink-0 mt-7 rounded-full bg-black mr-3'/>
            //         <span>{children}</span>
            //       </li>
            //     );
            //   }),
            //
            // ]}
          />
        </div>
      </motion.section>
      <section className="prose-blue my-24 text-black">
        <div
          dangerouslySetInnerHTML={{ __html: content.faqsTitle }}
          className="mb-12 prose-headings:mb-10 prose-headings:text-4xl prose-headings:leading-10 sm:prose-headings:text-5xl"
        />
        <Accordion data={content.frequentlyAskedQuestions} />
      </section>
    </>
  );
};
