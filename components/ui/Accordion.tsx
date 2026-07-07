"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

export function Accordion({ items }: { items: Omit<AccordionItemProps, "isOpen">[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-900 pr-4">{item.title}</span>
            <ChevronDown 
              className={cn(
                "text-gray-500 transition-transform duration-300 shrink-0",
                openIndex === index && "rotate-180 text-primary"
              )} 
              size={20} 
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}