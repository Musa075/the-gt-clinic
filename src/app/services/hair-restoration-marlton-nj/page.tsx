import { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert, Award, Calendar, Check, ChevronLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Hair Restoration in Marlton, NJ | PRP & Exosomes | GT Clinic",
  description: "Regrow thinning hair and stimulate dormant hair follicles with professional, physician-administered PRP & regenerative exosome therapies in Marlton, NJ.",
  keywords: [
    "Hair Restoration Marlton NJ",
    "PRP Hair Loss South Jersey",
    "Scalp Exosomes Marlton",
    "Thinning Hair treatment Cherry Hill",
    "Medford Hair Regrowth clinic"
  ]
};

export default function HairRestorationMarltonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://thegtclinic.com/#clinic",
        "name": "GT Aesthetic & Functional Medicine",
        "url": "https://thegtclinic.com",
        "logo": "https://thegtclinic.com/images/logo.png",
        "image": "https://thegtclinic.com/images/services/hair-restoration.png",
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
        "@id": "https://thegtclinic.com/services/hair-restoration-marlton-nj/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does PRP and exosome therapy regrow thinning hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Platelet-Rich Plasma (PRP) and stem cell-derived exosome therapies work by injecting concentrated biological growth factors and cellular signals directly into the scalp. These signaling molecules increase vascular blood flow to the hair roots, suppress localized inflammation, and stimulate miniaturized or dormant hair follicles to transition back into the active anagen growth phase."
            }
          },
          {
            "@type": "Question",
            "name": "Is hair restoration at GT Clinic performed by Dr. Farooqui?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. Every consultation and scalp micro-injection is personally performed by Dr. Ghazala Farooqui, MD, at our Marlton, NJ clinic. Having a board-certified physician administer these delicate injections ensures precise placement at the correct follicular depth and guarantees strict clinical safety."
            }
          },
          {
            "@type": "Question",
            "name": "How many hair restoration sessions are recommended, and when do results appear?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We typically recommend an initial treatment series of 3 to 4 sessions, spaced 4 weeks apart, followed by maintenance treatments every 6 to 12 months. Most patients notice a decrease in hair shedding within 4 weeks, with visible increases in hair density and thickness appearing between 3 to 6 months."
            }
          }
        ]
      }
    ]
  };

  const benefits = [
    "Stimulates dormant hair follicles to regrow active, thick shafts",
    "Increases scalp vascularity and overall hair shaft diameter",
    "Treats thinning crowns, widening parts, and receding temples",
    "100% physician-performed scalp injections by Dr. Farooqui, MD",
    "Minimally invasive, drug-free, and natural regenerative process",
    "Integrated with internal hormone and nutritional support"
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
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/services/hair-restoration.png')" }} />
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
                Regenerative Aesthetics • Marlton, NJ
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Physician-Led Hair Restoration
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Reclaim your hair density and confidence. We combine advanced scalp injections of PRP and growth-factor exosomes with internal metabolic optimization to restore thinning hair safely.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow shadow-gold/10 hover:shadow-gold/25"
              >
                Schedule Consultation
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
                Scientific Hair Regrowth & Rejuvenation
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Thinning hair, receding temples, and crown hair loss (androgenetic alopecia) affect both men and women. Standard treatments often rely on temporary topical sprays or prescription drugs that carry unwanted side effects. At GT Clinic, we treat hair thinning from the inside out using advanced, minimally invasive regenerative medicine.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Our clinical protocol delivers highly concentrated growth factors and signaling molecules directly to the scalp. Platelet-Rich Plasma (PRP) is isolated from your own blood, concentrating healing platelets that revive weakened hair roots. We also offer advanced clinical Exosome therapy, utilizing billions of stem-cell-derived signaling particles to trigger cellular healing and thick hair growth.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Our Comprehensive Hair Protocol Highlights
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
                South Jersey's Trusted Hair Restoration Clinic
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Located on Route 73 in Marlton, NJ, our boutique clinic is a private sanctuary offering concierge-level care. We regularly treat patients from Marlton, Cherry Hill, Voorhees, Medford, Moorestown, and Philadelphia who prefer private, physician-directed treatments.
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Dr. Farooqui's unique integrative background allows us to combine scalp injections with internal hormone testing (BHRT) and thyroid evaluations. This dual approach ensures your hair restoration plan is fortified by optimal internal nutrition, cellular health, and hormonal balance.
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
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Are the scalp injections painful?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Most patients experience a mild pinching or pressure sensation during the injections. We utilize specialized local cooling techniques and ultra-fine micro-needles to minimize scalp sensitivity and ensure a highly comfortable session.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What is the difference between PRP and Exosomes for hair loss?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    PRP uses growth factors isolated from your own blood. Exosomes are laboratory-purified, stem-cell-derived vesicles that contain a significantly higher concentration of growth factors, proteins, and mRNA. Exosomes require no blood draw and provide a more potent regenerative signal, making them excellent for advanced thinning.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Is there any downtime after the treatment?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    There is zero downtime. You can drive home and resume normal work in South Jersey immediately. We advise waiting 24 hours before washing your hair or using hair styling products, and avoiding vigorous exercise, swimming, or saunas for 2 days.
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
                Treatment Details
              </h3>
              
              <div className="space-y-5 text-xs sm:text-sm font-sans">
                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Session Duration</p>
                    <p className="text-white font-medium mt-0.5">45 - 60 Minutes</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Downtime & Recovery</p>
                    <p className="text-white font-medium mt-0.5">None (Mild scalp tenderness for 24 hours)</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <Award className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Clinical Quality</p>
                    <p className="text-white font-medium mt-0.5">100% Physician Administered</p>
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
                  Request Booking
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
