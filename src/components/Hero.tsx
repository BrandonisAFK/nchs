import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-up mb-6 leading-tight">
            Professional Cleaning Services for Your Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-up opacity-0" 
             style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Experience the difference with our trusted residential and commercial cleaning solutions
          </p>

          {/* Achievements Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up opacity-0"
               style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {/* 5-Star Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">5.0 Rating</span>
            </div>
            
            {/* HomeAdvisor Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <img 
                src="/lovable-uploads/1fb1337a-4345-4d8a-8255-5828df8c2d70.png" 
                alt="HomeAdvisor Screened & Approved" 
                className="h-6"
              />
              <span className="text-white font-semibold">Angi Screened & Approved</span>
            </div>

            {/* Years in Business */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-semibold">4+ Years of Excellence</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
               style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button 
              onClick={() => navigate('/booking')}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg group w-full sm:w-auto"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/services')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>

          {/* Phone Number */}
          <div className="mt-8 flex justify-center items-center gap-2 text-white animate-fade-up opacity-0"
               style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:615-390-3994" className="text-lg hover:text-primary transition-colors">
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