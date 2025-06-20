
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, Float, Text3D, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, color, geometry }: { position: [number, number, number], color: string, geometry: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const getGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.6, 0.3, 16, 100]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const Scene3DContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Enhanced lighting setup instead of Environment */}
      <ambientLight intensity={0.4} color="#404040" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#06b6d4" />
      
      {/* Floating 3D elements */}
      <FloatingShape position={[-8, 5, -3]} color="#8b5cf6" geometry="box" />
      <FloatingShape position={[8, -3, -5]} color="#06b6d4" geometry="sphere" />
      <FloatingShape position={[-5, -8, -2]} color="#ec4899" geometry="torus" />
      <FloatingShape position={[6, 8, -4]} color="#10b981" geometry="box" />
      <FloatingShape position={[0, 12, -6]} color="#f59e0b" geometry="sphere" />
      <FloatingShape position={[-10, 0, -8]} color="#ef4444" geometry="torus" />
      
      {/* Scroll controls for 3D navigation */}
      <ScrollControls pages={5} damping={0.1}>
        <Scroll>
          {/* 3D content that moves with scroll */}
          <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={[0, 0, 0]}>
              <torusKnotGeometry args={[1, 0.3, 128, 16]} />
              <meshStandardMaterial color="#8b5cf6" wireframe />
            </mesh>
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
            <mesh position={[0, -20, -5]}>
              <icosahedronGeometry args={[2, 1]} />
              <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
            </mesh>
          </Float>
          
          <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh position={[0, -40, -10]}>
              <octahedronGeometry args={[1.5]} />
              <meshStandardMaterial color="#ec4899" />
            </mesh>
          </Float>
        </Scroll>
        
        {/* HTML content that scrolls */}
        <Scroll html style={{ width: '100%' }}>
          <div className="w-full">
            {children}
          </div>
        </Scroll>
      </ScrollControls>
      
      {/* Allow user to rotate the camera */}
      <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
    </>
  );
};

const Scene3D = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <Scene3DContent>{children}</Scene3DContent>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
