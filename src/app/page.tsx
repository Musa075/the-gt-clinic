import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DrBio from "@/components/sections/DrBio";
import FunctionalIntro from "@/components/sections/FunctionalIntro";
import AestheticShowcase from "@/components/sections/AestheticShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBanner from "@/components/sections/CtaBanner";
import FaqAccordionSection from "@/components/sections/FaqAccordionSection";

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Featured Services Grid */}
      <ServicesGrid />

      {/* 4. Meet Dr. Farooqui (Biography / Personal Brand) */}
      <DrBio />

      {/* 5. Functional Medicine Section */}
      <FunctionalIntro />

      {/* 6. Aesthetic Treatments Showcase (Before/After comparison) */}
      <AestheticShowcase />

      {/* 7. Patient Testimonials */}
      <TestimonialsSection />

      {/* 8. Consultation CTA Banner */}
      <CtaBanner />

      {/* 9. FAQ Preview Accordions (includes FAQ Schema) */}
      <FaqAccordionSection />
    </div>
  );
}
