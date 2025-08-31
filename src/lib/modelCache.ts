import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const modelCache = new Map<string, THREE.Group>();
const loader = new GLTFLoader();

function cloneScene(scene: THREE.Group): THREE.Group {
  const clone = scene.clone(true) as THREE.Group;

  clone.traverse((node: THREE.Object3D) => {
    if (node instanceof THREE.Mesh || node instanceof THREE.SkinnedMesh) {
      if (node.geometry) {
        node.geometry = node.geometry.clone();
      }

      if (Array.isArray(node.material)) {
        node.material = node.material.map((m) => (m ? m.clone() : m));
      } else if (node.material) {
        node.material = node.material.clone();
      }

      node.castShadow = true;
      node.receiveShadow = true;

      if (node instanceof THREE.SkinnedMesh) {
        node.bind(node.skeleton, node.matrixWorld);
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
