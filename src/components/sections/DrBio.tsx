"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart, GraduationCap, ChevronRight } from "lucide-react";

export default function DrBio() {
  const credentials = [
    {
      icon: <Award className="text-gold" size={20} />,
      title: "Triple Board-Certified",
      desc: "Internal Medicine, Pulmonary Disease, & Sleep Medicine"
    },
    {
      icon: <GraduationCap className="text-gold" size={20} />,
      title: "Columbia University Residency",
      desc: "St. Luke's Hospital (Mount Sinai) training background"
    },
    {
      icon: <ShieldCheck className="text-gold" size={20} />,
      title: "Integrative Specialist",
      desc: "Extensive training in regenerative aesthetics & functional medicine"
    },
    {
      icon: <Heart className="text-gold" size={20} />,
      title: "20+ Years Clinical Practice",
      desc: "Expert practitioner dedicated to safe, physician-performed treatments"
    }
  ];

  return (
    <section className="bg-primary-light py-24 border-t border-beige relative z-20 overflow-hidden">
      {/* Subtle abstract background gold blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait & Credentials Ring */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-gold/25 group">
              <Image
                src="/images/dr_farooqui_portrait_v2.png"
                alt="Dr. Ghazala Farooqui, MD"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gold/20 shadow-lg">
                <p className="font-serif text-lg font-bold text-primary-dark">Dr. Ghazala Farooqui, MD</p>
                <p className="text-[10px] uppercase tracking-wider text-gold font-sans font-bold mt-0.5">
                  Medical Director & Founder
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
                Meet the Physician
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark leading-tight">
                Combining Academic Precision with Aesthetic Artistry
              </h2>
              <div className="h-0.5 w-16 bg-gold mt-2" />
            </div>

            <div className="space-y-4 text-slate text-sm sm:text-base leading-relaxed">
              <p>
                Unlike generic med-spas or franchise chains supervised by remote directors, GT Clinic represents a standard of concierge, physician-led medicine. 
                <strong> Dr. Ghazala Farooqui, MD</strong>, personally conducts every consultation and performs every clinical procedure, providing absolute peace of mind.
              </p>
              <p>
                Dr. Farooqui completed her medical residency at <strong>Columbia University St. Luke's Hospital</strong> in New York. A triple board-certified physician with over two decades of clinical experience, she combines rigorous clinical logic with specialized expertise in integrative wellness, longevity, and natural-looking facial balancing.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-beige/35 border border-gold/20 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-primary-dark">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-xs tracking-wider uppercase font-bold py-3.5 px-7 rounded-full shadow-md transition-all duration-300 border border-primary-dark hover:border-gold cursor-pointer"
              >
                Learn More About Dr. Farooqui
                <ChevronRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
