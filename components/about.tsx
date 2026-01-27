"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { useEffect } from "react"

export function About() {
  // Force animation classes to be applied after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll("#about .fade-in, #about .slide-in-left, #about .slide-in-right").forEach((el) => {
        el.classList.add("animate-in")
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="slide-in-left">
              <h3 className="section-subtitle">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a visionary Nigerian entrepreneur, full-stack engineer, and tech innovator. I'm the CEO & Founder of GlintSell, an innovative e-commerce and marketplace platform, and Co-founder & CTO of mySwitch Health, a groundbreaking health-tech platform transforming healthcare accessibility across Africa. With a strong foundation from APTECH institute in Abuja, I'm also pursuing a degree in Public Health, bridging technology and healthcare innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                At mySwitch Health, I lead technical strategy and product architecture for a scalable healthcare ecosystem featuring smart NFC health cards, secure Supabase backends, and AI-powered diagnostic tools. At GlintSell, I drive product vision and business growth for our e-commerce platform. Through these ventures, I'm addressing real-world problems—from healthcare accessibility to e-commerce scalability—while building products that positively impact millions across Africa.
              </p>
              <p className="text-muted-foreground">
                My journey reflects deep empathy for solving community challenges and relentless execution. From founding AlienDev Agency specializing in web development, to leading health-tech innovation, I combine technical excellence with entrepreneurial vision to create meaningful impact in emerging markets.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="gap-2 button-hover bg-transparent" asChild>
                  <a href="http://linkedin.com/in/fredrick-akojuru-32812a30b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="slide-in-right">
              <h3 className="section-subtitle">My Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Technical Leadership</Badge>
                <Badge>Product Architecture</Badge>
                <Badge>Full Stack Development</Badge>
                <Badge>Supabase & PostgreSQL</Badge>
                <Badge>Health-tech Innovation</Badge>
                <Badge>E-commerce Platforms</Badge>
                <Badge>Startup Scaling</Badge>
                <Badge>Team Building</Badge>
                <Badge>Cloud Infrastructure</Badge>
                <Badge>Tech Entrepreneurship</Badge>
              </div>
              <p className="text-muted-foreground">
                As CEO/Co-founder leading two ventures, I combine deep technical expertise with strategic business vision. I specialize in building scalable, secure systems—from healthcare platforms handling sensitive patient data to e-commerce solutions managing high-volume transactions. I'm passionate about leveraging technology to solve Africa's biggest challenges while building sustainable, impact-driven businesses.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
