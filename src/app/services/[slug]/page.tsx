import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData, Service } from "@/data/services";
import { Clock, ShieldAlert, Award, Calendar, Activity, ChevronLeft, Check } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | GT Aesthetic & Functional Medicine`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | GT Clinic Marlton NJ`,
      description: service.shortDesc,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-primary-light min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative bg-primary-dark text-primary-light py-20 sm:py-28 overflow-hidden z-20">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={14} />
              Back to Treatments
            </Link>
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
                {service.category === 'aesthetics' && "Aesthetic Medicine"}
                {service.category === 'functional' && "Functional Medicine"}
                {service.category === 'regenerative' && "Regenerative Aesthetics"}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Content & Parameters Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Description Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Treatment Overview
              </h2>
              <p className="text-slate text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>

            {/* Benefits Block */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                Key Benefits & Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate">
                    <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      <Check size={12} />
                    </span>
                    <span className="leading-tight">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar Treatment Parameters */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary-dark text-white rounded-3xl p-8 border border-gold/25 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-xl font-bold text-gold">
                Treatment Parameters
              </h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Treatment Duration</p>
                    <p className="text-white font-medium mt-0.5">{service.duration}</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Downtime & Recovery</p>
                    <p className="text-white font-medium mt-0.5">{service.downtime}</p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <Activity className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Treatment Comfort</p>
                    <p className="text-white font-medium mt-0.5">{service.intensity} Intensity</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-2">
                  <Award className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Care Quality</p>
                    <p className="text-white font-medium mt-0.5">100% Physician Administered</p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-4 rounded-full transition-all duration-300 shadow cursor-pointer"
                >
                  <Calendar size={14} />
                  Book Clinical Consult
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
