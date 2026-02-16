import { Eye, Wrench, Settings, TreePine, CloudLightning, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Eye,
    title: "Absentee Home Watch",
    description: "Routine property checks and monitoring while owners are away.",
  },
  {
    icon: Wrench,
    title: "Handyman & Home Repairs",
    description: "Minor to mid-level repairs, fixes, and general upkeep.",
  },
  {
    icon: Settings,
    title: "Property Maintenance",
    description: "Preventive maintenance and condition management for homes.",
  },
  {
    icon: TreePine,
    title: "Lawn & Exterior Care",
    description: "Lawn mowing, yard care, and exterior upkeep.",
  },
  {
    icon: CloudLightning,
    title: "Storm Prep & Property Protection",
    description: "Hurricane prep, securing homes, and post-storm inspections.",
  },
  {
    icon: ShoppingCart,
    title: "Concierge & Home Support",
    description: "Groceries, arrival prep, vendor access, and homeowner assistance.",
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-800/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            What We Do
          </span>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Our Core Services
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold-500/30 transition-colors">
                <service.icon className="w-6 h-6 text-gold-400" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <Button
            onClick={() => navigate('/services')}
            variant="outline"
            className="bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base font-medium rounded-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
