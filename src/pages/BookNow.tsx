import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Check, ChevronLeft, ChevronRight, Send, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  { label: "Property", step: 1 },
  { label: "Services", step: 2 },
  { label: "Schedule", step: 3 },
  { label: "Contact", step: 4 },
  { label: "Review", step: 5 },
];

const PROPERTY_TYPES = [
  "Single-Family Home",
  "Townhouse",
  "Condo / Apartment",
  "Multi-Family",
  "Commercial",
  "Vacant Lot",
];

const SERVICE_CATEGORIES = [
  {
    name: "Painting Services",
    color: "bg-gold-500",
    services: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Painting",
      "Deck / Fence Staining",
      "Pressure Washing & Prep",
      "Drywall Repair & Patching",
    ],
  },
  {
    name: "Property Maintenance",
    color: "bg-gold-400",
    services: [
      "Basic Yard Care",
      "Hedge & Shrub Trimming",
      "Gutter Cleaning",
      "Rental Turnover Prep",
      "Seasonal Property Check",
      "General Property Upkeep",
    ],
  },
  {
    name: "Hauling & Demolition",
    color: "bg-navy-400",
    services: [
      "Junk Removal",
      "Debris Hauling",
      "Light Demolition",
      "Appliance Removal",
      "Garage / Storage Cleanout",
      "Construction Debris",
    ],
  },
  {
    name: "Handyman Services",
    color: "bg-navy-300",
    services: [
      "Door & Window Repairs",
      "Shelf & Fixture Installation",
      "Minor Carpentry",
      "Flooring Repairs",
      "Caulking & Weatherproofing",
      "General Repairs",
    ],
  },
];

const FREQUENCY_OPTIONS = ["One-Time Visit", "Weekly", "Bi-Weekly", "Monthly"];

const BookNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  // Step 1: Property
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("Single-Family Home");
  const [sqft, setSqft] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  // Step 2: Services
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otherService, setOtherService] = useState("");

  // Step 3: Schedule
  const [frequency, setFrequency] = useState("");
  const [preferredDate, setPreferredDate] = useState<Date>();

  // Step 4: Contact
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return selectedServices.length > 0 || otherService.trim() !== "";
      case 3:
        return frequency !== "";
      case 4:
        return fullName.trim() !== "" && phone.trim() !== "";
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "booking");
      formData.append("address", address);
      formData.append("propertyType", propertyType);
      formData.append("sqft", sqft);
      formData.append("projectDetails", projectDetails);
      const allServices = otherService.trim()
        ? [...selectedServices, `Other: ${otherService.trim()}`]
        : selectedServices;
      formData.append("services", allServices.join(", "));
      formData.append("frequency", frequency);
      formData.append("preferredDate", preferredDate ? format(preferredDate, "MMMM d, yyyy") : "");
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("notes", notes);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      toast({
        title: "Request Submitted!",
        description: "Thanks for reaching out — we'll be in contact soon!",
      });

      // Reset form
      setCurrentStep(1);
      setAddress("");
      setPropertyType("Single-Family Home");
      setSqft("");
      setProjectDetails("");
      setSelectedServices([]);
      setOtherService("");
      setFrequency("");
      setPreferredDate(undefined);
      setFullName("");
      setEmail("");
      setPhone("");
      setNotes("");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-navy-950 pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Hidden Netlify form for bot detection */}
          <form name="booking" data-netlify="true" hidden>
            <input name="form-name" value="booking" readOnly />
            <input name="address" />
            <input name="propertyType" />
            <input name="sqft" />
            <input name="projectDetails" />
            <input name="services" />
            <input name="frequency" />
            <input name="preferredDate" />
            <input name="fullName" />
            <input name="email" />
            <input name="phone" />
            <input name="notes" />
          </form>
          <div className="text-center mb-12">
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Get Started
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
              Book Your Service
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Tell us about your property and we'll build a custom care plan.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-0 mb-14 max-w-2xl mx-auto">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                      currentStep > s.step
                        ? "bg-gold-500 text-navy-950"
                        : currentStep === s.step
                        ? "bg-gold-500 text-navy-950 ring-4 ring-gold-500/20"
                        : "bg-navy-800 text-white/40 border border-white/10"
                    )}
                  >
                    {currentStep > s.step ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      s.step
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium hidden sm:block transition-colors",
                      currentStep >= s.step ? "text-white" : "text-white/30"
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "w-8 md:w-12 h-[2px] mx-2 transition-colors",
                      currentStep > s.step ? "bg-gold-500" : "bg-navy-700"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              {/* Step 1: Property */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Property Details
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Property Address
                    </label>
                    <Input
                      placeholder="123 Gulf Breeze Blvd, Pensacola, FL"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full h-12 bg-navy-950 border border-white/10 text-white rounded-md px-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        {PROPERTY_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Approx. Square Footage
                      </label>
                      <Input
                        placeholder="2,500"
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Project Details (optional)
                    </label>
                    <Textarea
                      placeholder="Tell us about the scope of work, timeline, or any special requests..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="min-h-[100px] bg-navy-950 border-white/10 text-white placeholder:text-white/30 resize-none focus:border-gold-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Services */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white">
                      Select Your Services
                    </h2>
                    <p className="text-white/40 text-sm mt-1">
                      Choose the services that matter most. You can always adjust later.
                    </p>
                  </div>

                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.name}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={cn("w-2.5 h-2.5 rounded-full", cat.color)} />
                        <h3 className="text-white font-semibold text-sm">{cat.name}</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.services.map((service) => (
                          <button
                            key={service}
                            onClick={() => toggleService(service)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-lg border text-left text-sm transition-all duration-200",
                              selectedServices.includes(service)
                                ? "border-gold-500 bg-gold-500/10 text-white"
                                : "border-white/10 bg-navy-950/50 text-white/70 hover:border-white/20 hover:text-white"
                            )}
                          >
                            <div
                              className={cn(
                                "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all",
                                selectedServices.includes(service)
                                  ? "border-gold-500 bg-gold-500"
                                  : "border-white/20"
                              )}
                            >
                              {selectedServices.includes(service) && (
                                <Check className="w-3 h-3 text-navy-950" />
                              )}
                            </div>
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Other service */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                      <h3 className="text-white font-semibold text-sm">Other Service</h3>
                    </div>
                    <Input
                      placeholder="Describe a service not listed above..."
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Schedule */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Preferred Schedule
                  </h2>

                  {/* Frequency */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {FREQUENCY_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setFrequency(opt)}
                          className={cn(
                            "px-4 py-3.5 rounded-lg border text-sm font-medium transition-all duration-200",
                            frequency === opt
                              ? "border-gold-500 bg-gold-500/10 text-white"
                              : "border-white/10 bg-navy-950/50 text-white/60 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Date Picker */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Preferred Start Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal bg-navy-950 border-white/10 hover:bg-navy-900 hover:border-white/20",
                            !preferredDate ? "text-white/30" : "text-white"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-gold-400" />
                          {preferredDate
                            ? format(preferredDate, "EEEE, MMMM d, yyyy")
                            : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-navy-900 border-white/10" align="start">
                        <Calendar
                          mode="single"
                          selected={preferredDate}
                          onSelect={setPreferredDate}
                          disabled={(date) => date < new Date()}
                          className="p-3 pointer-events-auto text-white"
                          classNames={{
                            day_selected: "bg-gold-500 text-navy-950 hover:bg-gold-500 hover:text-navy-950 focus:bg-gold-500 focus:text-navy-950",
                            day_today: "bg-navy-700 text-white",
                            day: "text-white/70 hover:bg-navy-700 hover:text-white h-9 w-9 p-0 font-normal",
                            head_cell: "text-white/40 rounded-md w-9 font-normal text-[0.8rem]",
                            caption_label: "text-white text-sm font-medium",
                            nav_button: "border-white/10 text-white/60 hover:bg-navy-700 hover:text-white hover:opacity-100 h-7 w-7 bg-transparent p-0 opacity-70",
                            nav_button_previous: "absolute left-1",
                            nav_button_next: "absolute right-1",
                            caption: "flex justify-center pt-1 relative items-center",
                            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                            month: "space-y-4",
                            table: "w-full border-collapse space-y-1",
                            head_row: "flex",
                            row: "flex w-full mt-2",
                            cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                            day_outside: "text-white/20 opacity-50",
                            day_disabled: "text-white/10 opacity-50",
                            day_hidden: "invisible",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Your Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John & Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="h-12 bg-navy-950 border-white/10 text-white placeholder:text-white/30 focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      placeholder="Special requests, gate codes, pet information..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[120px] bg-navy-950 border-white/10 text-white placeholder:text-white/30 resize-none focus:border-gold-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Review Your Request
                  </h2>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl border border-white/10 bg-navy-950/50">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Property</p>
                      <p className="text-white font-semibold">
                        {address || "Not provided"}
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        {propertyType} · {sqft || "—"} sqft
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-white/10 bg-navy-950/50">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                        Selected Services ({selectedServices.length + (otherService.trim() ? 1 : 0)})
                      </p>
                      {selectedServices.length > 0 || otherService.trim() ? (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedServices.map((s) => (
                            <span
                              key={s}
                              className="text-xs bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded-full px-3 py-1"
                            >
                              {s}
                            </span>
                          ))}
                          {otherService.trim() && (
                            <span className="text-xs bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded-full px-3 py-1">
                              Other: {otherService.trim()}
                            </span>
                          )}
                        </div>
                      ) : (
                        <p className="text-white/50 text-sm">None selected</p>
                      )}
                    </div>

                    <div className="p-5 rounded-xl border border-white/10 bg-navy-950/50">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Schedule</p>
                      <p className="text-white font-semibold">
                        {frequency || "Not selected"}
                      </p>
                      {preferredDate && (
                        <p className="text-white/50 text-sm mt-1">
                          Starting {format(preferredDate, "MMMM d, yyyy")}
                        </p>
                      )}
                    </div>

                    <div className="p-5 rounded-xl border border-white/10 bg-navy-950/50">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Contact</p>
                      <p className="text-white font-semibold">{fullName || "—"}</p>
                      <p className="text-white/50 text-sm mt-1">
                        {email && `${email} · `}{phone || "—"}
                      </p>
                      {notes && (
                        <p className="text-white/40 text-sm mt-2 italic">"{notes}"</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
                {currentStep > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep((s) => s - 1)}
                    className="bg-transparent border-white/10 text-white hover:bg-navy-800 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <Button
                    onClick={() => setCurrentStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="bg-gradient-gold text-navy-950 hover:opacity-90 font-semibold shadow-gold px-6"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-gold text-navy-950 hover:opacity-90 font-semibold shadow-gold px-6"
                  >
                    Submit Request
                    <Check className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default BookNow;
