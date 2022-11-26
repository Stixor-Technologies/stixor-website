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
import { OrbitControls, PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader, GLTFParser } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationClip, Object3D } from "three";

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
  useThree(({ camera }) => {
    camera.rotation.set(
      -0.3441908820057993,
      -0.6327997125518625,
      -0.20890163368277725
    );
    camera.position.set(-25, 7, 9);
    // rotation: [
    //   -0.2575211098425761, -0.6993627995594188, -0.16794164379609947,
    // ],
  });
  useFrame(({ camera }) => {
    console.log("camera", camera.position);
    console.log("rot", camera.rotation);
  });
  return null;
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

// function Office() {
//   const glb = useLoader(GLTFLoader, "/assets/models/final_amimation.glb");

//   glb.scene.traverse(function (object) {
//     object.frustumCulled = false;
//   });

//   let mixer: THREE.AnimationMixer;
//   if (glb.animations.length) {
//     mixer = new THREE.AnimationMixer(glb.scene);
//     glb.animations.forEach((clip) => {
//       const action = mixer.clipAction(clip);
//       action.play();
//     });
//   }

//   useFrame((state, delta) => {
//     mixer?.update(delta);
//   });

//   useEffect(() => {
//     const action = mixer.clipAction(glb.animations[1]);
//     action.play();
//   });

//   return (
//     <Suspense fallback={null}>
//       <primitive object={glb.scene} />
//     </Suspense>
//   );
// }

// function ModelComponent() {
//   const loader = new GLTFLoader();
//   const actions: actions = useRef();
//   const group: group = useRef();

//   const [animations, setAnimations] = useState<AnimationClip[] | null>(null);
//   const [mixer] = useState(() => new THREE.AnimationMixer(null));
//   const [model, setModel] = useState();

//   loader.load("/assets/models/final_amimation.glb", async function (gltf) {
//     let gltfModel = gltf.scene;
//     const animation = await gltf.parser.getDependencies("animation");
//     setAnimations(animation);
//     gltfModel.traverse(function (obj) {
//       obj.frustumCulled = false;
//     });
//     setModel(gltfModel);
//   });

//   // useEffect(() => {
//   //   if (animations && typeof group.current != "undefined") {
//   //     actions.current = {
//   //       idle: mixer.clipAction(animations[0], group.current as Object3D),
//   //     };
//   //     actions.current.idle.play();
//   //     return () => animations.forEach((clip) => mixer.uncacheClip(clip));
//   //   }
//   // }, [animations]);

//   // useFrame((_, delta) => mixer.update(delta));

//   return model ? <primitive object={model} dispose={null} /> : null;
// }

function Header() {
  const [width, setWidth] = useState<any>();

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  });
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
              zoom: width <= 1200 ? 1.2 : width <= 768 ? 1 : 1.75,
            }}
            style={{ pointerEvents: "none" }}
          >
            <Suspense fallback={null}>
              <Camera />

              <Model />
              {/* <TV /> */}
              {/* <Office /> */}
              {/* <ModelComponent /> */}
            </Suspense>

            <ambientLight intensity={10} color={0x404040} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight
              position={[-13.5, -20.4, 8.7]}
              rotation={[0, 0, deg2rad(-89.3)]}
            />
            {/* <pointLight
              position={[-14, 16.74, 8.7]}
              rotation={[0, 0, deg2rad(-89.3)]}
            /> */}
            {/* <OrbitControls /> */}
          </Canvas>
        </div>
      </div>
    </div>
  );
}
/*
Vector3 {x: -24.23849221661111, y: 6.027796219742688, z: 8.363725423669548}
_x
: 
-0.2575211098425761
_y
: 
-0.6993627995594188
_z
: 
-0.16794164379609947

*/

export default Header;
