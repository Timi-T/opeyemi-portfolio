import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BlogSection } from "@/components/blog/BlogSection";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero2 } from "@/components/Hero2";
import { Projects } from "@/components/Projects";

const Index = () => {

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-br from-black via-cyan-950/50 to-black">
      <Hero2 />
      <AnimatedCounter />
      <Projects />
      <Experience />
      <BlogSection mediumUsername="ogunbodetimi" />
      <Contact />
      <Footer />

    </div>
  );
};

export default Index;
