import { ArrowRight, Home, Paintbrush, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const pricingFactors = [
  { icon: Home, text: "Property size & type" },
  { icon: Paintbrush, text: "Services needed" },
  { icon: Truck, text: "One-time or recurring" },
  { icon: Wrench, text: "Scope of work" },
];

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="pricing">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-700/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Pricing
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-up mb-5"
            style={{ animationDelay: "0.2s" }}
          >
            Honest, Straightforward Pricing
          </h2>
          <p
            className="text-white/50 max-w-2xl mx-auto text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Every property is different, so we price based on what you actually need — 
            no hidden fees, no surprises. Tell us about your property and we'll put together 
            a custom quote that fits your budget.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Example pricing callout */}
          <div
            className="rounded-2xl border-2 border-gold-400/30 bg-white/[0.06] p-8 md:p-10 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  Example Starting Price
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Property Maintenance
                </h3>
                <p className="text-white/50">
                  Biweekly visits — walkthrough, yard care, and general upkeep for a standard home.
                </p>
              </div>
              <div className="flex-shrink-0 text-center md:text-right">
                <p className="font-display text-4xl md:text-5xl font-bold text-white">
                  $150
                </p>
                <p className="text-white/40 text-sm mt-1">per month</p>
              </div>
            </div>
          </div>

          {/* What affects pricing */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <h3 className="font-display text-lg font-semibold text-white text-center mb-6">
              What affects your price?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {pricingFactors.map((factor) => (
                <div
                  key={factor.text}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <factor.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-white/70 text-sm text-center font-medium">
                    {factor.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Button
              onClick={() => navigate("/book")}
              className="bg-gradient-gold text-navy-950 hover:opacity-90 font-semibold shadow-gold px-8 py-6 text-base rounded-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-white/40 text-sm mt-4">
              No commitment — just an honest estimate based on your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
