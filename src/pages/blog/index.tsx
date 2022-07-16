import React from 'react';

import { Main, Meta, PageLayout } from '@/layouts';

const BlogPage = () => {
  return (
    <Main meta={<Meta title="Worth while insights" description="flatline" />}>
      <h1 className="h-screen">Blog</h1>
    </Main>
  );
};

BlogPage.getLayout = (page: any) => {
  <PageLayout>{page}</PageLayout>;
};

export default BlogPage;
