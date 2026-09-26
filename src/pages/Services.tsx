import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Banknote, Hammer, Paintbrush2, Settings, TreePine, House } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

const services = [
  {
    icon: Banknote,
    title: "Direct Home Buying",
    description: "We purchase houses directly in the Greater Pensacola area, including inherited, vacant, dated, and repair-heavy properties.",
    details: ["Direct conversation with a local buyer", "Properties considered in many conditions", "Flexible timing based on your situation"],
  },
  {
    icon: Hammer,
    title: "Property Repairs",
    description: "We handle practical repairs and improvements for homeowners, landlords, and property investors.",
    details: ["Interior and exterior repairs", "Drywall, trim, doors, and fixtures", "Minor carpentry and general upkeep"],
  },
  {
    icon: Paintbrush2,
    title: "Interior & Exterior Painting",
    description: "Professional painting and surface preparation for residential properties throughout the area.",
    details: ["Rooms, walls, ceilings, and trim", "Exterior siding and architectural details", "Deck and fence staining"],
  },
  {
    icon: Settings,
    title: "General Maintenance",
    description: "Straightforward maintenance support tailored to the condition and needs of the property.",
    details: ["One-time or recurring upkeep", "Gutter and exterior maintenance", "Small fixes and preventive work"],
  },
  {
    icon: TreePine,
    title: "Exterior & Yard Care",
    description: "Basic outdoor care that helps keep a property clean, functional, and presentable.",
    details: ["Yard cleanup and basic lawn care", "Hedge and shrub trimming", "Exterior cleanup and preparation"],
  },
  {
    icon: House,
    title: "Property Solutions",
    description: "Every property is different. We can discuss needs that do not fit neatly into a standard category.",
    details: ["Support for owners and investors", "Solutions based on property condition", "Clear next steps without pressure"],
  },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home Buying, Repairs & Maintenance Pensacola | New Covenant";
    const metaDescription = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    metaDescription?.setAttribute(
      "content",
      "Explore direct home buying, repairs, painting, exterior care, and general property maintenance from New Covenant Home Services in Greater Pensacola."
    );
    canonical?.setAttribute("href", "https://newcovenanths.com/services");

    return () => {
      document.title = "New Covenant Home Services | Cash Home Buyers & Property Services Pensacola";
      metaDescription?.setAttribute(
        "content",
        "New Covenant Home Services buys houses directly and provides reliable repairs, painting, and property maintenance throughout Greater Pensacola. Licensed and insured."
      );
      canonical?.setAttribute("href", "https://newcovenanths.com/");
    };
  }, []);

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-navy-950">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up">
              What We Do
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 opacity-0 animate-fade-up">
              Property Solutions, From Purchase to Upkeep
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up">
              We buy houses directly and provide dependable repair, painting, and maintenance services throughout Greater Pensacola.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="border border-white/10 rounded-lg bg-white/5 p-6 md:p-8 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.08 + index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-white mb-2">{service.title}</h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-5">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-white/70 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-14 opacity-0 animate-fade-up">
              <p className="text-white/60 mb-6">Have a property or project you would like to discuss?</p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-gradient-gold text-navy-950 px-8 py-6 text-base font-semibold rounded-lg hover:opacity-90 shadow-gold"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Services;