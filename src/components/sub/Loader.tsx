// /components/Loader.tsx
'use client';
import React from 'react';
import { Html } from '@react-three/drei';

export default function Loader() {
  return (
    <Html center>
      <div className='flex flex-col items-center '>
        <div className='w-14 h-14 border-4 border-b-violet-600 border-t-transparent rounded-full animate-spin' />
      </div>
    </Html>
  );
}
