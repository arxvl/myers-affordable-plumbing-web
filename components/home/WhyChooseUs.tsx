import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function WhyChooseUs() {
  const reasons = [
    "Upfront, Honest Pricing",
    "Fully Licensed & Insured Plumbers",
    "Fast, Same-Day Response Available",
    "Clean & Respectful Technicians",
    "No Hidden Fees or Surprises",
    "100% Satisfaction Guarantee"
  ];

  return (
    <Section variant="default" className="bg-blue-50/50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="aspect-square sm:aspect-video lg:aspect-[4/5] rounded-2xl bg-gray-200 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  [Plumber at work image placeholder]
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
              Why Your Neighbors Choose Myers Plumbing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We know that calling a plumber can be stressful. That's why we've built our business on transparency, punctuality, and doing the job right the first time. We treat your home exactly how we would treat our own.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent shrink-0" size={24} />
                  <span className="font-semibold text-gray-800">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}