import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Kenny G.",
    rating: 5,
    comment: "Amazing professionalism 10/10 would recommend",
    project: "Property Services"
  },
  {
    name: "Ava S.",
    rating: 5,
    comment: "Very pleasant and accommodating!",
    project: "Interior Services"
  },
  {
    name: "Tracie W.",
    rating: 5,
    comment: "The team was prompt and extremely professional. They were able to accomplish my project immediately and now my fence looks brand new.",
    project: "Exterior Services"
  },
  {
    name: "Brian M.",
    rating: 5,
    comment: "Very responsive, professional and flexible. Quality work and a pleasure to work with. Highly recommend New Covenant Home Services!",
    project: "Exterior Services"
  },
  {
    name: "Jim & Myrtice M.",
    rating: 5,
    comment: "Was prompt, polite, professional. Was very satisfied.",
    project: "Exterior Services"
  },
  {
    name: "Joni G.",
    rating: 5,
    comment: "Great experience all around! Very professional. Had deck stained, 4 rooms painted. Job done professionally, on time and at a fair price. Hard to find integrity, pride in work and honesty these days and I would highly recommend this company!",
    project: "Interior & Exterior Services"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-white/70 text-sm font-medium">5.0 Average Rating</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 min-h-[100px]">
              "{testimonials[currentIndex].comment}"
            </blockquote>
            
            {/* Author */}
            <div>
              <p className="font-display font-semibold text-white text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gold-400/80 text-sm">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-400 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
