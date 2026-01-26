import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Target, TrendingUp, Lightbulb, Award, GraduationCap } from "lucide-react"

export function Goals() {
  const shortTermGoals = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      title: "Complete Public Health Degree",
      description:
        "Successfully complete my second degree in public health while maintaining my software engineering practice.",
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Expand Project Portfolio",
      description:
        "Develop more innovative web applications that solve real-world problems, particularly in the health sector.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Master Advanced Web Technologies",
      description:
        "Deepen knowledge in modern web frameworks and technologies through specialized courses and projects.",
    },
  ]

  const longTermGoals = [
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Develop Health Tech Solutions",
      description: "Create technology solutions that address public health challenges in Nigeria and across Africa.",
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Grow SparkED Initiative",
      description:
        "Expand the SparkED platform to mentor more upcoming developers and create opportunities for tech education.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      title: "Combine Tech & Health Expertise",
      description:
        "Leverage both software engineering and public health knowledge to develop innovative health systems.",
    },
  ]

  return (
    <section id="goals" className="section-container">
      <h2 className="section-title">Professional Goals</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Short-Term Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {shortTermGoals.map((goal, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-0.5">{goal.icon}</div>
                  <div>
                    <h3 className="font-semibold">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Long-Term Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {longTermGoals.map((goal, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-0.5">{goal.icon}</div>
                  <div>
                    <h3 className="font-semibold">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
