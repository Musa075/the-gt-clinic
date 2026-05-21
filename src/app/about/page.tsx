"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const pageVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <main className="bg-primary-light min-h-screen">
      {/* 1. Header Hero */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Meet the Director
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Dr. Ghazala Farooqui, MD
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Triple Board-Certified Physician specializing in aesthetic precision and cellular longevity.
          </p>
        </div>
      </section>

      {/* 2. Portrait and Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-gold/15 group">
              <Image
                src="/images/dr_farooqui_portrait_v2.png"
                alt="Dr. Ghazala Farooqui, MD"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="font-serif text-xl font-bold">Dr. Ghazala Farooqui, MD</p>
                <p className="text-xs uppercase tracking-widest text-gold font-medium">Columbia University Trained</p>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 rounded-br-3xl pointer-events-none" />
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans block">
                Executive Biography & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight leading-tight">
                Where Elite Medical Training Meets Restorative Aesthetic Artistry
              </h2>
            </div>
            
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              Dr. Ghazala Farooqui, MD, is a highly distinguished, triple board-certified physician who has spent over two decades practicing clinical medicine. Having completed her advanced residency and fellowship training within the prestigious <strong>Columbia University hospital system</strong>, Dr. Farooqui brings a level of rigorous diagnostic science to aesthetics and wellness that is exceedingly rare in the industry.
            </p>
            
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              Her transition into integrative functional medicine and regenerative aesthetics was born out of a desire to provide a higher standard of care. At GT Clinic, Dr. Farooqui combines root-cause disease resolution with sophisticated, subtle cosmetic procedures, ensuring that your external vitality is a true reflection of your internal health.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <Award className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif font-bold text-primary-dark text-base">Triple Board Certified</h4>
                  <p className="text-xs text-slate mt-1">Internal Medicine, Pulmonary Disease, and Sleep Medicine credentials.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif font-bold text-primary-dark text-base">Columbia System Trained</h4>
                  <p className="text-xs text-slate mt-1">Advanced training within one of the world's most rigorous medical institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credentials & Boards Highlights */}
      <section className="bg-white py-24 border-y border-beige relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark">
              Clinical Background & Accreditation
            </h2>
            <div className="h-0.5 w-16 bg-gold mx-auto" />
            <p className="text-sm text-slate">
              A record of academic and clinical excellence ensuring the highest level of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-primary-light border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-dark">Board Certifications</h3>
              <ul className="space-y-2 text-xs text-slate font-sans leading-relaxed list-disc list-inside">
                <li>American Board of Internal Medicine</li>
                <li>Subspecialty Board of Pulmonary Disease</li>
                <li>Subspecialty Board of Sleep Medicine</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-primary-light border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-dark">Education & Training</h3>
              <ul className="space-y-2 text-xs text-slate font-sans leading-relaxed list-disc list-inside">
                <li>Columbia University Fellowship Training</li>
                <li>Advanced Aesthetic Medicine Certifications</li>
                <li>Institute for Functional Medicine Training</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-primary-light border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-dark">Integrative Approach</h3>
              <ul className="space-y-2 text-xs text-slate font-sans leading-relaxed list-disc list-inside">
                <li>Physician-performed cosmetic injections</li>
                <li>Root-cause cellular aging therapies</li>
                <li>HIPAA-compliant, highly secure data standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars / Clinic Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">The GT Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark leading-tight">
              A Luxury Sanctuary Built on Rigorous Science
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              We believe that true aesthetic beauty cannot exist in a state of internal decline. Our clinic is designed for individuals who refuse to settle for standard treatments. We provide a calm, elegant environment where your care is managed directly by a physician.
            </p>
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              From utilizing cellular messaging molecules like exosomes to conducting detailed panels on your gut microbiome, we design customized blueprints that optimize health and aesthetics in tandem.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-dark text-white hover:bg-gold hover:text-primary-dark font-sans text-xs tracking-wider uppercase font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow"
              >
                Schedule A Visit
                <ArrowRight size={14} className="text-gold" />
              </a>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-beige">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
              alt="Luxury clinical room"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
