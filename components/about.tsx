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
                I am a passionate Full Stack Developer and the Founding CEO of AlienDev Agency, a startup web
                development agency focused on creating innovative digital solutions. With a strong foundation from
                APTECH institute Abuja, Nigeria, I'm also pursuing a second degree in public health to bridge technology
                and healthcare.
              </p>
              <p className="text-muted-foreground">
                At AlienDev Agency, we specialize in building cutting-edge web applications, mobile-responsive websites,
                and digital experiences that help businesses thrive in the digital landscape. My journey in technology
                began during my studies at APTECH, where I discovered my passion for problem-solving and software
                development, which eventually led me to founding my own agency.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="gap-2 button-hover" asChild>
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
                <Badge>Full Stack Development</Badge>
                <Badge>Web Applications</Badge>
                <Badge>UI/UX Design</Badge>
                <Badge>Responsive Design</Badge>
                <Badge>E-commerce Solutions</Badge>
                <Badge>API Integration</Badge>
                <Badge>Tech Entrepreneurship</Badge>
                <Badge>Project Management</Badge>
              </div>
              <p className="text-muted-foreground">
                As the leader of AlienDev Agency, I combine technical expertise with business acumen to deliver
                solutions that not only meet technical requirements but also achieve business objectives. I believe in
                leveraging technology to create meaningful impact across various sectors, including healthcare through
                my ongoing studies in public health.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
