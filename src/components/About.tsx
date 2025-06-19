
const About = () => {
  return (
    <section className="py-20 px-6 relative bg-gray-900/50">
      {/* Add some floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Frontend Specialist</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                With 3 years of experience in modern web development, I specialize in creating 
                responsive, interactive, and performant user interfaces using React, TypeScript, 
                and cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">Design & Innovation</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I bridge the gap between design and development, creating pixel-perfect 
                implementations with smooth animations and intuitive user experiences that 
                engage and delight users.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-6 hover:text-purple-300 transition-colors duration-300">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React", color: "hover:bg-blue-500/20 hover:text-blue-300" },
                  { name: "TypeScript", color: "hover:bg-blue-600/20 hover:text-blue-400" },
                  { name: "Next.js", color: "hover:bg-gray-500/20 hover:text-gray-300" },
                  { name: "Tailwind CSS", color: "hover:bg-cyan-500/20 hover:text-cyan-300" },
                  { name: "Three.js", color: "hover:bg-green-500/20 hover:text-green-300" },
                  { name: "Framer Motion", color: "hover:bg-pink-500/20 hover:text-pink-300" },
                  { name: "Node.js", color: "hover:bg-green-600/20 hover:text-green-400" },
                  { name: "GraphQL", color: "hover:bg-purple-500/20 hover:text-purple-300" }
                ].map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`bg-white/5 rounded-lg p-3 text-center text-white font-medium transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-white/20 ${tech.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
