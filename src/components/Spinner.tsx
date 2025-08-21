import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Spinner() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      //meshRef.current.rotation.x += 0.08; // faster rotation
      meshRef.current.rotation.y += 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial color="#00ffff" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}
