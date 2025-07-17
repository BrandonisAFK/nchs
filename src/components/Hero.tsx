
import { ArrowRight, Phone, Star, Sparkles, Zap, Shield, Award, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stunning gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border border-blue-400/30 rounded-full px-8 py-4 mb-8 shadow-2xl">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-bold text-lg">Premium Home Services • Pensacola FL</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              House Cleaning
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Pensacola FL
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-blue-100 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
            Professional house cleaning, maid service, painting & property maintenance serving 
            <span className="font-bold text-yellow-300"> Gulf Breeze, Cantonment, Milton & surrounding areas</span>
          </p>

          {/* Phone number banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl px-8 py-6 mb-12 shadow-2xl border border-green-400/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-8 h-8 text-white animate-bounce" />
              <div className="text-left">
                <p className="text-white/90 text-sm font-medium">Call Now for FREE Estimate</p>
                <a href="tel:615-390-3994" className="text-3xl font-black text-white hover:text-yellow-200 transition-colors">
                  (615) 390-3994
                </a>
              </div>
            </div>
          </div>

          {/* Professional badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* 5-Star Rating */}
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-bold text-lg">5.0 Stars</p>
                <p className="text-gray-600 text-sm">127+ Reviews</p>
              </div>
            </div>
            
            {/* Licensed & Insured */}
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-300">
              <Shield className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <p className="text-gray-800 font-bold text-lg">Licensed & Insured</p>
                <p className="text-gray-600 text-sm">Fully Protected</p>
              </div>
            </div>

            {/* Local Business */}
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-300">
              <MapPin className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <p className="text-gray-800 font-bold text-lg">Local Business</p>
                <p className="text-gray-600 text-sm">Pensacola Owned</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Button 
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl border border-blue-400/30 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              View Our Services
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <a 
              href="tel:615-390-3994"
              className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl border border-green-400/30 transform hover:scale-105 text-white inline-flex items-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now: (615) 390-3994
            </a>
          </div>

          {/* Contact info */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 max-w-3xl mx-auto shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-sm text-blue-200">Phone</p>
                  <a href="tel:615-390-3994" className="font-bold text-lg hover:text-yellow-300 transition-colors">
                    (615) 390-3994
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <a href="mailto:newcovenanthomeservices@gmail.com" className="font-bold text-lg hover:text-yellow-300 transition-colors">
                    newcovenanthomeservices@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-sm text-blue-200">Service Area</p>
                  <p className="font-bold text-lg">Pensacola & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service areas */}
          <div className="mt-12">
            <p className="text-blue-200 text-lg mb-4">Proudly Serving:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Gulf Breeze', 'Cantonment', 'Milton', 'Pensacola Beach', 'Downtown Pensacola', 'Warrington', 'Bellview', 'Ensley'].map((area) => (
                <span key={area} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium border border-white/30 hover:bg-white/30 transition-colors">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};
