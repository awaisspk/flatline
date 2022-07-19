import cx from 'classnames';
import { motion } from 'framer-motion';

import { headingReveal } from '@/utils/animations';

type IMainHeading = {
  title: string;
  subtitle?: string;
  align?: 'start' | 'end';
  color?: 'dark' | 'light';
};

export const MainHeading = ({
  title,
  subtitle,
  align = 'start',
  color = 'light',
}: IMainHeading) => {
  return (
    <div>
      <div className="overflow-hidden pt-3">
        <motion.div
          className={cx('grid auto-rows-auto', {
            'md:justify-items-end': align === 'end',
          })}
          variants={headingReveal}
          transition={{ duration: 0.6 }}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className={cx('text-3xl sm:text-5xl', {
              'md:text-end': align === 'end',
              'text-white': color === 'dark',
              'text-black': color === 'light',
            })}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className={cx('leading-5 md:text-lg md:leading-7 ', {
                'md:text-end': align === 'end',
                'text-neutral-500': color === 'dark',
                'text-neutral-500/80 md:text-neutral-800': color === 'light',
              })}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};
