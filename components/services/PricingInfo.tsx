import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { businessData } from "@/data/business";

export function PricingInfo() {
  return (
    <Section>
      <Container>
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Need a custom or unlisted plumbing job?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Give us a call directly to explain your scope. We offer detailed walk-throughs, clear diagnostic reports, and transparent pricing before any work begins.
          </p>
          <Link href={`tel:${businessData.contact.phone.replace(/[^0-9+]/g, '')}`}>
            <span className="inline-block text-2xl font-bold text-primary hover:underline">
              {businessData.contact.phoneDisplay}
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}