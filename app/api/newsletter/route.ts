import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Valid email address required" }, { status: 400 })
    }

    // Log the newsletter subscription
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
    })

    // In a real app, you'd send this to an email service like Resend or Mailchimp
    // Example with a fake API call:
    /*
    const response = await fetch("https://api.yourservice.com/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    
    if (!response.ok) {
      throw new Error("Subscription service error")
    }
    */

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the newsletter!",
    })
  } catch (error) {
    console.error("Error in newsletter API route:", error)
    return NextResponse.json({ success: false, message: "Failed to process subscription" }, { status: 500 })
  }
}
