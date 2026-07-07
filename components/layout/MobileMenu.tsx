"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { businessData } from "@/data/business";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 flex flex-col lg:hidden"
          >
            <div className="p-4 flex justify-end border-b border-gray-100">
              <button 
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col flex-grow px-6 py-8 space-y-6 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <Link href={`tel:${businessData.contact.phone.replace(/[^0-9+]/g, '')}`} onClick={onClose}>
                <Button variant="accent" className="w-full flex items-center justify-center gap-2">
                  <PhoneCall size={20} />
                  Call Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}