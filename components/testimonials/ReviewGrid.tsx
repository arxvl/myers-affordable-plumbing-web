import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReviewCard } from "./ReviewCard";

export function ReviewGrid() {
  const verifiedReviews = [
    { name: "Sarah M.", location: "Richland, MO", text: "They installed my water heater the next day. Excellent work, fair pricing, and very professional behavior throughout.", date: "2 weeks ago" },
    { name: "David T.", location: "Richland, MO", text: "There is seriously no plumber I'd ever call other than Myers. Fast response time when our main drain lines backed up.", date: "1 month ago" },
    { name: "Linda K.", location: "Richland, MO", text: "I highly recommend them. Honest pricing, friendly service, and they left the workspace spotless when finished.", date: "2 months ago" },
    { name: "Robert P.", location: "Richland, MO", text: "Excellent troubleshooting skills. Found a wall leak instantly that two other plumbers completely missed. Real pros.", date: "3 months ago" },
    { name: "Emily J.", location: "Richland, MO", text: "Very affordable pricing structures and great communication over the phone. Prompt arrival window.", date: "4 months ago" },
    { name: "James L.", location: "Richland, MO", text: "Fast, accurate quotes and high-quality results. Solved our kitchen faucet and garbage disposal issues effortlessly.", date: "5 months ago" },
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </Container>
    </Section>
  );
}