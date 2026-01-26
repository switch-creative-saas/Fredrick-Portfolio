"use server"

import { Resend } from "resend"
import { z } from "zod"
import { sendEmailNodemailer } from "./send-email-nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
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
      timestamp: new Date().toISOString(),
    })

    // Try to use Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        // Initialize Resend with API key
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Prepare email content
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `

        // Send email using Resend
        const { data, error } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["freddykojuru@gmail.com"],
          subject: `Portfolio Contact: ${formData.subject}`,
          reply_to: formData.email,
          html: emailHtml,
        })

        if (error) {
          console.error("Resend API error:", error)
          // If Resend fails, try the nodemailer fallback
          return await sendEmailNodemailer(formData)
        }

        return {
          success: true,
          message: "Your message has been sent successfully! I'll get back to you soon.",
        }
      } catch (resendError) {
        console.error("Error sending email with Resend:", resendError)
        // If Resend throws an exception, try the nodemailer fallback
        return await sendEmailNodemailer(formData)
      }
    } else {
      // If no Resend API key, use nodemailer fallback
      return await sendEmailNodemailer(formData)
    }
  } catch (error) {
    console.error("Error in sendEmail function:", error)

    // Log the form data so it's not lost
    console.log("Form data from failed submission:", formData)

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
