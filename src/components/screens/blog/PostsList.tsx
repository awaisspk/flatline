import React from 'react';

import { Divider } from '@/components/ui/Divider';

import { PostCard } from './PostCard';
import { WhitePaperCard } from './WhitePaperCard';

type IPostList = {
  posts: any[];
};

export const PostsList = ({ posts }: IPostList) => {
  return (
    <div>
      {posts.map((post: any, i: number) => (
        <div key={post.id}>
          {post.category.name === 'whitepapers' ? (
            <WhitePaperCard key={post.id} {...post} />
          ) : (
            <PostCard key={post.id} {...post} />
          )}
          {i !== posts.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};
