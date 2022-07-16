import type { ReactNode } from 'react';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Cursor } from '@/components/ui/Cursor';
import { CursorProvider } from '@/utils/context/cursorContext';

type IPageLayout = {
  children: ReactNode;
};

export const PageLayout = ({ children }: IPageLayout) => {
  return (
    <CursorProvider>
      <Header />
      {children}
      <Footer />
      <Cursor />
    </CursorProvider>
  );
};
