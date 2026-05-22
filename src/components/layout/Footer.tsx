import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { name: "Marlton, NJ", href: "/locations/marlton-nj" },
    { name: "Cherry Hill, NJ", href: "/locations/cherry-hill-nj" },
    { name: "Moorestown, NJ", href: "/locations/moorestown-nj" },
    { name: "Voorhees, NJ", href: "/locations/voorhees-nj" }
  ];

  const quickLinks = [
    { name: "Meet Dr. Farooqui", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Before & Afters", href: "/gallery" },
    { name: "Patient Testimonials", href: "/testimonials" },
    { name: "Health & Vitality Blog", href: "/blog" },
    { name: "Patient FAQs", href: "/faqs" },
    { name: "Book Consultation", href: "/contact" }
  ];

  return (
    <footer className="bg-primary-dark text-primary-light border-t border-gold/25 pt-20 pb-10 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Bio (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="GT Aesthetic & Functional Medicine Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-primary-light uppercase transition-colors duration-300 group-hover:text-gold leading-tight">
                  GT Clinic
                </span>
                <span className="block text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-extrabold -mt-0.5">
                  Aesthetics & Functional Med
                </span>
              </div>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Physician-led, science-backed wellness destination in Marlton, New Jersey. Specializing in regenerative aesthetics, root-cause functional medicine, and personalized longevity.
            </p>
            <div className="flex items-center gap-2.5 text-gold bg-white/[0.02] border border-gold/20 px-4 py-2.5 rounded-xl w-fit">
              <ShieldCheck size={16} />
              <span className="text-[10px] uppercase tracking-widest font-bold font-sans">
                Triple Board Certified MD
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/dr._farooqui/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold flex items-center justify-center text-primary-light hover:text-gold transition-all duration-300 cursor-pointer bg-white/[0.01] hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/GTAFMed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold flex items-center justify-center text-primary-light hover:text-gold transition-all duration-300 cursor-pointer bg-white/[0.01] hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Contact (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">Clinic Hours & Contact</h3>
            <div className="space-y-4 text-white/70 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-light text-xs uppercase tracking-wider">Hours</p>
                  <p className="mt-1 text-xs text-white/60">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-xs text-white/60">Sat - Sun: By Appointment Only</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GT+Aesthetic+%26+Functional+Medicine+651+NJ-73+Suite+110+Marlton+NJ+08053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold group transition-colors duration-200"
              >
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-light text-xs uppercase tracking-wider group-hover:text-gold transition-colors">Address</p>
                  <p className="mt-1 leading-relaxed text-xs text-white/60 group-hover:text-gold/90 transition-colors">
                    651 NJ-73 Suite 110<br />
                    Marlton, NJ 08053
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 pt-1">
                <Phone size={14} className="text-gold shrink-0" />
                <a href="tel:+18568864506" className="hover:text-gold text-xs font-semibold tracking-wide transition-colors">
                  +1 (856) 886-4506
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@thegtclinic.com" className="hover:text-gold text-xs font-medium tracking-wide transition-colors">
                  info@thegtclinic.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">Explore</h3>
            <ul className="space-y-3.5 text-[11px] uppercase tracking-wider font-semibold text-white/55">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gold transition-all duration-200 hover:pl-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location Map & Areas (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">Our Marlton Clinic</h3>
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-gold/30 hover:shadow-gold/5 transition-all duration-500 relative">
              <iframe
                title="GT Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6667902304907!2d-74.93969482487897!3d39.90409198668223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7004c1e38283b%3A0xec7f538bf4c658a1!2sGT%20Aesthetic%20%26%20Functional%20Medicine!5e0!3m2!1sen!2s!4v1779363354547!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-white/40">Serving South Jersey</h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] uppercase tracking-wider font-semibold text-white/50">
                {serviceAreas.map((area, idx) => (
                  <span key={area.name} className="flex items-center">
                    {idx > 0 && <span className="text-gold/40 mr-3">•</span>}
                    <Link href={area.href} className="hover:text-gold transition-colors">
                      {area.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/40 space-y-4 md:space-y-0">
          <p>© {currentYear} GT Aesthetic & Functional Medicine. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <span className="text-gold font-serif italic text-xs">Physician-Led Aesthetics & Longevity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
