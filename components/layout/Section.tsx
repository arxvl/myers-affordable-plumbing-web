import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "light" | "primary" | "dark";
}

export function Section({ children, className, variant = "default", ...props }: SectionProps) {
  const variants = {
    default: "bg-background",
    light: "bg-white",
    primary: "bg-primary text-white",
    dark: "bg-gray-900 text-white",
  };

  return (
    <section 
      className={cn("py-12 sm:py-20 lg:py-24", variants[variant], className)} 
      {...props}
    >
      {children}
    </section>
  );
}