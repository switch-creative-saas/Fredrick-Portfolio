import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Globe, ShoppingCart, BarChart, Smartphone, Server, Users } from "lucide-react"

export function AgencyServices() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
      tags: ["Wireframing", "Prototyping", "User Testing", "Responsive Design"],
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "E-commerce Solutions",
      description: "Custom online stores and marketplaces that drive sales and improve customer experience.",
      tags: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to increase visibility and drive targeted traffic.",
      tags: ["SEO", "Content Marketing", "Social Media", "Email Campaigns"],
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Business Analytics",
      description: "Data-driven insights to help businesses make informed decisions and optimize performance.",
      tags: ["Data Visualization", "Performance Metrics", "Conversion Optimization"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "API Development",
      description: "Custom API solutions to connect your applications and services seamlessly.",
      tags: ["RESTful APIs", "GraphQL", "Microservices", "Integration"],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Technical Consultation",
      description: "Expert advice on technology stack, architecture, and digital transformation strategies.",
      tags: ["Strategy", "Technology Assessment", "Digital Transformation"],
    },
  ]

  return (
    <section id="agency" className="section-container bg-muted/30">
      <h2 className="section-title">AlienDev Agency</h2>

      <div className="mb-12">
        <Card>
          <CardContent className="p-6 md:p-8 mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full bg-muted">
                  <img src="/images/profile.png" alt="Fredrick Akojuru" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Fredrick Akojuru</h3>
                <p className="text-muted-foreground">Founding CEO & Technical Lead</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full stack developer with expertise in modern web technologies and a passion for creating impactful
                  digital solutions. Currently pursuing a second degree in public health.
                </p>
              </div>

              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full bg-muted">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Godsent Akojuru"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Godsent Akojuru</h3>
                <p className="text-muted-foreground">Founding Partner & Creative Director</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Visionary creative director with a keen eye for design and user experience. Brings strategic thinking
                  and innovative approaches to every project.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                At AlienDev Agency, we're committed to delivering exceptional digital experiences that help businesses
                thrive in the digital landscape. We combine technical expertise with creative innovation to build
                solutions that not only meet technical requirements but also achieve business objectives.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="mb-2">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
