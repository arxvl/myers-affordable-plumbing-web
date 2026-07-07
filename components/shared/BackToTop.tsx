"use client";

import React from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";

export function BackToTop() {
  // Show button after 600px of scroll
  const { isScrolled: isVisible } = useScroll(600);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-white shadow-xl hover:bg-primary-light hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent hidden sm:flex items-center justify-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}