import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

        {/* Sticky Mobile CTA Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-dark border-t border-gold/20 flex divide-x divide-white/10">
          <a
            href="tel:+18568864506"
            className="flex-1 py-4 text-center font-sans text-[10px] uppercase tracking-widest font-bold text-gold hover:bg-white/5 transition-colors"
          >
            Call Clinic
          </a>
          <a
            href="/contact"
            className="flex-1 py-4 text-center font-sans text-[10px] uppercase tracking-widest font-bold text-white bg-gold/20 hover:bg-gold/30 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </body>
    </html>
  );
}
