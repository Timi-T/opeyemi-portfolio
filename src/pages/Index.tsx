
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/90 via-slate-900/90 to-black/90 backdrop-blur-sm relative z-10">
      <div className="min-h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <About />
      </div>
      <div className="min-h-screen">
        <Projects />
      </div>
      <div className="min-h-screen">
        <Blog />
      </div>
      <div className="min-h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
