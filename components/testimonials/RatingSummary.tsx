import React from "react";
import { Star } from "lucide-react";
import { businessData } from "@/data/business";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function RatingSummary() {
  return (
    <Section className="pb-0">
      <Container>
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading text-gray-900 mb-4">Customer Testimonials</h1>
          <div className="flex justify-center items-center gap-1 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={28} />
            ))}
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            {businessData.rating} out of 5 Stars
          </p>
          <p className="text-gray-500 text-sm">
            Based on {businessData.reviewCount} verified local client reviews
          </p>
        </div>
      </Container>
    </Section>
  );
}