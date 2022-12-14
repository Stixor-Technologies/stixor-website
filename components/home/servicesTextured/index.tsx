import React, { Suspense, useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import styles from "./services.module.css";
import {
  Canvas,
  useFrame,
  ThreeElements,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  TransformControls,
  useHelper,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader, GLTFParser } from "three/examples/jsm/loaders/GLTFLoader";
import {
  AmbientLight,
  AnimationClip,
  AxesHelper,
  Object3D,
  PlaneGeometry,
  PlaneHelper,
  PointLight,
  PointLightHelper,
} from "three";
import { positions, style } from "@mui/system";
import { ServicesNew } from "./ServicesNew";
import { Model } from "./servicesModel";

// const Camera = () => {
//   const [width, setWidth] = useState<any>();

//   useEffect(() => {
//     if (window !== undefined) {
//       setWidth(window.innerWidth);
//     }
//   }, [width]);

//   useThree(({ camera }) => {
//     camera.position.set(5.99, 1.21, -0.008);
//     // camera.position.set(-23.625, 7.45, 9.85);
//   });
//   useFrame(({ camera }) => {
//     // console.log("camera", camera.position);
//     // console.log("rot", camera.rotation);
//   });
//   return null;
// };

const Lights = () => {
  const light = useRef(null);
  useHelper(light, PointLight, 1, "red");

  return (
    <>
      <TransformControls
        object={light}
        mode="translate"
        onObjectChange={(e) => {
          console.log(e?.target.worldPosition);
        }}
      />
      <ambientLight intensity={10} color={0x404040} />
      <pointLight ref={light} position={[12.5, 5, 8.7]} />
    </>
  );
};

function Services() {
  return (
    <div className={styles.wrapper}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className={styles.canvas}
      >
        <OrbitControls target={[0, 0, 0]} makeDefault />

        {/* <Camera /> */}
        <Lights />
        <Suspense fallback={null}>
          <ServicesNew />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Services;
