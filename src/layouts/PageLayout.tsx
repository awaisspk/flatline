import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const darkPaths = ['/services/[slug]', '/blog/[slug]'];

  return (
    <CursorProvider>
      <motion.div
        initial={{ backgroundColor: '#f4f4f4' }}
        animate={{
          backgroundColor: darkPaths.includes(router.pathname)
            ? '#000000'
            : '#f4f4f4',
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
