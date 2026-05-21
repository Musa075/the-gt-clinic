"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, Quote, Sparkles, Activity, ShieldCheck, Heart, MessageSquare, ArrowRight } from "lucide-react";
import { testimonialsData, Testimonial } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<'all' | 'aesthetics' | 'functional'>('all');

  // Map each testimonial's treatment type to its corresponding category
  const categorizedTestimonials = useMemo(() => {
    return testimonialsData.map((testimonial) => {
      const treatmentLower = testimonial.treatment.toLowerCase();
      let category: 'aesthetics' | 'functional' = 'aesthetics';
      
      if (
        treatmentLower.includes("functional") || 
        treatmentLower.includes("bhrt") || 
        treatmentLower.includes("weight") || 
        treatmentLower.includes("metabolic") || 
        treatmentLower.includes("thyroid") || 
        treatmentLower.includes("cortisol")
      ) {
        category = "functional";
      }

      return {
        ...testimonial,
        category
      };
    });
  }, []);

  const filteredTestimonials = useMemo(() => {
    return categorizedTestimonials.filter(
      (item) => filter === 'all' || item.category === filter
    );
  }, [filter, categorizedTestimonials]);

  // Generate Review / Clinic Schema dynamically for SEO benefits
  const clinicSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "GT Aesthetic & Functional Medicine",
      "image": "https://thegtclinic.com/images/dr_farooqui_portrait_v2.png",
      "@id": "https://thegtclinic.com/#clinic",
      "url": "https://thegtclinic.com",
      "telephone": "+18568864506",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "651 NJ-73 Suite 110",
        "addressLocality": "Marlton",
        "addressRegion": "NJ",
        "postalCode": "08053",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": testimonialsData.length.toString()
      },
      "review": testimonialsData.map((t) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating.toString(),
          "bestRating": "5"
        },
        "reviewBody": t.quote,
        "itemReviewed": {
          "@type": "MedicalProcedure",
          "name": t.treatment
        }
      }))
    };
  }, []);

  // Animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 80, damping: 15 } 
    }
  };

  return (
    <main className="bg-primary-light min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Success & Transformation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Patient Stories & Reviews
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Read direct experiences from patients who have achieved cellular health, metabolic balance, and natural aesthetic refinement under the guidance of Dr. Farooqui.
          </p>
        </div>
      </section>

      {/* 2. Rating Metrics & Trust Badging */}
      <section className="py-12 bg-white border-b border-beige relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12">
            
            {/* Google Rating Badge */}
            <div className="flex items-center gap-3 bg-primary-light px-6 py-3.5 rounded-2xl border border-gold/15 shadow-sm">
              <span className="font-serif font-bold text-2xl text-primary-dark">5.0</span>
              <div>
                <div className="flex text-gold">
                  <Star className="fill-gold" size={16} />
                  <Star className="fill-gold" size={16} />
                  <Star className="fill-gold" size={16} />
                  <Star className="fill-gold" size={16} />
                  <Star className="fill-gold" size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate/85 font-sans">
                  Google Verified Reviews
                </span>
              </div>
            </div>

            {/* Verification 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle size={18} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-primary-dark">100% Physician Performed</h4>
                <p className="text-xs text-slate mt-0.5">Every injection and clinical protocol managed directly by MD</p>
              </div>
            </div>

            {/* Verification 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Heart size={18} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-primary-dark">Root-Cause Wellness</h4>
                <p className="text-xs text-slate mt-0.5">Longevity plans built on diagnostics and cell science</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Testimonials List Section */}
      <section className="py-20 relative z-20">
        {/* Soft Background Accents */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-16 flex-wrap">
            {[
              { id: "all", name: "All Experiences", icon: <MessageSquare size={12} /> },
              { id: "aesthetics", name: "Aesthetic Medicine", icon: <Sparkles size={12} /> },
              { id: "functional", name: "Functional & Longevity", icon: <Activity size={12} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
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

          {/* Testimonial Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={gridVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Backdrop Quote Icon */}
                  <div className="absolute top-6 right-8 text-beige/40 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <Quote size={80} className="stroke-[0.5] opacity-20" />
                  </div>

                  <div className="space-y-6 relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-serif italic text-base sm:text-lg text-primary-dark leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Patient Info */}
                  <div className="mt-8 pt-6 border-t border-beige flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] text-slate/85 tracking-wider mt-0.5">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Treatment Tag */}
                    <div className="bg-primary-light border border-gold/15 rounded-full px-4 py-1.5 w-fit">
                      <span className="font-serif italic text-xs font-semibold text-gold">
                        {testimonial.treatment}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Zero results state */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-20 text-slate text-sm font-sans">
              No matching patient stories found for this category.
            </div>
          )}

        </div>
      </section>

      {/* 4. Bottom Review Callout Banner */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative overflow-hidden bg-primary-dark text-white rounded-[32px] p-8 sm:p-12 md:p-16 border border-gold/25 shadow-xl text-center space-y-6">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
              Share Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Have you visited GT Clinic?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
              Your feedback helps other patients make informed health and aesthetic choices. We would be honored if you shared your experience with Dr. Farooqui.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=GT+Aesthetic+%26+Functional+Medicine+651+NJ-73+Suite+110+Marlton+NJ+08053"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow cursor-pointer"
            >
              Leave A Google Review
              <ArrowRight size={14} />
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 cursor-pointer"
            >
              Share Private Feedback
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
