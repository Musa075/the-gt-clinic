"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";

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
        { name: "Aesthetic Treatments", href: "/services?tab=aesthetics" },
        { name: "Functional Medicine", href: "/services?tab=functional" },
        { name: "Regenerative Therapies", href: "/services?tab=regenerative" },
        { name: "Hair Restoration", href: "/services/hair-restoration" },
        { name: "Botox & Fillers", href: "/services/botox-wrinkle-relaxers" }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-primary-dark uppercase">
              GT Clinic
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-sans font-medium -mt-0.5">
              Aesthetics & Functional Med
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
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
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-56 z-50">
                    <div className="bg-primary-light shadow-xl border border-beige rounded-xl overflow-hidden py-2 backdrop-blur-md">
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
                  </div>
                )}
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
