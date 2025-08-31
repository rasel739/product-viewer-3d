'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { getCachedModel } from '@/lib/modelCache';

interface Props {
  modelPath: string;
  color?: string;
  onReady?: () => void;
}

const ProductViewer: React.FC<Props> = ({ modelPath, color, onReady }) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    (async () => {
      try {
        const loaded = await getCachedModel(modelPath);
        if (!mountedRef.current) return;

        const box = new THREE.Box3().setFromObject(loaded);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 2.0 / maxDim;
        loaded.scale.setScalar(scale);

        box.setFromObject(loaded);
        const center = box.getCenter(new THREE.Vector3());
        loaded.position.sub(center);

        loaded.rotation.y = Math.PI / 6;

        setModel(loaded);
        if (onReady) onReady();
      } catch (err) {
        console.error('Error loading model in ProductViewer', err);
        if (onReady) onReady();
      }
    })();

    return () => {
      mountedRef.current = false;
    };
  }, [modelPath, onReady]);

  useEffect(() => {
    if (!model || !color) return;
    model.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
        try {
          const mat = (child as THREE.Mesh).material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) {
            mat.forEach((m: THREE.Material) => {
              if ((m as THREE.MeshStandardMaterial).color) {
                ((m as THREE.MeshStandardMaterial).color as THREE.Color).set(color);
              }
            });
          } else {
            if ((mat as THREE.MeshStandardMaterial).color) {
              ((mat as THREE.MeshStandardMaterial).color as THREE.Color).set(color);
            }
          }
        } catch (e) {
          console.log('error is ocard', e);
        }
      }
    });
  }, [color, model]);

  if (!model) return null;
  return <primitive object={model} />;
};

export default ProductViewer;
