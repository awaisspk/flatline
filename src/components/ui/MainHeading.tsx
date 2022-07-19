import { motion } from 'framer-motion';

import { headingReveal } from '@/utils/animations';

type IMainHeading = {
  title: string;
  subtitle?: string;
};

export const MainHeading = ({ title, subtitle }: IMainHeading) => {
  return (
    <div>
      <div className="overflow-hidden pt-3">
        <motion.div
          className="grid auto-rows-auto md:justify-items-end"
          variants={headingReveal}
          transition={{ duration: 0.6 }}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="text-3xl sm:text-5xl md:text-end">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p className="max-w-[600px]  leading-5 text-neutral-500/80 md:text-end md:text-lg md:leading-7 md:text-neutral-800">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};
