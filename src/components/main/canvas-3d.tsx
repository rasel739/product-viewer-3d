'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Loader from '../sub/Loader';
import ProductViewer from './product-viewer';
import Controls from './controls';

interface Props {
  modelPath: string;
  color?: string;
}

const Canvas3D: React.FC<Props> = ({ modelPath, color }) => {
  return (
    <div className='w-full h-[420px] rounded-lg shadow-2xl drop-shadow-2xl bg-transparent overflow-hidden'>
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
        <Suspense fallback={<Loader />}>
          <ProductViewer modelPath={modelPath} color={color} />
        </Suspense>
        <Controls />
        <Environment preset='studio' />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
