export const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.2} color={"#ffffff"} />
      {/* <directionalLight intensity={0.2} position={[5, 5, 5]} /> */}
      <spotLight
        position={[-10, 50, 10]}
        intensity={0.5}
        color={"#ffe0b2"}
        angle={45}
      />
    </>
  );
};
