import * as React from 'react';

type Props = {
  color?: 'white' | 'black';
};

export const CrossIcon = ({ color = 'white' }: Props) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
  >
    <path
      stroke={color === 'white' ? '#fff' : '#000'}
      strokeWidth={2}
      d="M13.88 1.15 1.152 13.878m12.726 0L1.15 1.15"
    />
  </svg>
);
