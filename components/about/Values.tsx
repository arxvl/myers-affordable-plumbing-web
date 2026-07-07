import React from "react";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { businessData } from "@/data/business";

export function Values() {
  const values = [
    {
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "Honest & Transparent",
      description: "No hidden fees, no surprise charges. We provide upfront, fair pricing before any work begins.",
    },
    {
      icon: <Award className="text-accent" size={32} />,
      title: "Expert Craftsmanship",
      description: "Our plumbing solutions are built to last. We stand behind the quality of every single project.",
    },
    {
      icon: <Clock className="text-accent" size={32} />,
      title: "Fast & Reliable",
      description: "Plumbing emergencies can't wait. We show up on time and resolve issues efficiently.",
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Community Focused",
      description: `As proud members of the ${businessData.contact.address.city} community, we treat our clients like family.`,
    },
  ];

  return (
    <Section variant="light">
      <Container>
        <SectionHeading title="The Values That Drive Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 flex gap-6 border-none bg-background">
              <div className="flex-shrink-0">{value.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}