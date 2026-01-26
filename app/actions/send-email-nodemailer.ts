"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmailNodemailer(formData: FormData) {
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

    // Log the form submission (this will be visible in Vercel logs)
    console.log("Contact form submission:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message.substring(0, 100) + (formData.message.length > 100 ? "..." : ""),
      timestamp: new Date().toISOString(),
    })

    // For now, we'll just return success without actually sending an email
    // In a production environment, you would configure nodemailer with your SMTP credentials

    return {
      success: true,
      message: "Your message has been received! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error in sendEmailNodemailer function:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
