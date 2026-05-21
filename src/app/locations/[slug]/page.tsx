import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locationsData, LocationData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);
  if (!location) return { title: "Location Not Found" };

  return {
    title: location.title,
    description: location.metaDesc,
    openGraph: {
      title: location.title,
      description: location.metaDesc,
    }
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const featuredService = servicesData.find(s => s.slug === location.featuredServiceSlug);

  // Generate LocalBusiness JSON-LD schema for Local SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "GT Aesthetic & Functional Medicine",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "@id": `https://thegtclinic.com/locations/${location.slug}`,
    "url": `https://thegtclinic.com/locations/${location.slug}`,
    "telephone": "(856) 886-4506",
    "priceRange": "$$$",
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
      "latitude": 39.9041,
      "longitude": -74.9397
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": location.cityName
      },
      {
        "@type": "AdministrativeArea",
        "name": "Marlton"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Cherry Hill"
      },
      {
        "@type": "AdministrativeArea",
        "name": "South Jersey"
      }
    ]
  };

  return (
    <main className="bg-primary-light min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-20 sm:py-28 overflow-hidden z-20">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={14} />
              Back Home
            </Link>
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
                Serving South Jersey
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Regenerative Aesthetics & Wellness in {location.cityName}, NJ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Location Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Info Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introduction Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Bespoke Clinical Care for {location.cityName} Patients
              </h2>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                {location.introduction}
              </p>
            </div>

            {/* Custom content blocks */}
            <div className="space-y-8">
              {location.sections.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 shadow-sm space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark">
                    {sec.heading}
                  </h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Featured Treatment Card */}
            {featuredService && (
              <div className="bg-primary-dark text-white rounded-3xl p-8 border border-gold/20 shadow-xl flex flex-col sm:flex-row gap-8 items-center">
                <div className="space-y-4 sm:flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Featured Program</span>
                  <h3 className="font-serif text-2xl font-bold text-white">{featuredService.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{featuredService.shortDesc}</p>
                  <Link
                    href={`/services/${featuredService.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors duration-200"
                  >
                    Explore This Program
                    <CheckCircle2 size={14} className="text-gold" />
                  </Link>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Location Information */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary-dark">Clinic Location</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate">
                <div className="flex gap-3">
                  <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-primary-dark">Address</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=GT+Aesthetic+%26+Functional+Medicine+651+NJ-73+Suite+110+Marlton+NJ+08053"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 hover:text-gold transition-colors block underline decoration-gold/30"
                    >
                      651 NJ-73 Suite 110
                    </a>
                    <p>Marlton, NJ 08053</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-primary-dark">Phone</p>
                    <a href="tel:+18568864506" className="mt-0.5 hover:text-gold transition-colors block">
                      (856) 886-4506
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-primary-dark">Email</p>
                    <a href="mailto:info@thegtclinic.com" className="mt-0.5 hover:text-gold transition-colors block">
                      info@thegtclinic.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 border-t border-beige pt-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-primary-dark">Hours</p>
                    <p className="mt-0.5">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-xs tracking-wider uppercase font-bold py-3.5 rounded-full transition-all duration-300 shadow cursor-pointer w-full"
                >
                  Schedule Appointment
                </Link>
              </div>
            </div>

            {/* Map Embed Card */}
            <div className="bg-white rounded-3xl p-4 border border-gold/10 shadow-sm overflow-hidden h-64">
              <iframe
                title="GT Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6667902304907!2d-74.93969482487897!3d39.90409198668223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7004c1e38283b%3A0xec7f538bf4c658a1!2sGT%20Aesthetic%20%26%20Functional%20Medicine!5e0!3m2!1sen!2s!4v1779363354547!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              />
            </div>

            {/* Accreditation Block */}
            <div className="bg-primary-dark text-white rounded-3xl p-8 border border-gold/20 shadow-xl space-y-4">
              <ShieldCheck className="text-gold" size={28} />
              <h3 className="font-serif text-lg font-bold text-white">Physician Led</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                GT Clinic is triple board-certified, Columbia trained physician-led. We do not delegating injections or diagnostics to technicians, ensuring clinical excellence.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
