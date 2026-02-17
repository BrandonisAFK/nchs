import { lazy, Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

// Lazy load below-the-fold sections
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const SectionFallback = () => (
  <div className="py-24 bg-navy-950" />
);

const Index = () => {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
          <Services />
          <WhyChooseUs />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
