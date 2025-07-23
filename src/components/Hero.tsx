
import { ArrowRight, Phone, Star, Sparkles, Zap, Shield, Award, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80')`
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-400/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-teal-400" />
            <span className="text-teal-300 font-semibold">Premium Property Services</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Complete Property<br />
            Maintenance & Care
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive property care with reliable, professional service you can count on
          </p>

          {/* Service area badge */}
          <div className="inline-flex items-center gap-2 text-teal-300 mb-12">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Proudly Serving the Greater Pensacola Area</span>
          </div>

          {/* Professional badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* 5-Star Rating */}
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-bold">5.0 Rating</p>
              </div>
            </div>
            
            {/* Angi Screened */}
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <Shield className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="text-gray-800 font-bold">Angi Screened</p>
              </div>
            </div>

            {/* Years Experience */}
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <Award className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="text-gray-800 font-bold">5+ Years in Business</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              onClick={() => navigate('/services')}
              className="bg-teal-600 hover:bg-teal-700 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Our Services
            </Button>
          </div>

          {/* Phone number */}
          <div className="inline-flex items-center gap-3 bg-slate-800 rounded-lg px-6 py-4">
            <Phone className="w-6 h-6 text-teal-400" />
            <a href="tel:615-390-3994" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors">
              615-390-3994
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
