"use client";

import { useState } from "react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import { Sparkles, Hourglass, Smile, CheckCircle2 } from "lucide-react";

export default function AestheticShowcase() {
  const [activeTab, setActiveTab] = useState<'skin' | 'lips' | 'wrinkles'>('skin');

  const galleryItems = {
    skin: {
      before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      title: "Skin Resurfacing & Collagen induction",
      desc: "Treatment of uneven texture, scarring, and hyperpigmentation through physician-guided microneedling & exosomes.",
      recovery: "24-48 hours",
      sessions: "3 sessions recommended",
      results: "Visible improvement in texture in 2 weeks; progressive collagen remodeling over 6 months."
    },
    lips: {
      before: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
      title: "Hyaluronic Acid Volumization",
      desc: "Subtle volume restoration and contour balancing of the lips and midface, avoiding overfilling.",
      recovery: "1-2 days",
      sessions: "1 session",
      results: "Immediate volume increase; swelling settles in 7-14 days. Lasts 9-12 months."
    },
    wrinkles: {
      before: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      after: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
      title: "Neuromodulator Fine Line Smoothing",
      desc: "Soften dynamic expression creases on the forehead and crow's feet using precision injection patterns.",
      recovery: "0 hours",
      sessions: "1 session every 3-4 months",
      results: "Soften lines in 3-5 days; full relaxation in 14 days. Lasts 3-4 months."
    }
  };

  const current = galleryItems[activeTab];

  return (
    <section className="bg-primary-dark text-primary-light py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Clinical Artistry Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Aesthetic Transformations
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-2" />
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every before & after showcases realistic, natural results. We focus on structural restoration and skin quality, avoiding artificial looks.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {(Object.keys(galleryItems) as Array<keyof typeof galleryItems>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === key
                  ? "bg-gold border-gold text-primary-dark shadow-[0_0_15px_rgba(200,169,107,0.25)]"
                  : "bg-white/5 border-white/10 hover:border-gold hover:bg-white/10 text-white"
              }`}
            >
              {key === 'skin' && "Skin Texture"}
              {key === 'lips' && "Lip Rejuvenation"}
              {key === 'wrinkles' && "Wrinkle Relaxers"}
            </button>
          ))}
        </div>

        {/* Comparison grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Slider */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={current.before}
              afterImage={current.after}
              beforeLabel="Before Treatment"
              afterLabel="After Treatment"
              className="shadow-2xl border-white/10"
            />
          </div>

          {/* Right Column: Treatment Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-serif italic text-gold text-lg block">Clinical Analysis</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {current.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Timelines and Expectations */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-start gap-3">
                <Smile className="text-gold mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Recovery Profile</p>
                  <p className="text-white/60 mt-0.5 text-xs">Downtime: {current.recovery}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Hourglass className="text-gold mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Sessions Timeline</p>
                  <p className="text-white/60 mt-0.5 text-xs">{current.sessions}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Expected Outcomes</p>
                  <p className="text-white/60 mt-0.5 text-xs leading-relaxed">{current.results}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
