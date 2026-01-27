"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export function WorkExperience() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelectorAll("#experience .slide-in-left, #experience .slide-in-right, #experience .stagger-item")
        .forEach((el) => {
          el.classList.add("animate-in")
        })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const experiences = [
    {
      title: "CEO & Founder",
      company: "GlintSell",
      link: "https://glintsellecommerce.com",
      period: "2024 - Present",
      description: "Leading the vision and growth of an innovative e-commerce and marketplace platform. Responsible for product strategy, business development, and scaling operations.",
      responsibilities: [
        "Product vision and roadmap",
        "Growth and business strategy",
        "Market expansion and partnerships",
        "Building and scaling the team",
        "Platform optimization and user acquisition"
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Cloud Infrastructure"]
    },
    {
      title: "Co-founder & CTO",
      company: "mySwitch Health",
      link: "https://myswitchhealth.com",
      period: "2024 - Present",
      description: "Technical leader driving innovation in health-tech. Building scalable, secure healthcare solutions with modern cloud architecture and user-centered design.",
      responsibilities: [
        "Technical strategy and architecture",
        "Product development leadership",
        "Backend infrastructure (Supabase, PostgreSQL)",
        "Security and compliance implementation",
        "Team technical mentorship"
      ],
      technologies: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "TailwindCSS", "Healthcare APIs"]
    },
    {
      title: "Founding CEO & Technical Lead",
      company: "AlienDev Agency",
      link: "#agency",
      period: "2023 - Present",
      description: "Co-founded and leading a digital solutions agency specializing in custom web development, mobile apps, and e-commerce platforms.",
      responsibilities: [
        "Agency vision and business strategy",
        "Client project management",
        "Technical architecture and code quality",
        "Team development and mentorship",
        "Service offerings and delivery excellence"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase"]
    }
  ]

  return (
    <section id="experience" className="section-container section-glass">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card p-6 md:p-8 stagger-item slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-primary text-lg font-semibold">{exp.company}</p>
              </div>
              <span className="text-muted-foreground mt-2 md:mt-0 whitespace-nowrap">{exp.period}</span>
            </div>

            <p className="text-muted-foreground mb-4">{exp.description}</p>

            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">Technologies & Tools:</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="glass-button">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
