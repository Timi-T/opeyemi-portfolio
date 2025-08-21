import { BlogGrid } from "./BlogGrid";

interface BlogSectionProps {
  mediumUsername?: string;
  viewFullPage?: boolean;
}

export const BlogSection = ({
  mediumUsername,
  viewFullPage,
}: BlogSectionProps) => {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">
        <BlogGrid mediumUsername={mediumUsername} viewFullPage={viewFullPage} />
      </div>
    </section>
  );
};
