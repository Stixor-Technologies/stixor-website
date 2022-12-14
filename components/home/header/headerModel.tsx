/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.SkinnedMesh;
    Circle002_1: THREE.SkinnedMesh;
    Circle002_2: THREE.SkinnedMesh;
    Circle002_3: THREE.SkinnedMesh;
    Circle002_4: THREE.SkinnedMesh;
    Circle002_5: THREE.SkinnedMesh;
    Circle002_6: THREE.SkinnedMesh;
    Circle002_7: THREE.SkinnedMesh;
    Circle002_8: THREE.SkinnedMesh;
    Circle002_9: THREE.SkinnedMesh;
    Caracter_1001: THREE.SkinnedMesh;
    Cube002: THREE.SkinnedMesh;
    Cube002_1: THREE.SkinnedMesh;
    Cube002_2: THREE.SkinnedMesh;
    Cube002_3: THREE.SkinnedMesh;
    Cube002_4: THREE.SkinnedMesh;
    Cube002_5: THREE.SkinnedMesh;
    Cube002_6: THREE.SkinnedMesh;
    Cube002_7: THREE.SkinnedMesh;
    Cube002_8: THREE.SkinnedMesh;
    Cube002_9: THREE.SkinnedMesh;
    Cube002_10: THREE.SkinnedMesh;
    Cube002_11: THREE.SkinnedMesh;
    Cube002_12: THREE.SkinnedMesh;
    Vert013: THREE.SkinnedMesh;
    Vert013_1: THREE.SkinnedMesh;
    Vert013_2: THREE.SkinnedMesh;
    Vert013_3: THREE.SkinnedMesh;
    Vert013_4: THREE.SkinnedMesh;
    Vert013_5: THREE.SkinnedMesh;
    Vert013_6: THREE.SkinnedMesh;
    Vert013_7: THREE.SkinnedMesh;
    Vert013_8: THREE.SkinnedMesh;
    Vert013_9: THREE.SkinnedMesh;
    Vert013_10: THREE.SkinnedMesh;
    Vert001: THREE.SkinnedMesh;
    Vert001_1: THREE.SkinnedMesh;
    Vert001_2: THREE.SkinnedMesh;
    Vert001_3: THREE.SkinnedMesh;
    Vert001_4: THREE.SkinnedMesh;
    Vert001_5: THREE.SkinnedMesh;
    Vert001_6: THREE.SkinnedMesh;
    Vert001_7: THREE.SkinnedMesh;
    Vert001_8: THREE.SkinnedMesh;
    Vert001_9: THREE.SkinnedMesh;
    Vert001_10: THREE.SkinnedMesh;
    Vert001_11: THREE.SkinnedMesh;
    Guldan: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0003: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0003_1: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0001: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0001_1: THREE.Mesh;
    Logo_3: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0003_1: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0003_2: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0002_1: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0002_2: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0006: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0006_1: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0001_1: THREE.Mesh;
    Office_Chair_Final_PBR_Office_Chair_0001_2: THREE.Mesh;
    Circle012: THREE.Mesh;
    Circle012_1: THREE.Mesh;
    Circle012_2: THREE.Mesh;
    Circle012_3: THREE.Mesh;
    Circle012_4: THREE.Mesh;
    Circle012_5: THREE.Mesh;
    Circle012_6: THREE.Mesh;
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_4: THREE.Mesh;
    ScreenS_3d: THREE.Mesh;
    ScreenS_3d001: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube018_1: THREE.Mesh;
    ScreenS_3d002: THREE.Mesh;
    ScreenS_3d003: THREE.Mesh;
    Music_Node: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0002: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0002_1: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0004: THREE.Mesh;
    keys_low_LOD0_keys_LOD0_0004_1: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Mesh001_2: THREE.Mesh;
    Guldan001: THREE.Mesh;
    Cube: THREE.Mesh;
    Floor_3: THREE.Mesh;
    Floor_3001: THREE.Mesh;
    mixamorigHips: THREE.Bone;
    mixamorigHips_1: THREE.Bone;
    mixamorigHips_2: THREE.Bone;
    mixamorigHips_3: THREE.Bone;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["Material.028"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.059"]: THREE.MeshStandardMaterial;
    ["Material.060"]: THREE.MeshStandardMaterial;
    ["Material.061"]: THREE.MeshStandardMaterial;
    ["Material.062"]: THREE.MeshStandardMaterial;
    ["Material.064"]: THREE.MeshStandardMaterial;
    ["Material.065"]: THREE.MeshStandardMaterial;
    ["Material.066"]: THREE.MeshStandardMaterial;
    ["Material.069"]: THREE.MeshStandardMaterial;
    ["Material.070"]: THREE.MeshStandardMaterial;
    ["Material.071"]: THREE.MeshStandardMaterial;
    ["Material.072"]: THREE.MeshStandardMaterial;
    ["Material.073"]: THREE.MeshStandardMaterial;
    ["Material.074"]: THREE.MeshStandardMaterial;
    ["Material.075"]: THREE.MeshStandardMaterial;
    ["Material.077"]: THREE.MeshStandardMaterial;
    ["Material.078"]: THREE.MeshStandardMaterial;
    ["Material.079"]: THREE.MeshStandardMaterial;
    ["Material.082"]: THREE.MeshStandardMaterial;
    ["Material.083"]: THREE.MeshStandardMaterial;
    ["Material.090"]: THREE.MeshStandardMaterial;
    ["Material.085"]: THREE.MeshStandardMaterial;
    ["Material.086"]: THREE.MeshStandardMaterial;
    ["Material.087"]: THREE.MeshStandardMaterial;
    ["Material.088"]: THREE.MeshStandardMaterial;
    ["Material.117"]: THREE.MeshStandardMaterial;
    ["Material.118"]: THREE.MeshStandardMaterial;
    ["Material.119"]: THREE.MeshStandardMaterial;
    ["Material.120"]: THREE.MeshStandardMaterial;
    ["Material.121"]: THREE.MeshStandardMaterial;
    ["Material.124"]: THREE.MeshStandardMaterial;
    ["Material.125"]: THREE.MeshStandardMaterial;
    ["Material.126"]: THREE.MeshStandardMaterial;
    ["Material.127"]: THREE.MeshStandardMaterial;
    ["Material.128"]: THREE.MeshStandardMaterial;
    ["Material.129"]: THREE.MeshStandardMaterial;
    ["Material.130"]: THREE.MeshStandardMaterial;
    ["Material.091"]: THREE.MeshStandardMaterial;
    keys_LOD0: THREE.MeshStandardMaterial;
    body_LOD0: THREE.MeshStandardMaterial;
    ["Material.103"]: THREE.MeshStandardMaterial;
    Office_Chair: THREE.MeshStandardMaterial;
    ["Material.097"]: THREE.MeshStandardMaterial;
    Eraser: THREE.MeshStandardMaterial;
    ["Metal Pencil"]: THREE.MeshStandardMaterial;
    ["Black Pencil Pattern"]: THREE.MeshStandardMaterial;
    ["PurplePencil Pattern"]: THREE.MeshStandardMaterial;
    ["Wood Pencil"]: THREE.MeshStandardMaterial;
    ["Pencil Lead"]: THREE.MeshStandardMaterial;
    ["Material.092"]: THREE.MeshStandardMaterial;
    ["Material.101"]: THREE.MeshStandardMaterial;
    ["Material.100"]: THREE.MeshStandardMaterial;
    ["Material.099"]: THREE.MeshStandardMaterial;
    ["Material.098"]: THREE.MeshStandardMaterial;
    ["Material.102"]: THREE.MeshStandardMaterial;
    LED_3: THREE.MeshStandardMaterial;
    ["Material.094"]: THREE.MeshStandardMaterial;
    ["Table Legs"]: THREE.MeshStandardMaterial;
    Image: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.084"]: THREE.MeshStandardMaterial;
    ["Material.093"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "Guldan"
  | "key Board"
  | "key Board.001"
  | "Logo_3"
  | "Office_Chair_Final_PBR_Office_Chair_0.001"
  | "Office_Chair_Final_PBR_Office_Chair_0.002"
  | "Office_Chair_Final_PBR_Office_Chair_0.003"
  | "Office_Chair_Final_PBR_Office_Chair_0.004"
  | "Pencil Pots"
  | "Pot.003"
  | "ScreenS_3d"
  | "ScreenS_3d.001"
  | "Table_3a"
  | "ScreenS_3d.002"
  | "ScreenS_3d.003"
  | "Music Node"
  | "key Board.002"
  | "key Board.003"
  | "Pot.001"
  | "Guldan.001"
  | "Animation 1"
  | "Animation 2"
  | "Animation 3"
  | "Animation 4"
  | "Animation 5"
  | "Floor_3"
  | "Floor_3.001";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/header.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/images/carpet.jpg");

  useEffect(() => {
    actions["Animation 1"]?.play();
    actions["Animation 2"]?.play();
    actions["Animation 3"]?.play();
    actions["Animation 4"]?.play();
    actions["Animation 5"]?.play();
    actions["Music Node"]?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="C1_A1"
          position={[-15.77, 0.37, -1.67]}
          rotation={[0, 1.55, 0]}
        >
          <primitive object={nodes.mixamorigHips} />
          <group name="Caracter_1">
            <skinnedMesh
              frustumCulled={false}
              name="Circle002"
              geometry={nodes.Circle002.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Circle002.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_1"
              geometry={nodes.Circle002_1.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Circle002_1.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_2"
              geometry={nodes.Circle002_2.geometry}
              material={materials["Material.018"]}
              skeleton={nodes.Circle002_2.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_3"
              geometry={nodes.Circle002_3.geometry}
              material={materials["Material.019"]}
              skeleton={nodes.Circle002_3.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_4"
              geometry={nodes.Circle002_4.geometry}
              material={materials["Material.023"]}
              skeleton={nodes.Circle002_4.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_5"
              geometry={nodes.Circle002_5.geometry}
              material={materials["Material.024"]}
              skeleton={nodes.Circle002_5.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_6"
              geometry={nodes.Circle002_6.geometry}
              material={materials["Material.025"]}
              skeleton={nodes.Circle002_6.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_7"
              geometry={nodes.Circle002_7.geometry}
              material={materials["Material.026"]}
              skeleton={nodes.Circle002_7.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_8"
              geometry={nodes.Circle002_8.geometry}
              material={materials["Material.027"]}
              skeleton={nodes.Circle002_8.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Circle002_9"
              geometry={nodes.Circle002_9.geometry}
              material={materials["Material.028"]}
              skeleton={nodes.Circle002_9.skeleton}
            />
          </group>
          <skinnedMesh
            frustumCulled={false}
            name="Caracter_1001"
            geometry={nodes.Caracter_1001.geometry}
            material={materials["Material.005"]}
            skeleton={nodes.Caracter_1001.skeleton}
          />
        </group>
        <group
          name="C2_A2"
          position={[-19.06, 0.41, 1.89]}
          rotation={[Math.PI, -1.56, Math.PI]}
        >
          <primitive object={nodes.mixamorigHips_1} />
          <group name="Character_2">
            <skinnedMesh
              frustumCulled={false}
              name="Cube002"
              geometry={nodes.Cube002.geometry}
              material={materials["Material.059"]}
              skeleton={nodes.Cube002.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_1"
              geometry={nodes.Cube002_1.geometry}
              material={materials["Material.060"]}
              skeleton={nodes.Cube002_1.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_2"
              geometry={nodes.Cube002_2.geometry}
              material={materials["Material.061"]}
              skeleton={nodes.Cube002_2.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_3"
              geometry={nodes.Cube002_3.geometry}
              material={materials["Material.062"]}
              skeleton={nodes.Cube002_3.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_4"
              geometry={nodes.Cube002_4.geometry}
              material={materials["Material.064"]}
              skeleton={nodes.Cube002_4.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_5"
              geometry={nodes.Cube002_5.geometry}
              material={materials["Material.065"]}
              skeleton={nodes.Cube002_5.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_6"
              geometry={nodes.Cube002_6.geometry}
              material={materials["Material.066"]}
              skeleton={nodes.Cube002_6.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_7"
              geometry={nodes.Cube002_7.geometry}
              material={materials["Material.069"]}
              skeleton={nodes.Cube002_7.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_8"
              geometry={nodes.Cube002_8.geometry}
              material={materials["Material.070"]}
              skeleton={nodes.Cube002_8.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_9"
              geometry={nodes.Cube002_9.geometry}
              material={materials["Material.071"]}
              skeleton={nodes.Cube002_9.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_10"
              geometry={nodes.Cube002_10.geometry}
              material={materials["Material.072"]}
              skeleton={nodes.Cube002_10.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_11"
              geometry={nodes.Cube002_11.geometry}
              material={materials["Material.073"]}
              skeleton={nodes.Cube002_11.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Cube002_12"
              geometry={nodes.Cube002_12.geometry}
              material={materials["Material.074"]}
              skeleton={nodes.Cube002_12.skeleton}
            />
          </group>
        </group>
        <group name="C3_A3" position={[-2.28, 0.4, 7]} rotation={[0, 1.15, 0]}>
          <primitive object={nodes.mixamorigHips_2} />
          <group name="Character_3">
            <skinnedMesh
              frustumCulled={false}
              name="Vert013"
              geometry={nodes.Vert013.geometry}
              material={materials["Material.075"]}
              skeleton={nodes.Vert013.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_1"
              geometry={nodes.Vert013_1.geometry}
              material={materials["Material.077"]}
              skeleton={nodes.Vert013_1.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_2"
              geometry={nodes.Vert013_2.geometry}
              material={materials["Material.078"]}
              skeleton={nodes.Vert013_2.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_3"
              geometry={nodes.Vert013_3.geometry}
              material={materials["Material.079"]}
              skeleton={nodes.Vert013_3.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_4"
              geometry={nodes.Vert013_4.geometry}
              material={materials["Material.082"]}
              skeleton={nodes.Vert013_4.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_5"
              geometry={nodes.Vert013_5.geometry}
              material={materials["Material.083"]}
              skeleton={nodes.Vert013_5.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_6"
              geometry={nodes.Vert013_6.geometry}
              material={materials["Material.090"]}
              skeleton={nodes.Vert013_6.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_7"
              geometry={nodes.Vert013_7.geometry}
              material={materials["Material.085"]}
              skeleton={nodes.Vert013_7.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_8"
              geometry={nodes.Vert013_8.geometry}
              material={materials["Material.086"]}
              skeleton={nodes.Vert013_8.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_9"
              geometry={nodes.Vert013_9.geometry}
              material={materials["Material.087"]}
              skeleton={nodes.Vert013_9.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert013_10"
              geometry={nodes.Vert013_10.geometry}
              material={materials["Material.088"]}
              skeleton={nodes.Vert013_10.skeleton}
            />
          </group>
        </group>
        <group
          name="C4_A4"
          position={[-29.05, 0, -8.79]}
          rotation={[Math.PI, -1.16, Math.PI]}
        >
          <primitive object={nodes.mixamorigHips_3} />
          <group name="Character_4">
            <skinnedMesh
              frustumCulled={false}
              name="Vert001"
              geometry={nodes.Vert001.geometry}
              material={materials["Material.117"]}
              skeleton={nodes.Vert001.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_1"
              geometry={nodes.Vert001_1.geometry}
              material={materials["Material.118"]}
              skeleton={nodes.Vert001_1.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_2"
              geometry={nodes.Vert001_2.geometry}
              material={materials["Material.119"]}
              skeleton={nodes.Vert001_2.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_3"
              geometry={nodes.Vert001_3.geometry}
              material={materials["Material.120"]}
              skeleton={nodes.Vert001_3.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_4"
              geometry={nodes.Vert001_4.geometry}
              material={materials["Material.121"]}
              skeleton={nodes.Vert001_4.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_5"
              geometry={nodes.Vert001_5.geometry}
              material={materials["Material.124"]}
              skeleton={nodes.Vert001_5.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_6"
              geometry={nodes.Vert001_6.geometry}
              material={materials["Material.125"]}
              skeleton={nodes.Vert001_6.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_7"
              geometry={nodes.Vert001_7.geometry}
              material={materials["Material.126"]}
              skeleton={nodes.Vert001_7.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_8"
              geometry={nodes.Vert001_8.geometry}
              material={materials["Material.127"]}
              skeleton={nodes.Vert001_8.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_9"
              geometry={nodes.Vert001_9.geometry}
              material={materials["Material.128"]}
              skeleton={nodes.Vert001_9.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_10"
              geometry={nodes.Vert001_10.geometry}
              material={materials["Material.129"]}
              skeleton={nodes.Vert001_10.skeleton}
            />
            <skinnedMesh
              frustumCulled={false}
              name="Vert001_11"
              geometry={nodes.Vert001_11.geometry}
              material={materials["Material.130"]}
              skeleton={nodes.Vert001_11.skeleton}
            />
          </group>
        </group>
        <mesh
          name="Guldan"
          geometry={nodes.Guldan.geometry}
          material={materials["Material.091"]}
          position={[-13.95, 2.34, 2.98]}
        />
        <group name="key_Board">
          <mesh
            name="keys_low_LOD0_keys_LOD0_0003"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0003.geometry}
            material={materials.keys_LOD0}
          />
          <mesh
            name="keys_low_LOD0_keys_LOD0_0003_1"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0003_1.geometry}
            material={materials.body_LOD0}
          />
        </group>
        <group
          name="key_Board001"
          position={[-14.67, 1.97, 0.95]}
          rotation={[0, -0.01, 0]}
        >
          <mesh
            name="keys_low_LOD0_keys_LOD0_0001"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0001.geometry}
            material={materials.keys_LOD0}
          />
          <mesh
            name="keys_low_LOD0_keys_LOD0_0001_1"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0001_1.geometry}
            material={materials.body_LOD0}
          />
        </group>
        <mesh
          name="Logo_3"
          geometry={nodes.Logo_3.geometry}
          material={materials["Material.103"]}
        />
        <group
          name="Office_Chair_Final_PBR_Office_Chair_0001"
          position={[0.15, 0, 0]}
        >
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0003_1"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0003_1.geometry}
            material={materials.Office_Chair}
          />
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0003_2"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0003_2.geometry}
            material={materials["Material.097"]}
          />
        </group>
        <group
          name="Office_Chair_Final_PBR_Office_Chair_0002"
          position={[0.06, 0, 0]}
        >
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0002_1"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0002_1.geometry}
            material={materials.Office_Chair}
          />
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0002_2"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0002_2.geometry}
            material={materials["Material.097"]}
          />
        </group>
        <group name="Office_Chair_Final_PBR_Office_Chair_0003">
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0006"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0006.geometry}
            material={materials.Office_Chair}
          />
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0006_1"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0006_1.geometry}
            material={materials["Material.097"]}
          />
        </group>
        <group
          name="Office_Chair_Final_PBR_Office_Chair_0004"
          position={[-15.97, 1.35, 0.7]}
          rotation={[0, -0.16, 0]}
        >
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0001_1"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0001_1.geometry}
            material={materials.Office_Chair}
          />
          <mesh
            name="Office_Chair_Final_PBR_Office_Chair_0001_2"
            geometry={nodes.Office_Chair_Final_PBR_Office_Chair_0001_2.geometry}
            material={materials["Material.097"]}
          />
        </group>
        <group name="Pencil_Pots">
          <mesh
            name="Circle012"
            geometry={nodes.Circle012.geometry}
            material={materials.Eraser}
          />
          <mesh
            name="Circle012_1"
            geometry={nodes.Circle012_1.geometry}
            material={materials["Metal Pencil"]}
          />
          <mesh
            name="Circle012_2"
            geometry={nodes.Circle012_2.geometry}
            material={materials["Black Pencil Pattern"]}
          />
          <mesh
            name="Circle012_3"
            geometry={nodes.Circle012_3.geometry}
            material={materials["PurplePencil Pattern"]}
          />
          <mesh
            name="Circle012_4"
            geometry={nodes.Circle012_4.geometry}
            material={materials["Wood Pencil"]}
          />
          <mesh
            name="Circle012_5"
            geometry={nodes.Circle012_5.geometry}
            material={materials["Pencil Lead"]}
          />
          <mesh
            name="Circle012_6"
            geometry={nodes.Circle012_6.geometry}
            material={materials["Material.092"]}
          />
        </group>
        <group name="Pot003">
          <mesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials["Material.101"]}
          />
          <mesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials["Material.100"]}
          />
          <mesh
            name="Mesh_2"
            geometry={nodes.Mesh_2.geometry}
            material={materials["Material.099"]}
          />
          <mesh
            name="Mesh_3"
            geometry={nodes.Mesh_3.geometry}
            material={materials["Material.098"]}
          />
          <mesh
            name="Mesh_4"
            geometry={nodes.Mesh_4.geometry}
            material={materials["Material.102"]}
          />
        </group>
        <mesh
          name="ScreenS_3d"
          geometry={nodes.ScreenS_3d.geometry}
          material={materials.LED_3}
        />
        <mesh
          name="ScreenS_3d001"
          geometry={nodes.ScreenS_3d001.geometry}
          material={materials.LED_3}
          position={[-14.02, 2.44, 1.53]}
          rotation={[0, -0.01, 0]}
        />
        <group name="Table_3a">
          <mesh
            name="Cube018"
            geometry={nodes.Cube018.geometry}
            material={materials["Material.094"]}
          />
          <mesh
            name="Cube018_1"
            geometry={nodes.Cube018_1.geometry}
            material={materials["Table Legs"]}
          />
        </group>
        <mesh
          name="ScreenS_3d002"
          geometry={nodes.ScreenS_3d002.geometry}
          material={materials.Image}
        />
        <mesh
          name="ScreenS_3d003"
          geometry={nodes.ScreenS_3d003.geometry}
          material={materials.Image}
          position={[-14.02, 2.44, 1.53]}
          rotation={[0, -0.01, 0]}
        />
        <mesh
          name="Music_Node"
          geometry={nodes.Music_Node.geometry}
          material={materials.Material}
          position={[-15.1, 3.16, -1.46]}
          rotation={[0, 1.3, 0.16]}
          scale={0.03}
        />
        <group
          name="key_Board002"
          position={[-26.46, 0, 0.17]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="keys_low_LOD0_keys_LOD0_0002"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0002.geometry}
            material={materials.keys_LOD0}
          />
          <mesh
            name="keys_low_LOD0_keys_LOD0_0002_1"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0002_1.geometry}
            material={materials.body_LOD0}
          />
        </group>
        <group
          name="key_Board003"
          position={[-26.46, 0, 0.07]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="keys_low_LOD0_keys_LOD0_0004"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0004.geometry}
            material={materials.keys_LOD0}
          />
          <mesh
            name="keys_low_LOD0_keys_LOD0_0004_1"
            geometry={nodes.keys_low_LOD0_keys_LOD0_0004_1.geometry}
            material={materials.body_LOD0}
          />
        </group>
        <group name="Pot001" position={[-16.66, 2.29, 2.68]} scale={1.41}>
          <mesh
            name="Mesh001"
            geometry={nodes.Mesh001.geometry}
            material={materials["Material.100"]}
          />
          <mesh
            name="Mesh001_1"
            geometry={nodes.Mesh001_1.geometry}
            material={materials["Material.099"]}
          />
          <mesh
            name="Mesh001_2"
            geometry={nodes.Mesh001_2.geometry}
            material={materials["Material.098"]}
          />
        </group>
        <mesh
          name="Guldan001"
          geometry={nodes.Guldan001.geometry}
          material={materials["Material.091"]}
          position={[-14.1, 2.06, 3.2]}
          scale={0.34}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Material.084"]}
          position={[-15.32, 1.94, 2.16]}
          rotation={[0, -0.35, 0]}
        />
        <mesh
          name="Floor_3"
          geometry={nodes.Floor_3.geometry}
          material={materials["Material.093"]}
        />
        <mesh
          name="Floor_3001"
          geometry={nodes.Floor_3001.geometry}
          material={materials["Material.006"]}
          position={[-13.23, 0.34, -0.04]}
          scale={0.76}
        >
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/header.glb");
