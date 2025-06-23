import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "CV", path: "/cv" },
    { name: "Stats", path: "/stats" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900 flex items-center justify-between px-10 py-5">
      <Link to={"/"}>
        <HomeIcon className="text-cyan-600" size={30} />
      </Link>
      <div className="absolut top-5 right-5 bg-slate-800 shadow-lg w-max border border-blue-950 py-3 px-5 rounded-2xl">
        <div className="flex items-center gap-5">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-yellow-200 ${
                  isActive(item.path)
                    ? "text-yellow-200 font-semibold"
                    : "text-white"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-300 animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-yellow-200 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-white/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-yellow-200 hover:translate-x-2 ${
                    isActive(item.path)
                      ? "text-yellow-200 bg-white/10 rounded-lg font-semibold"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
