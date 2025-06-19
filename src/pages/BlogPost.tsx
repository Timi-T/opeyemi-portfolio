
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in a real app, this would come from an API
  const blogPosts = {
    "1": {
      title: "Building Interactive 3D Experiences with React Three Fiber",
      content: `
        <h2>Introduction</h2>
        <p>React Three Fiber has revolutionized how we build 3D experiences on the web. In this comprehensive guide, we'll explore how to create stunning 3D web experiences that engage users and push the boundaries of what's possible in a browser.</p>
        
        <h2>Getting Started</h2>
        <p>First, let's set up our project with the necessary dependencies. React Three Fiber provides a declarative way to work with Three.js, making it much more intuitive for React developers.</p>
        
        <h2>Creating Your First 3D Scene</h2>
        <p>We'll start by creating a simple rotating cube and gradually add more complex interactions, lighting, and animations. The key is to understand the relationship between the Canvas, Scene, and Mesh components.</p>
        
        <h2>Advanced Techniques</h2>
        <p>Once you've mastered the basics, we'll dive into advanced topics like physics simulations, post-processing effects, and performance optimization techniques that will make your 3D experiences smooth and responsive.</p>
        
        <h2>Conclusion</h2>
        <p>React Three Fiber opens up a world of possibilities for web developers. With the techniques covered in this guide, you'll be well-equipped to create immersive 3D experiences that captivate your users.</p>
      `,
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React",
      gradient: "from-purple-500 to-blue-500"
    },
    "2": {
      title: "Modern CSS Techniques for Better Performance",
      content: `
        <h2>The Evolution of CSS</h2>
        <p>CSS has come a long way since its inception. Modern CSS techniques not only improve the visual appeal of websites but also significantly enhance performance and user experience.</p>
        
        <h2>CSS Grid and Flexbox Mastery</h2>
        <p>Understanding when and how to use CSS Grid versus Flexbox can dramatically improve your layout performance and maintainability. We'll explore real-world examples and best practices.</p>
        
        <h2>Advanced Selectors and Pseudo-classes</h2>
        <p>Modern CSS selectors provide powerful ways to target elements without relying on JavaScript, reducing bundle sizes and improving performance.</p>
        
        <h2>Performance Optimization</h2>
        <p>Learn about CSS containment, will-change property, and other performance-focused techniques that can make your websites blazingly fast.</p>
      `,
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "CSS",
      gradient: "from-blue-500 to-cyan-500"
    },
    "3": {
      title: "TypeScript Best Practices for Large Scale Applications",
      content: `
        <h2>Why TypeScript Matters</h2>
        <p>As applications grow in complexity, TypeScript becomes invaluable for maintaining code quality and developer productivity. This guide covers enterprise-level best practices.</p>
        
        <h2>Advanced Type Patterns</h2>
        <p>Explore utility types, conditional types, and mapped types that will make your TypeScript code more robust and maintainable.</p>
        
        <h2>Project Structure and Organization</h2>
        <p>Learn how to organize large TypeScript projects with proper module boundaries, dependency management, and build optimization.</p>
        
        <h2>Team Collaboration</h2>
        <p>Discover how to use TypeScript effectively in team environments, including linting rules, code reviews, and documentation strategies.</p>
      `,
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "TypeScript",
      gradient: "from-green-500 to-teal-500"
    }
  };

  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <div className={`relative py-20 px-6 bg-gradient-to-r ${post.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </button>
          
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
                color: '#e5e7eb',
                lineHeight: '1.8'
              }}
            />
          </article>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
              <p className="text-gray-300 mb-6">Check out more of my blog posts and projects!</p>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Explore More Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
