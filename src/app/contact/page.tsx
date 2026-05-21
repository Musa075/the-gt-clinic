"use client";

import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-primary-light min-h-screen pb-20">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/contact-hero.png')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Concierge Relations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Connect With GT Clinic
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule a consultation with Dr. Farooqui. We answer questions about aesthetic programs, hormone balancing, and functional lab services.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold/10 shadow-sm space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark">Clinic Location & Hours</h3>
              
              <div className="space-y-4 text-sm text-slate">
                
                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-dark">Inquiries & Booking</p>
                    <a href="tel:+18568864506" className="text-primary-dark font-medium mt-0.5 hover:text-gold transition-colors block">
                      (856) 886-4506
                    </a>
                    <p className="text-[11px] text-slate/85">Call or text for immediate scheduling</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-dark">Secure Email</p>
                    <a href="mailto:info@thegtclinic.com" className="text-primary-dark font-medium mt-0.5 hover:text-gold transition-colors block">
                      info@thegtclinic.com
                    </a>
                    <p className="text-[11px] text-slate/85">Standard HIPAA inquiries and doctor referrals</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-dark">Clinic Address</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=GT+Aesthetic+%26+Functional+Medicine+651+NJ-73+Suite+110+Marlton+NJ+08053"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-dark font-medium mt-0.5 hover:text-gold transition-colors block"
                    >
                      651 NJ-73 Suite 110
                    </a>
                    <p className="text-primary-dark font-medium">Marlton, NJ 08053</p>
                    <p className="text-[11px] text-slate/85">Serving Marlton, Cherry Hill, & South Jersey</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 border-t border-beige pt-4">
                  <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-dark">Clinic Hours</p>
                    <ul className="text-xs space-y-1 mt-1 text-slate font-sans">
                      <li><span className="font-semibold text-primary-dark inline-block w-24">Monday - Friday:</span> 9:00 AM - 5:00 PM</li>
                      <li><span className="font-semibold text-primary-dark inline-block w-24">Saturday:</span> By Appointment Only</li>
                      <li><span className="font-semibold text-primary-dark inline-block w-24">Sunday:</span> Closed</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Trust Banner */}
            <div className="bg-primary-dark text-white rounded-2xl p-6 border border-gold/20 shadow flex items-center gap-4">
              <ShieldCheck className="text-gold shrink-0" size={32} />
              <div>
                <h4 className="font-serif text-sm font-bold text-white">Private & Secure Care</h4>
                <p className="text-[11px] text-white/60 leading-relaxed mt-0.5">
                  Your files are managed under high security HIPAA compliance structures. We respect your confidentiality.
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-gold/15 shadow-sm relative h-80 bg-white">
              <iframe
                title="GT Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6667902304907!2d-74.93969482487897!3d39.90409198668223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7004c1e38283b%3A0xec7f538bf4c658a1!2sGT%20Aesthetic%20%26%20Functional%20Medicine!5e0!3m2!1sen!2s!4v1779363354547!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px]"
              />
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </main>
  );
}
