import { FileText } from "lucide-react";

export const CVFloatingButton = () => {
  return (
    <a
      href="https://opeyemiogunbode.cv/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-2 py-1.5 sm:px-4 sm:py-2.5 
                 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                 text-white text-sm font-medium shadow-lg hover:shadow-cyan-500/40 
                 transition-all hover:scale-105"
    >
      <FileText size={16} className="text-white" />
      <span>View CV</span>
    </a>
  );
};
