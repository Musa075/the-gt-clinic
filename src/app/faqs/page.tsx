"use client";

import { useState, useMemo } from "react";
import Accordion from "@/components/ui/Accordion";
import { faqsData, FAQItem } from "@/data/faqs";
import { Search, Sparkles, Activity, ShieldCheck, HelpCircle } from "lucide-react";

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<'all' | 'aesthetics' | 'functional' | 'general'>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory = filter === 'all' || faq.category === filter;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  // Generate FAQ Schema dynamically for SEO benefits
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": filteredFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }, [filteredFaqs]);

  return (
    <main className="bg-primary-light min-h-screen pb-20">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/faqs-hero.png')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Information Center
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Frequently Asked Questions
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Find detailed answers about our premium aesthetic procedures, functional diagnostics, hormone therapies, and clinical safety.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gold/20 focus:border-gold outline-none text-sm bg-white shadow-sm transition-all duration-300"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {[
            { id: "all", name: "All Questions", icon: <HelpCircle size={12} /> },
            { id: "aesthetics", name: "Aesthetics", icon: <Sparkles size={12} /> },
            { id: "functional", name: "Functional Medicine", icon: <Activity size={12} /> },
            { id: "general", name: "General Policies", icon: <ShieldCheck size={12} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id as any);
                setOpenId(null); // Close active accordions on tab change
              }}
              className={`flex items-center gap-1.5 px-4.5 py-2 rounded-full font-sans text-[10px] sm:text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                filter === tab.id
                  ? "bg-primary-dark border-primary-dark text-primary-light shadow-sm"
                  : "bg-white border-beige hover:border-gold text-primary-dark"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/15 shadow-sm space-y-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FAQItem) => (
              <Accordion
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-slate text-sm font-sans">
              No matching questions found. Try refining your keywords or filter.
            </div>
          )}
        </div>

        {/* Support Callout */}
        <div className="mt-16 text-center space-y-4 bg-primary-dark text-white rounded-3xl p-8 border border-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Have a specific medical or cosmetic question?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Our clinic is completely physician-led. Contact Dr. Farooqui's concierge care team to request details about clinical services or scheduling.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-primary-dark hover:text-white font-sans text-xs tracking-wider uppercase font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
