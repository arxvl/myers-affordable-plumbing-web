import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { businessData } from "@/data/business";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Import Global Shared Components
import { FloatingCallButton } from "@/components/shared/FloatingCallButton";
import { BackToTop } from "@/components/shared/BackToTop";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SEO } from "@/components/shared/SEO";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `${businessData.name} | Reliable Plumbing in ${businessData.contact.address.city}`,
  description: `Top-rated plumbing services in ${businessData.contact.address.city}, ${businessData.contact.address.state}. Affordable, fast, and licensed. Call ${businessData.contact.phoneDisplay} today.`,
  openGraph: {
    title: businessData.name,
    description: "Professional and affordable plumbing services.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth suppressHydrationWarning">
      <head>
        {/* Injects Local Business Schema for SEO */}
        <SEO />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {/* Progress bar at the very top of the screen */}
        <ScrollProgress />
        
        <Navbar />
        
        <main className="min-h-screen pt-24 flex flex-col">
          {/* Breadcrumbs appear on all pages except the Home page automatically */}
          <Breadcrumb />
          {children}
        </main>
        
        <Footer />
        
        {/* Global floating interactive elements */}
        <FloatingCallButton />
        <BackToTop />
      </body>
    </html>
  );
}

