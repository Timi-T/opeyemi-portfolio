import { Link } from "react-router-dom";
import { BlogGrid } from "./BlogGrid";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogSectionProps {
  mediumUsername?: string;
  viewFullPage?: boolean;
}

export const BlogSection = ({
  mediumUsername,
  viewFullPage,
}: BlogSectionProps) => {
  return (
    <section id="blog" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <Link to="/" className={viewFullPage ? '' : 'hidden'}>
          <Button variant="ghost" className="mb-16">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <BlogGrid mediumUsername={mediumUsername} viewFullPage={viewFullPage} />
      </div>
    </section>
  );
};
