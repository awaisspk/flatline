import type { SVGProps } from 'react';

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 7.875H9.625a1.75 1.75 0 0 0-1.75 1.75V17.5c0 .966.784 1.75 1.75 1.75H17.5a1.75 1.75 0 0 0 1.75-1.75V9.625a1.75 1.75 0 0 0-1.75-1.75Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.375 13.125H3.5a1.75 1.75 0 0 1-1.75-1.75V3.5A1.75 1.75 0 0 1 3.5 1.75h7.875a1.75 1.75 0 0 1 1.75 1.75v.875"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
