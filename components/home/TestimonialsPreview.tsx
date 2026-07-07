import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { businessData } from "@/data/business";

export function TestimonialsPreview() {
  const reviews = [
    { text: "They installed my water heater the next day. Excellent work and very professional.", name: "Sarah M." },
    { text: "There is seriously no plumber I'd ever call other than Myers.", name: "David T." },
    { text: "I highly recommend them. Fair pricing and excellent service.", name: "Linda K." },
  ];

  return (
    <Section variant="light">
      <Container>
        <SectionHeading 
          title="Loved by the Community" 
          subtitle={`Join hundreds of satisfied customers who trust ${businessData.name} for their plumbing needs.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, idx) => (
            <Card key={idx} className="p-8 flex flex-col justify-between bg-background border-none">
              <div>
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              </div>
              <p className="font-bold text-gray-900">- {review.name}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline">Read All Reviews</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}