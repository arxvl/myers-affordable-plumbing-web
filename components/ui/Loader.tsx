import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function Loader({ size = 24, className, ...props }: LoaderProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Loader2 
        size={size} 
        className="animate-spin text-primary" 
        aria-hidden="true" 
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}