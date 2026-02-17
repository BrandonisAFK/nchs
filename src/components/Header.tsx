import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header role="banner" className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer group"
          >
            <img 
              src={logo} 
              alt="New Covenant Home Services LLC" 
              className="h-14 w-auto object-contain rounded-lg"
            />
          </div>


          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/services')}
              className="text-white/70 hover:text-white px-4 py-2.5 font-medium text-sm transition-colors"
            >
              Services
            </button>
            <a 
              href="tel:615-390-3994"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              615-390-3994
            </a>
            <button
              onClick={() => navigate('/book')}
              className="flex items-center gap-2 bg-gradient-gold text-navy-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy-950/98 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-6 space-y-3">
              <button
                onClick={() => { navigate('/services'); setIsMobileMenuOpen(false); }}
                className="w-full text-white/70 hover:text-white px-5 py-3 rounded-lg font-medium text-sm text-center"
              >
                Services
              </button>
              <button
                onClick={() => { navigate('/book'); setIsMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-gold text-navy-950 px-5 py-3 rounded-lg font-semibold text-sm"
              >
                Book Now
              </button>
              <a 
                href="tel:615-390-3994"
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                615-390-3994
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
