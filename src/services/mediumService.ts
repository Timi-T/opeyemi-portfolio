export interface MediumArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  creator: string;
  categories: string[];
  guid: string;
  readTime?: string;
  thumbnail?: string;
}

export class MediumService {
  private static RSS_TO_JSON_API = "https://api.rss2json.com/v1/api.json";

  /**
   * Fetches articles from a Medium user's RSS feed
   * @param username Medium username (e.g., 'yourname')
   * @returns Promise<MediumArticle[]>
   */
  static async fetchArticles(username: string): Promise<MediumArticle[]> {
    try {
      const mediumRssUrl = `https://medium.com/@${username}/feed`;
      const response = await fetch(
        `${this.RSS_TO_JSON_API}?rss_url=${encodeURIComponent(mediumRssUrl)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== "ok") {
        throw new Error(`RSS parsing failed: ${data.message}`);
      }

      return data.items
        .map((item: any) => ({
          title: item.title,
          description: this.stripHtml(item.description),
          link: item.link,
          pubDate: item.pubDate,
          creator: item.creator || data.feed.title,
          categories: item.categories || [],
          guid: item.guid,
          readTime: this.estimateReadTime(item.description),
          thumbnail: this.extractThumbnail(item.description),
        }))
        .filter((item) => item.title !== "Fees manager");
    } catch (error) {
      console.error("Error fetching Medium articles:", error);
      return this.getFallbackArticles();
    }
  }

  /**
   * Strips HTML tags from content
   */
  private static stripHtml(html: string): string {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  /**
   * Estimates reading time based on content length
   */
  private static estimateReadTime(content: string): string {
    const text = this.stripHtml(content);
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  /**
   * Extracts thumbnail image from article content
   */
  private static extractThumbnail(content: string): string | undefined {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : undefined;
  }

  /**
   * Returns fallback articles when API fails
   */
  private static getFallbackArticles(): MediumArticle[] {
    return [];
  }
}
