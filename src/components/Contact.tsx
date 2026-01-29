import { Phone, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "We'll contact you soon to discuss your project.",
      });

      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending lead:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            Ready to Start Your Project?
          </h2>
          
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Contact us today for a free consultation and quote
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <div 
              className="lg:col-span-2 space-y-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="p-6 bg-navy-950 rounded-xl text-white">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Phone</p>
                      <a href="tel:615-390-3994" className="text-white font-medium hover:text-gold-400 transition-colors">
                        615-390-3994
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Hours</p>
                      <p className="text-white font-medium">Mon - Sat: 8am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Service Area</p>
                      <p className="text-white font-medium">Greater Pensacola, FL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div 
              className="lg:col-span-3 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <form onSubmit={handleSubmit} className="p-8 bg-card border border-border rounded-xl shadow-card space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12 bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="tel"
                      className="h-12 bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    placeholder="Describe your project needs, timeline, and any other details..."
                    className="min-h-[120px] bg-background resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-gold text-navy-950 hover:opacity-90 font-semibold shadow-gold transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-muted-foreground text-sm">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
