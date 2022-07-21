import type { SVGProps } from 'react';

export const FbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.75 1.75h-2.625A4.375 4.375 0 0 0 8.75 6.125V8.75H6.125v3.5H8.75v7h3.5v-7h2.625l.875-3.5h-3.5V6.125a.875.875 0 0 1 .875-.875h2.625v-3.5Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
