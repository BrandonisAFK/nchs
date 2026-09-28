import { Phone, Clock, MapPin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-100/50 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 bg-navy-100 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-navy-800 text-sm font-medium tracking-wide uppercase">Get In Touch</span>
          </div>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Let’s Talk About Your Property
          </h2>

          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Reach out about selling a house, property repairs, painting, maintenance, or a general question.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 md:p-10 bg-navy-950 rounded-xl text-white opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="tel:615-390-3994"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Phone</p>
                  <p className="text-white font-medium text-lg">615-390-3994</p>
                </div>
              </a>

              <a
                href="mailto:newcovenanthomeservices@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <p className="text-white font-medium break-all">newcovenanthomeservices@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Hours</p>
                  <p className="text-white font-medium">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Service Area</p>
                  <p className="text-white font-medium">Greater Pensacola, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
