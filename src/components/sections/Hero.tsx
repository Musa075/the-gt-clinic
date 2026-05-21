"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Award, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark text-primary-light min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-15">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        {/* Dark radial gradient overlay for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-light to-transparent opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Top Certification Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Award size={14} className="text-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-gold font-sans">
                Triple Board-Certified Physician Led
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
              >
                Elevated Medicine.<br />
                <span className="text-gold-gradient italic font-medium">Regenerative Aesthetics.</span><br />
                Personalized Care.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-sans leading-relaxed"
              >
                Physician-led aesthetic and functional medicine in Marlton, New Jersey, designed to restore your vitality, confidence, and metabolic longevity from the inside out.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-dark hover:text-primary-light font-sans text-sm tracking-wider uppercase font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 border border-gold hover:border-gold-dark cursor-pointer"
              >
                <Calendar size={16} />
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-primary-light font-sans text-sm tracking-wider uppercase font-semibold py-4 px-8 rounded-full border border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
              >
                Explore Treatments
                <ChevronRight size={16} className="text-gold" />
              </Link>
            </motion.div>

            {/* Sub-Hero Micro-Trust Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <Star size={16} className="fill-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary-light">5-Star Rated</p>
                  <p className="text-[10px] text-white/60">Patient Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary-light">Columbia Trained</p>
                  <p className="text-[10px] text-white/60">Dr. Ghazala Farooqui, MD</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <span className="font-serif font-bold text-sm text-gold">20+</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary-light">20+ Years Exp</p>
                  <p className="text-[10px] text-white/60">Clinical Excellence</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Optional Right-Side Stylized Box (e.g. concierge card highlight) */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card-dark rounded-2xl p-8 space-y-6 border border-gold/25 hover:border-gold/50 shadow-2xl relative transition-luxury hover:shadow-gold/5 group"
            >
              {/* Decorative accent gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
              
              <div className="space-y-2">
                <span className="font-serif italic text-gold text-lg block">The Concierge Experience</span>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">Patient-First Rejuvenation</h3>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                We reject standard, assembly-line medical treatments. Every consultation is conducted by Dr. Farooqui, developing custom plans targeting cellular age, gut health, and structural aesthetics.
              </p>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] uppercase tracking-wider text-gold font-bold">
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
