import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../components/office/Office";
import { TableModel } from "../components/office/Table";

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
  const glb = useLoader(GLTFLoader, "/assets/office.glb");
  console.log(glb?.animations);
  let mixer = new THREE.AnimationMixer(glb.scene);

  useEffect(() => {
    const action = mixer.clipAction(glb.animations[8]);
    action.play();
  });

  useFrame(() => {});

  return (
    <Suspense fallback={null}>
      <primitive object={glb.scene} />
    </Suspense>
  );
}

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
          <Office />
          {/* <TableModel /> */}
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
