import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-[20000ms] hover:scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80')`
        }}
      />
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
      
      {/* Subtle animated pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'moveBackground 30s linear infinite',
          }} 
        />
      </div>
      
      {/* Content with improved typography and spacing */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-up mb-8 leading-tight tracking-tight">
            Professional Cleaning Services for Your Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fade-up opacity-0 leading-relaxed" 
             style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Experience the difference with our trusted residential and commercial cleaning solutions
          </p>

          {/* Enhanced achievements section */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-up opacity-0"
               style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">5.0 Rating</span>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-colors">
              <img 
                src="/lovable-uploads/1fb1337a-4345-4d8a-8255-5828df8c2d70.png" 
                alt="HomeAdvisor Screened & Approved" 
                className="h-6"
              />
              <span className="text-white font-medium">Screened & Approved</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-white font-medium">4+ Years of Excellence</span>
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up opacity-0"
               style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button 
              onClick={() => navigate('/booking')}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg group w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/services')}
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105"
            >
              Our Services
            </Button>
          </div>

          {/* Enhanced contact section */}
          <div className="mt-12 flex justify-center items-center gap-3 text-white animate-fade-up opacity-0"
               style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Phone className="w-5 h-5 text-primary animate-pulse" />
            <a href="tel:615-390-3994" className="text-lg hover:text-primary transition-colors font-medium">
              615-390-3994
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
    </div>
  );
};