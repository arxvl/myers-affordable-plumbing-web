import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "success" | "outline";
  children: React.ReactNode;
}

export function Badge({ children, variant = "primary", className, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-primary-light/10 text-primary",
    secondary: "bg-gray-100 text-gray-700",
    accent: "bg-accent/10 text-accent-hover",
    success: "bg-green-100 text-green-700",
    outline: "bg-transparent border border-gray-200 text-gray-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}