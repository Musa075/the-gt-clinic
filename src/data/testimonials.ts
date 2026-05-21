export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  featured: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t-1",
    name: "Eleanor V.",
    location: "Moorestown, NJ",
    rating: 5,
    treatment: "Botox & Dermal Fillers",
    quote: "Dr. Farooqui is an absolute artist. I was terrified of looking overdone, but she gave me back the soft volume I had lost in my cheeks and smoothed out my forehead. I look rested, refreshed, and entirely like myself. The concierge experience is worth every penny.",
    featured: true
  },
  {
    id: "t-2",
    name: "Dr. Marcus S.",
    location: "Cherry Hill, NJ",
    rating: 5,
    treatment: "Functional Medicine & BHRT",
    quote: "As a fellow physician, I am extremely picky about who I trust with my health. Dr. Farooqui's root-cause approach to my chronic fatigue and metabolic health has been life-changing. Her protocols are evidence-based, thorough, and highly personalized. My energy and mental clarity are back to where they were ten years ago.",
    featured: true
  },
  {
    id: "t-3",
    name: "Sarah K.",
    location: "Marlton, NJ",
    rating: 5,
    treatment: "Microneedling & Exosomes",
    quote: "I've struggled with acne scarring and hyperpigmentation for years. After three sessions of microneedling with regenerative exosomes at GT Clinic, my skin texture is smoother than it's ever been. Dr. Farooqui performed the treatment herself, which gave me so much peace of mind.",
    featured: true
  },
  {
    id: "t-4",
    name: "David H.",
    location: "Voorhees, NJ",
    rating: 5,
    treatment: "Hair Restoration",
    quote: "My hair had been thinning significantly at the crown. Dr. Farooqui combined BHRT with PRP hair restoration treatments. Six months later, the density has noticeably increased, and my confidence is fully restored. The professionalism of the entire clinic is unmatched.",
    featured: true
  },
  {
    id: "t-5",
    name: "Rebecca L.",
    location: "Philadelphia, PA",
    rating: 5,
    treatment: "Weight Optimization",
    quote: "I tried every diet and exercise plan to lose my stubborn weight after having kids. Dr. Farooqui diagnosed a thyroid and cortisol imbalance. With her metabolic balancing program, I've safely lost 35 lbs, but more importantly, my gut health and sleep are better than ever.",
    featured: true
  }
];
