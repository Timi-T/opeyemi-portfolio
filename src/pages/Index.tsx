import { AnimatedCounter } from "@/components/AnimatedCounter";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeatureCards from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ShowcaseSection />

      <Experience />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
