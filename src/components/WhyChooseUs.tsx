import { CheckCircle2 } from "lucide-react";

const bulletPoints = [
  "Local Pensacola experts who know coastal property challenges",
  "Personalized service plans tailored to your exact needs",
  "Premium quality materials and tools on every project",
  "Licensed and insured for your protection",
  "Flexible scheduling that works around your timeline",
];

const stats = [
  { value: "100+", label: "Homes Served" },
  { value: "5.0", label: "Star Rating" },
  { value: "24/7", label: "Emergency Response" },
  { value: "5+", label: "Years Experience" },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden grain-texture">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-navy-700/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <span
              className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Why New Covenant
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              A Covenant of Care for Your{" "}
              <span className="text-gradient-gold">Most Valuable Asset</span>
            </h2>

            <p
              className="text-white/60 text-lg mb-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              We understand that your home is more than an investment — it's a
              sanctuary. Our name reflects our promise: a steadfast commitment to
              protecting and maintaining your property with the same care you
              would give it yourself.
            </p>

            <ul className="space-y-4">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats card */}
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
