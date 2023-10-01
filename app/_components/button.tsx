'use client';

import { Inter } from 'next/font/google';
import { MouseEventHandler } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

export default function Button({
  text,
  onClick,
  inverted = false,
  fullWidth = false,
}: {
  text: string;
  onClick: MouseEventHandler;
  inverted?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={inter.style}
      className={`min-w-[10ch] p-[1px] w-fit text-base  rounded-full  bg-gradient-to-br from-cherry to-vinyl cursor-pointer ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      <div
        className={`p-3 text-center rounded-full select-none ${
          inverted ? 'bg-void-950 text-white' : 'bg-transparent text-void-950'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
