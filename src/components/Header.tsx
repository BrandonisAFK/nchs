
import { Sparkles, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full top-0 z-50 bg-gradient-to-r from-epic-dark via-epic-slate to-epic-dark border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 relative group cursor-pointer"
        >
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
            <Sparkles className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-white tracking-tight">
              New Covenant Home Services
            </div>
            <div className="text-sm text-primary/80 font-medium">
              Professional • Reliable • Trusted
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors group bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:border-primary/30">
            <Phone className="w-5 h-5 text-primary group-hover:animate-bounce" />
            <a href="tel:615-390-3994" className="font-semibold">
              615-390-3994
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
