import { useContext } from 'react';

import { CursorContext } from '@/utils/context/cursorContext';

export const useCursorVariant = () => {
  const { cursorVariant, setCursorVariant } = useContext(CursorContext);
  return { cursorVariant, setCursorVariant };
};
