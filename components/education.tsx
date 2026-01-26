"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect } from "react"

export function Education() {
  // Force animation classes to be applied after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelectorAll("#education .slide-in-left, #education .slide-in-right, #education .stagger-item")
        .forEach((el) => {
          el.classList.add("animate-in")
        })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="education" className="section-container bg-muted/30">
      <h2 className="section-title">Academic Performance</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="slide-in-left card-hover">
          <CardHeader>
            <CardTitle>Bachelor of Science in Public Health</CardTitle>
            <p className="text-muted-foreground">Currently Pursuing</p>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-muted-foreground">
                Focusing on the intersection of technology and public health systems
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Key Focus Areas:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Health Information Systems</li>
                <li>Data Analysis in Healthcare</li>
                <li>Public Health Interventions</li>
                <li>Community Health Programs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="slide-in-right card-hover">
          <CardHeader>
            <CardTitle>Software Engineering Diploma</CardTitle>
            <p className="text-muted-foreground">APTECH Institute, Abuja, Nigeria</p>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-muted-foreground">Specialized in Web Development and Software Engineering</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Key Achievements:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Developed multiple web applications as part of coursework</li>
                <li>Participated in coding competitions</li>
                <li>Collaborated on team projects</li>
                <li>Mastered various programming languages and frameworks</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Notable Coursework:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Web Development</Badge>
                <Badge variant="outline">Database Management</Badge>
                <Badge variant="outline">Software Engineering</Badge>
                <Badge variant="outline">UI/UX Design</Badge>
                <Badge variant="outline">Mobile Development</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
