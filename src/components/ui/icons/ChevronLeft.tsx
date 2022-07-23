import React from 'react';

export const ChevronLeft = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#bbb"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="m11 7-5 5 5 5M17 7l-5 5 5 5" />
      </svg>
    </>
  );
};
