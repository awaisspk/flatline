import { motion } from 'framer-motion';
import React, { useState } from 'react';

type IExpand = {
  isHovered: boolean;
  color?: string;
};
export const Expand = ({ isHovered, color }: IExpand) => {
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  return (
    <motion.div
      className="flex h-9 w-9 items-center justify-center rounded-full"
      onHoverStart={() => {
        setIsCircleHovered(true);
      }}
      onHoverEnd={() => {
        setIsCircleHovered(false);
      }}
      initial={{
        scale: 0.8,
        background: '#ffffff',
      }}
      animate={{
        scale: isHovered ? 1.5 : isCircleHovered ? 1.5 : 0.8,
        background: color || (isCircleHovered ? '#5252f2' : '#ffffff'),
        originX: 'right',
        originY: 'bottom',
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        initial={{ width: 0, height: 0 }}
        animate={{
          width: isHovered ? 10 : isCircleHovered ? 10 : 0,
          height: isHovered ? 10 : isCircleHovered ? 10 : 0,
        }}
      >
        <motion.g
          initial={{ fill: '#000' }}
          animate={{ fill: isCircleHovered ? '#fff' : '#000' }}
          fill-rule="nonzero"
        >
          <path d="M8.896 6.218l3.476-3.48V5.44h1.608V0H8.54v1.607h2.7L7.766 5.083zM5.083 7.765L1.607 11.24V8.539H0v5.44h5.44v-1.607H2.74l3.48-3.476z"></path>
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};
