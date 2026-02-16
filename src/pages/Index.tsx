
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Testimonials />
        <Services />
        <Pricing />
        <WhyChooseUs />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
