import React, { useState } from 'react';

import { CopyIcon, FbIcon, LinkedinIcon } from './icons';

type ISharePost = {
  slug: string;
};

export const SharePost = ({ slug }: ISharePost) => {
  const [isCopied, setisCopied] = useState(false);
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${process.env.FRONTEND_URL}/blog/${slug}`;
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${process.env.FRONTEND_URL}/blog/${slug}`;
  const copyLink = `${process.env.FRONTEND_URL}/blog/${slug}`;

  return (
    <div className="flex items-center space-x-3">
      <a href={facebook} target="_black">
        <FbIcon />
      </a>
      <a href={linkedin} target="_black">
        <LinkedinIcon />
      </a>
      <div
        className="flex cursor-pointer items-center space-x-3"
        onClick={() => {
          navigator.clipboard.writeText(copyLink);
          setisCopied(true);
        }}
      >
        <CopyIcon />
        <span className="text-sm">{isCopied ? 'Url Copied' : 'Copy link'}</span>
      </div>
    </div>
  );
};
