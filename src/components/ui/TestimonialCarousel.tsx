"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const current = testimonialsData[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12 py-8">
      {/* Background Quote Mark */}
      <div className="absolute top-0 left-6 text-beige/50 pointer-events-none">
        <Quote size={120} className="stroke-[0.5] opacity-20" />
      </div>

      <div className="relative overflow-hidden min-h-[280px] sm:min-h-[220px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full text-center space-y-6"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-primary-dark leading-relaxed max-w-3xl mx-auto">
              "{current.quote}"
            </p>

            {/* Author details */}
            <div className="space-y-1">
              <h4 className="font-sans font-bold text-sm tracking-widest text-primary-dark uppercase">
                {current.name}
              </h4>
              <p className="text-xs tracking-wider text-slate">
                {current.location} <span className="text-gold/60 mx-2">•</span> <span className="font-serif italic font-medium text-gold">{current.treatment}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={prevTestimonial}
          className="w-12 h-12 rounded-full border border-gold/30 hover:border-gold flex items-center justify-center text-primary-dark hover:text-gold transition-colors duration-300 shadow-sm hover:bg-white cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-6 bg-gold" : "bg-gold/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="w-12 h-12 rounded-full border border-gold/30 hover:border-gold flex items-center justify-center text-primary-dark hover:text-gold transition-colors duration-300 shadow-sm hover:bg-white cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
