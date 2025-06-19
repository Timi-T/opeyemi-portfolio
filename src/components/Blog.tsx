
const Blog = () => {
  const blogPosts = [
    {
      title: "Building Interactive 3D Experiences with React Three Fiber",
      excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and modern web technologies.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Modern CSS Techniques for Better Performance",
      excerpt: "Explore advanced CSS techniques that can significantly improve your website's performance and user experience.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "CSS",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
