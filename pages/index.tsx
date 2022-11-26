import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  OrbitControls,
  SpotLight,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { Model } from "../components/office/Final_animation";
import { TableModel } from "../components/office/Table";
import { BoxHelper, PointLightHelper, SpotLightHelper } from "three";

function Box(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Office() {
  const glb = useLoader(GLTFLoader, "/assets/final_animation.glb");

  glb.scene.traverse(function (object) {
    object.frustumCulled = false;
  });

  let mixer: THREE.AnimationMixer;
  if (glb.animations.length) {
    mixer = new THREE.AnimationMixer(glb.scene);
    glb.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  useEffect(() => {
    const action = mixer.clipAction(glb.animations[1]);
    action.play();
  });

  return (
    <Suspense fallback={null}>
      <primitive object={glb.scene} />
    </Suspense>
  );
}

const Lighting = () => {
  const light = useRef(null);
  useHelper(light, PointLightHelper, 1, "red");

  return (
    <TransformControls
      position={[-14.5, 7.6, 1.2]}
      onObjectChange={(e) => {
        console.log(e?.target.worldPosition);
      }}
    >
      <pointLight ref={light} />
    </TransformControls>
  );
};

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
      >
        <Suspense fallback={null}>
          <Model />
          {/* <Office /> */}
          {/* <TableModel /> */}
        </Suspense>
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport />
        </GizmoHelper>
        <OrbitControls makeDefault />
        <Lighting />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
