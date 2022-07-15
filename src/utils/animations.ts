import type { Variants } from 'framer-motion';

export const sectionReveal: Variants = {
  initial: {
    opacity: 0,
    translateY: 100,
  },
  animate: ({ duration = 0.8 }) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      duration,
    },
  }),
};
