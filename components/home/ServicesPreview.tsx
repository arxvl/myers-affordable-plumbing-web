import React from "react";
import Link from "next/link";
import { Flame, Droplet, Wrench, AlertTriangle, Sparkles, Hammer } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ServicesPreview() {
  const topServices = [
    { icon: <Flame size={32} />, title: "Water Heaters", desc: "Installation, repair, and maintenance for tank & tankless heaters." },
    { icon: <Droplet size={32} />, title: "Drain Cleaning", desc: "Fast removal of stubborn clogs and root intrusions." },
    { icon: <Wrench size={32} />, title: "Leak Repair", desc: "Pinpoint leak detection and permanent pipe repairs." },
    { icon: <AlertTriangle size={32} />, title: "Emergency", desc: "24/7 rapid response for active flooding and burst pipes." },
    { icon: <Sparkles size={32} />, title: "Water Softeners", desc: "Whole-house filtration systems to protect your fixtures." },
    { icon: <Hammer size={32} />, title: "General Plumbing", desc: "Toilet repairs, faucet replacements, and fixture upgrades." },
  ];

  return (
    <Section variant="light">
      <Container>
        <SectionHeading 
          title="Our Top Plumbing Services" 
          subtitle="We handle everything from minor repairs to major installations with upfront pricing and guaranteed quality."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {topServices.map((service, idx) => (
            <Card key={idx} hoverEffect className="p-6 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.desc}</p>
              <Link href="/services" className="text-primary font-semibold text-sm hover:underline mt-auto">
                Learn more &rarr;
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="outline">View All Services</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}