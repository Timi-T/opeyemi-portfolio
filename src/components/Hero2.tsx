import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slideWords } from "@/config";
import { NavBar2 } from "./NavBar2";

export const Hero2 = ({
  imageUrl = "/images/portrait.jpeg",
  headline = "Opeyemi",
  ctaLabel = "Get in touch",
  onCta = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },
}: {
  imageUrl?: string;
  headline?: string;
  subhead?: string;
  ctaLabel?: string;
  onCta?: () => void;
}) => {
  return (
    <section
      className="relative flex h-screen w-full overflow-hidden bg-[url(/images/portrait.jpeg)]
                 bg-cover bg-top xl:bg-none"
    >
      {/* Left side image (only visible on xl and above) */}
      <div className="hidden xl:block relative w-1/2 h-full flex-shrink-0">
        <img
          src={imageUrl}
          alt="Portrait side"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Right side content */}
      <div className="relative flex flex-1 items-end xl:items-center justify-center bg-red-500 px-4 sm:px-6 md:px-8 2xl:px-12 pb-12 xl:pb-0 bg-black/60 xl:bg-transparent">
        <NavBar2 />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
        >
          <h1 className="text-6xl xl:text-8xl font-semibold tracking-tight uppercase text-center xl:text-left">
            {headline}
          </h1>

          <header className="flex flex-col justify-end w-full px-2 sm:px-5 mt-3 md:mt-10">
            <div className="flex flex-col gap-4 sm:gap-6 items-center xl:items-start pt-8 md:pt-0">
              <div className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-medium flex flex-col items-center xl:items-start">
                <h2 className="overflow-hidden flex flex-wrap justify-center xl:justify-start gap-2 py-1 title-1 text-center xl:text-start">
                  <span className="hidden md:block">Frontend Engineer&nbsp;</span> <span className="capitalize md:lowercase">delivering</span>
                  <span className="text-slide h-5 sm:h-7 md:h-10 xl:h-8">
                    <span className="wrapper">
                      {slideWords.map((word) => (
                        <span
                          key={word.title}
                          className="flex items-center gap-1 sm:gap-2 md:gap-3 pb-2"
                        >
                          <span className="font-rebond text-cyan-300">
                            {word.title}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h2>
                <h2 className="py-1 title-2 text-center xl:text-start">
                  solutions engineered for complexity
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-neutral-300 text-center xl:text-left xl:my-0">
                With ~4 years of experience creating pixel-perfect interfaces for the web.
                <span className="text-base sm:text-lg md:text-2xl">🎨</span>
              </p>
            </div>
          </header>

          <div className="mt-6 md:mt-8 flex flex-row items-center justify-center xl:justify-start gap-3 sm:gap-4">
            <button
              onClick={onCta}
              className="inline-flex items-center gap-2 rounded-xl sm:rounded-2xl bg-gray-800 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="/blog"
              className="text-sm sm:text-base text-cyan-400 underline-offset-4 hover:text-cyan-600 hover:underline"
            >
              Blog
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
