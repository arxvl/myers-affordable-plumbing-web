import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { businessData } from "@/data/business";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function GoogleReviewCTA() {
  return (
    <Section variant="light" className="pt-0">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-heading text-gray-900 mb-4">Are you a satisfied customer?</h2>
          <Link href={businessData.socials.facebook} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Leave Us a Review</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}