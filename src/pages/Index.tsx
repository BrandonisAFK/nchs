
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
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
        {/* Final Image Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
                alt="Professional Cleaning Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <p className="text-2xl font-semibold mb-2">Call us today</p>
                  <a href="tel:615-390-3994" className="text-3xl font-bold hover:text-primary transition-colors">
                    615-390-3994
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
