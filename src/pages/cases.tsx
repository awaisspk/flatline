import React from 'react';

import { PageLayout } from '@/layouts';

const Cases = () => {
  return (
    <div>
      <h1>Cases</h1>
    </div>
  );
};

Cases.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Cases;
