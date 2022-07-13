import React from 'react';

import { PageLayout } from '@/layouts';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

Contact.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Contact;
