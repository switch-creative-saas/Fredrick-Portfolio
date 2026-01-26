import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Base URL - replace with your actual domain when deployed
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/temp/", "/draft/", "/*.php$", "/*.json$"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
