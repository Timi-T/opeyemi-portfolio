import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MediumArticle } from "@/services/mediumService";

interface BlogCardProps {
  article: MediumArticle;
  index: number;
}

export const BlogCard = ({ article, index }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleClick = () => {
    window.open(article.link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="group relative bg-zinc-900 rounded-xl p-6 
                 transition-all duration-300 border border-gray-700 hover:border-cyan-700
                 hover:shadow-hover cursor-pointer animate-fade-in transition-all ease-in-out duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 
                      group-hover:opacity-10 transition-opacity duration-300"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className="h-24 text-xl font-bold text-foreground mb-2 
                         group-hover:text-primary transition-colors duration-300 
                         line- clamp-2"
            >
              {article.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(article.pubDate)}</span>
              </div>
              {article.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              )}
            </div>
          </div>

          <ArrowUpRight
            className="h-5 w-5 text-muted-foreground 
                                  group-hover:text-primary group-hover:scale-110 
                                  transition-all duration-300"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {article.categories.slice(0, 2).map((category, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-xs bg-gray-800 text-gray-300"
              >
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </Badge>
            ))}
            {article.categories.length > 2 && (
              <Badge
                variant="secondary"
                className="text-xs bg-gray-800 text-gray-300"
              >
                +{article.categories.length - 2}
              </Badge>
            )}
          </div>

          <div className="text-xs text-muted-foreground">{article.creator}</div>
        </div>
      </div>

      {/* Gradient border effect on hover */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 
                      group-hover:opacity-20 transition-opacity duration-300 
                      pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent, hsl(204 100% 60% / 0.1), transparent)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
        }}
      />
    </article>
  );
};
