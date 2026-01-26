"use server"

import { Resend } from "resend"
import { z } from "zod"

// Initialize Resend with your API key
// You would need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmailWithResend(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@yourdomain.com>",
      to: ["freddykojuru@gmail.com"],
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      // You could also use HTML for a nicer email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email with Resend:", error)
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      }
    }

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
