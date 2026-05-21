import TestimonialCarousel from "../ui/TestimonialCarousel";
import { Star, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-primary-light py-24 border-t border-beige relative z-20 overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Patient Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark">
            Trusted by Patients Seeking Natural Elegance
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-2" />
        </div>

        {/* Rating Metrics Badge row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-sm text-primary-dark">
          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gold/15 shadow-sm">
            <span className="font-bold text-base">5.0</span>
            <div className="flex text-gold">
              <Star className="fill-gold" size={14} />
              <Star className="fill-gold" size={14} />
              <Star className="fill-gold" size={14} />
              <Star className="fill-gold" size={14} />
              <Star className="fill-gold" size={14} />
            </div>
            <span className="text-slate/85 text-xs">(Google Reviews)</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gold/15 shadow-sm">
            <CheckCircle className="text-gold" size={16} />
            <span className="font-sans font-bold text-xs uppercase tracking-wide">
              100% Physician Performed
            </span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />

      </div>
    </section>
  );
}
