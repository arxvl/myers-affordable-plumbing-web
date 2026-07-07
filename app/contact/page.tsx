import React from "react";
import { businessData } from "@/data/business";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: `Contact Us | ${businessData.name}`,
  description: `Get a free quote or request emergency plumbing service in ${businessData.contact.address.city}. Call ${businessData.contact.phoneDisplay} today.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Our Team" 
        subtitle="Request an upfront pricing quote or immediate emergency plumbing service today."
      />
      
      <Section>
        <Container>
          <AnimatedSection direction="up" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-4">
              <div className="space-y-8">
                <ContactInfo />
                <GoogleMap />
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}