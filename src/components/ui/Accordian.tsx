import * as AccordionPrimitive from '@radix-ui/react-accordion';
import cx from 'classnames';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useState } from 'react';

import styles from '@/styles/faqs.module.css';

type IData = {
  header: string;
  content: ReactNode;
};

type IAccordian = {
  data: IData[];
};

const Item = ({ content, header, i }: IData & { i: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionPrimitive.Item
      key={`header-${i}`}
      value={`item-${i + 1}`}
      className="transition-all duration-1000"
    >
      <AccordionPrimitive.Header
        className="w-full border-b border-neutral-300/80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AccordionPrimitive.Trigger
          className={cx(
            'group',
            'radix-state-open:rounded-t-lg radix-state-closed:rounded-lg',
            'focus:outline-none',
            'w-full text-start py-6 grid grid-cols-[4fr,max-content] gap-3 sm:gap-5'
          )}
        >
          <span className="text-lg">{header}</span>
          <span className="mr-2 justify-self-end">+</span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="transition-all duration-1000 radix-state-open:h-radix-collapsible-content radix-state-closed:h-0">
        <motion.div className={styles.container}>{content}</motion.div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

export const Accordion = ({ data }: IAccordian) => {
  return (
    // @ts-ignor e
    <AccordionPrimitive.Root type="multiple" className="max-w-xl">
      {data.map(({ header, content }, i) => (
        <Item header={header} content={content} key={i} i={i} />
      ))}
    </AccordionPrimitive.Root>
  );
};
