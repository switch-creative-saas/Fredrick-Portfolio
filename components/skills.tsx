"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export function Skills() {
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    // Initialize all progress values to 0
    const initialValues: { [key: string]: number } = {}

    // Set all technical and soft skills to 0 initially
    technicalSkills.forEach((skill) => {
      initialValues[skill.name] = 0
    })

    softSkills.forEach((skill) => {
      initialValues[skill.name] = 0
    })

    setProgressValues(initialValues)

    // Animate progress bars after a short delay
    const timer = setTimeout(() => {
      const finalValues: { [key: string]: number } = {}

      technicalSkills.forEach((skill) => {
        finalValues[skill.name] = skill.proficiency
      })

      softSkills.forEach((skill) => {
        finalValues[skill.name] = skill.proficiency
      })

      setProgressValues(finalValues)

      // Also ensure animation classes are applied
      document.querySelectorAll("#skills .slide-in-left, #skills .slide-in-right").forEach((el) => {
        el.classList.add("animate-in")
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const technicalSkills = [
    { name: "JavaScript/React/Next.js", proficiency: 90 },
    { name: "HTML/CSS/Tailwind", proficiency: 95 },
    { name: "Node.js", proficiency: 85 },
    { name: "Database Management", proficiency: 80 },
    { name: "Responsive Web Design", proficiency: 90 },
    { name: "UI/UX Design", proficiency: 85 },
    { name: "API Integration", proficiency: 85 },
    { name: "Version Control (Git)", proficiency: 80 },
  ]

  const softSkills = [
    { name: "Problem Solving", proficiency: 95 },
    { name: "Team Collaboration", proficiency: 90 },
    { name: "Communication", proficiency: 85 },
    { name: "Project Management", proficiency: 80 },
    { name: "Adaptability", proficiency: 90 },
    { name: "Time Management", proficiency: 85 },
  ]

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="slide-in-left card-hover">
          <CardContent className="p-6">
            <h3 className="section-subtitle">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{progressValues[skill.name] || 0}%</span>
                  </div>
                  <Progress
                    value={progressValues[skill.name] || 0}
                    className="h-2"
                    style={{ transition: "width 1s ease-out" }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="slide-in-right card-hover">
          <CardContent className="p-6">
            <h3 className="section-subtitle">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{progressValues[skill.name] || 0}%</span>
                  </div>
                  <Progress
                    value={progressValues[skill.name] || 0}
                    className="h-2"
                    style={{ transition: "width 1s ease-out" }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
