import React, { Suspense, useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import styles from "./header.module.css";
import { Model } from "./headerModel";
import {
  Canvas,
  useFrame,
  ThreeElements,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader, GLTFParser } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationClip, Object3D, PointLight, PointLightHelper } from "three";

const deg2rad = (degrees: any) => degrees * (Math.PI / 180);

const TV = () => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/videoPortfolio.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group rotation={[Math.PI / 8, Math.PI * 1.2, 0]}>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

const Camera = () => {
  const [width, setWidth] = useState<any>();

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  });

  useThree(({ camera }) => {
    camera.rotation.set(
      -0.3441908820057993,
      -0.6327997125518625,
      -0.20890163368277725
    );
    camera.position.set(-25, 7, 9);
    // camera.zoom = width <= 1200 ? 1.2 : width <= 768 ? 1 : 1.75;
  });
  // useFrame(({ camera }) => {
  //   console.log("camera", camera.position);
  //   console.log("rot", camera.rotation);
  // });
  return null;
};

const Lights = () => {
  const light = useRef(null);
  useHelper(light, PointLightHelper, 1, "red");

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
      <pointLight ref={light} position={[-12.5, 5, 2.7]} />
    </>
  );
};

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}
interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_left}>
          <h1>
            Stixor
            <br /> Technologies
          </h1>
          <p>
            We come up with creative solutions using <br />
            the latest technology
          </p>
          <button className={styles.btn}>Explore</button>
        </div>
        <div className={styles.header_right}>
          <Canvas
            camera={{
              near: 0.1,
              far: 10000,
            }}
            // style={{ pointerEvents: "none" }}
          >
            <OrbitControls target={[-10, 0, -10]} makeDefault />
            <Camera />
            <Suspense fallback={null}>
              <Model />
              {/* <TV /> */}
              {/* <Office /> */}
              {/* <ModelComponent /> */}
            </Suspense>
            <Lights />

            {/* <pointLight
              position={[-14, 16.74, 8.7]}
              rotation={[0, 0, deg2rad(-89.3)]}
            /> */}
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
