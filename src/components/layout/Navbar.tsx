"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar, Sparkles, ShieldCheck, Activity, ChevronRight } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Meet Dr. Farooqui", href: "/about" },
        { name: "FAQs", href: "/faqs" },
        { name: "Testimonials", href: "/testimonials" }
      ]
    },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Botox & Wrinkle Relaxers", href: "/services/botox-marlton-nj" },
        { name: "Dermal Fillers", href: "/services/dermal-fillers" },
        { name: "Medical Microneedling", href: "/services/microneedling-south-jersey" },
        { name: "Laser Rejuvenation", href: "/services/skin-rejuvenation" },
        { name: "Hair Restoration", href: "/services/hair-restoration-marlton-nj" },
        { name: "Collagen Stimulators", href: "/services/collagen-stimulation" },
        { name: "Exosomes & PRP", href: "/services/anti-aging-clinic-marlton-nj" },
        { name: "Functional Medicine", href: "/services/functional-medicine-marlton-nj" },
        { name: "Bioidentical Hormones", href: "/services/hormone-optimization" },
        { name: "Weight Optimization", href: "/services/weight-optimization" }
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary-dark text-primary-light text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gold/10 z-50 relative">
        <div className="flex items-center gap-4">
          <a href="mailto:info@thegtclinic.com" className="hover:text-gold transition-colors duration-300">
            info@thegtclinic.com
          </a>
          <a href="tel:+18568864506" className="flex items-center gap-1 hover:text-gold transition-colors duration-300">
            <Phone size={12} className="text-gold" />
            +1 (856) 886-4506
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=GT+Aesthetic+%26+Functional+Medicine+651+NJ-73+Suite+110+Marlton+NJ+08053"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-white transition-colors duration-300 hover:underline"
          >
            Marlton, New Jersey
          </a>
          <span className="text-white/40">|</span>
          <span className="font-serif italic text-gold">Physician-Led Excellence</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? "bg-primary-light/95 backdrop-blur-md shadow-md border-b border-beige py-3"
            : "bg-primary-light py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="GT Aesthetic & Functional Medicine Logo"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="48px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-primary-dark uppercase transition-colors duration-300 group-hover:text-gold leading-tight">
                GT Clinic
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-gold font-sans font-bold -mt-0.5">
                Aesthetics & Functional Med
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={item.name === "Services" ? "static" : "relative"}
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`flex items-center gap-1 font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 cursor-pointer ${
                      pathname.startsWith(item.href) ? "text-gold" : "text-primary-dark hover:text-gold"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className="text-gold" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 block ${
                      pathname === item.href ? "text-gold font-semibold" : "text-primary-dark hover:text-gold"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    item.name === "Services" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                        className="absolute left-0 right-0 top-full pt-4 w-full z-50 pointer-events-auto"
                      >
                        <div className="bg-primary-light border border-gold/15 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-md text-left">
                          {/* Main content grid */}
                          <div className="grid grid-cols-12 gap-8 p-8">
                            {/* Column 1 */}
                            <div className="col-span-3">
                              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-beige/60">
                                <Sparkles size={16} className="text-gold shrink-0" />
                                <span className="font-serif text-xs font-bold tracking-wide text-primary-dark uppercase">
                                  Aesthetic Artistry
                                </span>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <Link
                                  href="/services/botox-marlton-nj"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Botox & Wrinkles</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/dermal-fillers"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Dermal Fillers</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/microneedling-south-jersey"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Medical Microneedling</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/skin-rejuvenation"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Laser Rejuvenation</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                              </div>
                            </div>

                            {/* Column 2 */}
                            <div className="col-span-3">
                              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-beige/60">
                                <ShieldCheck size={16} className="text-gold shrink-0" />
                                <span className="font-serif text-xs font-bold tracking-wide text-primary-dark uppercase">
                                  Regenerative Care
                                </span>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <Link
                                  href="/services/hair-restoration-marlton-nj"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Hair Restoration</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/collagen-stimulation"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Collagen Stimulators</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/anti-aging-clinic-marlton-nj"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Exosomes & PRP</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                              </div>
                            </div>

                            {/* Column 3 */}
                            <div className="col-span-3">
                              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-beige/60">
                                <Activity size={16} className="text-gold shrink-0" />
                                <span className="font-serif text-xs font-bold tracking-wide text-primary-dark uppercase">
                                  Functional Wellness
                                </span>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <Link
                                  href="/services/functional-medicine-marlton-nj"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Functional Medicine</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/hormone-optimization"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Bioidentical Hormones</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                                <Link
                                  href="/services/weight-optimization"
                                  className="group/item flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate hover:text-gold transition-colors duration-300 py-1"
                                >
                                  <span>Weight Optimization</span>
                                  <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-gold" />
                                </Link>
                              </div>
                            </div>

                            {/* Column 4: Signature Promo Card */}
                            <div className="col-span-3">
                              <div className="bg-gradient-to-b from-white to-[#FAF7F2] p-5 rounded-2xl border border-beige flex flex-col justify-between h-full relative overflow-hidden group/card shadow-sm hover:shadow-md transition-all duration-300">
                                <div>
                                  <span className="bg-gold/10 text-gold-dark text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit">
                                    Signature Offer
                                  </span>
                                  <h4 className="font-serif text-sm font-bold text-primary-dark mt-3 mb-1.5 leading-tight">
                                    Bespoke Consultation
                                  </h4>
                                  <p className="text-[10px] text-slate/80 leading-relaxed font-sans">
                                    Discuss your skin concerns, metabolic health, or anti-aging goals in a private consultation with Dr. Farooqui.
                                  </p>
                                </div>
                                <Link
                                  href="/contact"
                                  className="mt-4 flex items-center justify-center gap-2 bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-4 rounded-full transition-all duration-300 border border-primary-dark hover:border-gold w-full text-center"
                                >
                                  <span>Book Consult</span>
                                  <ChevronRight size={12} className="group-hover/card:translate-x-1 transition-transform duration-300" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Footer bar */}
                          <div className="bg-beige/30 px-8 py-4 border-t border-beige flex justify-between items-center text-xs font-sans text-slate/85">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                              <span>Physician-led aesthetics & root-cause functional medicine.</span>
                            </div>
                            <Link
                              href="/services"
                              className="flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider text-primary-dark hover:text-gold transition-colors duration-300"
                            >
                              <span>Explore All Services</span>
                              <ChevronRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-56 z-50 pointer-events-auto"
                      >
                        <div className="bg-primary-light shadow-xl border border-beige rounded-xl overflow-hidden py-2 backdrop-blur-md text-left">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-primary-dark hover:bg-beige hover:text-gold transition-colors duration-200"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full border border-primary-dark hover:border-gold transition-all duration-300 shadow-sm"
            >
              <Calendar size={14} />
              Book Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-dark hover:text-gold p-1 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-primary-light border-b border-beige overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {menuItems.map((item) => (
                  <div key={item.name} className="border-b border-beige/40 pb-2">
                    {item.submenu ? (
                      <div>
                        <div className="font-sans text-sm font-semibold tracking-wide uppercase text-primary-dark pb-1 text-gold">
                          {item.name}
                        </div>
                        <div className="pl-4 pt-1 space-y-2">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block text-xs uppercase tracking-wider text-slate hover:text-gold py-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-sans text-sm font-semibold tracking-wide uppercase block py-1 ${
                          pathname === item.href ? "text-gold" : "text-primary-dark hover:text-gold"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="flex justify-center items-center gap-2 bg-gold text-primary-dark font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full text-center hover:bg-gold-dark hover:text-primary-light transition-all duration-300"
                  >
                    <Calendar size={14} />
                    Book Consultation
                  </Link>
                  <a
                    href="tel:+18568864506"
                    className="flex justify-center items-center gap-2 bg-beige text-primary-dark font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full text-center hover:bg-slate/10 transition-all duration-300"
                  >
                    <Phone size={14} />
                    Call Clinic
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
