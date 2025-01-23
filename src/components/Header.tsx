import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 relative group cursor-pointer"
        >
          <Sparkles className="w-8 h-8 text-[#22C55E] animate-pulse" />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#22C55E] animate-background-shine bg-[length:400%_100%]">
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
              className="text-gray-300 hover:text-[#22C55E] transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/booking');
              }}  
              className="text-gray-300 hover:text-[#22C55E] transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button 
            onClick={() => navigate('/booking')}
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white backdrop-blur-sm flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Book Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};