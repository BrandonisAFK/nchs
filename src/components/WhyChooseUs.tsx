import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Professional and experienced staff",
  "Quality materials and tools",
  "Flexible scheduling options",
  "100% satisfaction guaranteed",
  "Fully licensed and insured",
  "Competitive pricing",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-clean-green/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-dark">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-neutral-dark">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};