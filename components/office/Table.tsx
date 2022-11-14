/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube006: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function TableModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/table.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["Material.005"]}
        position={[-0.6, 1.42, 4.8]}
        rotation={[0, 0.24, 0]}
        scale={[0, 0.05, 0.05]}
      />
    </group>
  );
}

useGLTF.preload("/assets/table.glb");