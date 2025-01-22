import { Header } from "@/components/Header";
import { Services as ServicesSection } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Services = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <ServicesSection />
          <WhyChooseUs />
        </div>
      </main>
    </>
  );
};

export default Services;