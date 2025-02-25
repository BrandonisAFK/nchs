
import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white/70 py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#22C55E]" />
            <span className="text-lg font-semibold text-white">New Covenant Home Services</span>
          </div>
          
          {/* Contact */}
          <div className="text-sm">
            <a href="tel:615-390-3994" className="hover:text-primary transition-colors">
              615-390-3994
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} New Covenant Home Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
