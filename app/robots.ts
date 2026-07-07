import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Hardcoded to the client's production domain
  const baseUrl = "https://myersaffordableplumbing.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}