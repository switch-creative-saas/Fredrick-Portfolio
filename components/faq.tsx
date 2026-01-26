import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQSchema } from "./faq-schema"

export function FAQ() {
  const faqs = [
    {
      question: "What services does AlienDev Agency offer?",
      answer:
        "AlienDev Agency offers a range of digital services including web development, UI/UX design, e-commerce solutions, digital marketing, business analytics, mobile development, API development, and technical consultation.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, and various database solutions. I focus on creating responsive, accessible, and performant web applications.",
    },
    {
      question: "How can I contact you for a project?",
      answer:
        "You can reach out through the contact form on this website, or directly via email at freddykojuru@gmail.com. I'm always open to discussing new projects and opportunities.",
    },
    {
      question: "Do you work with clients outside of Nigeria?",
      answer:
        "Yes, I work with clients globally. Remote collaboration is a core part of my workflow, and I've successfully completed projects with clients from various countries.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "I follow an agile methodology with regular client communication, iterative development, and continuous feedback. This ensures projects stay on track and align with client expectations throughout the development process.",
    },
  ]

  return (
    <section id="faq" className="section-container">
      <FAQSchema faqs={faqs} />
      <h2 className="section-title fade-in">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
