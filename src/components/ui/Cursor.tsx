import type { Variants } from 'framer-motion';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';

import { useCursorVariant } from '@/utils/context/cursorContext';

export const Cursor = () => {
  const { cursorVariant } = useCursorVariant();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { stiffness: 500, bounce: 0, damping: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      const offset =
        cursorVariant === 'view' ? 40 : cursorVariant === 'carousal' ? 60 : 13;
      cursorX.set(e.clientX - offset);
      cursorY.set(e.clientY - offset);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorVariant]);

  const variants: Variants = {
    default: {
      height: 26,
      width: 26,
      background: '#ffffff',
      border: '1px solid #ffffff',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    carousal: {
      background: 'transparent',
      border: '0.3px solid #ffffff',
      mixBlendMode: 'difference',
      width: 120,
      height: 120,
      fontSize: '20px',
      color: '#ffffff',
    },
    button: {
      background: '#073099',
      border: '1px solid #073099',
      mixBlendMode: 'difference',
      color: '#000',
      scale: 4,
      fontSize: '7px',
    },
    view: {
      background: 'transparent',
      border: '0.3px solid #ffffff',
      mixBlendMode: 'difference',
      width: 80,
      height: 80,
      fontSize: '20px',
      color: '#ffffff',
    },
  };

  return (
    <motion.div
      variants={variants}
      className="pointer-events-none fixed left-0 top-0 z-[1000] flex h-6 w-6 items-center justify-center rounded-full"
      animate={cursorVariant}
      transition={{ type: 'tween' }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <span className="pointer-events-none m-auto flex-auto text-center">
        {cursorVariant === 'carousal' ? 'Drag me' : ''}
        {cursorVariant === 'view' ? 'View' : ''}
      </span>
    </motion.div>
  );
};
