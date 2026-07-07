import React from "react";
import { AlertTriangle, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { businessData } from "@/data/business";

export function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-4 shadow-inner relative z-20">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <AlertTriangle className="animate-pulse" size={24} />
            <span className="font-bold text-lg sm:text-xl tracking-wide uppercase">
              Plumbing Emergency?
            </span>
          </div>
          <a 
            href={`tel:${businessData.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md"
          >
            <PhoneCall size={18} />
            {businessData.contact.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}