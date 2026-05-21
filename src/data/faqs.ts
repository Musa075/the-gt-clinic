export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'aesthetics' | 'functional' | 'general';
}

export const faqsData: FAQItem[] = [
  {
    id: "q-consultation",
    question: "What should I expect during my initial consultation?",
    answer: "Your initial consultation is a comprehensive 45-to-60 minute physician-led evaluation. Dr. Farooqui reviews your complete medical history, lifestyle factors, aesthetic goals, and skin conditions. For functional medicine, we discuss systemic symptoms, nutrition, and detail the advanced lab work required. For aesthetics, we map your facial anatomy and design a customized, natural-looking treatment plan.",
    category: "general"
  },
  {
    id: "q-downtime",
    question: "Is there significant downtime associated with aesthetic treatments?",
    answer: "Most of our treatments are designed with minimal to zero downtime. Botox and wrinkle relaxers allow you to return to normal activities immediately. Dermal fillers and microneedling may result in 24 to 48 hours of mild redness, swelling, or light bruising, which is easily managed. For treatments with slightly longer recovery profiles, like deep resurfacing, we provide detailed post-care protocols.",
    category: "aesthetics"
  },
  {
    id: "q-safety",
    question: "Are your treatments safe and FDA-approved?",
    answer: "Yes, patient safety is our highest priority. All injectables, lasers, and medical devices used at GT Clinic are FDA-approved and clinically proven. Furthermore, 100% of our clinical procedures are performed directly by Dr. Ghazala Farooqui, a triple board-certified physician, ensuring the highest standards of medical precision and care.",
    category: "general"
  },
  {
    id: "q-functional-vs-traditional",
    question: "How does functional medicine differ from traditional medical practices?",
    answer: "Traditional medicine often focuses on diagnosing a disease and prescribing a medication to suppress the symptoms. Functional medicine is a root-cause approach. We look at the body as an interconnected system and investigate *why* a symptom is occurring (e.g., how gut dysbiosis triggers chronic skin inflammation). We use detailed specialty lab tests to guide personalized dietary, lifestyle, and supplement interventions.",
    category: "functional"
  },
  {
    id: "q-financing",
    question: "Do you offer financing options for treatment plans?",
    answer: "We understand that investing in your health and confidence is significant. We offer transparent pricing and partner with premium patient financing platforms (such as CareCredit or Cherry) that allow you to split your treatment plan cost into manageable, interest-free monthly payments.",
    category: "general"
  },
  {
    id: "q-timeline",
    question: "How long will it take to see results from my treatments?",
    answer: "Results timelines depend on the treatment. Botox results begin showing in 3-5 days and fully settle in 2 weeks. Dermal fillers are visible immediately. Collagen stimulators and microneedling stimulate natural cellular cycles, showing optimal skin quality improvements after 4-8 weeks. Functional medicine journeys typically reveal metabolic, energy, and cognitive improvements over 3-6 months as body systems realign.",
    category: "general"
  },
  {
    id: "q-hormone-safety",
    question: "Is Bioidentical Hormone Replacement Therapy (BHRT) safe?",
    answer: "Yes, when supervised by an experienced physician. We utilize Bioidentical Hormones, which have the exact molecular structure of the hormones your body produces naturally. Before starting, we perform extensive blood panels to assess your base levels. Dr. Farooqui carefully monitors your markers and adjust dosages to achieve optimal physiological balance and alleviate symptoms safely.",
    category: "functional"
  },
  {
    id: "q-medspa-diff",
    question: "How is GT Clinic different from a standard local med-spa?",
    answer: "Unlike standard med-spas that are run by technicians or remote directors, GT Clinic is completely physician-led. Dr. Farooqui conducts every consultation and performs every injection. We merge advanced aesthetic science with internal functional medicine. We believe that true beauty and longevity radiate from optimal internal health, avoiding overfilled or artificial results in favor of natural elegance.",
    category: "aesthetics"
  }
];
