
import { ArrowRight, Phone, Star, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Premium Property Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-hero-text">
            Complete Property Maintenance & Care
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-light mb-4 animate-hero-text max-w-4xl mx-auto" 
             style={{ animationDelay: "0.3s", animationFillMode: "forwards", opacity: 0 }}>
            From spotless cleaning to flawless painting, landscaping to handyman services - we're your one-stop solution for all property maintenance needs
          </p>
          
          {/* Location Text */}
          <p className="text-lg text-primary-glow mb-10 animate-hero-text font-semibold"
             style={{ animationDelay: "0.4s", animationFillMode: "forwards", opacity: 0 }}>
            🏆 Proudly Serving the Greater Pensacola Area
          </p>

          {/* Professional Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-hero-text"
               style={{ animationDelay: "0.5s", animationFillMode: "forwards", opacity: 0 }}>
            {/* 5-Star Rating */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 shadow-card transition-epic border border-white/40">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-neutral-dark font-semibold">5.0 Rating</span>
            </div>
            
            {/* HomeAdvisor Badge */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 shadow-card transition-epic border border-white/40">
              <img 
                src="/lovable-uploads/1fb1337a-4345-4d8a-8255-5828df8c2d70.png" 
                alt="HomeAdvisor Screened & Approved" 
                className="h-6"
              />
              <span className="text-neutral-dark font-semibold">Angi Screened</span>
            </div>

            {/* Years in Business */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-card transition-epic border border-white/40">
              <span className="text-neutral-dark font-semibold">5+ Years Excellence</span>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-hero-text"
               style={{ animationDelay: "0.6s", animationFillMode: "forwards", opacity: 0 }}>
            <Button 
              onClick={() => navigate('/services')}
              className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl transition-colors shadow-card"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Our Services
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Phone Number */}
          <div className="flex justify-center items-center gap-3 text-white animate-hero-text bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 inline-flex mx-auto shadow-card transition-colors"
               style={{ animationDelay: "0.7s", animationFillMode: "forwards", opacity: 0 }}>
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:615-390-3994" className="text-xl font-semibold hover:text-primary transition-colors">
              615-390-3994
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};
