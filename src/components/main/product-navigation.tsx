// /components/ProductNavigation.tsx
'use client';
import React from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface Props {
  count: number;
  activeIndex: number;
  onChange: (index: number) => void;
  disabled?: boolean;
}

const ProductNavigation: React.FC<Props> = ({ count, activeIndex, onChange, disabled }) => {
  return (
    <div className='flex items-center justify-center gap-4 mt-4'>
      <button
        onClick={() => onChange(Math.max(0, activeIndex - 1))}
        disabled={disabled || activeIndex <= 0}
        className='p-2 bg-red-500 rounded-full shadow'
      >
        <CgChevronLeft />
      </button>

      <div className='flex gap-2'>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? 'bg-blue-500 scale-110' : 'bg-gray-300'
            }`}
            disabled={disabled}
          />
        ))}
      </div>

      <button
        onClick={() => onChange(Math.min(count - 1, activeIndex + 1))}
        disabled={disabled || activeIndex >= count - 1}
        className='p-2 bg-red-500 rounded-full shadow'
      >
        <CgChevronRight />
      </button>
    </div>
  );
};

export default ProductNavigation;
