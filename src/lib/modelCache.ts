// /lib/modelCache.ts
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

const modelCache = new Map<string, THREE.Group>();
const loader = new GLTFLoader();

// Deep clone a scene with proper geometry, material, and skeleton handling
function cloneScene(scene: THREE.Group): THREE.Group {
  const clone = scene.clone(true) as THREE.Group;

  clone.traverse((node) => {
    if ((node as THREE.Mesh).isMesh || (node as THREE.SkinnedMesh).isSkinnedMesh) {
      const mesh = node as THREE.Mesh | THREE.SkinnedMesh;

      // Clone geometry
      if (mesh.geometry) {
        mesh.geometry = mesh.geometry.clone();
      }

      // Clone materials
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map((m) => (m ? m.clone() : m));
      } else if (mesh.material) {
        mesh.material = mesh.material.clone();
      }

      // Ensure shadows
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Rebind skeleton if SkinnedMesh
      if ((mesh as THREE.SkinnedMesh).isSkinnedMesh) {
        const skinned = mesh as THREE.SkinnedMesh;
        skinned.bind(skinned.skeleton, skinned.matrixWorld);
      }
    }
  });

  return clone;
}

export const getCachedModel = async (modelPath: string): Promise<THREE.Group> => {
  if (modelCache.has(modelPath)) {
    return cloneScene(modelCache.get(modelPath)!);
  }

  return new Promise((resolve, reject) => {
    loader.load(
      modelPath,
      (gltf: GLTF) => {
        const scene = gltf.scene;
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
