import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Opeyemi from "@/images/ope.jpg";
import { Link } from "react-router-dom";

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
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"
            style={{
              width: `${Math.random() * 100 + 60}px`,
              height: `${Math.random() * 100 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 0.005}px, ${
                mousePosition.y * 0.005
              }px)`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating elements for more life */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-8 h-8 bg-cyan-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-10 h-10 bg-blue-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto w-full">
        <div
          className="transform transition-transform duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${
              mousePosition.y * 0.02
            }deg) rotateY(${mousePosition.x * 0.02}deg)`,
          }}
        >
          {/* Profile Picture with Enhanced Animated Gradient Border */}
          {/* <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative p-1">
             
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-400 via-blue-500 to-purple-500 animate-spin bg-[length:400%_400%]"
                style={{
                  animationDuration: "4s",
                  background:
                    "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
                  backgroundSize: "400% 400%",
                }}
              ></div>
              
              <div className="relative bg-gray-900 rounded-full p-1">
                <Avatar className="w-32 h-32 ring-4 ring-white/10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl font-bold">
                    AL
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div> */}

          <div className="w-full flex items-center justify-center text-5xl md:text-[250px] font-rebond font-bold mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center animate-fade-in">
              <div className="relative p-1">
                {/* Enhanced animated gradient border */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-400 via-blue-500 to-purple-500 animate-spin bg-[length:400%_400%]"
                  style={{
                    animationDuration: "4s",
                    background:
                      "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6, #8b5cf6, #ffffff)",
                    backgroundSize: "400% 400%",
                  }}
                ></div>
                {/* Inner container for profile picture */}
                <div className="relative bg-gray-900 rounded-full p-1">
                  <Avatar className="w-40 h-40 ring-4 ring-white/10">
                    <AvatarImage
                      src={Opeyemi}
                      alt="Profile"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl font-bold">
                      AL
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PEYEMI
            </h1>
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 mt-12 text-gray-200 animate-fade-in hover:text-cyan-300 transition-colors duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            Frontend Engineer
          </h2>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            I turn code into beautiful, interactive web experiences ☕✨
            <br />
            <span className="text-lg text-gray-400 hover:text-purple-300 transition-colors duration-300">
              ~4 years of building digital magic, one pixel at a time
            </span>
          </p>
          <div
            className="space-x-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to={"/projects"}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transform transition-all duration-300"
            >
              Check Out My Work 🚀
            </Link>
            <Link
              to={"/blogs"}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/30 hover:scale-105 hover:border-cyan-400 transform transition-all duration-300"
            >
              Read blog posts 📖
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-full">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
