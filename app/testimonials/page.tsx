import React from "react";
import { businessData } from "@/data/business";
import { RatingSummary } from "@/components/testimonials/RatingSummary";
import { ReviewGrid } from "@/components/testimonials/ReviewGrid";
import { GoogleReviewCTA } from "@/components/testimonials/GoogleReviewCTA";
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: `Customer Reviews | ${businessData.name}`,
  description: `See what our customers say about us. Real 5-star ratings from satisfied homeowners across ${businessData.contact.address.city}.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader 
        title="Customer Reviews" 
        subtitle="Don't just take our word for it. See why your neighbors trust us for all their plumbing needs."
      />
      
      <AnimatedSection direction="up" delay={0.1}>
        <RatingSummary />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.2}>
        <ReviewGrid />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.3}>
        <GoogleReviewCTA />
      </AnimatedSection>
    </>
  );
}