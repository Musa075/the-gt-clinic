import Accordion from "../ui/Accordion";
import { faqsData } from "@/data/faqs";

export default function FaqAccordionSection() {
  // Preview 5 main questions on the homepage
  const previewFaqs = faqsData.slice(0, 5);

  // Generate structured FAQ schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": previewFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="bg-primary-light py-24 border-t border-beige relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-dark">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-2" />
        </div>

        {/* Accordions Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gold/10 shadow-md">
          {previewFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* Inline Structured Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

      </div>
    </section>
  );
}
