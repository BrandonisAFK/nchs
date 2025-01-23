import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-dark">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-neutral">Call us to schedule a cleaning</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Hours</h3>
                <p className="text-neutral">Mon-Sat: 8am - 6pm</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input placeholder="Phone Number" />
            <Textarea placeholder="Tell us about your cleaning needs" className="h-32" />
            <Button className="w-full bg-primary hover:bg-primary-dark text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};