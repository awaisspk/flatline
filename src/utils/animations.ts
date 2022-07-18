import type { Variants } from 'framer-motion';

export const sectionReveal: Variants = {
  initial: {
    opacity: 0,
    translateY: 100,
  },
  animate: {
    opacity: 1,
    translateY: 0,
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
