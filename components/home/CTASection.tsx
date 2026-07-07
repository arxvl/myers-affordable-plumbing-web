import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { businessData } from "@/data/business";

export function CTASection() {
  return (
    <Section variant="primary" className="relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <Container className="relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-6">
          Need a Plumber Today?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Don't let plumbing problems disrupt your day. Call us now for fast, friendly, and affordable service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`tel:${businessData.contact.phone.replace(/[^0-9+]/g, '')}`}>
            <Button variant="accent" size="lg" className="text-lg px-8 shadow-xl">
              Call {businessData.contact.phoneDisplay}
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg">
              Contact Us Online
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}