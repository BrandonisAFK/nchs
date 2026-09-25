import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact New Covenant Home Services | Pensacola, FL";
    const metaDescription = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');

    metaDescription?.setAttribute(
      "content",
      "Contact New Covenant Home Services about selling a house, property repairs, painting, or general maintenance in the Greater Pensacola area."
    );
    canonical?.setAttribute("href", "https://newcovenanths.com/contact");

    return () => {
      document.title = "New Covenant Home Services | Cash Home Buyers & Property Services Pensacola";
      metaDescription?.setAttribute(
        "content",
        "New Covenant Home Services buys houses directly and provides reliable repairs, painting, and property maintenance throughout Greater Pensacola. Licensed and insured."
      );
      canonical?.setAttribute("href", "https://newcovenanths.com/");
    };
  }, []);

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen pt-20 bg-background">
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;