"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Accordion({
  question,
  answer,
  isOpen = false,
  onToggle
}: AccordionProps) {
  const [localOpen, setLocalOpen] = useState(false);
  const isOpened = onToggle ? isOpen : localOpen;
  const toggle = onToggle ? onToggle : () => setLocalOpen(!localOpen);

  return (
    <div className="border-b border-gold/20 py-4 transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left py-2 font-serif text-base sm:text-lg font-medium text-primary-dark hover:text-gold transition-colors duration-200 focus:outline-none cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpened ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gold shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-slate text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
