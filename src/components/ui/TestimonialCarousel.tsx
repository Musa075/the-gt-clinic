"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const getInitials = (name: string) => {
  const cleanName = name.replace("Dr. ", "");
  const parts = cleanName.split(" ");
  return parts
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

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
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const current = testimonialsData[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12 py-8">
      {/* Background Quote Mark */}
      <div className="absolute top-0 left-6 text-beige/50 pointer-events-none">
        <Quote size={120} className="stroke-[0.5] opacity-20" />
      </div>

      <div className="relative overflow-hidden min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full text-center"
          >
            {/* Card wrapper */}
            <div className="bg-white border border-gold/15 p-8 sm:p-12 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] relative overflow-hidden max-w-2xl mx-auto">
              
              {/* Gold light effect on card */}
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col items-center space-y-6">
                {/* Verified Header & Google Review Row */}
                <div className="flex items-center gap-2 text-xs font-sans tracking-wide">
                  <div className="flex text-gold">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-slate/65">•</span>
                  <div className="flex items-center gap-1 text-slate/85 font-medium">
                    <GoogleIcon />
                    <span>Verified Review</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-primary-dark leading-relaxed max-w-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-beige/60 w-full justify-center">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary-dark text-gold font-sans font-bold flex items-center justify-center text-sm border-2 border-gold/30 shadow-md shadow-gold/5">
                    {getInitials(current.name)}
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-sans font-bold text-xs tracking-widest text-primary-dark uppercase">
                      {current.name}
                    </h4>
                    <p className="text-[10px] tracking-wider text-slate mt-0.5 uppercase">
                      {current.location}
                      <span className="text-gold/60 mx-1.5 font-bold">•</span>
                      <span className="font-serif italic font-semibold text-gold normal-case">{current.treatment}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={prevTestimonial}
          className="w-12 h-12 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-primary-dark hover:text-gold transition-all duration-300 shadow-sm hover:bg-white hover:scale-105 active:scale-95 cursor-pointer bg-white/50 backdrop-blur-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
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
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-6 bg-gold" : "w-2 bg-gold/25"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="w-12 h-12 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-primary-dark hover:text-gold transition-all duration-300 shadow-sm hover:bg-white hover:scale-105 active:scale-95 cursor-pointer bg-white/50 backdrop-blur-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
