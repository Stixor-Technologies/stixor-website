import React, { Suspense, useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import styles from "./header.module.css";
import { HeaderNewModel } from "./Header_newModel";
import { CharacterModel } from "./character/CharactersModel";
import vectorImage from "../../../public/assets/homepage_assets/header_bg_vector.png";
import {
  Canvas,
  useFrame,
  ThreeElements,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  PresentationControls,
  TransformControls,
  useHelper,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader, GLTFParser } from "three/examples/jsm/loaders/GLTFLoader";
import {
  AnimationClip,
  Object3D,
  PlaneGeometry,
  PointLight,
  PointLightHelper,
} from "three";

const deg2rad = (degrees: any) => degrees * (Math.PI / 180);

const ScreenContent = (props: any) => {
  const transform = useRef(null);

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
    <>
      {/* <TransformControls
        mode="rotate"
        object={transform}
        onObjectChange={(e) => {
          console.log(e?.target.object);
        }}
      /> */}
      <group
        ref={transform}
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}
      >
        <mesh>
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </group>
    </>
  );
};
const CarpetTexture = (props: any) => {
  const _carpetTexture = useRef(null);

  const texture = useTexture("/images/carpet.jpg");

  return (
    <>
      <TransformControls
        mode="translate"
        object={_carpetTexture}
        onObjectChange={(e) => {
          console.log(e?.target.object);
        }}
      />
      <group
        ref={_carpetTexture}
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}
      >
        <mesh>
          <planeGeometry args={[3.2, 1.9]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </>
  );
};

const Camera = () => {
  const [width, setWidth] = useState<any>();

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  useThree(({ camera }) => {
    camera.rotation.set(-0.359, -0.571, -0.2);
    camera.position.set(-23.625, 7.45, 9.85);
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      100,
      35000
    );
  });
  useFrame(({ camera }) => {
    // console.log("camera", camera.position);
    // console.log("rot", camera.rotation);
  });
  return null;
};

const Lights = () => {
  const light = useRef(null);
  // useHelper(light, PointLightHelper, 1, "red");

  return (
    <>
      {/* <TransformControls
        object={light}
        mode="translate"
        onObjectChange={(e) => {
          console.log(e?.target.worldPosition);
        }}
      /> */}
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
      <div className={styles.header_background}>
        <img className={styles.vector_image} src={vectorImage.src}></img>
      </div>

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
            className={styles.canvas}
            camera={{
              near: 0.1,
              far: 10000,
              zoom: 1.6,
            }}
            // style={{ pointerEvents: "none" }}
          >
            {/* <OrbitControls target={[-10, 0, -10]} makeDefault /> */}
            <Camera />
            <ScreenContent
              position={[-14.02, 2.56, 1.53]}
              rotation={[-2.726, -1.177, -2.7424]}
              scale={[0.55, 0.5, 1]}
            />
            <ScreenContent
              position={[-13.86, 2.57, -1.93]}
              rotation={[-1.61, -1.398, -1.612]}
              scale={[0.56, 0.5, 1]}
            />

            {/* <CarpetTexture /> */}

            <Suspense fallback={null}>
              <CharacterModel />
              <HeaderNewModel />
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
