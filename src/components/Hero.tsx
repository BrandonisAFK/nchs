import { Phone, Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import angiLogo from "@/assets/angi-logo.png";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy-950/80" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950/90" />
      
      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Location badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <MapPin className="w-4 h-4 text-gold-400" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Serving the Greater Pensacola Area</span>
          </div>
          
          {/* Main headline */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Complete Property
            <span className="block text-gradient-gold">Maintenance & Care</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Professional property services you can trust. From painting to hauling, 
            landscaping to handyman work — we handle it all with precision and care.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              onClick={() => navigate('/services')}
              className="bg-gradient-gold text-navy-950 hover:opacity-90 px-8 py-6 text-base font-semibold rounded-lg shadow-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Our Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a 
              href="tel:615-390-3994"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              615-390-3994
            </a>
          </div>

          {/* Trust badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {/* 5-Star Rating */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">5.0 Rating</span>
            </div>
            
            {/* Angi Screened */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
              <img src={angiLogo} alt="Angi" className="h-4 w-auto" />
              <span className="text-white/90 text-sm font-medium">Screened & Approved</span>
            </div>

            {/* Est. 2020 */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
              <span className="text-white/90 text-sm font-medium">Est. 2020</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Extended bottom fade - moved lower */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};
