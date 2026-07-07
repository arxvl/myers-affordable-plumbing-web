import React from "react";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      {/* 
        The Emergency Banner sits at the very top of the content structure 
        to catch urgent visitors immediately. 
      */}
      <EmergencyBanner />
      
      {/* 
        The main hero section with the value proposition and primary CTAs.
      */}
      <Hero />
      
      {/* 
        Quick overview of the most popular services.
      */}
      <ServicesPreview />
      
      {/* 
        Builds trust by explaining the company's local roots and guarantees.
      */}
      <WhyChooseUs />
      
      {/* 
        Social proof section displaying top Google reviews.
      */}
      <TestimonialsPreview />
      
      {/* 
        The final conversion banner before the footer.
      */}
      <CTASection />
    </>
  );
}