import React from 'react';

import { PageLayout } from '@/layouts';

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
    </div>
  );
};

Services.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Services;
