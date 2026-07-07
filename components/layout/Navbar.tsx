"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Droplet, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { businessData } from "@/data/business";
import { cn, formatPhoneNumberForHref } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  // Utilizing our custom hook!
  const { isScrolled } = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white",
          isScrolled ? "shadow-md py-3" : "py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group outline-none">
              <div className="p-2 bg-primary text-white rounded-lg group-hover:bg-primary-light transition-colors">
                <Droplet size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-gray-900">Myers Affordable</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Plumbing</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end mr-2">
                <span className="text-xs text-gray-500 font-medium">Need help? Call us!</span>
                {/* Utilizing our formatting utility */}
                <a href={formatPhoneNumberForHref(businessData.contact.phone)} className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                  {businessData.contact.phoneDisplay}
                </a>
              </div>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="sm">Request Quote</Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={NAV_LINKS} 
      />
    </>
  );
}