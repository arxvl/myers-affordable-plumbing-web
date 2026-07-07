"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { businessData } from "@/data/business";
import { formatPhoneNumberForHref } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";

export function FloatingCallButton() {
  // Show after scrolling past the hero section (approx 400px)
  const { isScrolled: isVisible } = useScroll(400);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden block animate-fade-in-up">
      <a
        href={formatPhoneNumberForHref(businessData.contact.phone)}
        className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl shadow-2xl font-bold text-lg transition-colors border-2 border-white"
        aria-label="Call Now"
      >
        <PhoneCall size={22} className="animate-pulse" />
        Call {businessData.contact.phoneDisplay}
      </a>
    </div>
  );
}