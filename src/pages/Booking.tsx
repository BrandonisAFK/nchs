import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

const Booking = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-12">Book Our Services</h1>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Booking;