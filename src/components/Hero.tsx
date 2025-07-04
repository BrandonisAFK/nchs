
import { ArrowRight, Phone, Star, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-epic-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-epic-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Epic badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 animate-glow-pulse">
            <Zap className="w-5 h-5 text-primary-glow" />
            <span className="text-primary-glow font-semibold">Premium Property Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-hero-text bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent bg-animate-gradient-shift">
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

          {/* Epic Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-hero-text"
               style={{ animationDelay: "0.5s", animationFillMode: "forwards", opacity: 0 }}>
            {/* 5-Star Rating */}
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-epic hover-card transition-epic border border-white/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-epic-orange text-epic-orange drop-shadow-glow" />
                ))}
              </div>
              <span className="text-neutral-dark font-bold text-lg">5.0 Rating</span>
            </div>
            
            {/* HomeAdvisor Badge */}
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-epic hover-card transition-epic border border-white/20">
              <img 
                src="/lovable-uploads/1fb1337a-4345-4d8a-8255-5828df8c2d70.png" 
                alt="HomeAdvisor Screened & Approved" 
                className="h-8 drop-shadow-sm"
              />
              <span className="text-neutral-dark font-bold text-lg">Angi Screened</span>
            </div>

            {/* Years in Business */}
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl px-6 py-4 shadow-epic hover-card transition-epic border border-white/20">
              <span className="text-neutral-dark font-bold text-lg">✨ 4+ Years Excellence</span>
            </div>
          </div>

          {/* Epic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-hero-text"
               style={{ animationDelay: "0.6s", animationFillMode: "forwards", opacity: 0 }}>
            <Button 
              onClick={() => navigate('/services')}
              className="bg-gradient-primary hover:shadow-glow px-10 py-6 text-xl font-bold rounded-2xl transition-bounce hover:scale-105 shadow-epic"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Explore Our Services
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-primary-foreground px-10 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-bounce hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-2" />
              Get Quote Now
            </Button>
          </div>

          {/* Epic Phone Number */}
          <div className="flex justify-center items-center gap-3 text-white animate-hero-text bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 inline-flex mx-auto shadow-card hover-card transition-epic"
               style={{ animationDelay: "0.7s", animationFillMode: "forwards", opacity: 0 }}>
            <Phone className="w-6 h-6 text-primary-glow animate-glow-pulse" />
            <a href="tel:615-390-3994" className="text-2xl font-bold hover:text-primary-glow transition-colors">
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
