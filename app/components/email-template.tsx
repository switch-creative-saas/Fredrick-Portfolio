import type React from "react"
interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, subject, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h2 style={{ color: "#3b82f6" }}>New Contact Form Submission</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "15px",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      {message.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
    <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "20px" }}>
      This email was sent from your portfolio contact form.
    </p>
  </div>
)

export default EmailTemplate
