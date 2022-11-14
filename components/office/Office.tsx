/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_4: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_5: THREE.Mesh;
    Mesh_6: THREE.Mesh;
    Tree: THREE.SkinnedMesh;
    Leaf001: THREE.Mesh;
    Leaf002: THREE.Mesh;
    Leaf003: THREE.Mesh;
    Leaf004: THREE.Mesh;
    Leaf005: THREE.Mesh;
    Leaf006: THREE.Mesh;
    Leaf007: THREE.Mesh;
    Leaf008: THREE.Mesh;
    Leaf009: THREE.Mesh;
    Leaf010: THREE.Mesh;
    Leaf011: THREE.Mesh;
    Leaf012: THREE.Mesh;
    Plane039: THREE.Mesh;
    Plane039_1: THREE.Mesh;
    Plane040: THREE.Mesh;
    Plane040_1: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle001: THREE.Mesh;
    Cube: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Cube001: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane013: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube011: THREE.Mesh;
    Plane014: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube005: THREE.Mesh;
    Sphere: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cube009: THREE.Mesh;
    Plane026: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    Plane081: THREE.Mesh;
    Plane081_1: THREE.Mesh;
    Plane015: THREE.Mesh;
    Bone: THREE.Bone;
    neutral_bone: THREE.Bone;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "Take 001"
  | "KeyAction"
  | "Key.001Action"
  | "ArmatureAction_Armature"
  | "ArmatureAction"
  | "Leaf.001Action"
  | "Leaf.002Action"
  | "Leaf.003Action"
  | "Leaf.004Action"
  | "Leaf.005Action"
  | "Leaf.006Action"
  | "Leaf.001Action.001"
  | "Leaf.002Action.001"
  | "Leaf.003Action.001"
  | "Leaf.004Action.001"
  | "Leaf.005Action.001"
  | "Leaf.006Action.001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "/assets/office.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["ArmatureAction"]?.play();
    actions["Leaf.001Action"]?.play();
    actions["Take 001"]?.play();
    actions["Leaf.002Action"]?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Fan_Base1"
          position={[-1.51, 1.36, 4.49]}
          rotation={[-Math.PI / 2, 0, 1.6]}
          scale={0.02}
        >
          <group
            name="Fan_Head2"
            position={[0, -0.52, 19.01]}
            rotation={[Math.PI / 2, -Math.PI / 4, 0]}
          >
            <group
              name="Fan_Blades7"
              position={[0, 1.75, 7.44]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            >
              <mesh
                name="Mesh_4"
                geometry={nodes.Mesh_4.geometry}
                material={materials["Material.005"]}
                rotation={[0, 0, -Math.PI / 4]}
              />
            </group>
            <group
              name="Fan_Lock6"
              position={[-1.15, 3.73, -5.37]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.71}
            >
              <mesh
                name="Mesh_3"
                geometry={nodes.Mesh_3.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              name="Fan_Tassle_024"
              position={[-4.83, -8.15, 10.5]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 0.7, 1]}
            />
            <group
              name="Fan_Tassle_015"
              position={[-8.35, 10.11, 10.54]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 0.67, 1]}
            >
              <mesh
                name="Mesh_2"
                geometry={nodes.Mesh_2.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Mesh_2.morphTargetDictionary}
                morphTargetInfluences={nodes.Mesh_2.morphTargetInfluences}
                position={[0, -11.22, 0]}
              />
            </group>
            <group
              name="Fan_Tassle_033"
              position={[5.32, 7.09, 11.23]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 0.8, 1]}
            />
            <mesh
              name="Mesh_5"
              geometry={nodes.Mesh_5.geometry}
              material={materials["Material.005"]}
              position={[0, 1.73, 7.62]}
            />
          </group>
          <mesh
            name="Mesh_6"
            geometry={nodes.Mesh_6.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh
            name="Tree"
            geometry={nodes.Tree.geometry}
            material={materials["Material.014"]}
            skeleton={nodes.Tree.skeleton}
          />
        </group>
        <group
          name="Empty001"
          position={[-3.44, 0.4, 0.22]}
          rotation={[0, 1.51, 0]}
          scale={[0.52, 0.6, 0.52]}
        >
          <mesh
            name="Leaf001"
            geometry={nodes.Leaf001.geometry}
            material={materials["Material.014"]}
            position={[1.26, 4.38, 1.8]}
          />
          <mesh
            name="Leaf002"
            geometry={nodes.Leaf002.geometry}
            material={materials["Material.014"]}
            position={[-1.2, 1.76, -1.49]}
          />
          <mesh
            name="Leaf003"
            geometry={nodes.Leaf003.geometry}
            material={materials["Material.014"]}
            position={[-0.75, 5.45, 2.54]}
          />
          <mesh
            name="Leaf004"
            geometry={nodes.Leaf004.geometry}
            material={materials["Material.014"]}
            position={[0.31, 5.59, -0.2]}
          />
          <mesh
            name="Leaf005"
            geometry={nodes.Leaf005.geometry}
            material={materials["Material.014"]}
            position={[-3.23, 3.76, 1.93]}
          />
          <mesh
            name="Leaf006"
            geometry={nodes.Leaf006.geometry}
            material={materials["Material.014"]}
            position={[-3.72, 5.68, -1]}
          />
          <mesh
            name="Leaf007"
            geometry={nodes.Leaf007.geometry}
            material={materials["Material.014"]}
            position={[1.26, 4.38, 1.8]}
          />
          <mesh
            name="Leaf008"
            geometry={nodes.Leaf008.geometry}
            material={materials["Material.014"]}
            position={[-1.2, 1.76, -1.49]}
          />
          <mesh
            name="Leaf009"
            geometry={nodes.Leaf009.geometry}
            material={materials["Material.014"]}
            position={[-0.75, 5.45, 2.54]}
          />
          <mesh
            name="Leaf010"
            geometry={nodes.Leaf010.geometry}
            material={materials["Material.014"]}
            position={[0.31, 5.59, -0.2]}
          />
          <mesh
            name="Leaf011"
            geometry={nodes.Leaf011.geometry}
            material={materials["Material.014"]}
            position={[-3.23, 3.76, 1.93]}
          />
          <mesh
            name="Leaf012"
            geometry={nodes.Leaf012.geometry}
            material={materials["Material.014"]}
            position={[-3.72, 5.68, -1]}
          />
        </group>
        <group
          name="Plane"
          position={[-0.01, 2.27, 3.62]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Plane039"
            geometry={nodes.Plane039.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane039_1"
            geometry={nodes.Plane039_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <group name="Plane001" position={[-3.18, 4.01, 3.92]}>
          <mesh
            name="Plane040"
            geometry={nodes.Plane040.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane040_1"
            geometry={nodes.Plane040_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.010"]}
          position={[-3.94, 3.6, 4.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.3}
        />
        <mesh
          name="Circle"
          geometry={nodes.Circle.geometry}
          material={materials["Material.010"]}
          position={[-3.96, 3.59, 3.89]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.02}
        />
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={materials["Material.010"]}
          position={[-3.96, 3.59, 3.88]}
          rotation={[Math.PI / 2, -0.91, 0]}
          scale={0.02}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Material.010"]}
          position={[-4.1, 2.41, 3.07]}
          scale={0.82}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.011"]}
          position={[-4.12, 1.19, 3.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials["Material.010"]}
          position={[-4.35, 2.73, 3.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={materials["Material.010"]}
          position={[-4.36, 2.41, 3.93]}
          rotation={[Math.PI / 2, -0.12, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials["Material.010"]}
          position={[-4.35, 2.06, 3.93]}
          rotation={[Math.PI / 2, -0.1, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials["Material.010"]}
          position={[-4.35, 1.71, 3.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.05}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials["Material.010"]}
          position={[3.8, 2.41, 3.07]}
          scale={0.82}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials["Material.011"]}
          position={[3.77, 1.19, 3.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials["Material.010"]}
          position={[3.67, 2.46, 3.93]}
          rotation={[Math.PI / 2, 0.02, 0]}
          scale={[0.06, 0.05, 0.05]}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials["Material.010"]}
          position={[4.23, 2.44, 3.93]}
          rotation={[Math.PI / 2, -0.13, 0]}
          scale={[0.06, 0.05, 0.05]}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[4.09, 1.69, 3.93]}
          rotation={[Math.PI / 2, -0.09, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={materials["Material.010"]}
          position={[3.98, 2.08, 3.93]}
          rotation={[Math.PI / 2, -0.02, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={materials["Material.010"]}
          position={[3.97, 2.45, 3.93]}
          rotation={[Math.PI / 2, -0.14, 0]}
          scale={0.05}
        />
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials["Material.010"]}
          position={[3.87, 1.69, 3.93]}
          rotation={[Math.PI / 2, -0.12, 0]}
          scale={[0.06, 0.05, 0.05]}
        />
        <mesh
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials["Material.011"]}
          position={[-2.8, 1.86, 2.75]}
          scale={[0.04, 0.02, 0.03]}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials["Material.010"]}
          position={[-0.02, 3.8, 6.12]}
          scale={[0.03, 0.03, 0.27]}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials["Material.010"]}
          position={[-3.56, 0.85, 5.06]}
          scale={[0.26, 0.29, 0.26]}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials["Material.010"]}
          position={[-2.59, 0.87, 3.52]}
          rotation={[0, -0.2, 0]}
          scale={[0.27, 0.31, 0.27]}
        />
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials["Material.010"]}
          position={[-1.45, 0.85, 4.49]}
          rotation={[0, 0.37, 0]}
          scale={[0.03, 0.03, 0.04]}
        />
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={materials["Material.013"]}
          position={[-3.18, 0.54, 3.92]}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials["Material.005"]}
          position={[-0.6, 1.42, 4.8]}
          rotation={[0, 0.24, 0]}
          scale={[0, 0.05, 0.05]}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials["Material.005"]}
          position={[1.52, 0.7, 4.22]}
          rotation={[0, 0.25, 0]}
          scale={0.16}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.005"]}
          position={[0.44, 1.01, 5.15]}
          rotation={[0, -1.04, 0]}
          scale={0.04}
        />
        <mesh
          name="Plane021"
          geometry={nodes.Plane021.geometry}
          material={materials["Material.005"]}
          position={[1.02, 1.72, 4.16]}
          rotation={[0, 0.24, 0]}
        />
        <mesh
          name="Plane016"
          geometry={nodes.Plane016.geometry}
          material={materials["Material.005"]}
          position={[-0.68, 1.64, 4.4]}
          rotation={[0, -0.36, 0]}
        />
        <mesh
          name="Plane017"
          geometry={nodes.Plane017.geometry}
          material={materials["Material.005"]}
          position={[-0.69, 1.58, 4.4]}
          rotation={[0, -0.36, 0]}
        />
        <mesh
          name="Plane018"
          geometry={nodes.Plane018.geometry}
          material={materials["Material.005"]}
          position={[1.63, 1.8, 4.16]}
          rotation={[1.49, -0.32, -1.83]}
          scale={[1, 1.19, 1]}
        />
        <mesh
          name="Plane019"
          geometry={nodes.Plane019.geometry}
          material={materials["Material.005"]}
          position={[1.71, 1.79, 4.17]}
          rotation={[1.49, -0.3, -1.83]}
          scale={[1, 0.92, 1]}
        />
        <mesh
          name="Plane020"
          geometry={nodes.Plane020.geometry}
          material={materials["Material.005"]}
          position={[1.6, 1.32, 4.21]}
          rotation={[-Math.PI, 1.06, -Math.PI]}
          scale={[0.89, 1.07, 0.89]}
        />
        <mesh
          name="Plane022"
          geometry={nodes.Plane022.geometry}
          material={materials["Material.005"]}
          position={[1.58, 1.07, 4.19]}
          rotation={[0, 0.25, 0]}
        />
        <mesh
          name="Plane023"
          geometry={nodes.Plane023.geometry}
          material={materials["Material.005"]}
          position={[1.59, 0.72, 4.22]}
          rotation={[1.54, -0.11, -1.82]}
          scale={[0.84, 1, 0.84]}
        />
        <mesh
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={materials["Material.005"]}
          position={[1.67, 0.72, 4.25]}
          rotation={[1.55, -0.09, -1.82]}
          scale={[0.84, 0.77, 0.84]}
        />
        <mesh
          name="Plane025"
          geometry={nodes.Plane025.geometry}
          material={materials["Material.005"]}
          position={[1.72, 0.69, 4.19]}
          rotation={[1.55, -0.07, -1.82]}
          scale={[0.71, 0.96, 0.71]}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials["Material.010"]}
          position={[3.5, 0.85, 4.6]}
          scale={[0.03, 0.03, 0.04]}
        />
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials["Material.005"]}
          position={[3.21, 1.38, 4.72]}
          rotation={[0, -0.01, 0]}
          scale={0.03}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.005"]}
          position={[2.37, 0.72, 4.08]}
          scale={0.18}
        />
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials["Material.005"]}
          position={[0.08, 1.93, 4.18]}
          rotation={[-0.3, 0.48, 0.14]}
        />
        <mesh
          name="Plane026"
          geometry={nodes.Plane026.geometry}
          material={materials["Material.015"]}
          position={[0.41, 1.24, -8.93]}
          scale={[2.8, 1, 1]}
        />
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={materials["Material.012"]}
          position={[-0.14, 0.65, -6.36]}
          rotation={[0, -0.51, 0]}
          scale={0.28}
        />
        <mesh
          name="Cube012"
          geometry={nodes.Cube012.geometry}
          material={materials["Material.011"]}
          position={[-7.3, 1.86, 2.75]}
          scale={[0.04, 0.02, 0.03]}
        />
        <mesh
          name="Cube013"
          geometry={nodes.Cube013.geometry}
          material={materials["Material.011"]}
          position={[5.03, 1.86, 2.75]}
          scale={[0.04, 0.02, 0.03]}
        />
        <mesh
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials["Material.010"]}
          position={[-7, 4.16, 3.25]}
          scale={[0.64, 0.12, 0.64]}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={materials["Material.010"]}
          position={[-7, 0.34, 3.25]}
          scale={[0.64, 0.12, 0.64]}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={materials["Material.010"]}
          position={[7.71, 4.16, 8.21]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.64, 0.12, 0.64]}
        />
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={materials["Material.010"]}
          position={[-7.76, 4.16, 8.21]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.64, 0.12, 0.64]}
        />
        <mesh
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={materials["Material.012"]}
          position={[7.56, 0.65, -6.36]}
          rotation={[0, -0.51, 0]}
          scale={0.28}
        />
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={materials["Material.012"]}
          position={[-8.08, 0.65, -6.36]}
          rotation={[0, -0.51, 0]}
          scale={0.28}
        />
        <mesh
          name="Cube021"
          geometry={nodes.Cube021.geometry}
          material={materials["Material.012"]}
          position={[-15.97, 0.65, -6.36]}
          rotation={[0, -0.51, 0]}
          scale={0.28}
        />
        <mesh
          name="Cube022"
          geometry={nodes.Cube022.geometry}
          material={materials["Material.012"]}
          position={[16.56, 0.65, -6.36]}
          rotation={[0, -0.51, 0]}
          scale={0.28}
        />
        <group
          name="Plane028"
          position={[3.13, 0.54, 13.78]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="Plane081"
            geometry={nodes.Plane081.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Plane081_1"
            geometry={nodes.Plane081_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          name="Plane015"
          geometry={nodes.Plane015.geometry}
          material={materials["Material.005"]}
          morphTargetDictionary={nodes.Plane015.morphTargetDictionary}
          morphTargetInfluences={nodes.Plane015.morphTargetInfluences}
          position={[1.51, 2.25, 3.9]}
          rotation={[Math.PI / 2, 0.02, 1.19]}
          scale={[0.03, 0.12, 0.03]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/office.glb");