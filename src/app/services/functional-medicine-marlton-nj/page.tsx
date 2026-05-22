import { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert, Award, Calendar, Check, ChevronLeft, MapPin, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Functional Medicine Marlton, NJ | Root-Cause Wellness | GT Clinic",
  description: "Restore your energy, digestive health, and hormonal balance with root-cause functional medicine in Marlton, NJ. Triple board-certified physician-led protocols.",
  keywords: [
    "Functional Medicine Marlton NJ",
    "Integrative Medicine South Jersey",
    "BHRT Marlton",
    "Gut Health Specialist South Jersey",
    "Chronic Fatigue doctor Marlton"
  ]
};

export default function FunctionalMedicineMarltonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://thegtclinic.com/#clinic",
        "name": "GT Aesthetic & Functional Medicine",
        "url": "https://thegtclinic.com",
        "logo": "https://thegtclinic.com/images/logo.png",
        "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
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
        "@id": "https://thegtclinic.com/services/functional-medicine-marlton-nj/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes functional medicine different from conventional medicine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike conventional primary care, which often treats symptoms in isolation using pharmaceutical interventions, functional medicine focuses on identifying and treating the underlying root causes of physiological dysfunction. We look at the body as an interconnected system and analyze genetics, lifestyle, gut health, and environment."
            }
          },
          {
            "@type": "Question",
            "name": "What advanced specialty lab testing do you offer in your Marlton office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We utilize state-of-the-art diagnostic screens. This includes comprehensive DNA-based gut microbiome profiles, food sensitivity tests, heavy metal toxin screens, dynamic salivary cortisol curves for adrenal fatigue, and advanced cardiovascular lipid paneling."
            }
          },
          {
            "@type": "Question",
            "name": "How long is a typical functional medicine optimization program?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our programs are highly customized, but most patients commit to a structured 3 to 6-month protocol. This allows sufficient time for diagnostic laboratory testing, therapeutic diet implementation, gut repair, and hormonal stabilization to manifest permanent cellular health changes."
            }
          }
        ]
      }
    ]
  };

  const benefits = [
    "Identifies root causes of chronic fatigue, brain fog, and weight gain",
    "Restores digestive health and resolves systemic gut inflammation",
    "Custom hormone blueprints using Bioidentical Hormone Replacement (BHRT)",
    "Advanced specialty lab analysis (gut microbiome, toxins, food sensitivities)",
    "Triple board-certified medical guidance by Dr. Ghazala Farooqui, MD",
    "Bespoke nutrition, lifestyle, and clinical-grade supplement guidelines"
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
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600')" }} />
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
                Longevity & Vitality • Marlton, NJ
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Root-Cause Functional Medicine
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Go beyond simple symptom suppression. Address chronic fatigue, hormonal imbalance, metabolic decline, and gut issues at their cellular source under board-certified physician guidance in Marlton, NJ.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow shadow-gold/10 hover:shadow-gold/25"
              >
                Book Initial Consultation
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
                A Unified View of Cellular Health
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Standard medical protocols often treat organs and symptoms in isolation. If you have chronic fatigue, gut discomfort, and low mood, you might see three different specialists and receive three separate prescriptions. Functional medicine treats the body as a single, beautifully interconnected biological system.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Led by Dr. Ghazala Farooqui, MD, we investigate the underlying imbalances that trigger disease and age-related decline. We start by mapping your unique biochemistry. By evaluating hormone pathways, toxic burdens, and gut microbiota, we address metabolic imbalances, system-wide inflammation, and environmental stressors.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                The Core Pillars of Our Functional Care
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
                South Jersey's Longevity Destination
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Conveniently situated on Route 73 in Marlton, NJ, GT Clinic offers a modern clinical oasis for patients seeking advanced root-cause healthcare. We welcome patients throughout South Jersey, including Marlton, Medford, Evesham, Cherry Hill, Moorestown, and Voorhees.
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Dr. Farooqui's triple board certification (including Internal Medicine and Pulmonary Health) provides a deep, academic understanding of human physiology that ensures your health blueprints are safe, scientifically sound, and meticulously customized.
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
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Do you accept insurance for functional medicine programs?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    GT Clinic operates as a cash-based concierge practice. This allows Dr. Farooqui to spend exhaustive, unhurried time with each patient, prioritizing root-cause analysis rather than being constrained by insurance company restrictions. However, many advanced laboratory panels can be submitted directly to insurance companies by the lab facility.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What is BHRT and do you prescribe it?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Yes. Bioidentical Hormone Replacement Therapy (BHRT) uses natural hormones chemically identical to those produced by your body to treat declines caused by menopause, perimenopause, or andropause. Dr. Farooqui customizes BHRT using precise dosages derived from your clinical lab results.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">How do gut microbiome analyses work?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    We supply you with a take-home, DNA-based stool test kit that is sent to a specialized laboratory. This analyzes the diversity of your gut flora, checks for yeast or bacterial overgrowth (SIBO), measures markers of gut inflammation, and verifies the integrity of your intestinal lining (leaky gut).
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
                Program Details
              </h3>
              
              <div className="space-y-5 text-xs sm:text-sm font-sans">
                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Initial Assessment</p>
                    <p className="text-white font-medium mt-0.5">60 Minutes comprehensive bio-analysis</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Lab Delivery Timeline</p>
                    <p className="text-white font-medium mt-0.5">2 - 3 Weeks for detailed specialty panel results</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Heart className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Care Focus</p>
                    <p className="text-white font-medium mt-0.5">Metabolic, digestive, & endocrine balancing</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-2">
                  <Award className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Quality Standard</p>
                    <p className="text-white font-medium mt-0.5">Consultations conducted directly by the MD</p>
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
                  Book Consult Call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
