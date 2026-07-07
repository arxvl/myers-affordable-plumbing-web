import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center", 
  className, 
  ...props 
}: SectionHeadingProps) {
  const alignMap = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12", alignMap[alignment], className)} {...props}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}