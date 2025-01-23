import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E293B]">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B] via-[#334155] to-[#475569]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'moveBackground 30s linear infinite',
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
      </div>
      
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
              <span className="text-white font-semibold">Screened & Approved</span>
            </div>

            {/* Years in Business */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-semibold">4+ Years of Excellence</span>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-semibold">100% Customer Satisfaction</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
               style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button 
              onClick={() => navigate('/booking')}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-lg group w-full sm:w-auto"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/services')}
              variant="outline"
              className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#475569] to-transparent" />
    </div>
  );
};