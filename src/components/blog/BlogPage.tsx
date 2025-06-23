import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

type BlogPost = {
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
};

export const BlogPage = (post: BlogPost) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link
            to={"/"}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <div
        className={`relative py-20 px-6 bg-gradient-to-r ${post.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            to={"/"}
            className="mb-8 flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>

          <div className="mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: "#e5e7eb",
                lineHeight: "1.8",
              }}
            />
          </article>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Enjoyed this article?
              </h3>
              <p className="text-gray-300 mb-6">
                Check out more of my blog posts and projects!
              </p>
              <Link
                to={"/blogs"}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Explore More Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
