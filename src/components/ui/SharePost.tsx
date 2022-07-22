import React, { useState } from 'react';

import { CopyIcon, FbIcon, LinkedinIcon } from './icons';

type ISharePost = {
  slug: string;
  color: 'dark' | 'light';
};

export const SharePost = ({ slug, color = 'light' }: ISharePost) => {
  const [isCopied, setisCopied] = useState(false);
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${process.env.FRONTEND_URL}/blog/${slug}`;
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${process.env.FRONTEND_URL}/blog/${slug}`;
  const copyLink = `${process.env.FRONTEND_URL}/blog/${slug}`;

  return (
    <div className="flex items-center space-x-3">
      <a href={facebook} target="_black">
        <FbIcon style={{ stroke: color === 'light' ? 'black' : 'white' }} />
      </a>
      <a href={linkedin} target="_black">
        <LinkedinIcon
          style={{ stroke: color === 'light' ? 'black' : 'white' }}
        />
      </a>
      <div
        className="flex cursor-pointer items-center space-x-3"
        onClick={() => {
          navigator.clipboard.writeText(copyLink);
          setisCopied(true);
        }}
      >
        <CopyIcon style={{ stroke: color === 'light' ? 'black' : 'white' }} />
        <span
          className="text-sm"
          style={{ color: color === 'light' ? 'black' : 'white' }}
        >
          {isCopied ? 'Url Copied' : 'Copy link'}
        </span>
      </div>
    </div>
  );
};
