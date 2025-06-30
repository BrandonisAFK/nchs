
import { Brush, Home, Building2, Hammer, Trees, Key } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your needs. We handle everything from regular maintenance to deep cleaning, including kitchens, bathrooms, bedrooms, and living areas. Our professional team uses eco-friendly products and follows a detailed checklist to ensure nothing is missed.",
  },
  {
    icon: Brush,
    title: "Interior & Exterior Painting",
    description: "Transform your property with our professional painting services. From single rooms to entire homes and commercial buildings, we provide high-quality interior and exterior painting with attention to detail, proper surface preparation, and premium paints for lasting results.",
  },
  {
    icon: Trees,
    title: "Landscaping & Yard Care",
    description: "Complete landscaping services to enhance your property's curb appeal. Including lawn maintenance, garden design, tree trimming, mulching, seasonal cleanup, and ongoing yard care to keep your outdoor spaces beautiful year-round.",
  },
  {
    icon: Hammer,
    title: "Handyman Services",
    description: "Professional handyman services for all your home repair and improvement needs. From minor repairs and installations to fixture replacements, drywall work, and general maintenance tasks. No job too small for our skilled craftsmen.",
  },
  {
    icon: Key,
    title: "Airbnb & Rental Maintenance",
    description: "Specialized maintenance services for rental properties and Airbnb hosts. Including turnover cleaning, property inspections, routine maintenance, emergency repairs, and ensuring your rental property stays guest-ready and well-maintained.",
  },
  {
    icon: Building2,
    title: "Commercial Property Services",
    description: "Comprehensive maintenance solutions for commercial properties including office buildings, retail spaces, and multi-unit properties. Regular cleaning, painting, landscaping, and general maintenance to keep your business property professional and inviting.",
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
