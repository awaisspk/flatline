import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import styles from '@/styles/faqs.module.css';

type IData = {
  header: string;
  content: any;
};

type IAccordian = {
  data: IData[];
};

export const AccordianItem = ({ content, header }: IData) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-[5fr,1fr] items-start gap-1 border-b border-gray-300/80 py-6 sm:gap-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{header}</p>
        <div className="relative flex h-5 w-5 items-center justify-center self-center justify-self-end overflow-hidden">
          <motion.span
            className="block  h-3.5 w-0.5 bg-black"
            initial={{ translateY: '0%' }}
            animate={{ translateY: isOpen ? '200%' : '0%' }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          />
          <span className="absolute block h-3.5 w-0.5 rotate-90 bg-black" />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div
              className={styles.container}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Accordion = ({ data }: IAccordian) => {
  return (
    <div>
      {data.map(({ header, content }, i) => (
        <AccordianItem header={header} content={content} key={i} />
      ))}
    </div>
  );
};
