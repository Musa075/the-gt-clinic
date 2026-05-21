"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData, Service } from "@/data/services";
import { Sparkles, Activity, ShieldCheck, Clock, ChevronRight } from "lucide-react";

const heroContent = {
  all: {
    tagline: "The Treatment Suite",
    title: "Clinical Services & Therapies",
    desc: "Every clinical procedure, injection, and diagnostics consult is personally directed and performed by Dr. Farooqui. We target root-cause health systems and cosmetic balance.",
    bg: "/images/services-hero.png"
  },
  aesthetics: {
    tagline: "Aesthetic Medicine",
    title: "Artistic Aesthetics & Youth Preservation",
    desc: "Experience natural, physician-administered aesthetic enhancements. From Botox to PRP and premium dermal fillers, restore your skin's structural volume and natural balance.",
    bg: "/images/aesthetics-hero.png"
  },
  functional: {
    tagline: "Functional Medicine",
    title: "Root-Cause Diagnostics & Vitality",
    desc: "Uncover and treat the underlying causes of cellular aging and disease. Through comprehensive testing and custom health designs, optimize your internal systems for peak performance.",
    bg: "/images/functional-hero.png"
  },
  regenerative: {
    tagline: "Regenerative Aesthetics",
    title: "Exosomes & Advanced Tissue Repair",
    desc: "Harness cellular signaling, platelet-rich plasma, and modern exosome infusions to accelerate natural healing, structural restoration, and biological tissue regeneration.",
    bg: "/images/regenerative-hero.png"
  }
};

export default function ServicesPage() {
  const [filter, setFilter] = useState<'all' | 'aesthetics' | 'functional' | 'regenerative'>('all');

  const filteredServices = servicesData.filter(
    (service) => filter === 'all' || service.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <main className="bg-primary-light min-h-screen pb-24">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url('${heroContent[filter].bg}')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block animate-pulse">
            {heroContent[filter].tagline}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight transition-all duration-500">
            {heroContent[filter].title}
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed transition-all duration-500">
            {heroContent[filter].desc}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* Filter Categories */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-16 flex-wrap">
          {[
            { id: "all", name: "All Treatments", icon: null },
            { id: "aesthetics", name: "Aesthetic Medicine", icon: <Sparkles size={14} /> },
            { id: "functional", name: "Functional Medicine", icon: <Activity size={14} /> },
            { id: "regenerative", name: "Regenerative Aesthetics", icon: <ShieldCheck size={14} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                filter === tab.id
                  ? "bg-primary-dark border-primary-dark text-primary-light shadow-md"
                  : "bg-white border-beige hover:border-gold text-primary-dark"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service: Service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-sm text-gold text-[10px] uppercase tracking-widest font-semibold py-1.5 px-3.5 rounded-full border border-gold/25">
                  {service.category === 'aesthetics' && "Aesthetics"}
                  {service.category === 'functional' && "Functional"}
                  {service.category === 'regenerative' && "Regenerative"}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="border-t border-beige pt-4 flex justify-between items-center text-[10px] uppercase tracking-wider text-slate font-medium">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gold" />
                    {service.duration}
                  </span>
                  <span>•</span>
                  <span>Downtime: {service.downtime.split(" ")[0]}</span>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-primary-dark hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    Explore Treatment
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}
