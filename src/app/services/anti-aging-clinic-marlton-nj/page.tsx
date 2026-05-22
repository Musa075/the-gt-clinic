import { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert, Award, Calendar, Check, ChevronLeft, MapPin, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Anti-Aging Clinic in Marlton, NJ | Longevity Medicine | GT Clinic",
  description: "Experience premium, physician-led anti-aging, longevity, and metabolic wellness programs at GT Clinic in Marlton, NJ. Led by Dr. Ghazala Farooqui, MD.",
  keywords: [
    "Anti-Aging Clinic Marlton NJ",
    "Longevity Medicine South Jersey",
    "Bioidentical Hormones Marlton",
    "Skin Rejuvenation Cherry Hill",
    "Medford Metabolic weight loss"
  ]
};

export default function AntiAgingMarltonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://thegtclinic.com/#clinic",
        "name": "GT Aesthetic & Functional Medicine",
        "url": "https://thegtclinic.com",
        "logo": "https://thegtclinic.com/images/logo.png",
        "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
        "description": "Physician-led regenerative aesthetics and root-cause functional medicine in Marlton, New Jersey.",
        "telephone": "+18568864506",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "651 NJ-73 Suite 110",
          "addressLocality": "Marlton",
          "addressRegion": "NJ",
          "postalCode": "08053",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.904092,
          "longitude": -74.939695
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://thegtclinic.com/services/anti-aging-clinic-marlton-nj/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What therapies do you offer at your anti-aging clinic in Marlton, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GT Clinic offers a comprehensive, physician-led suite of aesthetic and longevity therapies. This includes wrinkle relaxers (Botox, Dysport), custom dermal fillers, collagen biostimulators (Sculptra), medical-grade microneedling with stem-cell exosomes, bioidentical hormone replacement therapy (BHRT), gut health restoration, and metabolic weight optimization programs."
            }
          },
          {
            "@type": "Question",
            "name": "Who designs and administers the anti-aging protocols?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every aspect of your care, from the initial consultation and laboratory analysis to the performance of injectables, is personally managed and executed by our board-certified medical director, Dr. Ghazala Farooqui, MD. We never delegate clinical procedures to technicians or remote practitioners."
            }
          },
          {
            "@type": "Question",
            "name": "How does your clinic assess dynamic biological aging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We start with specialized clinical blood work, testing for markers of systemic inflammation, cellular oxidative stress, cardiovascular lipid profiles, gut micro-flora health, and dynamic hormone patterns. We use this biological data to identify imbalances and design a personalized, root-cause longevity protocol."
            }
          }
        ]
      }
    ]
  };

  const benefits = [
    "Integrates advanced facial aesthetics with internal cellular medicine",
    "Restores hormonal balance and youthful energy with custom BHRT",
    "Physician-led skin rejuvenation (injectables, microneedling, exosomes)",
    "Root-cause diagnostic lab panels (gut flora, adrenal, inflammation)",
    "Triple board-certified medical supervision by Dr. Ghazala Farooqui, MD",
    "Private concierge setting with direct physician access and unhurried visits"
  ];

  return (
    <main className="bg-primary-light min-h-screen">
      {/* Injecting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/60" />
        
        {/* Glow detail */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={14} />
              All Services
            </Link>
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-gold font-sans block">
                Integrated Longevity • Marlton, NJ
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Anti-Aging & Longevity Medicine
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Aligning how you look, feel, and function. We combine physician-performed facial rejuvenation with root-cause wellness diagnostics to optimize your biological health and aesthetic elegance in Marlton, NJ.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow shadow-gold/10 hover:shadow-gold/25"
              >
                Book Anti-Aging Consult
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content & Sidebar Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Bespoke Aesthetic and Internal Longevity
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                True anti-aging is not superficial. It is an integration of optimal internal cellular health with meticulously restored facial aesthetics. At GT Clinic, we reject assembly-line med-spa packages. We look at the biological systems that drive skin quality, tissue elasticity, hormonal balance, and metabolic energy levels.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Under the direct care of triple board-certified physician Dr. Ghazala Farooqui, MD, our anti-aging and longevity programs map your biochemistry at the cellular level. By combining physician-administered injectables (Botox, Sculptra, dermal fillers) with functional diagnostic programs (adrenal curves, gut health testing, BHRT), we restore your health and confidence from the inside out.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Core Highlights of Our Longevity Programs
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm text-slate font-sans">
                    <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5 border border-gold/20">
                      <Check size={12} />
                    </span>
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Trust & Custom Authority Block */}
            <div className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-white rounded-3xl p-8 sm:p-12 border border-gold/20 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold flex items-center gap-2">
                <MapPin size={20} className="text-gold" />
                South Jersey's Elite Longevity Destination
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                GT Clinic is conveniently located at 651 NJ-73 in Marlton, NJ. We provide a private, premium concierge experience for patients looking for high-end aesthetic and functional longevity care. We serve patients from Marlton, Cherry Hill, Voorhees, Medford, Moorestown, and Philadelphia.
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Every consultation, diagnostic assessment, and injectable treatment is personally managed by Dr. Farooqui, MD. This physician-only care guarantee provides the ultimate peace of mind, assuring you that your health and facial harmony are in highly trained medical hands.
              </p>
            </div>

            {/* Local FAQs */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Frequently Asked Questions
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              
              <div className="space-y-6 divide-y divide-beige/60 pt-2 font-sans">
                <div className="space-y-2 pt-0">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">How do functional medicine and aesthetics work together for anti-aging?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Internal health is directly reflected in your skin quality and tissue health. Systemic inflammation, hormone declines, and digestive imbalances speed up facial aging, skin dryness, and collagen loss. By resolving internal biochemistry issues alongside localized treatments (Botox, fillers, microneedling), we ensure that your aesthetic enhancements are supported by optimal cellular health.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What is dynamic hormone optimization (BHRT)?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Bioidentical Hormone Replacement Therapy (BHRT) uses natural hormones chemically identical to those produced by your body to restore energy, muscle tone, cognitive focus, and mood changes caused by menopause, perimenopause, or low testosterone. Dr. Farooqui manages your hormone profile using customized, lab-verified dosages.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Who is a good candidate for your longevity protocols?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Any adult seeking to restore physical energy, resolve gut issues, address brain fog, regulate weight, or soften facial aging is an excellent candidate. Our plans are custom-built for men and women who prefer unhurried, private, and physician-led medical care.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Treatments parameters */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary-dark text-white rounded-3xl p-8 border border-gold/20 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-xl font-bold text-gold">
                Clinic Details
              </h3>
              
              <div className="space-y-5 text-xs sm:text-sm font-sans">
                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Initial Consultation</p>
                    <p className="text-white font-medium mt-0.5">Comprehensive diagnostic bio-review</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Healing Timeline</p>
                    <p className="text-white font-medium mt-0.5">Active metabolic adjustments manifest over 3-6 months</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Heart className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Focus Area</p>
                    <p className="text-white font-medium mt-0.5">Cellular vitality, skin health, & endocrine balance</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-2">
                  <Award className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Quality Standard</p>
                    <p className="text-white font-medium mt-0.5">Triple Board-Certified MD administered</p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold/90 text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 rounded-xl transition-all duration-300 shadow cursor-pointer"
                >
                  <Calendar size={14} />
                  Book Longevity Consult
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
