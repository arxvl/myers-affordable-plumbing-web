import React from "react";
import { businessData } from "@/data/business";
import { CompanyStory } from "@/components/about/CompanyStory";
import { Mission } from "@/components/about/Mission";
import { Values } from "@/components/about/Values";

// Import Page-Level Shared Components
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: `About Us | ${businessData.name}`,
  description: `Learn more about ${businessData.name}. Family-owned, experienced, and dedicated to serving ${businessData.contact.address.city} with transparent pricing.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Our Company" 
        subtitle="Serving our community with honesty, integrity, and expert plumbing solutions since day one."
      />
      
      {/* Slide up animation for the story */}
      <AnimatedSection direction="up" delay={0.1}>
        <CompanyStory />
      </AnimatedSection>
      
      {/* Slide up animation for the mission statement */}
      <AnimatedSection direction="up" delay={0.2}>
        <Mission />
      </AnimatedSection>
      
      {/* Slide up animation for the core values */}
      <AnimatedSection direction="up" delay={0.1}>
        <Values />
      </AnimatedSection>
    </>
  );
}