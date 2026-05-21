export interface Service {
  slug: string;
  title: string;
  category: 'aesthetics' | 'functional' | 'regenerative';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  downtime: string;
  recovery: string;
  intensity: 'Low' | 'Medium' | 'High';
  image: string;
}

export const servicesData: Service[] = [
  {
    slug: "botox-wrinkle-relaxers",
    title: "Botox & Wrinkle Relaxers",
    category: "aesthetics",
    shortDesc: "Soften fine lines and restore a refreshed, youthful expression with physician-performed injectables.",
    fullDesc: "Our physician-led wrinkle relaxer treatments utilize Botox®, Dysport®, and Xeomin® to target the underlying muscles responsible for expression lines. By temporarily relaxing these muscles, we achieve a natural-looking, smooth, and refreshed appearance that enhances your natural beauty without looking 'frozen'.",
    benefits: [
      "Smooths forehead creases, frown lines, and crow's feet",
      "Prevents the deepening of existing expression lines",
      "Quick, 15-minute treatment with zero downtime",
      "Subtle, natural-looking results that preserve expression",
      "Physician-administered for maximum safety and precision"
    ],
    duration: "15 - 30 minutes",
    downtime: "None (immediate return to daily activities)",
    recovery: "Full results appear in 7-14 days; lasts 3-4 months.",
    intensity: "Low",
    image: "/images/services/botox-wrinkle-relaxers.png"
  },
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "aesthetics",
    shortDesc: "Restore volume, sculpt features, and contour the face with precision hyaluronic acid fillers.",
    fullDesc: "Hyaluronic acid dermal fillers are used to artistically restore lost volume, lift sagging tissues, and redefine facial contours. Dr. Farooqui focuses on structural facial balancing to enhance the cheeks, jawline, lips, and under-eye area for a youthful and balanced aesthetic.",
    benefits: [
      "Restores volume to hollowed cheeks and under-eye areas",
      "Plumps and defines lips with natural symmetry",
      "Sharpens and contours the jawline and chin",
      "Softens nasolabial folds and marionette lines",
      "Immediate visible results with minimal downtime"
    ],
    duration: "30 - 45 minutes",
    downtime: "1 - 2 days of mild swelling/redness",
    recovery: "Immediate results; optimal settling in 2 weeks. Lasts 6-18 months.",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "microneedling",
    title: "Microneedling & Collagen Induction",
    category: "aesthetics",
    shortDesc: "Trigger your skin's natural healing process to refine texture, reduce scarring, and boost elasticity.",
    fullDesc: "Microneedling (Collagen Induction Therapy) creates controlled micro-injuries in the skin, prompting the body's natural healing response. This stimulates the production of collagen and elastin, softening acne scars, refining enlarged pores, fading hyperpigmentation, and smoothing fine lines.",
    benefits: [
      "Significantly improves skin texture and minimizes pore size",
      "Reduces the appearance of acne scars and stretch marks",
      "Promotes deep collagen and elastin synthesis",
      "Evens skin tone and targets hyperpigmentation",
      "Safe for all skin types and tones"
    ],
    duration: "45 - 60 minutes",
    downtime: "24 - 48 hours of mild pinkness (like a mild sunburn)",
    recovery: "Redness subsides in 2 days; collagen builds over 4-6 weeks.",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "hair-restoration",
    title: "Physician-Led Hair Restoration",
    category: "regenerative",
    shortDesc: "Regenerate thinning hair and stimulate dormant follicles using medical-grade growth factors and PRP.",
    fullDesc: "Our comprehensive hair restoration protocol targets androgenetic alopecia and thinning hair from multiple angles. Combining physician-guided topical/oral therapies, hormone balancing, and localized injections of autologous growth factors or Platelet-Rich Plasma (PRP), we revitalize dormant hair follicles.",
    benefits: [
      "Stimulates dormant follicles to enter the active growth phase",
      "Increases hair density, thickness, and shaft diameter",
      "Combats thinning at the crown, temples, and part lines",
      "Drug-free and minimally invasive treatment options",
      "Addressed alongside internal health and hormonal optimization"
    ],
    duration: "45 - 60 minutes",
    downtime: "None (mild scalp tenderness for 24 hours)",
    recovery: "Initial shedding slows down in 4 weeks; new growth visible in 3-6 months.",
    intensity: "Medium",
    image: "/images/services/hair-restoration.png"
  },
  {
    slug: "functional-medicine",
    title: "Root-Cause Functional Medicine",
    category: "functional",
    shortDesc: "Identify and resolve the root causes of chronic fatigue, gut issues, and systemic inflammation.",
    fullDesc: "Functional medicine looks beyond symptom management to understand *why* dysfunction is occurring. Dr. Farooqui utilizes advanced functional laboratory testing (gut microbiome analyses, food sensitivity profiles, toxin screenings) to create highly personalized wellness blueprints.",
    benefits: [
      "Addresses chronic gut issues, bloating, and leaky gut syndrome",
      "Reduces systemic inflammation and optimizes immune health",
      "Combats chronic fatigue and brain fog by supporting mitochondria",
      "Identifies hidden nutrient deficiencies and environmental toxicities",
      "Empowers you with customized nutrition and lifestyle plans"
    ],
    duration: "60 minutes (Initial consultation)",
    downtime: "None",
    recovery: "Holistic healing occurs over 3-6 months as body systems re-balance.",
    intensity: "Low",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "hormone-optimization",
    title: "Bioidentical Hormone Optimization",
    category: "functional",
    shortDesc: "Restore youthful energy, focus, and libido with customized, bioidentical hormone replacement therapy (BHRT).",
    fullDesc: "Hormonal declines during menopause, perimenopause, and andropause can leave you feeling fatigued, irritable, and unfocused. Our Bioidentical Hormone Replacement Therapy (BHRT) uses hormones chemically identical to those your body naturally produces to restore balance and vitality safely.",
    benefits: [
      "Alleviates hot flashes, night sweats, and sleep disturbances",
      "Improves mood, mental clarity, focus, and memory",
      "Restores energy levels, physical stamina, and muscle tone",
      "Supports healthy metabolism and weight management",
      "Enhances libido and sexual wellness"
    ],
    duration: "45 minutes",
    downtime: "None",
    recovery: "Symptom improvement within 2-4 weeks; full stabilization in 3 months.",
    intensity: "Low",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation & Laser Therapies",
    category: "aesthetics",
    shortDesc: "Target sun damage, redness, and fine lines with advanced light and laser treatments.",
    fullDesc: "We offer tailored laser and light therapies to treat vascular issues, unwanted pigmentation, sun spots, and uneven skin tone. These physician-guided energy-based treatments gently resurface the skin to reveal a smooth, bright, and even-toned complexion.",
    benefits: [
      "Fades hyperpigmentation, sun damage, and age spots",
      "Clears diffuse facial redness, broken capillaries, and rosacea",
      "Refines surface lines and stimulates cellular renewal",
      "Non-invasive with structured healing guidelines",
      "Optimized for safety across different skin phototypes"
    ],
    duration: "30 - 60 minutes",
    downtime: "1 - 3 days of mild redness or superficial peeling",
    recovery: "Sun protection is mandatory post-treatment; clear skin in 7-10 days.",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "collagen-stimulation",
    title: "Collagen Stimulators (Sculptra & Radiesse)",
    category: "regenerative",
    shortDesc: "Rebuild your skin's structural foundation over time for natural, long-lasting firming and lifting.",
    fullDesc: "Unlike traditional dermal fillers, collagen biostimulators like Sculptra® (poly-L-lactic acid) and Radiesse® (calcium hydroxylapatite) work by teaching your body to produce its own collagen. This gradually restores volume, firms sagging skin, and refines wrinkles from the inside out.",
    benefits: [
      "Gradual, natural-looking volume restoration over 3-6 months",
      "Tightens and firms loose skin on the face, neck, and hands",
      "Significantly improves skin quality, elasticity, and glow",
      "Extremely long-lasting results (up to 2 years or more)",
      "Reconstructs the underlying dermal matrix"
    ],
    duration: "30 - 45 minutes",
    downtime: "Minimal (mild swelling or bruising for 2-3 days)",
    recovery: "Results build progressively; initial swelling settles in 2 days. Long-term benefits.",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "weight-optimization",
    title: "Metabolic & Weight Optimization",
    category: "functional",
    shortDesc: "Achieve lasting vitality and healthy weight with physician-supervised metabolic balancing and Semaglutide.",
    fullDesc: "Weight management is not about willpower; it is about biology. Our physician-supervised program combines hormone optimization, gut microbiome health, nutritional counseling, and GLP-1 peptide therapies (such as Semaglutide or Tirzepatide) to optimize your metabolic set point.",
    benefits: [
      "Physician-supervised and custom-calibrated dosing",
      "Focuses on losing fat while preserving lean muscle mass",
      "Regulates blood sugar, insulin resistance, and cravings",
      "Addresses underlying thyroid, gut, and cortisol imbalances",
      "Includes comprehensive lifestyle, nutritional, and detox coaching"
    ],
    duration: "45 minutes",
    downtime: "None",
    recovery: "Steady, healthy fat loss of 1-2 lbs per week; sustained metabolic shifts.",
    intensity: "Low",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    slug: "regenerative-therapies",
    title: "Regenerative Exosome & PRP Aesthetics",
    category: "regenerative",
    shortDesc: "Harness the power of stem-cell-derived exosomes and platelets to accelerate cellular repair and anti-aging.",
    fullDesc: "Regenerative medicine represents the pinnacle of anti-aging. By combining treatments like microneedling or lasers with topical or injected autologous Platelet-Rich Plasma (PRP) or ultra-pure stem-cell-derived Exosomes, we accelerate skin cell repair, minimize downtime, and maximize cellular rejuvenation.",
    benefits: [
      "Speeds up post-treatment healing time by up to 50%",
      "Provides a massive boost of growth factors and cellular signals",
      "Drastically reduces fine lines, pore size, and uneven texture",
      "Promotes deep vascular and structural skin regeneration",
      "Pure, science-backed cellular communication therapies"
    ],
    duration: "60 minutes",
    downtime: "24 hours (significantly shortened due to exosomes)",
    recovery: "Fast healing; skin looks radiant and renewed in 48 hours.",
    intensity: "Medium",
    image: "/images/services/regenerative-therapies.png"
  }
];
