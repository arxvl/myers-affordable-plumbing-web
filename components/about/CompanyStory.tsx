import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { businessData } from "@/data/business";

export function CompanyStory() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl sm:text-5xl font-heading text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At {businessData.name}, we believe everyone deserves access to top-tier, reliable plumbing without breaking the bank. For years, we have served homeowners and small businesses across {businessData.contact.address.city}, establishing a reputation built on high integrity and premium execution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a small local operation has grown into a trusted community staple, but our core philosophy remains unchanged: treat every home like our own and never compromise on quality.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video lg:aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden relative border border-gray-200">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  [Company Team / Van Placeholder]
               </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}