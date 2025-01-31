import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Card } from "@/components/ui/card";

const Booking = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Our Services</h1>
              <p className="text-lg text-gray-600">Schedule your cleaning service with just a few clicks</p>
            </div>
            
            <Card className="p-6 shadow-lg bg-white">
              <BookingCalendar />
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Need a Custom Quote?</h2>
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Booking;