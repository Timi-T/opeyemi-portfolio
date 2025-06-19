
const About = () => {
  return (
    <section className="py-20 px-6 relative bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend Specialist</h3>
              <p className="text-gray-300 leading-relaxed">
                With 3 years of experience in modern web development, I specialize in creating 
                responsive, interactive, and performant user interfaces using React, TypeScript, 
                and cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Design & Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                I bridge the gap between design and development, creating pixel-perfect 
                implementations with smooth animations and intuitive user experiences that 
                engage and delight users.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React", "TypeScript", "Next.js", "Tailwind CSS",
                  "Three.js", "Framer Motion", "Node.js", "GraphQL"
                ].map((tech, index) => (
                  <div 
                    key={tech}
                    className="bg-white/5 rounded-lg p-3 text-center text-white font-medium hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
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
