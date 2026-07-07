"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// By explicitly omitting the conflicting animation and drag events, 
// we prevent Vercel's strict type-checker from throwing an error.
interface AnimatedSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0,
  direction = "up",
  ...props 
}: AnimatedSectionProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("w-full", className)}
      {...(props as any)} // Type assertion ensures the spread doesn't trigger secondary Framer Motion conflicts
    >
      {children}
    </motion.div>
  );
}