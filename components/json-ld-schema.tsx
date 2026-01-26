"use client"

import Script from "next/script"

export function JsonLdSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Person schema
      {
        "@type": "Person",
        "@id": `${baseUrl}/#fredrick-akojuru`,
        name: "Fredrick Akojuru",
        url: baseUrl,
        sameAs: [
          "https://github.com/fredrickakojuru",
          "http://linkedin.com/in/fredrick-akojuru-32812a30b",
          "https://twitter.com/fredrickakojuru",
        ],
        jobTitle: "Full Stack Developer & Founding CEO",
        worksFor: {
          "@type": "Organization",
          "@id": `${baseUrl}/#aliendev-agency`,
          name: "AlienDev Agency",
        },
        image: `${baseUrl}/images/profile.png`,
        description:
          "Full stack developer specializing in modern web technologies and founding CEO of AlienDev Agency.",
        knowsAbout: [
          "Web Development",
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Public Health Technology",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "APTECH Institute",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abuja",
            addressCountry: "Nigeria",
          },
        },
        nationality: {
          "@type": "Country",
          name: "Nigeria",
        },
      },

      // WebSite schema
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Fredrick Akojuru | Full Stack Developer & Agency Founder",
        description:
          "Professional portfolio and services of Fredrick Akojuru, full stack developer and AlienDev Agency founder.",
        publisher: {
          "@id": `${baseUrl}/#aliendev-agency`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      },

      // Organization schema (AlienDev Agency)
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#aliendev-agency`,
        name: "AlienDev Agency",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/aliendev-logo.png`,
          width: 190,
          height: 60,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          addressCountry: "Nigeria",
        },
        email: "freddykojuru@gmail.com",
        telephone: "+234 814 826 2447",
        sameAs: [
          "https://github.com/fredrickakojuru",
          "http://linkedin.com/in/fredrick-akojuru-32812a30b",
          "https://twitter.com/fredrickakojuru",
        ],
        founder: {
          "@id": `${baseUrl}/#fredrick-akojuru`,
        },
        description:
          "AlienDev Agency is a web development firm specializing in modern, responsive web applications and digital solutions for businesses across Africa and globally.",
        areaServed: ["Nigeria", "Africa", "Global"],
        priceRange: "$$",
        memberOf: {
          "@type": "ProfessionalService",
          name: "Web Development Services",
        },
      },

      // BreadcrumbList schema
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${baseUrl}/#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: `${baseUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Agency",
            item: `${baseUrl}/#agency`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${baseUrl}/#contact`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "CV",
            item: `${baseUrl}/cv`,
          },
        ],
      },
    ],
  }

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(mainSchema),
      }}
    />
  )
}
