import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the contact form submission
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you might store this in a database

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact API route:", error)
    return NextResponse.json({ success: false, message: "Failed to process contact form" }, { status: 500 })
  }
}
