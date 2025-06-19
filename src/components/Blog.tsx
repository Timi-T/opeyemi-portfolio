
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: "1",
      title: "Building Interactive 3D Experiences with React Three Fiber",
      excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and modern web technologies.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: "2",
      title: "Modern CSS Techniques for Better Performance",
      excerpt: "Explore advanced CSS techniques that can significantly improve your website's performance and user experience.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "CSS",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "3",
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt: "Discover essential TypeScript patterns and practices for building maintainable enterprise applications.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "TypeScript",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium group-hover:bg-white/40 transition-colors duration-300">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transform transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
