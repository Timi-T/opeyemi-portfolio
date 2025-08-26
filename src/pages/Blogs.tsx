import { BlogSection } from "@/components/blog/BlogSection";
import { NavBar2 } from "@/components/NavBar2";

export const BlogsPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-black via-cyan-950/50 to-black text-white py-32">
      <NavBar2 />
      <BlogSection mediumUsername="ogunbodetimi" viewFullPage />
    </div>
  );
};
