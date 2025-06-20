
const CVPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Curriculum Vitae
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Experience Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Senior Frontend Engineer</h3>
                <p className="text-purple-300">Tech Company • 2022 - Present</p>
                <p className="text-gray-300 mt-2">Leading frontend development for modern web applications using React, TypeScript, and cutting-edge technologies.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                <p className="text-blue-300">Startup Inc • 2021 - 2022</p>
                <p className="text-gray-300 mt-2">Developed responsive web applications and collaborated with design teams to create exceptional user experiences.</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="border-l-2 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Bachelor of Computer Science</h3>
              <p className="text-cyan-300">University of Technology • 2017 - 2021</p>
              <p className="text-gray-300 mt-2">Graduated with honors, specialized in web development and software engineering.</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Node.js",
                "GraphQL", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git"
              ].map((skill) => (
                <div key={skill} className="bg-white/5 rounded-lg p-3 text-center text-white font-medium hover:bg-white/10 transition-colors duration-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
