import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function Divider({ text, className, ...props }: DividerProps) {
  return (
    <div className={cn("relative py-6", className)} {...props}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      {text && (
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm text-gray-500 uppercase tracking-widest font-semibold">
            {text}
          </span>
        </div>
      )}
    </div>
  );
}