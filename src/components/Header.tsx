import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-neutral-dark">
          New Covenant Home Services
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-neutral hover:text-primary transition-colors">Services</a>
            <a href="#why-choose-us" className="text-neutral hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="text-neutral hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary-dark text-white flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </Button>
        </div>
      </div>
    </header>
  );
};