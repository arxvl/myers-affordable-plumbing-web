import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card hoverEffect className="p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center rounded-lg mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">{description}</p>
      </div>
      <Link href="/contact" className="block w-full">
        <Button variant="outline" size="sm" className="w-full">
          Book Service
        </Button>
      </Link>
    </Card>
  );
}