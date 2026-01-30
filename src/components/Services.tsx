import { Truck, Paintbrush2, TreePine, Wrench, Crown, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Hauling & Demolition",
    description: "Complete hauling, demolition, and junk removal services. From debris removal to estate cleanouts, we handle projects of all sizes safely and efficiently.",
  },
  {
    icon: Paintbrush2,
    title: "Professional Painting",
    description: "Transform your property with expert interior and exterior painting. Premium paints, flawless techniques, and stunning results.",
  },
  {
    icon: TreePine,
    title: "Landscaping & Yard Care",
    description: "Keep your property looking pristine with lawn care, trimming, seasonal cleanup, and garden maintenance.",
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "From fixture repairs and furniture assembly to minor carpentry — we handle the everyday repairs that keep your property perfect.",
  },
  {
    icon: Crown,
    title: "Airbnb & Rental Care",
    description: "Turnover services, maintenance checks, and ongoing care to maximize your rental property success.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Full-service maintenance combining all our services. One call handles everything from repairs to renovations.",
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden" id="services">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-100/50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-navy-100 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-navy-800 text-sm font-medium tracking-wide uppercase">Our Services</span>
          </div>
          
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Complete Property Solutions
          </h2>
          
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Professional services tailored to your property needs — from transformations to maintenance
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-xl border border-border hover:border-navy-200 transition-all duration-300 hover:shadow-professional hover:-translate-y-1 opacity-0 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors bg-navy-100 group-hover:bg-navy-800">
                  <service.icon className="w-6 h-6 transition-colors text-navy-700 group-hover:text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center text-navy-800 font-medium text-sm group-hover:text-gold-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="h-1 transition-all duration-300 bg-navy-200 group-hover:bg-navy-800" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
