"use client";

import TestimonialCarousel from "../ui/TestimonialCarousel";
import { Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="bg-primary-light py-24 sm:py-32 border-t border-beige relative z-20 overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-extrabold text-gold font-sans block"
          >
            Patient Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark"
          >
            Trusted by Patients Seeking Natural Elegance
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-16 bg-gold mx-auto mt-2 origin-center" 
          />
        </div>

        {/* Rating Metrics Badge row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-sm text-primary-dark"
        >
          <div className="flex items-center gap-2.5 bg-white px-6 py-3.5 rounded-full border border-gold/15 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="font-bold text-base text-primary-dark">5.0</span>
            <div className="flex text-gold">
              <Star className="fill-gold text-gold" size={14} />
              <Star className="fill-gold text-gold" size={14} />
              <Star className="fill-gold text-gold" size={14} />
              <Star className="fill-gold text-gold" size={14} />
              <Star className="fill-gold text-gold" size={14} />
            </div>
            <span className="text-slate/60 text-xs font-sans font-medium">(120+ Google Reviews)</span>
          </div>

          <div className="flex items-center gap-2.5 bg-white px-6 py-3.5 rounded-full border border-gold/15 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CheckCircle className="text-gold" size={16} />
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-primary-dark">
              100% Physician Performed
            </span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <TestimonialCarousel />
        </motion.div>

      </div>
    </section>
  );
}
