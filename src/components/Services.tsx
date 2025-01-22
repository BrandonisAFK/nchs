import { Brush, Home, Building2, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your needs",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices and businesses",
  },
  {
    icon: Brush,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those special occasions",
  },
  {
    icon: Star,
    title: "Move In/Out Cleaning",
    description: "Get your new space ready or leave your old one spotless",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-dark">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};