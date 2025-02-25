
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
