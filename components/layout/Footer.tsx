import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { businessData } from "@/data/business";
import { Droplet, MapPin, Phone, Clock } from "lucide-react";
import { formatPhoneNumberForHref } from "@/lib/utils";

// Standard SVG for Facebook to replace the missing Lucide icon
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-primary text-white rounded-lg">
                <Droplet size={24} />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Myers Plumbing
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed text-pretty">
              Affordable, reliable, and professional plumbing services for residential and commercial properties in {businessData.contact.address.city}. We fix it right the first time.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={businessData.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Customer Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact & Quotes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                <span>{businessData.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={formatPhoneNumberForHref(businessData.contact.phone)} className="hover:text-primary transition-colors font-medium">
                  {businessData.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Business Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Mon - Fri:</span>
                <span className="font-medium text-white">{businessData.hours.monday_friday}</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Saturday:</span>
                <span className="font-medium text-white">{businessData.hours.saturday}</span>
              </li>
              <li className="flex flex-col gap-1 pt-1">
                <span className="text-gray-400">Sunday:</span>
                <span className="font-medium text-accent text-xs uppercase tracking-wide">Emergency Service Only</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left text-sm text-gray-500">
          <p>&copy; {currentYear} {businessData.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for conversion.</p>
        </div>
      </Container>
    </footer>
  );
}