import React from 'react';

import { PageLayout } from '@/layouts';

const CustomDevelopment = () => {
  return (
    <div>
      <h1>Custom Development</h1>
    </div>
  );
};

CustomDevelopment.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CustomDevelopment;
