import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { businessData } from "@/data/business";
import { TrustBadges } from "./TrustBadges";
import { formatPhoneNumberForHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <Container className="py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="lg:w-1/2 z-10 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-primary mb-6 border border-blue-200">
            <span className="text-yellow-500 font-bold text-lg leading-none">★★★★★</span>
            <span className="text-sm font-semibold">{businessData.rating} Google Rating</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Reliable Plumbing Services <br className="hidden lg:block" />
            <span className="text-primary">You Can Count On</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Locally owned and operated in {businessData.contact.address.city}. We provide affordable pricing, fast responses, and transparent quotes for all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={formatPhoneNumberForHref(businessData.contact.phone)}>
              <Button size="lg" variant="accent" className="w-full sm:w-auto flex gap-2">
                <PhoneCall size={20} />
                Call Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white">
                Request a Quote
              </Button>
            </Link>
          </div>
          
          <TrustBadges className="mt-10 pt-6 border-t border-gray-200" />
        </div>

        <div className="lg:w-1/2 w-full relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Placeholder for Hero Illustration / Image */}
          <div className="aspect-[4/3] rounded-2xl bg-gray-200 shadow-xl overflow-hidden relative border-4 border-white flex items-center justify-center text-gray-400 font-medium">
             [Hero Plumbing Image / Illustration Placeholder]
          </div>
        </div>
      </Container>
    </section>
  );
}