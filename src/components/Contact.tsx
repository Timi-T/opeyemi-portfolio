
import { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Available for freelance work</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quick response time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Email</span>
                  <div 
                    className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  >
                    →
                  </div>
                </div>
              </button>
              
              <div className="grid grid-cols-3 gap-4">
                {["LinkedIn", "GitHub", "Twitter"].map((platform, index) => (
                  <button
                    key={platform}
                    className="py-3 border-2 border-purple-500 rounded-lg font-semibold text-white hover:bg-purple-500/20 transform transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>© 2024 Frontend Engineer Portfolio. Crafted with passion and modern web technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
