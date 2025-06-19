
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg opacity-30 animate-bounce"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full opacity-40"
          style={{
            transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.15}deg) rotateY(${-mousePosition.x * 0.15}deg) translateZ(50px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 transform rotate-45 opacity-35"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg) rotate(45deg)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div
          className="transform transition-transform duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        >
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <Avatar className="w-32 h-32 ring-4 ring-purple-500/50 ring-offset-4 ring-offset-transparent">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Hey, I'm Alex! 👋
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-200 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Frontend Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            I turn coffee into beautiful, interactive web experiences ☕✨<br />
            <span className="text-lg text-gray-400">3 years of building digital magic, one pixel at a time</span>
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Check Out My Work 🚀
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transform transition-all duration-300">
              Read My Stories 📖
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
