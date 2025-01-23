import { Header } from "@/components/Header";
import { Services as ServicesSection } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Services = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <ServicesSection />
        <WhyChooseUs />
      </main>
    </>
  );
};

export default Services;