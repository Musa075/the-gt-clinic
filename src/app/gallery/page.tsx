"use client";

import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Sparkles, Clock, RefreshCw } from "lucide-react";

export default function GalleryPage() {
  const cases = [
    {
      id: "case-skin-resurfacing",
      title: "Skin Resurfacing & Hyperpigmentation Reversion",
      before: "/images/gallery-skin-before.png",
      after: "/images/gallery-skin-after.png",
      treatment: "Medical Microneedling + Exosome Infusion",
      notes:
        "Patient presented with post-inflammatory hyperpigmentation and fine texture loss across the mid-cheek zone. Post-treatment images show results after 3 sessions spaced 4 weeks apart — note the dramatic reduction in dark spots and restoration of a smooth, luminous skin surface.",
      downtime: "24 Hours",
      downtimeDetail: "Minimal erythema only",
      maintenance: "Every 6 months",
      sessions: "3 Sessions",
      outcomeLabel: "Dramatic pigmentation clearance",
    },
    {
      id: "case-lip-volumization",
      title: "Natural Hyaluronic Acid Lip Restoration",
      before:
        "/images/lips-before.png",
      after:
        "/images/lips-after.png",
      treatment: "Artistic Dermal Filler Injection",
      notes:
        "Designed to restore structural volume loss and redefine the vermillion border while maintaining anatomic proportion. We avoided overfilling, preserving a balanced ratio and achieving soft, natural contours that enhance — not exaggerate — the patient's natural lip shape.",
      downtime: "1–2 Days",
      downtimeDetail: "Mild temporary swelling",
      maintenance: "9–12 Months",
      sessions: "Single Session",
      outcomeLabel: "Natural volume & contour",
    },
    {
      id: "case-fine-lines",
      title: "Neuromodulator Fine Line Smoothing",
      before:
        "/images/forehead-before.jpg",
      after:
        "/images/forehead-after.png",
      treatment: "Botox Cosmetic Injection Pattern",
      notes:
        "Targeting dynamic forehead creases and frown lines with precise placement mapping. The patient retains complete capability for natural expression while static wrinkles are smoothed — achieving a refreshed, rested appearance without the tell-tale 'frozen' look.",
      downtime: "None",
      downtimeDetail: "Zero recovery required",
      maintenance: "3–4 Months",
      sessions: "Single Session",
      outcomeLabel: "Refreshed without frozen",
    },
  ];

  return (
    <main className="bg-primary-light min-h-screen">
      {/* ── 1. Hero Banner ── */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden">
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
            Explore authentic before-and-after comparisons. We focus on
            restoring structure and healthy cellular aging, avoiding exaggerated
            or artificial alterations.
          </p>
        </div>
      </section>

      {/* ── 2. Instructions strip ── */}
      <div className="bg-primary-dark/5 border-b border-gold/10 py-3 px-4 text-center">
        <p className="text-xs text-slate/70 font-sans uppercase tracking-widest">
          <span className="text-gold font-semibold">◈ Interactive:</span> Drag
          the slider on each case to reveal the treatment difference
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24">
        {/* ── 3. Case Studies ── */}
        <div className="space-y-28">
          {cases.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start border-b border-gold/10 pb-24 last:border-b-0 last:pb-0"
            >
              {/* ── Visual Column ── */}
              <div
                className={`lg:col-span-7 space-y-5 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* Interactive Drag Slider */}
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 bg-primary-dark/90 text-gold text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-gold/30 backdrop-blur-sm shadow-lg whitespace-nowrap">
                    ⟵ Drag to Compare ⟶
                  </div>
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="Before Treatment"
                    afterLabel="After Treatment"
                  />
                </div>

              </div>

              {/* ── Clinical Notes Column ── */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold uppercase font-bold tracking-wider">
                    <Sparkles size={13} />
                    <span>Case {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight leading-tight">
                    {item.title}
                  </h2>
                  <div className="h-px w-10 bg-gold/50" />
                  <p className="text-xs font-semibold text-slate/70 uppercase tracking-wider">
                    Protocol:{" "}
                    <span className="text-primary-dark normal-case tracking-normal text-sm font-medium">
                      {item.treatment}
                    </span>
                  </p>
                </div>

                {/* Clinical notes card */}
                <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-sm space-y-5">
                  <p className="text-sm text-slate leading-relaxed font-sans">
                    {item.notes}
                  </p>

                  <div className="border-t border-beige pt-5 grid grid-cols-2 gap-4">
                    {/* Downtime */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate/50 uppercase tracking-wider font-semibold">
                        <Clock size={10} className="text-gold" />
                        Downtime
                      </div>
                      <p className="text-sm font-bold text-primary-dark">
                        {item.downtime}
                      </p>
                      <p className="text-[11px] text-slate/60">
                        {item.downtimeDetail}
                      </p>
                    </div>

                    {/* Maintenance */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate/50 uppercase tracking-wider font-semibold">
                        <RefreshCw size={10} className="text-gold" />
                        Maintenance
                      </div>
                      <p className="text-sm font-bold text-primary-dark">
                        {item.maintenance}
                      </p>
                      <p className="text-[11px] text-slate/60">
                        {item.sessions}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Treatment CTA */}
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary-dark hover:text-gold transition-colors duration-300"
                >
                  <span>Discuss this treatment</span>
                  <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── 4. Gallery CTA ── */}
        <div className="mt-20 relative bg-primary-dark text-white rounded-3xl p-10 sm:p-14 border border-gold/20 overflow-hidden text-center space-y-5">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/8 rounded-full blur-2xl pointer-events-none" />

          <span className="relative text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Your Journey Begins Here
          </span>
          <h3 className="relative font-serif text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto leading-snug">
            Ready to begin your transformation?
          </h3>
          <p className="relative text-sm text-white/60 max-w-lg mx-auto leading-relaxed font-sans">
            Every patient's facial anatomy is unique. Schedule a detailed
            consultation with Dr. Farooqui to build a personalized rejuvenation
            blueprint.
          </p>
          <div className="relative pt-2">
            <a
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-widest uppercase font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-gold/20"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
