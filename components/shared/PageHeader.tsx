import React from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-primary text-white py-16 sm:py-20 relative overflow-hidden", className)}>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}
        aria-hidden="true"
      />
      
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}