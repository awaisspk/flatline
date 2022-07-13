import React from 'react';

import { PageLayout } from '@/layouts';

const Aboutus = () => {
  return (
    <div className="min-h-screen">
      <h1>About us</h1>
    </div>
  );
};

Aboutus.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Aboutus;
