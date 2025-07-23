import { ArrowRight, Phone, Star, Sparkles, Zap, Shield, Award, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900">
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-400/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-semibold">Premium Property Services</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Complete Property<br />
              Maintenance & Care
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your trusted partner for comprehensive property care with reliable, professional service you can count on
            </p>

            {/* Service area badge */}
            <div className="inline-flex items-center gap-2 text-teal-300 mb-8">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Proudly Serving the Greater Pensacola Area</span>
            </div>

            {/* Professional badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {/* 5-Star Rating */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2 shadow-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 font-bold text-sm">5.0 Rating</p>
              </div>
              
              {/* Angi Screened */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2 shadow-lg">
                <Shield className="w-5 h-5 text-blue-600" />
                <p className="text-gray-800 font-bold text-sm">Angi Screened</p>
              </div>

              {/* Years Experience */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2 shadow-lg">
                <Award className="w-5 h-5 text-green-600" />
                <p className="text-gray-800 font-bold text-sm">5+ Years Excellence</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
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

          {/* Right Column - Professional Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Beautiful modern living room showcasing professional property maintenance"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Feature callout */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl px-6 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-800 font-semibold">Professional Results</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};