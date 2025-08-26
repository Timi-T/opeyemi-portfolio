import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MediumArticle } from "@/services/mediumService";
import { motion } from "framer-motion";

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
    <motion.article
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative cursor-pointer rounded-2xl p-6 
                 bg-white/10 backdrop-blur-md 
                 border border-cyan-500/30 hover:border-cyan-400 
                 shadow-lg hover:shadow-cyan-500/20
                 transition-all duration-300"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className="text-lg xl:text-xl font-semibold text-white mb-2 
                         relative group-hover:text-cyan-300 transition-colors duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-0.5 after:bg-cyan-400 
                         group-hover:after:w-full after:transition-all after:duration-500"
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
            className="h-6 w-6 text-gray-400 
                       group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                       transform group-hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {article.categories.slice(0, 2).map((category, idx) => (
              <Badge
                key={idx}
                className="text-xs bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-2 py-1"
              >
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </Badge>
            ))}
            {article.categories.length > 2 && (
              <Badge
                className="text-xs bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-2 py-1"
              >
                +{article.categories.length - 2}
              </Badge>
            )}
          </div>

          <div className="text-[11px] text-gray-400 italic">{article.creator}</div>
        </div>
      </div>
    </motion.article>
  );
};
