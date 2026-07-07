import React from "react";
import Script from "next/script";
import { businessData } from "@/data/business";

export function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessData.name,
    "image": "https://myersaffordableplumbing.com/images/logo.png",
    "@id": "https://myersaffordableplumbing.com",
    "url": "https://myersaffordableplumbing.com",
    "telephone": businessData.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.contact.address.street,
      "addressLocality": businessData.contact.address.city,
      "addressRegion": businessData.contact.address.state,
      "postalCode": businessData.contact.address.zip,
      "addressCountry": businessData.contact.address.country
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessData.rating.toString(),
      "reviewCount": businessData.reviewCount.toString()
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      businessData.socials.facebook
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}