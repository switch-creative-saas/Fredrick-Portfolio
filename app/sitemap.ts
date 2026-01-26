import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - replace with your actual domain when deployed
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

  // Current date for lastModified
  const currentDate = new Date()

  // Define the sitemap entries
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Main sections as anchor fragments
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#education`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#agency`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#goals`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Portfolio projects
    {
      url: "https://afrirecipes.vercel.app/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.mountainofsolution.org/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://sparked-ng.vercel.app/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://v0-mobile-app-redesign-im47oo.vercel.app/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // Social media profiles
    {
      url: "https://github.com/fredrickakojuru",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "http://linkedin.com/in/fredrick-akojuru-32812a30b",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://twitter.com/fredrickakojuru",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ]
}
