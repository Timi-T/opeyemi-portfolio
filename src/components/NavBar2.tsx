import clsx from "clsx";
import { FileText, Github, LinkedinIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const NavBar2 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "navbar fixed top-0 z-[99999] flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-md bg-white/50 shadow-sm",
        scrolled ? "scrolled" : "not-scrolled"
      )}
    >
      {/* Logo / Name */}
      <div className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">
        <span className="md:block hidden">Opeyemi Ogunbode</span><span className="flex md:hidden">OO</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://github.com/Timi-T"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1.5 sm:p-2 text-gray-600 transition bg-gray-100 hover:bg-gray-50/70 hover:text-gray-900"
        >
          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
        <a
          href="https://linkedin.com/in/opeyemi-ogunbode"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1.5 sm:p-2 text-gray-600 transition bg-gray-100 hover:bg-gray-50/70 hover:text-gray-900"
        >
          <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
        <a
          href="#contact"
          className="rounded-xl sm:rounded-xl bg-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 ml-3 sm:ml-5"
        >
          Contact
        </a>
        <a
          href="/quote"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-xl border border-gray-300 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
        >
          <FileText className="h-4 w-4" />
          Get a Quote
        </a>
      </div>
    </header>
  );
};
