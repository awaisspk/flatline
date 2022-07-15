import * as DialogPrimitive from '@radix-ui/react-dialog';
import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import { CrossIcon } from './icons';

interface Props {
  url: string;
  children: ReactNode;
}

const Dialog = ({ url, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger>{children}</DialogPrimitive.Trigger>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Close className="absolute top-0 right-0 h-10 w-10 bg-black">
              <CrossIcon />
            </DialogPrimitive.Close>
            <DialogPrimitive.Overlay forceMount>
              <motion.div
                className="fixed inset-0 z-50 cursor-pointer bg-black/50 backdrop-blur-[10px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              ></motion.div>
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content
              forceMount
              className={cx(
                'fixed z-50',
                'w-[90vw] max-w-[1100px] rounded-lg',
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
              )}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                }}
              >
                <video autoPlay src={url} controls />
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
