"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

type FieldErrors = {
  [key: string]: string[]
}

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific error when user starts typing
    if (fieldErrors && fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: [],
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setFieldErrors(null)
    setFormSuccess(false)

    try {
      // Try the server action first
      const result = await sendEmail(formData)

      if (result.success) {
        setFormSuccess(true)
        toast({
          title: "Message Sent",
          description: result.message,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        // If server action fails with validation errors
        setFormError(result.message)
        if (result.errors) {
          setFieldErrors(result.errors)
        }

        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Server action failed, trying fallback API:", error)

      // Fallback to the API route if server action fails
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (data.success) {
          setFormSuccess(true)
          toast({
            title: "Message Received",
            description: "Your message has been received! I'll get back to you soon.",
          })

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        } else {
          throw new Error(data.message || "Failed to send message")
        }
      } catch (fallbackError) {
        console.error("Both primary and fallback methods failed:", fallbackError)
        setFormError("An unexpected error occurred. Please try again later or contact me directly via email.")
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later or contact me directly via email.",
          variant: "destructive",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-muted/30">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>freddykojuru@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+234 814 826 2447</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <a
                href="http://linkedin.com/in/fredrick-akojuru-32812a30b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/fredrick-akojuru-32812a30b
              </a>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-2">Social Media</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/fredrickakojuru"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="http://linkedin.com/in/fredrick-akojuru-32812a30b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://twitter.com/fredrickakojuru"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            {formSuccess && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Your message has been received! I'll get back to you soon.</AlertDescription>
              </Alert>
            )}

            {formError && (
              <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={fieldErrors?.name ? "border-red-500" : ""}
                />
                {fieldErrors?.name && <p className="text-sm text-red-500 mt-1">{fieldErrors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={fieldErrors?.email ? "border-red-500" : ""}
                />
                {fieldErrors?.email && <p className="text-sm text-red-500 mt-1">{fieldErrors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={fieldErrors?.subject ? "border-red-500" : ""}
                />
                {fieldErrors?.subject && <p className="text-sm text-red-500 mt-1">{fieldErrors.subject[0]}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className={fieldErrors?.message ? "border-red-500" : ""}
                />
                {fieldErrors?.message && <p className="text-sm text-red-500 mt-1">{fieldErrors.message[0]}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
