import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Cursor } from '@/components/ui/Cursor';
import { CursorProvider } from '@/utils/context/cursorContext';

type IPageLayout = {
  children: ReactNode;
  color?: 'dark' | 'light';
};

export const PageLayout = ({ children, color }: IPageLayout) => {
  return (
    <CursorProvider>
      <motion.div
        initial={{ backgroundColor: '#f4f4f4' }}
        animate={{
          backgroundColor: color === 'dark' ? '#000000' : '#f4f4f4',
        }}
      >
        <Header />
        {children}
        <Footer />
        <Cursor />
      </motion.div>
    </CursorProvider>
  );
};
