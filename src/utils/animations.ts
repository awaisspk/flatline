import type { Variants } from 'framer-motion';

export const bottomReveal: Variants = {
  initial: {
    opacity: 0,
    translateY: 100,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

export const rightReveal: Variants = {
  initial: {
    opacity: 0,
    translateX: 130,
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
};

export const headingReveal: Variants = {
  initial: {
    opacity: 0,
    gap: '50px',
    translateY: '100%',
  },
  animate: {
    opacity: 1,
    translateY: '0%',
    gap: '20px',
  },
};
