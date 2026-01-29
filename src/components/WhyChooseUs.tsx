import { CheckCircle2, Shield, Clock, Users, Award, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced, vetted staff you can trust"
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium tools and products only"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your timeline"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "100% commitment to your happiness"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed and covered for your protection"
  },
  {
    icon: CheckCircle2,
    title: "Competitive Pricing",
    description: "Fair, transparent rates always"
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden grain-texture">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-navy-700/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Why Choose Us</span>
          </div>
          
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            The <span className="text-gradient-gold">New Covenant</span> Difference
          </h2>
          
          <p 
            className="text-white/60 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            We're committed to delivering exceptional results with every project
          </p>
        </div>
        
        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
