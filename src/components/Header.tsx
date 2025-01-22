import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed w-full top-0 z-50 bg-[#1E293B]/80 backdrop-blur-md border-b border-[#8B5CF6]/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')}
          className="relative group cursor-pointer"
        >
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] animate-background-shine bg-[length:400%_100%]">
            New Covenant Home Services
          </div>
          <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }} 
              className="text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              Services
            </a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-[#8B5CF6] transition-colors">Why Us</a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/booking');
              }}  
              className="text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button 
            onClick={() => navigate('/booking')}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white backdrop-blur-sm flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </Button>
        </div>
      </div>
    </header>
  );
};