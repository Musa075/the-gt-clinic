import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/ui/FloatingCta";
import { Phone, Calendar } from "lucide-react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regenerative, Aesthetic & Functional Medicine | Marlton, NJ - GT Clinic",
  description: "Physician-led regenerative aesthetics and root-cause functional medicine in Marlton, New Jersey. Experience natural-looking results and optimized vitality with Dr. Ghazala Farooqui, MD.",
  keywords: ["Aesthetic Medicine Marlton NJ", "Functional Medicine Marlton NJ", "Botox Marlton NJ", "Dermal Fillers Cherry Hill NJ", "Hair Restoration South Jersey", "Dr. Ghazala Farooqui MD", "GT Clinic"],
  openGraph: {
    title: "Regenerative, Aesthetic & Functional Medicine | Marlton, NJ - GT Clinic",
    description: "Physician-led regenerative aesthetics and root-cause functional medicine in Marlton, New Jersey.",
    url: "https://thegtclinic.com",
    siteName: "GT Aesthetics & Functional Medicine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerative, Aesthetic & Functional Medicine | Marlton, NJ - GT Clinic",
    description: "Physician-led regenerative aesthetics and root-cause functional medicine in Marlton, NJ.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-light text-primary-dark">
        {/* Main Navigation */}
        <Navbar />
        
        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Desktop Floating Consultation CTA */}
        <FloatingCta />

        {/* Floating Mobile CTA Bar */}
        <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-xs z-40 bg-primary-dark/90 backdrop-blur-lg rounded-full border border-gold/30 flex items-center justify-between p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
          <a
            href="tel:+18568864506"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold text-gold hover:bg-white/5 transition-all duration-300"
          >
            <Phone size={12} />
            <span>Call</span>
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-widest font-extrabold text-primary-dark bg-gold hover:bg-gold/90 transition-all duration-300 shadow-md shadow-gold/10"
          >
            <Calendar size={12} />
            <span>Book Now</span>
          </a>
        </div>
      </body>
    </html>
  );
}

