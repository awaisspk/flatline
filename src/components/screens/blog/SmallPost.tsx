import React from 'react';
import { Image, StructuredText } from 'react-datocms';

import styles from '@/styles/post.module.css';

type ISmallPost = {
  content: any;
};

export const SmallPost = ({ content }: ISmallPost) => {
  return (
    <section className={styles.post}>
      <StructuredText
        data={content.structuredContent}
        renderBlock={({ record }: any) => {
          if (record.type === 'ImageRecord') {
            return <Image data={record.image.responsiveImage} />;
          }
          return null;
        }}
      />
    </section>
  );
};
