
import { useState } from "react";
import { Code2, Link } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based shopping platform with real-time inventory and payment integration.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Portfolio Website",
      description: "Interactive 3D portfolio showcasing modern web development techniques and animations.",
      tech: ["React", "Three.js", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                perspective: "1000px",
                transform: hoveredProject === index 
                  ? "rotateY(5deg) rotateX(5deg) scale(1.05)" 
                  : "rotateY(0deg) rotateX(0deg) scale(1)"
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-colors duration-300">
                    <Code2 className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-purple-500 hover:bg-purple-500/20 rounded-lg text-white text-sm font-medium transition-colors duration-300">
                    <Link className="w-4 h-4" />
                    <span>Live</span>
                  </button>
                </div>
              </div>

              {/* 3D Hover Effect Overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none animate-fade-in"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
