"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { OptimizedImage } from "./optimized-image"
import Script from "next/script"

export function Projects() {
  // Force animation classes to be applied after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll("#projects .stagger-item").forEach((el) => {
        el.classList.add("animate-in")
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: "AfriRecipes",
      description:
        "An African cuisine web app designed to give recipes of different African foods, showcasing the rich culinary heritage of the continent.",
      technologies: ["Next.js", "React", "Tailwind CSS", "API Integration", "Responsive Design"],
      link: "https://afrirecipes.vercel.app/",
      github: "https://github.com/fredrickakojuru/afrirecipes",
      image: "/images/afrirecipes.png",
    },
    {
      title: "Mountain of Solution",
      description:
        "A comprehensive church website featuring service information, sermons, events, and community resources.",
      technologies: ["React", "CSS", "JavaScript", "Content Management", "Responsive Design"],
      link: "https://www.mountainofsolution.org/",
      github: "https://github.com/fredrickakojuru/mountain-of-solution",
      image: "/images/mountain.png",
    },
    {
      title: "SparkED",
      description:
        "A tech startup platform designed to help upcoming developers and give them access to live projects and mentorship opportunities.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Authentication", "Database"],
      link: "https://sparked-ng.vercel.app/",
      github: "https://github.com/fredrickakojuru/sparked",
      image: "/images/sparked.png",
    },
    {
      title: "Benchmark App",
      description:
        "A gaming benchmark application to help gamers discover suitable games to play on different devices based on hardware specifications.",
      technologies: ["React", "Mobile-First Design", "Performance Testing", "Data Visualization"],
      link: "https://v0-mobile-app-redesign-im47oo.vercel.app/",
      github: "https://github.com/fredrickakojuru/benchmark-app",
      image: "/images/benchmark.png",
    },
    {
      title: "mySwitch Health",
      description:
        "Health-tech platform providing smart NFC health cards, secure patient systems, and AI-powered health ID solutions for Africa's healthcare ecosystem.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Health-tech", "Secure Backend"],
      link: "https://myswitchhealth.com/",
      github: "https://github.com/fredrickakojuru/myswitch-health",
      image: "/images/myswitch-health.png",
    },
    {
      title: "GlintSell",
      description:
        "E-commerce marketplace platform designed for seamless shopping experiences, multi-vendor support, and scalable transaction handling.",
      technologies: ["Next.js", "E-commerce", "Marketplace", "Payment Integration", "Cloud"],
      link: "https://glintsell-waitlist.vercel.app/",
      github: "https://github.com/fredrickakojuru/glintsell",
      image: "/images/glintsell.png",
    },
    {
      title: "Nova Secret",
      description:
        "Premium catering and baking platform offering custom cakes, exquisite catering services, pastries, and private chef experiences for special events in Abuja.",
      technologies: ["Next.js", "Catering", "E-commerce", "Event Management", "Responsive Design"],
      link: "https://novasecret.vercel.app/",
      github: "https://github.com/fredrickakojuru/nova-secret",
      image: "/images/nova-secret.png",
    },
    {
      title: "Bright Prayer Hub",
      description:
        "Islamic e-commerce platform dedicated to selling authentic Muslim religious books, Islamic literature, and faith-based resources for spiritual growth.",
      technologies: ["Next.js", "E-commerce", "Religious Resources", "Book Sales", "Community"],
      link: "https://bbright.vercel.app/",
      github: "https://github.com/fredrickakojuru/bright-prayer",
      image: "/images/bright-prayer.png",
    },
  ]

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

  return (
    <section id="projects" className="section-container bg-muted/30">
      <h2 className="section-title fade-in">Projects</h2>

      {/* Structured data for projects */}
      <Script
        id="structured-data-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.title,
                description: project.description,
                applicationCategory: "WebApplication",
                operatingSystem: "Any",
                author: {
                  "@type": "Person",
                  name: "Fredrick Akojuru",
                  url: baseUrl,
                },
                url: project.link,
                screenshot: `${baseUrl}${project.image}`,
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />

      <div className="grid gap-6 md:grid-cols-2 stagger-container">
        {projects.map((project, index) => (
          <div key={index} className="project-glass glass-hover stagger-item overflow-hidden">
            <div className="aspect-video w-full overflow-hidden image-hover">
              <OptimizedImage
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                width={600}
                height={340}
                className="object-cover w-full h-full"
                priority={index < 2} // Prioritize loading the first two images
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="button-hover bg-transparent">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button asChild size="sm" className="button-hover">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </div>
        ))}
      </div>
    </section>
  )
}
