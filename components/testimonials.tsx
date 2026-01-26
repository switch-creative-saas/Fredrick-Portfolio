import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Script from "next/script"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Fredrick was a game-changer for our company website. His attention to detail and technical expertise delivered a product that exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Fredrick helped us build our MVP in record time. His understanding of both technical and business aspects made the development process smooth and efficient.",
      rating: 5,
    },
    {
      name: "Amina Okafor",
      role: "Non-profit Director",
      company: "Community Health Initiative",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "AlienDev Agency created a website that perfectly captures our mission. Fredrick's background in both tech and public health gave him unique insights into our needs.",
      rating: 5,
    },
  ]

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

  return (
    <section id="testimonials" className="section-container bg-muted/30">
      <Script
        id="testimonials-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: testimonials.map((testimonial, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: testimonial.rating,
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: testimonial.name,
                },
                itemReviewed: {
                  "@type": "Organization",
                  name: "AlienDev Agency",
                  url: baseUrl,
                },
                reviewBody: testimonial.content,
              },
            })),
          }),
        }}
      />

      <h2 className="section-title fade-in">Client Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-3 stagger-container">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="stagger-item card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
