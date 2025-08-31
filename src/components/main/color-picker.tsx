'use client';
import React from 'react';

interface Props {
  colors: string[];
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ colors, onChange }) => (
  <div className='flex gap-2 mt-4'>
    {colors.map((color) => (
      <button
        key={color}
        onClick={() => onChange(color)}
        className='w-6 h-6 rounded-full border border-purple-400'
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

export default ColorPicker;
