"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-primary-dark/90 hover:bg-gold text-gold hover:text-primary-dark px-6 py-4 rounded-full border border-gold/30 hover:border-gold shadow-[0_10px_30px_rgba(200,169,107,0.15)] hover:shadow-[0_10px_35px_rgba(200,169,107,0.35)] backdrop-blur-md transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold cursor-pointer hover:scale-[1.03]"
          >
            <div className="relative flex items-center justify-center">
              <Calendar size={14} className="transition-transform duration-300 group-hover:scale-0 group-hover:absolute" />
              <Sparkles size={14} className="opacity-0 scale-0 transition-all duration-300 absolute group-hover:opacity-100 group-hover:scale-100 group-hover:relative" />
            </div>
            <span>Book Consultation</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
