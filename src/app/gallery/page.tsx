"use client";

import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Sparkles, Calendar, Heart, ShieldCheck } from "lucide-react";

export default function GalleryPage() {
  const cases = [
    {
      id: "case-skin-resurfacing",
      title: "Skin Resurfacing & Hyperpigmentation Reversion",
      before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      treatment: "Medical Microneedling + Exosome Infusion",
      notes: "Patient presented with post-inflammatory hyperpigmentation and fine texture loss. Post-treatment image shows the result after 3 sessions spaced 4 weeks apart.",
      downtime: "24 Hours (minimal erythema)",
      maintenance: "Every 6 months"
    },
    {
      id: "case-lip-volumization",
      title: "Natural Hyaluronic Acid Lip Restoration",
      before: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
      treatment: "Artistic Dermal Filler Injection",
      notes: "Designed to restore structural volume loss and redefine the vermillion border. We avoided overfilling, maintaining a balanced ratio and soft, natural contours.",
      downtime: "1-2 Days (mild temporary swelling)",
      maintenance: "9-12 Months"
    },
    {
      id: "case-fine-lines",
      title: "Neuromodulator Fine Line Smoothing",
      before: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
      treatment: "Botox Cosmetics Injection Pattern",
      notes: "Targeting dynamic forehead creases and frown lines. The patient retains complete capability for natural expression while static wrinkles are smoothed.",
      downtime: "None (zero recovery)",
      maintenance: "3-4 Months"
    }
  ];

  return (
    <main className="bg-primary-light min-h-screen pb-20">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/gallery-hero.png')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Clinical Artistry Gallery
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Transformative Results
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore authentic before-and-after comparisons. We focus on restoring structure and healthy cellular aging, avoiding exaggerated or artificial alterations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* Dynamic Case Comparisons */}
        <div className="space-y-24">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gold/10 pb-20 last:border-b-0`}
            >
              {/* Slider View */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  beforeLabel="Before Treatment"
                  afterLabel="After Treatment"
                />
              </div>

              {/* Clinical Notes View */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold uppercase font-bold tracking-wider">
                    <Sparkles size={14} />
                    <span>Case Review</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate/90">
                    Primary Protocol: <span className="text-primary-dark">{item.treatment}</span>
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-sm text-sm text-slate space-y-4 leading-relaxed font-sans">
                  <p>{item.notes}</p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-beige pt-4 text-xs font-semibold uppercase tracking-wider text-slate/80">
                    <div>
                      <p className="text-[10px] text-slate/60">Downtime</p>
                      <p className="text-primary-dark mt-0.5">{item.downtime}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate/60">Maintenance Interval</p>
                      <p className="text-primary-dark mt-0.5">{item.maintenance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-16 text-center space-y-6 bg-primary-dark text-white rounded-3xl p-8 border border-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-serif text-2xl font-bold text-white">Ready to begin your transformation?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Every patient's facial anatomy is unique. Schedule a detailed consultation with Dr. Farooqui to build a personalized rejuvenation blueprint.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow cursor-pointer"
            >
              Request Consultation
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
