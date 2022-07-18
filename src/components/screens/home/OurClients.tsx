import React from 'react';

import { BrandsList } from '@/components/ui/BrandsList';

export const OurClients = () => {
  return (
    <section className="mx-auto max-w-flat px-5 pt-16 sm:pt-32">
      <h2 className="mb-10 px-3 text-4xl sm:px-12">Our Clients</h2>
      <BrandsList />
    </section>
  );
};
