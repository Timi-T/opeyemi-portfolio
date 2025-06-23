import { browserRequestContent } from "./browser-request";
import { incidentReportBlog } from "./incident-report";

export const blogPosts = {
  "1": {
    id: "2",
    title: "AlX Student server outage incident report.",
    excerpt:
      "Incident report on server outage. This demonstrates steps taken from issue detection to reolution",
    date: "April 30 2022.",
    readTime: "3 min read",
    category: "PostMortem",
    gradient: "from-blue-500 to-cyan-500",
    content: incidentReportBlog,
  },
  "2": {
    title:
      "What happens when you enter “https//:www.google.com” in your browser?",
    content: browserRequestContent,
    date: "Apr 2, 2022",
    excerpt:
      "Technical indepth of a browser request, from the DNS resolution to a server response.",
    readTime: "8 min read",
    category: "https",
    gradient: "from-purple-500 to-blue-500",
    id: 1,
  },
  /* "3": {
    id: "3",
    title: "TypeScript Best Practices for Large Scale Applications",
    excerpt:
      "Discover essential TypeScript patterns and practices for building maintainable enterprise applications.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "TypeScript",
    gradient: "from-green-500 to-teal-500",
    content: ''
  }, */
};
