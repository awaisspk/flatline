import * as DialogPrimitive from '@radix-ui/react-dialog';
import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { CrossIcon } from '@/components/ui/icons';

interface Props {
  children: ReactNode;
  setisSubmitted: (value: boolean) => void;
}

export const WhitePaperFormModal = ({ children, setisSubmitted }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmitted(true);
    setIsOpen(false);
  };

  const form = (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-8 px-5 py-10 text-white sm:px-12"
    >
      <label className="">
        <span>Name</span>
        <input className="mt-3 h-[50px] w-full rounded-lg border border-neutral-800 bg-transparent px-3" />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          className="mt-3 h-[50px] w-full rounded-lg border border-neutral-800 bg-transparent px-3"
        />
      </label>
      <Button
        type="submit"
        variant="bordered"
        size="md"
        style={{ width: 'max-content' }}
      >
        Submit
      </Button>
    </form>
  );

  return (
    <div className="relative">
      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogPrimitive.Trigger asChild className="w-full">
          {children}
        </DialogPrimitive.Trigger>
        <AnimatePresence>
          {isOpen && (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Close className="z-[91] flex h-14 w-14 items-center justify-center rounded-full bg-orange-500">
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
                  'fixed z-50 bg-black',
                  'w-[90vw] max-w-[600px] h-[400px] rounded-lg',
                  'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
                )}
              >
                {form}
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    </div>
  );
};
