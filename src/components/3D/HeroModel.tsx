import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { SetupModel } from "./SetupModel";
import { HeroLights } from "./HeroLights";

export const HeroModel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [20, 20, 15], fov: 45 }} className="">
      <HeroLights />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={-0.3}
      />

      <SetupModel scale={isMobile ? 1 : 3.5} />
    </Canvas>
  );
};
