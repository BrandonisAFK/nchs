import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Pricing } from "@/components/Pricing";
import {
  Droplets, Pipette, CloudLightning, FileText, Shield, Eye,
  Thermometer, Bug, Waves, Home, AlertTriangle, Settings,
  Car, Wind, Lightbulb, Mail, Wrench, Paintbrush2,
  Move, KeyRound, TreePine, Armchair, Package, Sparkles, Camera,
  Search, Trash2, Monitor, Flame, Fan, SprayCan, BedDouble, Apple
} from "lucide-react";

const allServices = [
  { icon: Droplets, title: "Humidity & Mold Inspection", description: "We check your property for excess moisture, musty smells, and early signs of mold so problems get caught before they spread." },
  { icon: Pipette, title: "P-Trap Maintenance", description: "We run your faucets and flush toilets to keep drain traps full — this blocks sewer gases from seeping into your home." },
  { icon: CloudLightning, title: "Storm Prep & Lockdown", description: "Before a storm hits, we bring in loose outdoor items and close up shutters so your property is locked down tight." },
  { icon: FileText, title: "Post-Storm Walkthrough & Report", description: "After any weather event, we walk through your entire property and send you date-stamped photos or videos of its condition." },
  { icon: Shield, title: "Perimeter Security Check", description: "We test every door, window, and lock on the property and make sure everything is properly secured." },
  { icon: Eye, title: "Security Scan & Night Checks", description: "We stop by in the evening to make sure outdoor lighting is working and the property looks secure." },
  { icon: Thermometer, title: "Thermostat & Humidity Control", description: "We set your HVAC to safe temperature and humidity levels to protect your home from heat damage or mold." },
  { icon: Bug, title: "Pest Patrol", description: "We look for signs of pest activity and safely remove minor nests or cobwebs around the property." },
  { icon: Waves, title: "Pool & Spa Service Check", description: "We run your pool and spa systems to verify pumps and filtration are working the way they should." },
  { icon: Home, title: "Roof & Gutter Cleaning", description: "We clear leaves and debris from your gutters and roof edges so water drains properly and nothing backs up." },
  { icon: AlertTriangle, title: "Leak & Sensor Verification", description: "We check for any visible leaks and confirm your water and smoke sensors are functioning." },
  { icon: Settings, title: "Appliance Exercise", description: "We run your dishwasher and washing machine periodically to keep seals from drying out and cracking." },
  { icon: Car, title: "Vehicle & Golf Cart Run-Up", description: "We start and move your vehicles or golf carts regularly to keep batteries charged and tires in shape." },
  
  { icon: Wind, title: "House Airing & Refresh", description: "We open up and ventilate your home, then cool it down so it's fresh and comfortable when you walk in." },
  { icon: Lightbulb, title: "Light Bulb & Battery Replacement", description: "We swap out burned-out bulbs and replace household batteries in remotes, smoke detectors, and clocks." },
  { icon: Mail, title: "Mail Collection & Digitization", description: "We pick up your mail, scan anything important, and forward it to you so nothing piles up." },
  { icon: Wrench, title: "Light Handyman Repairs", description: "We handle small fixes like tightening loose hardware, adjusting hinges, patching screens, and re-caulking." },
  { icon: Paintbrush2, title: "Basic Interior Painting", description: "We do small paint touch-ups or single-room jobs to keep your interior looking fresh." },
  { icon: Move, title: "Furniture & Heavy Item Moving", description: "We move or rearrange furniture and heavy items inside your home whenever you need things shifted." },
  { icon: KeyRound, title: "Vendor Access Management", description: "We meet your cleaners, contractors, or delivery people on-site and let them in so you don't have to be there." },
  { icon: TreePine, title: "Lawn Mowing & Basic Yard Care", description: "We mow, edge, and tidy up your yard to keep it looking great and stay within HOA requirements." },
  { icon: Armchair, title: "Patio Furniture Setup or Securing", description: "We set up outdoor furniture for your arrival or bring it in and secure it before storms." },
  { icon: Package, title: "In-Home Service Appointment Coverage", description: "We stay at your home for deliveries or service visits so someone is always there to receive them." },
  { icon: Sparkles, title: "Seasonal Decor Placement or Removal", description: "We put up or take down simple seasonal decorations so your home stays festive or tidy year-round." },
  { icon: Camera, title: "Asset Documentation", description: "We photograph your valuables and record serial numbers so you have an up-to-date record for insurance." },
  { icon: Search, title: "Attic & Interior Visual Check", description: "We inspect your attic and interior for any signs of leaks, stains, or pest intrusion." },
  { icon: Trash2, title: "Trash & Recycling Service", description: "We set out your bins on collection day and bring them back in — you never have to think about it." },
  { icon: Monitor, title: "Electronics Function Check", description: "We power on your TVs, routers, and other key devices to make sure everything still works." },
  { icon: Flame, title: "Water Heater & Utility Visual Check", description: "We check your water heater and utility connections for leaks and confirm settings look normal." },
  { icon: Fan, title: "HVAC Filter Replacement", description: "We replace or clean your HVAC filters on schedule to keep air quality high and your system running efficiently." },
  { icon: SprayCan, title: "Exterior Spot Cleaning", description: "We clean your entryways, patios, and other high-visibility areas so your home always makes a good first impression." },
  { icon: BedDouble, title: "Arrival Preparation", description: "We make beds, set out fresh towels, and stage your home so it's move-in ready when you arrive." },
  { icon: Apple, title: "Refrigerator & Pantry Clean-Out", description: "We remove expired food, wipe down shelves, and leave your fridge and pantry clean and fresh." },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-navy-950">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-800/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Full Service List
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-up mb-4" style={{ animationDelay: "0.2s" }}>
              Everything We Do For You
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              We handle a wide range of property care services — here's a look at what we offer. Don't see what you need? Just ask. We're happy to accommodate custom requests.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allServices.map((service, index) => (
                <div
                  key={index}
                  className="group border border-white/10 rounded-xl bg-white/5 p-5 hover:bg-white/[0.07] hover:border-gold-400/30 transition-colors opacity-0 animate-fade-up"
                  style={{ animationDelay: `${Math.min(0.05 + index * 0.02, 0.4)}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <service.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-sm md:text-base mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom request note */}
            <div className="mt-8 text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <p className="text-white/40 text-sm">
                Need something not listed? <span className="text-gold-400">Reach out</span> — we're flexible and happy to help with custom requests.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-white/50 mb-6">Ready to get started?</p>
              <Button
                onClick={() => navigate('/book')}
                className="bg-gradient-gold text-navy-950 px-8 py-6 text-base font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold"
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        <Pricing />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Services;
