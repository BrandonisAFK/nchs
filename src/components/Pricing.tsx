import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essential Watch",
    tagline: "Peace of mind while you're away",
    frequency: "Biweekly visits",
    featured: false,
    features: [
      "Biweekly interior & exterior walkthrough",
      "Perimeter security check",
      "Thermostat & humidity monitoring",
      "Mail collection & forwarding",
      "Leak & sensor verification",
      "P-trap maintenance",
      "Photo report after each visit",
    ],
  },
  {
    name: "Premium Care",
    tagline: "Complete hands-on property management",
    frequency: "Weekly visits",
    featured: true,
    features: [
      "Everything in Essential Watch",
      "Weekly visits instead of biweekly",
      "Pest patrol & prevention",
      "Appliance exercise program",
      "Lawn mowing & basic yard care",
      "Roof & gutter debris removal",
      "HVAC filter replacement",
      "Trash & recycling service",
      "Vehicle / golf cart run-up",
    ],
  },
  {
    name: "Full Concierge",
    tagline: "White-glove service for every detail",
    frequency: "Weekly+ visits",
    featured: false,
    features: [
      "Everything in Premium Care",
      "Pre-arrival grocery stocking",
      "Arrival preparation & staging",
      "House airing & refresh",
      "Vendor access management",
      "In-home appointment coverage",
      "Seasonal decor placement",
      "Asset documentation & records",
      "Priority storm prep & response",
      "Light handyman repairs included",
    ],
  },
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
        <div className="text-center mb-16">
          <span
            className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Service Plans
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-up mb-4"
            style={{ animationDelay: "0.2s" }}
          >
            Choose Your Level of Care
          </h2>
          <p
            className="text-white/50 max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Every property is different. Pick the plan that fits your needs — 
            or contact us for a custom quote tailored to your home.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-7 md:p-8 flex flex-col opacity-0 animate-fade-up transition-all duration-300",
                plan.featured
                  ? "bg-white/[0.08] border-2 border-gold-400/40 shadow-[0_0_40px_-12px_hsl(38_92%_50%/0.15)] md:scale-[1.03]"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-gold text-navy-950 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-gold">
                    <Star className="w-3 h-3 fill-navy-950" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6 pt-2">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm">{plan.tagline}</p>
              </div>

              {/* Frequency */}
              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/10">
                <span className="text-gold-400 font-semibold text-sm">{plan.frequency}</span>
                <span className="text-white/30 text-sm">· Custom pricing</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-4 h-4 mt-0.5 flex-shrink-0",
                      plan.featured ? "text-gold-400" : "text-gold-400/70"
                    )} />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => navigate('/book')}
                className={cn(
                  "w-full py-5 font-semibold text-sm rounded-lg transition-all",
                  plan.featured
                    ? "bg-gradient-gold text-navy-950 hover:opacity-90 shadow-gold"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                )}
              >
                Get a Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            All plans are priced based on property size and location. Storm prep, painting, 
            hauling, and specialty handyman work available as add-on services.
          </p>
        </div>
      </div>
    </section>
  );
};
