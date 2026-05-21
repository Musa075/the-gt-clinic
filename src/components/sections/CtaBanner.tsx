import Link from "next/link";
import { Phone, Calendar, Mail, ShieldAlert } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-primary-dark text-primary-light py-20 relative z-20 overflow-hidden border-y border-gold/15">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Editorial header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Begin Your Wellness Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Transformation Starts Here
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Schedule a comprehensive, physician-led aesthetic or functional medicine consultation in Marlton, New Jersey. Let's design a personalized roadmap to restore your energy, skin health, and biological longevity.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-dark hover:text-primary-light font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 border border-gold hover:border-gold-dark cursor-pointer"
          >
            <Calendar size={14} />
            Book Consultation
          </Link>
          
          <a
            href="tel:+18568864506"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-primary-light font-sans text-xs tracking-wider uppercase font-semibold py-4 px-8 rounded-full border border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
          >
            <Phone size={14} className="text-gold" />
            Call +1 (856) 886-4506
          </a>
        </div>

        {/* Supporting micro details */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-white/10 text-xs text-white/60 max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-gold shrink-0" />
            <a href="mailto:info@thegtclinic.com" className="hover:text-gold transition-colors">
              info@thegtclinic.com
            </a>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-gold shrink-0" />
            <span>No Referral Required</span>
          </div>
        </div>

      </div>
    </section>
  );
}
