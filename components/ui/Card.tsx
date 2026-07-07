import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",
        hoverEffect && "transition-all duration-200 hover:shadow-md hover:border-gray-200 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}