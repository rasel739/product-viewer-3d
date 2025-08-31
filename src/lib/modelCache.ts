// /lib/modelCache.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const modelCache = new Map<string, THREE.Group>();
const loader = new GLTFLoader();

// Deep clone a scene with proper geometry, material, and skeleton handling
function cloneScene(scene: THREE.Group): THREE.Group {
  const clone = scene.clone(true) as THREE.Group;

  clone.traverse((node: any) => {
    if (node.isMesh || node.isSkinnedMesh) {
      // ✅ clone geometry
      if (node.geometry) {
        node.geometry = node.geometry.clone();
      }

      // ✅ clone materials
      if (Array.isArray(node.material)) {
        node.material = node.material.map((m: any) => (m ? m.clone() : m));
      } else if (node.material) {
        node.material = node.material.clone();
      }

      // ✅ ensure shadows are preserved
      node.castShadow = true;
      node.receiveShadow = true;

      // ✅ fix for SkinnedMesh (rebind skeleton)
      if (node.isSkinnedMesh) {
        node.bind(node.skeleton, node.matrixWorld);
      }
    }
  });

  return clone;
}

export const getCachedModel = async (modelPath: string): Promise<THREE.Group> => {
  if (modelCache.has(modelPath)) {
    // Return a safe clone every time
    return cloneScene(modelCache.get(modelPath)!);
  }

  return new Promise((resolve, reject) => {
    loader.load(
      modelPath,
      (gltf) => {
        const scene = gltf.scene;
        // Cache original for reuse
        modelCache.set(modelPath, scene);
        resolve(cloneScene(scene));
      },
      undefined,
      (err) => {
        console.error('GLTF load error', err);
        reject(err);
      }
    );
  });
};
