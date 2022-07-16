import type { ReactNode } from 'react';
import React, { useContext, useState } from 'react';

const CursorContext = React.createContext<any>(null);

type ICursorProvider = {
  children: ReactNode;
};

export const CursorProvider = ({ children }: ICursorProvider) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  return (
    <>
      <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
        {children}
      </CursorContext.Provider>
    </>
  );
};

export const useCursorVariant = () => {
  const { cursorVariant, setCursorVariant } = useContext(CursorContext);
  return { cursorVariant, setCursorVariant };
};
