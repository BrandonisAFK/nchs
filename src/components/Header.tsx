import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative group">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-background-shine bg-[length:400%_100%]">
            New Covenant Home Services
          </div>
          <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm flex items-center gap-2 border border-white/20">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </Button>
        </div>
      </div>
    </header>
  );
};