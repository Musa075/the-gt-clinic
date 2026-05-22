"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData, Service } from "@/data/services";
import { Sparkles, Activity, Clock, ShieldCheck, ChevronRight } from "lucide-react";

export default function ServicesGrid() {
  const [filter, setFilter] = useState<'all' | 'aesthetics' | 'functional' | 'regenerative'>('all');

  const filteredServices = servicesData.filter(
    (service) => filter === 'all' || service.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="bg-primary-light py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Signature Care Blueprints
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark">
            Our Medical & Rejuvenation Services
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-2" />
          <p className="text-sm sm:text-base text-slate max-w-2xl mx-auto leading-relaxed">
            Every clinical treatment is performed by Dr. Farooqui, combining state-of-the-art aesthetic artistry with root-cause longevity therapies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {[
            { id: "all", name: "All Treatments", icon: null },
            { id: "aesthetics", name: "Aesthetic Medicine", icon: <Sparkles size={14} /> },
            { id: "functional", name: "Functional Medicine", icon: <Activity size={14} /> },
            { id: "regenerative", name: "Regenerative Therapies", icon: <ShieldCheck size={14} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {filteredServices.map((service: Service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-3xl overflow-hidden border-gold-glow shadow-sm hover:shadow-[0_20px_50px_rgba(200,169,107,0.12)] transition-luxury flex flex-col group relative"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-[1.04]"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent opacity-60 pointer-events-none" />
                
                {/* Category Pill overlay */}
                <div className="absolute top-5 left-5 bg-primary-dark/90 backdrop-blur-md text-gold text-[9px] uppercase tracking-[0.2em] font-bold py-2 px-4 rounded-full border border-gold/35 shadow-lg">
                  {service.category === 'aesthetics' && "Aesthetic Medicine"}
                  {service.category === 'functional' && "Functional Medicine"}
                  {service.category === 'regenerative' && "Regenerative Aesthetics"}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-primary-dark group-hover:text-gold transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Micro details bar */}
                <div className="border-t border-beige pt-5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate/75 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-gold" />
                    {service.duration}
                  </span>
                  <span>•</span>
                  <span>Downtime: {service.downtime.split(" ")[0]}</span>
                </div>

                {/* Learn More link */}
                <div className="pt-2 border-t border-beige/40">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-bold text-primary-dark hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <span>Explore Treatment</span>
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 6 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-block"
                    >
                      <ChevronRight size={14} className="text-gold" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
