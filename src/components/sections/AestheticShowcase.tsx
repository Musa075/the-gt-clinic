"use client";

import { useState } from "react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import { Sparkles, Hourglass, Smile, CheckCircle2, User, Target, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AestheticShowcase() {
  const [activeTab, setActiveTab] = useState<'skin' | 'lips' | 'wrinkles'>('skin');

  const galleryItems = {
    skin: {
      before: "/images/gallery-skin-before.png",
      after: "/images/gallery-skin-after.png",
      title: "Skin Resurfacing & Collagen Induction",
      desc: "Comprehensive skin rejuvenation targeting acne scarring, solar lentigines, and micro-textural laxity using physician-guided medical microneedling and bioactive exosome therapy.",
      recovery: "24 - 48 Hours",
      sessions: "3 Sessions (spaced 4 weeks apart)",
      results: "Visible refinement within 14 days, with progressive dermal remodeling and neocollagenesis over 6 months.",
      patient: "Female, Age 34",
      concern: "Post-inflammatory scarring & epidermal unevenness",
      target: "Full Face"
    },
    lips: {
      before: "/images/lips-before.png",
      after: "/images/lips-after.png",
      title: "Hyaluronic Acid Volumization",
      desc: "Artful volume restoration and structural definition utilizing micro-droplet dermal filler techniques to achieve precise contour balance while maintaining natural dynamic mobility.",
      recovery: "1 - 2 Days (Mild swelling)",
      sessions: "1 Session (Maintenance as desired)",
      results: "Instant structural restoration; full integration and swelling resolution within 7-14 days. Lasts 9-12 months.",
      patient: "Female, Age 28",
      concern: "Lip asymmetry & volume loss in vermilion border",
      target: "Vermilion Border & Body"
    },
    wrinkles: {
      before: "/images/forehead-before.jpg",
      after: "/images/forehead-after.png",
      title: "Neuromodulator Fine Line Smoothing",
      desc: "Targeted administration of high-purification wrinkle relaxers to selectively relax hyperactive expression muscles, smoothing forehead furrows and softening periorbital lines.",
      recovery: "Zero Downtime",
      sessions: "1 Session (Every 3-4 months)",
      results: "Initial softening within 3-5 days; optimal dynamic muscle relaxation at 14 days. Sustained results for 3-4 months.",
      patient: "Female, Age 42",
      concern: "Moderate-to-severe frontalis dynamic lines",
      target: "Forehead & Glabella"
    }
  };

  const current = galleryItems[activeTab];

  return (
    <section className="bg-primary-dark text-primary-light py-24 sm:py-32 relative z-20 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-gold font-sans block">
            Clinical Artistry Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Aesthetic Transformations
          </h2>
          <div className="h-0.5 w-16 bg-gold/80 mx-auto mt-2" />
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Every before & after showcases realistic, natural results. We focus on anatomical restoration, skin health, and subtle refinement to preserve your unique identity.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {(Object.keys(galleryItems) as Array<keyof typeof galleryItems>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === key
                  ? "bg-gold border-gold text-primary-dark shadow-[0_4px_20px_rgba(200,169,107,0.3)] scale-[1.03]"
                  : "bg-white/5 border-white/10 hover:border-gold/50 hover:bg-white/10 text-white"
              }`}
            >
              {key === 'skin' && "Skin Texture"}
              {key === 'lips' && "Lip Rejuvenation"}
              {key === 'wrinkles' && "Wrinkle Relaxers"}
            </button>
          ))}
        </div>

        {/* Comparison grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Slider */}
          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <BeforeAfterSlider
                  beforeImage={current.before}
                  afterImage={current.after}
                  beforeLabel="Baseline"
                  afterLabel="Post-Treatment"
                  className="shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Treatment Details */}
          <div className="lg:col-span-5 xl:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.02] border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl relative overflow-hidden shadow-2xl"
              >
                {/* Micro glow element */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-serif italic text-gold text-lg block font-medium">Clinical Profile</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-sans mt-3">
                      {current.desc}
                    </p>
                  </div>

                  {/* Patient Info Sub-card */}
                  <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-sans">
                    <div className="space-y-1">
                      <span className="text-white/40 block uppercase tracking-wider text-[9px]">Patient Demographics</span>
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <User size={12} className="text-gold" />
                        <span>{current.patient}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-white/40 block uppercase tracking-wider text-[9px]">Target Anatomical Zone</span>
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <Target size={12} className="text-gold" />
                        <span>{current.target}</span>
                      </div>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-white/5 space-y-1">
                      <span className="text-white/40 block uppercase tracking-wider text-[9px]">Primary Indication</span>
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <ClipboardList size={12} className="text-gold" />
                        <span>{current.concern}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timelines and Expectations */}
                  <div className="space-y-5 pt-2 text-sm font-sans">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                        <Smile className="text-gold" size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-white uppercase tracking-widest text-[10px]">Recovery & Downtime</p>
                        <p className="text-white/60 mt-0.5 text-xs leading-relaxed">{current.recovery}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                        <Hourglass className="text-gold" size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-white uppercase tracking-widest text-[10px]">Treatment Protocol</p>
                        <p className="text-white/60 mt-0.5 text-xs leading-relaxed">{current.sessions}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-gold" size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-white uppercase tracking-widest text-[10px]">Expected Outcomes</p>
                        <p className="text-white/60 mt-0.5 text-xs leading-relaxed">{current.results}</p>
                      </div>
                    </div>
                  </div>

                  {/* Consultation CTA */}
                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="group flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-sans text-xs tracking-wider uppercase font-semibold border border-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 text-gold text-center cursor-pointer shadow-lg shadow-gold/5 hover:shadow-gold/20"
                    >
                      <span>Request Similar Treatment</span>
                      <Sparkles size={14} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

