import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-clean-blue/30 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark animate-fade-up mb-6">
          New Covenant Home Services
        </h1>
        <p className="text-xl md:text-2xl text-neutral mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Professional cleaning services for your home and business
        </p>
        <Button 
          className="animate-fade-up bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg group"
          style={{ animationDelay: "0.4s" }}
        >
          Book Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};