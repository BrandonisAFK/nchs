import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-neutral-dark">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'moveBackground 30s linear infinite',
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
               style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button 
              className="bg-white hover:bg-gray-100 text-primary-dark px-8 py-6 text-lg group w-full sm:w-auto"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-dark to-transparent" />
    </div>
  );
};