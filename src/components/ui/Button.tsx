import cx from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

type IButton = React.ComponentProps<typeof motion.button> & {
  size?: 'lg' | 'md' | 'sm';
  variant?: 'bordered' | 'primary' | 'secondary';
};

export const Button = ({
  children,
  size = 'lg',
  variant = 'primary',
  ...rest
}: IButton) => {
  return (
    <>
      <motion.button
        className={cx(
          'flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-black/40 bg-black  text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black px-7 sm:px-10',
          {
            'py-4 sm:py-5': size === 'lg',
            'py-3 sm:py-4': size === 'md',
            'py-3': size === 'sm',
            'border-white/30': variant === 'bordered',
            'bg-white text-black hover:text-white hover:bg-black':
              variant === 'secondary',
          }
        )}
        {...rest}
      >
        {children}
      </motion.button>
    </>
  );
};
