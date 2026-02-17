import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden" role="contentinfo">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-gold" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img 
                src={logo} 
                alt="New Covenant Home Services LLC — Property Maintenance Pensacola FL" 
                className="h-20 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional property maintenance, painting, hauling, and handyman services for the Greater Pensacola area. Licensed & insured. 5-star rated.
            </p>
          </div>

          {/* Quick Links column */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/book" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Book Now / Free Quote</Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:615-390-3994" className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 text-gold-400" />
                  (615) 390-3994
                </a>
              </li>
              <li>
                <a href="mailto:newcovenanthomeservices@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 text-gold-400" />
                  newcovenanthomeservices@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold-400" />
                Pensacola, FL & Surrounding Areas
              </li>
            </ul>
          </div>
          
          {/* Hours column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-white/60">
                <span>Monday - Friday</span>
                <span>8am - 6pm</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Saturday</span>
                <span>8am - 6pm</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Service areas for SEO */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-white/25 text-xs text-center leading-relaxed">
            Serving Pensacola, Gulf Breeze, Cantonment, Milton, Pensacola Beach, Warrington, Bellview, Ensley, Ferry Pass, Brent, Molino, McDavid, and surrounding Escambia & Santa Rosa County communities.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} New Covenant Home Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/40">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
