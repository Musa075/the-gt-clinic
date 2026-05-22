import { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert, Award, Calendar, Check, ChevronLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Microneedling in South Jersey | Professional Skin Resurfacing | GT Clinic",
  description: "Refine skin texture, reduce acne scarring, and stimulate deep collagen with physician-guided microneedling and regenerative exosomes in South Jersey.",
  keywords: [
    "Microneedling South Jersey",
    "Collagen Induction Marlton",
    "Exosome Skin treatment NJ",
    "Acne Scars doctor Cherry Hill",
    "Voorhees Microneedling clinic"
  ]
};

export default function MicroneedlingSouthJerseyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://thegtclinic.com/#clinic",
        "name": "GT Aesthetic & Functional Medicine",
        "url": "https://thegtclinic.com",
        "logo": "https://thegtclinic.com/images/logo.png",
        "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
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
        "@id": "https://thegtclinic.com/services/microneedling-south-jersey/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does microneedling stimulate skin collagen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Microneedling, also known as collagen induction therapy, uses sterile micro-fine needles to create controlled micro-injuries in the skin's dermal layer. This triggers your body's natural wound-healing cascade, stimulating the production of new collagen and elastin fibers, which restructures acne scars, smooths wrinkles, and tightens pores."
            }
          },
          {
            "@type": "Question",
            "name": "Why is physician-performed microneedling safer and more effective?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many commercial med spas delegate microneedling to aesthetic technicians who apply uniform needle depths. At GT Clinic, Dr. Farooqui personally performs every microneedling session, customizing the penetration depth dynamically for each facial zone and specific scar type. This ensures clinical-grade results while preventing epidermal damage or hyperpigmentation."
            }
          },
          {
            "@type": "Question",
            "name": "How much downtime is expected after a microneedling session?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Expect 24 to 48 hours of mild pinkness or redness, similar to a moderate sunburn, along with slight tightness. When combined with our bioactive exosome serums, skin healing is accelerated by up to 50%, with redness typically settling within 12 to 24 hours."
            }
          }
        ]
      }
    ]
  };

  const benefits = [
    "Dramatically improves acne scars, stretch marks, and fine lines",
    "Stimulates rapid epidermal turn-over and deep collagen synthesis",
    "Minimizes enlarged pores and refines coarse skin texture",
    "100% physician-administered by Dr. Farooqui to ensure depth precision",
    "Enhanced with stem-cell-derived exosome serums to cut healing time in half",
    "Completely safe and effective across all skin phototypes and tones"
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
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600')" }} />
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
                Clinical Dermatology • South Jersey
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Physician-Performed Microneedling
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Re-texturize your skin and fade deep scarring. We utilize advanced medical-grade collagen induction therapy enhanced with pure stem-cell exosomes, personally performed by Dr. Ghazala Farooqui, MD.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full transition-all duration-300 shadow shadow-gold/10 hover:shadow-gold/25"
              >
                Schedule Treatment
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
                The Science of Collagen Induction
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                As we age, our skin's natural collagen production slows down, resulting in textural laxity, fine wrinkles, and more prominent pores. Microneedling (Collagen Induction Therapy) addresses this by creating thousands of microscopically precise channels in the epidermis and upper dermis, prompting your body's natural tissue repair systems.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                At GT Clinic, we elevate standard microneedling with advanced regenerative serums. By applying ultra-pure, stem-cell-derived exosomes or autologous PRP immediately after microneedling, we supply your skin with concentrated growth factors and anti-inflammatory signals. This accelerates tissue regeneration, restructures deep acne scars, and reveals a tight, bright, and even-toned complexion.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Why Patients Choose Our Microneedling Protocol
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
                South Jersey's Elite Aesthetic Care
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                GT Clinic is located in Marlton, NJ on Route 73, providing concierge-level medical aesthetics to patients from across South Jersey. We frequently serve clients from Cherry Hill, Moorestown, Voorhees, Haddonfield, Medford, and Mt. Laurel.
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Dr. Farooqui personally adjusts the micro-needling depth dynamically during your session to suit the unique requirements of your skin thickness. This board-certified precision ensures your treatment is highly effective, safe, and tailored to your specific skin health goals.
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
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Does microneedling hurt?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Prior to the treatment, we apply a premium, medical-grade topical numbing cream to the skin for 20-30 minutes. This ensures the treatment is highly comfortable, with most patients experiencing only a light vibrating sensation.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What are the benefits of adding Exosomes to microneedling?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Exosomes contain billions of active cellular signals, growth factors, and anti-inflammatory proteins. Adding exosomes to your microneedling treatment dramatically speeds up skin healing (typically cutting redness from 2 days to under 24 hours) and significantly boosts collagen production.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">How many microneedling sessions do I need?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    For general skin rejuvenation and anti-aging, we recommend a series of 3 sessions spaced 4 weeks apart. For deep acne scars or severe hyperpigmentation, a series of 4 to 6 sessions may be required for optimal tissue remodeling.
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
                    <p className="text-white font-medium mt-0.5">45 - 60 Minutes (Including numbing)</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Downtime & Recovery</p>
                    <p className="text-white font-medium mt-0.5">24 - 48 Hours of mild sunburn-like pinkness</p>
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
