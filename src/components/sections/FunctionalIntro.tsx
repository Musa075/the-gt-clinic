"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Activity, ShieldCheck, Flame, Scale, ChevronRight } from "lucide-react";

export default function FunctionalIntro() {
  const pillars = [
    {
      icon: <Leaf size={24} className="text-sage" />,
      title: "Gut Microbiome Health",
      desc: "Rebalancing digestive flora to resolve systemic inflammation, skin conditions, and optimize nutrient absorption."
    },
    {
      icon: <Activity size={24} className="text-sage" />,
      title: "Hormonal Balance",
      desc: "Optimizing thyroid, adrenal (cortisol), and reproductive hormones (BHRT) to restore natural vitality and focus."
    },
    {
      icon: <Flame size={24} className="text-sage" />,
      title: "Inflammation Control",
      desc: "Identifying hidden food sensitivities, toxicities, and immune triggers to calm systemic inflammation."
    },
    {
      icon: <Scale size={24} className="text-sage" />,
      title: "Metabolic Optimization",
      desc: "Addressing insulin resistance, regulating blood sugar levels, and optimizing cellular energy output."
    },
    {
      icon: <ShieldCheck size={24} className="text-sage" />,
      title: "Longevity & Vitality",
      desc: "Creating personalized anti-aging blueprints focused on DNA protection, cellular repair, and cardiovascular health."
    }
  ];

  return (
    <section className="bg-primary-light py-24 border-t border-beige relative z-20">
      {/* Visual background details */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
              Root-Cause Healthcare
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark">
              Functional Medicine:<br />
              Healing from the Inside Out
            </h2>
            <div className="h-0.5 w-16 bg-gold mt-2" />
          </div>
          <div className="lg:col-span-5 text-slate text-sm sm:text-base leading-relaxed">
            <p>
              Standard medicine often treats symptoms in isolation. We look at the body as an interconnected system. 
              By finding and resolving cellular-level imbalances, we trigger lasting health, glowing skin, and renewed energy.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Static introduction card with Sage Green highlight */}
          <div className="bg-sage/10 rounded-2xl p-8 border border-sage/20 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="font-serif italic text-gold text-lg block">The Wellness Paradigm</span>
              <h3 className="font-serif text-2xl font-bold text-primary-dark leading-tight">
                Beyond Symptom Management
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Our functional medicine program targets the root biological triggers of disease and aging. We use specialty labs to build personalized clinical blueprints.
              </p>
            </div>
            <div>
              <Link
                href="/services/functional-medicine"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-primary-dark hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                Explore Protocol
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Pillars List */}
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gold/10 hover:border-gold/25 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-primary-dark">
                {pillar.title}
              </h4>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
