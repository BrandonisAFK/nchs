import { Sparkles, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 relative group cursor-pointer"
        >
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#22C55E] animate-pulse" />
          <div className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#22C55E] animate-background-shine bg-[length:400%_100%]">
            New Covenant Home Services
          </div>
          <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="tel:615-390-3994"
            className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors group"
          >
            <Phone className="w-5 h-5 text-primary group-hover:animate-bounce" />
            <span className="font-medium">615-390-3994</span>
          </a>
          <button
            onClick={() => navigate('/booking')}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};