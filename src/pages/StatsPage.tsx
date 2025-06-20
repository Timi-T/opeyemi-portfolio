
const StatsPage = () => {
  const stats = [
    { label: "Projects Completed", value: "25+", color: "from-purple-500 to-pink-500" },
    { label: "Years of Experience", value: "3", color: "from-blue-500 to-cyan-500" },
    { label: "Technologies Mastered", value: "12", color: "from-green-500 to-teal-500" },
    { label: "Coffee Cups", value: "∞", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            My Stats
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <p className="text-gray-300 mt-4 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skill Levels
          </h2>
          <div className="space-y-6">
            {[
              { skill: "React", level: 95 },
              { skill: "TypeScript", level: 90 },
              { skill: "CSS/Tailwind", level: 92 },
              { skill: "JavaScript", level: 88 },
              { skill: "Three.js", level: 75 },
              { skill: "Node.js", level: 80 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-purple-300">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
