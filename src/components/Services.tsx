import { Brush, Home, Building2, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your needs. We handle everything from regular maintenance to deep cleaning, including kitchens, bathrooms, bedrooms, and living areas. Our professional team uses eco-friendly products and follows a detailed checklist to ensure nothing is missed.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices and businesses. We maintain a clean, healthy work environment with services including floor care, window cleaning, restroom sanitation, and workspace disinfection. Available after hours to minimize disruption to your business.",
  },
  {
    icon: Brush,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those special occasions or seasonal needs. Includes detailed cleaning of all surfaces, baseboards, window sills, light fixtures, and hard-to-reach areas. Perfect for spring cleaning or preparing your home for special events.",
  },
  {
    icon: Star,
    title: "Move In/Out Cleaning",
    description: "Get your new space ready or leave your old one spotless. We ensure every surface is thoroughly cleaned, including inside cabinets, appliances, and windows. Our service helps you get your security deposit back or prepare your new home for moving in.",
  },
  {
    icon: Sparkles,
    title: "Specialized Services",
    description: "Custom cleaning solutions for specific needs including post-construction cleanup, event preparation and cleanup, or specialized floor and carpet treatments. We work with you to develop a cleaning plan that meets your unique requirements.",
  },
  {
    icon: Brush,
    title: "Recurring Service Plans",
    description: "Regular cleaning schedules tailored to your needs - weekly, bi-weekly, or monthly. Enjoy consistent, reliable service with the same trusted cleaning team. Save money with our recurring service packages while maintaining a consistently clean space.",
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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