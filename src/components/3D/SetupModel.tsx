import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

export const SetupModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF("/models/setup.glb");
  const screen1Texture = useLoader(THREE.TextureLoader, "/images/vscode.png");
  const screen2Texture = useLoader(
    THREE.TextureLoader,
    "/images/portfolio-screen.png"
  );

  const screen1Material = new THREE.MeshStandardMaterial({
    map: screen1Texture,
  });
  const screen2Material = new THREE.MeshStandardMaterial({
    map: screen2Texture,
  });

  screen1Material.side = THREE.DoubleSide;
  screen2Material.side = THREE.DoubleSide;

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && groupRef.current.rotation.y > -0.2) {
      groupRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.349}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.003, 2.671, -2.527]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.506}
          >
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[-0.766, 2.587, -0.992]}
            rotation={[Math.PI / 2, 0, 0.153]}
            scale={1.552}
          >
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.plastic}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              /* material={materials.screen} */
              material={screen2Material}
            />
          </group>
          <group
            position={[-0.567, 2.587, 1.437]}
            rotation={[Math.PI / 2, 0, -0.324]}
            scale={1.552}
          >
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.plastic}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={screen1Material}
            />
          </group>
          <group
            position={[2.387, 0, -0.364]}
            rotation={[Math.PI / 2, 0, 2.27]}
            scale={0.82}
          >
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              geometry={nodes.Object_29.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.002"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials["Material.006"]}
            position={[-0.766, 2.587, -0.992]}
            rotation={[Math.PI / 2, 0, 0.153]}
            scale={1.552}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["Material.006"]}
            position={[-0.567, 2.587, 1.437]}
            rotation={[Math.PI / 2, 0, -0.324]}
            scale={1.552}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["Material.007"]}
            position={[0.528, 2.599, 0.413]}
            rotation={[Math.PI / 2, 0, -1.607]}
            scale={0.782}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials["Material.008"]}
            position={[0.527, 2.609, -1.063]}
            rotation={[Math.PI / 2, 0, -1.405]}
            scale={0.187}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Material}
            position={[0.457, 2.595, 0]}
            scale={[0.582, 1, 1.832]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/setup.glb");
