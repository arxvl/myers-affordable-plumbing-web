import React from "react";
import { businessData } from "@/data/business";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PricingInfo } from "@/components/services/PricingInfo";
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: `Our Services | ${businessData.name}`,
  description: `From emergency repair to drain cleaning and water heater installation. View our comprehensive residential and commercial plumbing services.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Professional Plumbing Services" 
        subtitle="Comprehensive, affordable, and durable plumbing solutions for residential and commercial properties."
      />
      
      <AnimatedSection direction="up" delay={0.1}>
        <ServicesGrid />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.2}>
        <PricingInfo />
      </AnimatedSection>
    </>
  );
}