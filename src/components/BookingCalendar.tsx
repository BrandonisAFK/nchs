import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addDays, format, setHours, setMinutes } from "date-fns";

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00"
];

export const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Please select both date and time",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this to your email or booking system
    const bookingDetails = {
      date: format(date, "MMMM do, yyyy"),
      time: selectedTime,
    };

    console.log("Booking details:", bookingDetails);

    toast({
      title: "Booking request sent!",
      description: `Your booking for ${bookingDetails.date} at ${bookingDetails.time} has been received. We'll contact you shortly to confirm.`,
    });

    // Reset form
    setDate(undefined);
    setSelectedTime(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Date</h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => {
            const today = new Date();
            return (
              date < today ||
              date > addDays(today, 30) ||
              date.getDay() === 0
            );
          }}
          className="rounded-md border"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Select Time</h3>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              className="w-full"
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>

        <Button
          className="w-full mt-6 bg-primary hover:bg-primary-dark text-white"
          size="lg"
          onClick={handleBooking}
        >
          Book Appointment
        </Button>

        <p className="text-sm text-gray-500 mt-4">
          * Bookings are subject to availability. We'll contact you to confirm your appointment.
        </p>
      </div>
    </div>
  );
};