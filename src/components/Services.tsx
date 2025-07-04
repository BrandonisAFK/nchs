import { Brush, Home, Building2, Wrench, TreePine, Paintbrush2, Sparkles, Crown, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description: "Comprehensive residential and commercial cleaning services. From regular maintenance to deep cleaning, we handle every detail with precision. Our team uses premium products and follows detailed checklists to ensure spotless results every time.",
    gradient: "from-epic-blue to-primary",
    delay: "0.1s"
  },
  {
    icon: Paintbrush2,
    title: "Interior & Exterior Painting",
    description: "Transform your property with our professional painting services. We provide complete interior and exterior painting solutions using premium paints and expert techniques. From color consultation to flawless finishing touches.",
    gradient: "from-epic-purple to-epic-orange",
    delay: "0.2s"
  },
  {
    icon: TreePine,
    title: "Landscaping & Yard Care",
    description: "Complete landscaping solutions to enhance your property's curb appeal. From lawn maintenance and garden design to seasonal cleanup and plant care. We create and maintain beautiful outdoor spaces year-round.",
    gradient: "from-primary to-primary-glow",
    delay: "0.3s"
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "Reliable handyman services for all your repair and maintenance needs. From minor fixes to major improvements, our skilled professionals handle electrical, plumbing, carpentry, and general maintenance with expertise.",
    gradient: "from-epic-orange to-epic-blue",
    delay: "0.4s"
  },
  {
    icon: Crown,
    title: "Airbnb & Rental Maintenance",
    description: "Specialized property management services for rental properties and Airbnb hosts. Complete turnover cleaning, maintenance checks, guest preparations, and ongoing property care to maximize your rental success.",
    gradient: "from-epic-blue to-epic-purple",
    delay: "0.5s"
  },
  {
    icon: Building2,
    title: "Complete Property Management",
    description: "Full-service property maintenance solutions combining all our services. Perfect for busy property owners, landlords, and businesses who want comprehensive care. One call handles everything from cleaning to repairs.",
    gradient: "from-primary-glow to-primary",
    delay: "0.6s"
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-neutral-light/5 to-background relative overflow-hidden" id="services">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-epic-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Epic section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Complete Property Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From spotless cleaning to stunning transformations, we deliver exceptional results across all property maintenance services
          </p>
        </div>

        {/* Epic services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-card transition-epic bg-gradient-card border-0 shadow-card hover:shadow-epic relative overflow-hidden animate-hero-text"
              style={{ animationDelay: service.delay, animationFillMode: "forwards", opacity: 0 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-epic`}></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce shadow-glow group-hover:shadow-epic`}>
                  <service.icon className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <CardTitle className="text-2xl mb-3 font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-epic"></div>
            </Card>
          ))}
        </div>
        
        {/* Epic CTA section */}
        <div className="text-center mt-20 animate-hero-text" style={{ animationDelay: "0.8s", animationFillMode: "forwards", opacity: 0 }}>
          <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 shadow-epic border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Property?</h3>
            <p className="text-muted-foreground mb-6 text-lg">Get a personalized quote for any combination of our services</p>
            <button className="bg-gradient-primary hover:shadow-glow px-8 py-4 text-lg font-bold rounded-2xl transition-bounce hover:scale-105 shadow-card text-primary-foreground">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};