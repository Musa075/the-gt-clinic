import { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert, Award, Calendar, Check, ChevronLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Botox in Marlton, NJ | Premium Wrinkle Relaxers | GT Clinic",
  description: "Experience premium, physician-performed Botox, Dysport, & Xeomin in Marlton, NJ. Restore a refreshed, natural look with triple board-certified Dr. Ghazala Farooqui, MD.",
  keywords: [
    "Botox Marlton NJ",
    "Wrinkle Relaxers South Jersey",
    "Dysport Marlton NJ",
    "Physician Botox Marlton",
    "Facial Balancing South Jersey"
  ]
};

export default function BotoxMarltonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://thegtclinic.com/#clinic",
        "name": "GT Aesthetic & Functional Medicine",
        "url": "https://thegtclinic.com",
        "logo": "https://thegtclinic.com/images/logo.png",
        "image": "https://thegtclinic.com/images/services/botox-wrinkle-relaxers.png",
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
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://thegtclinic.com/services/botox-marlton-nj/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who performs the Botox injections at your Marlton, NJ office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every single wrinkle relaxer treatment (including Botox, Dysport, and Xeomin) at GT Clinic is personally designed and injected by Dr. Ghazala Farooqui, MD. We believe aesthetic procedures require board-certified medical precision and artistic vision, so we never delegate treatments to assistants or mid-level staff."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a Botox session take and is there downtime?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard Botox or Dysport session takes between 15 to 30 minutes. It is a true 'lunchtime procedure' with zero downtime. You can immediately return to your normal routine in Marlton or South Jersey, though we advise avoiding vigorous exercise for 24 hours."
            }
          },
          {
            "@type": "Question",
            "name": "When will I see results from my Botox treatment, and how long do they last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial softening of lines is visible within 3 to 5 days, with full relaxation and final results observable at 14 days. The smoothing effect typically lasts between 3 to 4 months, after which dynamic muscle activity slowly returns."
            }
          }
        ]
      }
    ]
  };

  const benefits = [
    "Softens forehead creases, frown lines (11s), and crow's feet",
    "Restores a rested, refreshed look while keeping natural expression",
    "Physician-administered by a triple board-certified MD for absolute safety",
    "Quick 15-to-30 minute session with zero social downtime",
    "Custom dosing based on your unique dynamic muscle anatomy",
    "Helps prevent the formation of static, permanent wrinkles over time"
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
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/services/botox-wrinkle-relaxers.png')" }} />
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
                Aesthetic Excellence • Marlton, NJ
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Physician-Led Botox & Wrinkle Relaxers
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Soften dynamic expression lines and restore a balanced, rested elegance. Every treatment at our Marlton, NJ clinic is customized and personally performed by triple board-certified physician Dr. Ghazala Farooqui, MD.
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
                The Art of Natural Wrinkle Smoothing
              </h2>
              <div className="h-0.5 w-16 bg-gold" />
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                Wrinkle relaxers such as Botox®, Dysport®, and Xeomin® are highly purified proteins that selectively relax dynamic facial muscles. These are the muscles responsible for forehead creases, frown lines between the eyes, and crow's feet around the temples.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                At GT Clinic, our philosophy centers on natural facial harmony. We avoid over-treatment and the frozen look. Dr. Farooqui carefully analyzes your muscle movement during your consultation to determine a precise, custom dosage. This restores dynamic balance and smooths aging wrinkles while preserving your natural dynamic expressions.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Why Patients Choose Dr. Farooqui for Botox
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
                Serving Marlton & South Jersey
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                GT Clinic is conveniently located at 651 Route 73 in Marlton, NJ, easily accessible for patients from Cherry Hill, Moorestown, Voorhees, Medford, and the greater South Jersey region. 
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                We provide a private, luxurious concierge experience with unhurried appointments. Dr. Farooqui is a local South Jersey medical director who personally manages every aspect of your clinical journey, guaranteeing the highest standard of safety, hygiene, and aesthetic refinement.
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
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">Is Botox painful?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Most patients report only a minor pinch, similar to a bug bite. We use ultra-fine medical needles to maximize patient comfort. The treatment is quick and requires no topical numbing cream.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What is the difference between Botox and Dermal Fillers?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Botox relaxes dynamic muscles to smooth expression wrinkles (forehead, frown lines). Dermal fillers use hyaluronic acid gel to restore lost volume, lift sagging skin, and sculpt facial contours (cheeks, lips, jawline). Dr. Farooqui often combines both for full-face rejuvenation.
                  </p>
                </div>
                <div className="space-y-2 pt-6">
                  <h4 className="font-bold text-sm sm:text-base text-primary-dark">What precautions should I take after my Botox treatment in Marlton?</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    We advise patients to remain upright for 4 hours post-treatment and avoid rubbing the injection sites. Avoid strenuous exercise, saunas, and hot tubs for 24 hours to prevent the product from migrating.
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
                    <p className="text-white font-medium mt-0.5">15 - 30 Minutes</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/5 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Downtime & Recovery</p>
                    <p className="text-white font-medium mt-0.5">None (Return to daily activities immediately)</p>
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
