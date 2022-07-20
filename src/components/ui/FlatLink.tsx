import cx from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type IFlatLink = React.ComponentProps<typeof motion.a> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
};

export const FlatLink = ({
  href,
  children,
  size = 'lg',
  variant = 'primary',
  ...rest
}: IFlatLink) => {
  return (
    <Link href={href!}>
      <motion.a
        className={cx(
          'border-[1px] flex w-full cursor-pointer items-center justify-center rounded-[100px] text-sm leading-4 text-white duration-300 px-7 sm:px-10',
          {
            'py-4 sm:py-5': size === 'lg',
            'py-3 sm:py-4': size === 'md',
            'py-3': size === 'sm',
            'border-white/20 bg-black text-white hover:bg-white hover:text-black':
              variant === 'primary',
            'border-black/20  bg-transparent text-black hover:black hover:text-white':
              variant === 'secondary',
          }
        )}
        {...rest}
      >
        {children}
      </motion.a>
    </Link>
  );
};
