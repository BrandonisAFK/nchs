import { Home, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Hauling & Demolition",
  "Professional Painting",
  "Landscaping & Yard Care",
  "Handyman Services",
  "Airbnb & Rental Care",
  "Property Management",
];

export const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-gold" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-navy-950" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">New Covenant</span>
                <span className="block text-xs text-white/60 tracking-wider uppercase">Home Services</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional property services for the Greater Pensacola area. Quality work you can trust.
            </p>
          </div>
          
          {/* Services column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:615-390-3994" className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 text-gold-400" />
                  615-390-3994
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold-400" />
                Pensacola, FL Area
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
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
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
