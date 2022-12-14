/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Caracter_1001: THREE.SkinnedMesh;
    Character_2: THREE.SkinnedMesh;
    Character_2002: THREE.SkinnedMesh;
    Character_3: THREE.SkinnedMesh;
    Character_4: THREE.SkinnedMesh;
    Music_Node: THREE.Mesh;
    Mouse: THREE.Mesh;
    mixamorigHips: THREE.Bone;
    Ctrl_Master: THREE.Bone;
    Ctrl_ArmPole_IK_Left: THREE.Bone;
    Ctrl_Hand_IK_Left: THREE.Bone;
    Ctrl_ArmPole_IK_Right: THREE.Bone;
    Ctrl_Hand_IK_Right: THREE.Bone;
    Ctrl_Foot_IK_Left: THREE.Bone;
    Ctrl_LegPole_IK_Left: THREE.Bone;
    Ctrl_Foot_IK_Right: THREE.Bone;
    Ctrl_LegPole_IK_Right: THREE.Bone;
    mixamorigHips_1: THREE.Bone;
    Ctrl_Master_1: THREE.Bone;
    Ctrl_ArmPole_IK_Left_1: THREE.Bone;
    Ctrl_Hand_IK_Left_1: THREE.Bone;
    Ctrl_ArmPole_IK_Right_1: THREE.Bone;
    Ctrl_Hand_IK_Right_1: THREE.Bone;
    Ctrl_Foot_IK_Left_1: THREE.Bone;
    Ctrl_LegPole_IK_Left_1: THREE.Bone;
    Ctrl_Foot_IK_Right_1: THREE.Bone;
    Ctrl_LegPole_IK_Right_1: THREE.Bone;
    mixamorigHips_2: THREE.Bone;
    Ctrl_Master_2: THREE.Bone;
    Ctrl_ArmPole_IK_Left_2: THREE.Bone;
    Ctrl_Hand_IK_Left_2: THREE.Bone;
    Ctrl_ArmPole_IK_Right_2: THREE.Bone;
    Ctrl_Hand_IK_Right_2: THREE.Bone;
    Ctrl_Foot_IK_Left_2: THREE.Bone;
    Ctrl_LegPole_IK_Left_2: THREE.Bone;
    Ctrl_Foot_IK_Right_2: THREE.Bone;
    Ctrl_LegPole_IK_Right_2: THREE.Bone;
    mixamorigHips_3: THREE.Bone;
    Ctrl_Master_3: THREE.Bone;
    Ctrl_ArmPole_IK_Left_3: THREE.Bone;
    Ctrl_Hand_IK_Left_3: THREE.Bone;
    Ctrl_ArmPole_IK_Right_3: THREE.Bone;
    Ctrl_Hand_IK_Right_3: THREE.Bone;
    Ctrl_Foot_IK_Left_3: THREE.Bone;
    Ctrl_LegPole_IK_Left_3: THREE.Bone;
    Ctrl_Foot_IK_Right_3: THREE.Bone;
    Ctrl_LegPole_IK_Right_3: THREE.Bone;
  };
  materials: {};
};

type ActionName =
  | "Music Node"
  | "Animation 1"
  | "Animation 2"
  | "Animation 3"
  | "Animation 4"
  | "Animation 5";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
export function CharacterModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);

  const { nodes, materials, animations } = useGLTF(
    "/assets/models/Character_Without_Textures.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation 1"]?.play();
    actions["Animation 2"]?.play();
    actions["Animation 3"]?.play();
    actions["Animation 4"]?.play();
    actions["Animation 5"]?.play();
    actions["Music Node"]?.play();
  });

  const _mainTexture = useRef(null);
  const character1 = useTexture("/images/textures/character1.jpg");
  const character2 = useTexture("/images/textures/character2.jpg");
  const character2_oculus = useTexture(
    "/images/textures/character2_oculus.jpg"
  );
  const character3 = useTexture("/images/textures/character3.jpg");
  const character4 = useTexture("/images/textures/character4.jpg");

  // flipY false will fix the default behavior of texture flipping on the y-axis
  character1.flipY = false;
  character2.flipY = false;
  character2_oculus.flipY = false;
  character3.flipY = false;
  character4.flipY = false;

  // To fix the UV mapping issue, we need to set the minFilter and magFilter to THREE.NearestFilter\
  character1.magFilter = THREE.NearestFilter;
  character1.minFilter = THREE.NearestFilter;

  character2.magFilter = THREE.NearestFilter;
  character2.minFilter = THREE.NearestFilter;

  character3.magFilter = THREE.NearestFilter;
  character3.minFilter = THREE.NearestFilter;

  character4.magFilter = THREE.NearestFilter;
  character4.minFilter = THREE.NearestFilter;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          ref={_mainTexture}
          name="C1_A1"
          position={[-15.77, 0.37, -1.67]}
          rotation={[0, 1.55, 0]}
        >
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            frustumCulled={false}
            name="Caracter_1001"
            geometry={nodes.Caracter_1001.geometry}
            material={nodes.Caracter_1001.material}
            skeleton={nodes.Caracter_1001.skeleton}
          >
            <meshBasicMaterial map={character1} />
          </skinnedMesh>
        </group>
        <group
          ref={_mainTexture}
          name="C2_A2"
          position={[-19.06, 0.41, 1.89]}
          rotation={[Math.PI, -1.56, Math.PI]}
        >
          <primitive object={nodes.mixamorigHips_1} />
          <primitive object={nodes.Ctrl_Master_1} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left_1} />
          <primitive object={nodes.Ctrl_Hand_IK_Left_1} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right_1} />
          <primitive object={nodes.Ctrl_Hand_IK_Right_1} />
          <primitive object={nodes.Ctrl_Foot_IK_Left_1} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left_1} />
          <primitive object={nodes.Ctrl_Foot_IK_Right_1} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right_1} />
          <skinnedMesh
            frustumCulled={false}
            name="Character_2"
            geometry={nodes.Character_2.geometry}
            material={nodes.Character_2.material}
            skeleton={nodes.Character_2.skeleton}
          >
            <meshBasicMaterial map={character2} />
          </skinnedMesh>
          <skinnedMesh
            frustumCulled={false}
            name="Character_2002"
            geometry={nodes.Character_2002.geometry}
            material={nodes.Character_2002.material}
            skeleton={nodes.Character_2002.skeleton}
          >
            <meshBasicMaterial map={character2_oculus} />
          </skinnedMesh>
        </group>
        <group
          ref={_mainTexture}
          name="C3_A3"
          position={[-2.28, 0.4, 7]}
          rotation={[0, 1.15, 0]}
        >
          <primitive object={nodes.mixamorigHips_2} />
          <primitive object={nodes.Ctrl_Master_2} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left_2} />
          <primitive object={nodes.Ctrl_Hand_IK_Left_2} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right_2} />
          <primitive object={nodes.Ctrl_Hand_IK_Right_2} />
          <primitive object={nodes.Ctrl_Foot_IK_Left_2} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left_2} />
          <primitive object={nodes.Ctrl_Foot_IK_Right_2} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right_2} />
          <skinnedMesh
            frustumCulled={false}
            name="Character_3"
            geometry={nodes.Character_3.geometry}
            material={nodes.Character_3.material}
            skeleton={nodes.Character_3.skeleton}
          >
            <meshBasicMaterial map={character3} />
          </skinnedMesh>
        </group>
        <group
          ref={_mainTexture}
          name="C4_A4"
          position={[-29.05, 0, -8.79]}
          rotation={[Math.PI, -1.16, Math.PI]}
        >
          <primitive object={nodes.mixamorigHips_3} />
          <primitive object={nodes.Ctrl_Master_3} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left_3} />
          <primitive object={nodes.Ctrl_Hand_IK_Left_3} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right_3} />
          <primitive object={nodes.Ctrl_Hand_IK_Right_3} />
          <primitive object={nodes.Ctrl_Foot_IK_Left_3} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left_3} />
          <primitive object={nodes.Ctrl_Foot_IK_Right_3} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right_3} />
          <skinnedMesh
            frustumCulled={false}
            name="Character_4"
            geometry={nodes.Character_4.geometry}
            material={nodes.Character_4.material}
            skeleton={nodes.Character_4.skeleton}
          >
            <meshBasicMaterial map={character4} />
          </skinnedMesh>
        </group>
        <mesh
          name="Music_Node"
          geometry={nodes.Music_Node.geometry}
          material={nodes.Music_Node.material}
          position={[-15.1, 3.16, -1.46]}
          rotation={[0, 1.3, 0.16]}
          scale={0.03}
        />
        <mesh
          name="Mouse"
          geometry={nodes.Mouse.geometry}
          material={nodes.Mouse.material}
          position={[-15.32, 1.94, 2.16]}
          rotation={[0, -0.35, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Character_Without_Textures.glb");