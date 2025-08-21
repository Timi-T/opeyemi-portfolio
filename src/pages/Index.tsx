import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BlogSection } from "@/components/blog/BlogSection";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeatureCards from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Spinner } from "@/components/Spinner";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const Index = () => {
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWebsite(true);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-br from-black via-cyan-950/50 to-black">
      <NavBar />
      <Hero />
      <AnimatedCounter />

      {/* <ShowcaseSection /> */}

      <Experience />
      <BlogSection mediumUsername="ogunbodetimi" />
      {/* <FeatureCards /> */}
      <Contact />
      <Footer />
      {!showWebsite ? (
        <div className="w-screen h-screen fixed top-0 z-[999999] bg-black flex items-center justify-center">
          <div className="w-[70px] h-[70px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} />
              <Spinner />
            </Canvas>
          </div>
          <p className="text-xl">Loading up magic...</p>
        </div>
      ) : null}
    </div>
  );
};

export default Index;
