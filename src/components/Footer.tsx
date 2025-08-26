import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com/Timi-T" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/opeyemi-ogunbode/" },
    { name: "Email", icon: Mail, url: "mailto:ogunbodetimi@gmail.com" },
  ];

  return (
    <footer className="w-full backdrop-blur py-6 mt-14">
      <div className="footer-container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Socials */}
        <div className="flex gap-6">
          {socials.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 hover:text-cyan-400 transition-colors
                         transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm text-gray-400">
            © {new Date().getFullYear()} Opeyemi Ogunbode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
