import cx from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

type IPostStylesProvider = {
  children: ReactNode;
};

export const PostStylesProvider = ({ children }: IPostStylesProvider) => {
  return (
    <div
      className={cx(
        'prose prose-invert',
        'prose-h4:text-2xl',
        'prose-h3:text-4xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-normal',
        'prose-h5:text-xl',
        'prose-li:marker:text-black'
      )}
      style={{ maxWidth: 1000 }}
    >
      {children}
    </div>
  );
};
