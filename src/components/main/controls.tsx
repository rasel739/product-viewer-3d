'use client';
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      minDistance={1.5}
      maxDistance={3}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export default Controls;
