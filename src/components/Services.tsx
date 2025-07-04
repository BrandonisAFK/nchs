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
        {/* Professional section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Property Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From spotless cleaning to stunning transformations, we deliver exceptional results across all property maintenance services
          </p>
        </div>

        {/* Professional services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 bg-white border border-neutral-light/20 shadow-card hover:shadow-lg hover:border-primary/20 relative overflow-hidden animate-hero-text"
              style={{ animationDelay: service.delay, animationFillMode: "forwards", opacity: 0 }}
            >
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Clean accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};