
import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/logo";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full top-0 z-50 bg-white border-b border-neutral-light/20 shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Company Name */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <Logo className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              New Covenant Home Services
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Professional Property Maintenance
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Greater Pensacola Area</span>
          </div>
          
          <a 
            href="tel:615-390-3994"
            className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl transition-colors shadow-card font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>615-390-3994</span>
          </a>
        </div>

        {/* Mobile Contact */}
        <div className="lg:hidden">
          <a 
            href="tel:615-390-3994"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors shadow-card font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
};
