import React from "react";
import { Wrench, Droplet, Settings, Flame, Sparkles, AlertTriangle, Bath, ChefHat, Hammer } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  const coreServices = [
    { icon: <Wrench size={28} />, title: "Drain Cleaning", description: "Clearing out stubborn line clogs, grease build-ups, and roots." },
    { icon: <Droplet size={28} />, title: "Leak Detection", description: "Advanced non-invasive locating techniques to identify hidden leaks." },
    { icon: <Settings size={28} />, title: "Pipe Repair & Replacement", description: "Fixing burst lines, corroded copper, and old sewer connections." },
    { icon: <Flame size={28} />, title: "Water Heaters", description: "Professional installation of traditional and tankless water heaters." },
    { icon: <Sparkles size={28} />, title: "Water Softeners", description: "Eliminate scale buildup and protect your home fixtures." },
    { icon: <AlertTriangle size={28} />, title: "Emergency Plumbing", description: "Rapid dispatch solutions for active flooding or severe backups." },
    { icon: <Bath size={28} />, title: "Bathroom Plumbing", description: "Flawless integration of showers, tubs, toilets, and custom vanities." },
    { icon: <ChefHat size={28} />, title: "Kitchen Plumbing", description: "Installing garbage disposals, luxury sink fixtures, and dishwasher lines." },
    { icon: <Hammer size={28} />, title: "General Repairs", description: "Comprehensive maintenance on running toilets and dripping faucets." },
  ];

  return (
    <Section variant="light">
      <Container>
        <SectionHeading 
          title="Professional Plumbing Services" 
          subtitle="No job is too big or too small. We combine technical expertise with affordable, transparent local rates."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}