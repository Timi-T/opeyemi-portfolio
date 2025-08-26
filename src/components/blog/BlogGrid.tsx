import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { MediumArticle, MediumService } from "@/services/mediumService";
import { BlogCard } from "./BlogCard";
import { Canvas } from "@react-three/fiber";
import { Spinner } from "../Spinner";
import { TitleHeader } from "../TitleHeader";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface BlogGridProps {
  mediumUsername?: string;
  viewFullPage?: boolean;
}

export const BlogGrid = ({
  mediumUsername = "ogunbodetimi",
  viewFullPage,
}: BlogGridProps) => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUsername] = useState(mediumUsername);

  useEffect(() => {
    loadArticles();
  }, [currentUsername]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          article.categories.some((cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredArticles(filtered);
    }
  }, [searchTerm, articles]);

  const loadArticles = async () => {
    setLoading(true);
    try {
      const fetchedArticles = await MediumService.fetchArticles(
        currentUsername
      );
      setArticles(fetchedArticles);
      setFilteredArticles(fetchedArticles);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={clsx("flex items-center justify-center", viewFullPage ? 'w-screen h-screen fixed top-0 left-0 z-[999999] bg-black' : '')}>
        <div className={clsx(viewFullPage ? '' : 'hidden', "w-[70px] h-[70px]")}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} />
            <Spinner />
          </Canvas>
        </div>
        <p className="text-xl">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className={clsx("space-y-8", viewFullPage ? '' : 'py-8 xl:py-16')}>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <TitleHeader title="✍️ Latest Articles" sub="✍️ Blog Articles" className={viewFullPage ? '' : 'text-neutral-200 mb-16'} />
        <Link
          to="https://medium.com/@ogunbodetimi"
          target="_blank"
          className="text-xs flex items-center gap-2 font-bold text-neutral-200 self-end"
        >
          View all
          <ArrowUpRight
            className="h-4 w-4 text-muted-foreground 
                          group-hover:text-primary group-hover:scale-110 
                          transition-all duration-300"
          />
        </Link>
      </div>

      {viewFullPage ? (
        <>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my thoughts on web development, technology, and software
              engineering.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Articles count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} article
              {filteredArticles.length !== 1 ? "s" : ""} found
            </p>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(`https://medium.com/@${currentUsername}`, "_blank")
              }
              className="gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View on Medium
            </Button>
          </div>
        </>
      ) : null}
      {/* Header */}

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div>
          {viewFullPage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <BlogCard key={article.guid} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles
                .filter((art) =>
                  [
                    "https://medium.com/p/16dc35dce7b6",
                    "https://medium.com/p/26771e1a56fd",
                    "https://medium.com/p/e7418806de5c",
                  ].includes(art.guid)
                )
                .map((article, index) => (
                  <BlogCard
                    key={article.guid}
                    article={article}
                    index={index}
                  />
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            No articles found
          </h3>
          <p className="text-muted-foreground">
            {searchTerm
              ? "Try adjusting your search terms"
              : "No articles available for this user"}
          </p>
        </div>
      )}
    </div>
  );
};
