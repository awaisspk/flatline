import React from 'react';

import { Main, Meta, PageLayout } from '@/layouts';

const BlogPage = () => {
  return (
    <Main meta={<Meta title="Worth while insights" description="flatline" />}>
      <h1 className="h-screen text-center text-6xl">Blog</h1>
    </Main>
  );
};

BlogPage.getLayout = (page: any) => {
  return <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
