import { motion } from 'framer-motion';
import React from 'react';
import { Image, StructuredText } from 'react-datocms';

import { Button } from '@/components/ui/Button';
import styles from '@/styles/post.module.css';
import { bottomReveal } from '@/utils/animations';

type IPost = {
  title: string;
  excerpt: string;
  coverImage: any;
};
type ISmallPost = {
  content: any;
  post: IPost;
};

export const SmallPost = ({ content, post }: ISmallPost) => {
  return (
    <>
      <section>
        <div className="mt-5 mb-20 space-y-10">
          <h1 className="text-3xl leading-10 md:text-5xl">{post.title}</h1>
          <p className="max-w-[930px]">{post.excerpt}</p>
          <Button style={{ width: 'max-content', borderColor: '#f4f4f430' }}>
            Plan a call
          </Button>
          <div>
            <Image
              data={post.coverImage.responsiveImage}
              objectFit="cover"
              className="min-h-[300px]"
            />
          </div>
        </div>
      </section>
      <motion.section
        className={styles.post}
        variants={bottomReveal}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <StructuredText
          data={content.structuredContent}
          renderBlock={({ record }: any) => {
            if (record.type === 'ImageRecord') {
              return <Image data={record.image.responsiveImage} />;
            }
            return null;
          }}
        />
      </motion.section>
    </>
  );
};
