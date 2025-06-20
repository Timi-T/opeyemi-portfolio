
import Blog from "@/components/Blog";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Blog Posts
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default BlogsPage;
