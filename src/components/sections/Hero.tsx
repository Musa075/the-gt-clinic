"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Award, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark text-primary-light min-h-[92vh] flex items-center overflow-hidden py-24 sm:py-32 lg:py-20 grain-overlay">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1.0, opacity: 0.45 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        {/* Gradients and Luxury Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/40" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary-light to-transparent opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-8 space-y-10 text-left">
            
            {/* Top Certification Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-5 py-2.5 rounded-full backdrop-blur-md shadow-inner"
            >
              <Award size={14} className="text-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-gold font-sans">
                Triple Board-Certified Physician Led
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
              >
                Elevated Medicine.<br />
                <span className="text-gold-gradient italic font-medium">Regenerative Aesthetics.</span><br />
                Personalized Care.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-sans leading-relaxed"
              >
                Physician-led aesthetic and functional medicine in Marlton, New Jersey, designed to restore your vitality, confidence, and metabolic longevity from the inside out.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4.5 px-9 rounded-full shadow-[0_4px_20px_rgba(200,169,107,0.3)] transition-all duration-300 border border-gold hover:border-gold-dark hover:scale-[1.02] cursor-pointer"
              >
                <Calendar size={16} />
                Book Your Consultation
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-primary-light font-sans text-xs tracking-wider uppercase font-semibold py-4.5 px-9 rounded-full border border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
              >
                Speak With Our Team
                <ChevronRight size={16} className="text-gold" />
              </Link>
            </motion.div>

            {/* Sub-Hero Micro-Trust Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-3xl"
            >
              {[
                {
                  icon: <Star size={16} className="fill-gold text-gold" />,
                  title: "5-Star Rated",
                  subtitle: "Patient Satisfaction",
                  delay: 0.4
                },
                {
                  icon: <ShieldCheck size={16} className="text-gold" />,
                  title: "Columbia Trained",
                  subtitle: "Dr. Ghazala Farooqui, MD",
                  delay: 0.5
                },
                {
                  icon: <span className="font-serif font-bold text-sm text-gold">20+</span>,
                  title: "20+ Years Exp",
                  subtitle: "Clinical Excellence",
                  delay: 0.6
                }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: badge.delay }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0 shadow-inner">
                    {badge.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary-light">{badge.title}</p>
                    <p className="text-[10px] text-white/60 mt-0.5">{badge.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Concierge Highlight Card: Stacked on Mobile, Right side on Desktop */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="glass-card-dark rounded-3xl p-8 sm:p-10 space-y-6 border border-gold/20 hover:border-gold/45 shadow-2xl relative transition-luxury hover:shadow-gold/10 group"
            >
              {/* Decorative accent gradient */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/25 transition-all duration-500" />
              
              <div className="space-y-3">
                <span className="font-serif italic text-gold text-lg block">The Concierge Experience</span>
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">Patient-First Rejuvenation</h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                We reject standard, assembly-line medical treatments. Every consultation is conducted directly by Dr. Farooqui, developing custom plans targeting cellular age, gut health, and structural aesthetics.
              </p>
              <div className="border-t border-white/10 pt-5 flex justify-between items-center text-[10px] uppercase tracking-wider text-gold font-bold">
                <span>Personalized Blueprints</span>
                <span>•</span>
                <span>Natural Results</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
