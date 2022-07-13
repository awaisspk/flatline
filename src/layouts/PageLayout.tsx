import type { ReactNode } from 'react';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type IPageLayout = {
  children: ReactNode;
};

export const PageLayout = ({ children }: IPageLayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
