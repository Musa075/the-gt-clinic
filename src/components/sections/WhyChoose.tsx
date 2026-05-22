"use client";

import { motion } from "framer-motion";
import { UserCheck, Activity, Fingerprint, Sparkles, Crown, Dna } from "lucide-react";

export default function WhyChoose() {
  const differentiators = [
    {
      icon: <UserCheck className="text-gold" size={24} />,
      title: "100% Physician-Performed",
      desc: "Every consultation, clinical decision, and injection is performed exclusively by Dr. Farooqui. We do not delegate your face or wellness to mid-level injectors or remote supervisors."
    },
    {
      icon: <Dna className="text-gold" size={24} />,
      title: "Root-Cause Diagnostics",
      desc: "We look deep beneath surface concerns. By analyzing hormone panels, gut health markers, and inflammatory profiles, we target the cellular root causes of aging and fatigue."
    },
    {
      icon: <Fingerprint className="text-gold" size={24} />,
      title: "Bespoke Clinical Blueprints",
      desc: "No cookie-cutter packages. Your genetic, environmental, and metabolic profile guides a highly customized longevity and aesthetic plan tailored to your body's specific rhythm."
    },
    {
      icon: <Sparkles className="text-gold" size={24} />,
      title: "Natural Aesthetic Artistry",
      desc: "Our clinical philosophy is grounded in subtle anatomical restoration. We respect your natural proportions, restoring lost volume and smoothing dynamic lines without creating an artificial or over-filled look."
    },
    {
      icon: <Crown className="text-gold" size={24} />,
      title: "Concierge Patient Care",
      desc: "Experience unhurried, private appointments in a calm, modern setting. You have direct access to your physician, ensuring thorough follow-ups and complete clinical continuity."
    },
    {
      icon: <Activity className="text-gold" size={24} />,
      title: "Integrative Longevity",
      desc: "We merge advanced aesthetic dermatology with internal functional medicine. True beauty and vitality radiate from the inside out when cellular health and exterior tissue quality are aligned."
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="bg-primary-dark text-primary-light py-24 sm:py-32 relative z-20 overflow-hidden border-t border-b border-white/5">
      {/* Decorative blurred background lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-gold font-sans block">
            The GT Clinic Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Why Discriminating Patients Choose Us
          </h2>
          <div className="h-0.5 w-16 bg-gold/80 mx-auto mt-2" />
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans">
            A premium blend of rigorous medical science, meticulous artistic precision, and absolute patient confidentiality.
          </p>
        </div>

        {/* Differentiators Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/[0.01] border border-white/5 hover:border-gold/25 hover:bg-white/[0.03] p-8 sm:p-10 rounded-3xl transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              {/* Radial gradient hover glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/5 rounded-full blur-[80px] group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {diff.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                    {diff.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
                    {diff.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
