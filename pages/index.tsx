import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Navbar from "../components/navbar";
import Header from "../components/home/header";

function CubeBox(props: ThreeElements["mesh"]) {
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
export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Navbar />
      <Header />
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <Stats />
        <OrbitControls /> */}

        <CubeBox position={[-1.2, 0, 0]} />
        <CubeBox position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
