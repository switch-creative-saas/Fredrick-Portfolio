import { Button } from "@/components/ui/button"
import { Download, Linkedin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"

export const metadata: Metadata = {
  title: "Curriculum Vitae | Fredrick Akojuru",
  description: "Professional CV of Fredrick Akojuru, Full Stack Developer and Founding CEO of AlienDev Agency.",
  openGraph: {
    title: "Curriculum Vitae | Fredrick Akojuru",
    description: "Professional CV of Fredrick Akojuru, Full Stack Developer and Founding CEO of AlienDev Agency.",
    type: "article",
  },
}

export default function CVPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Curriculum Vitae</h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            View or download my professional CV to learn more about my skills, experience, and qualifications.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Button asChild>
              <a href="/fredrick-akojuru-cv.pdf" download="Fredrick-Akojuru-CV.pdf">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="http://linkedin.com/in/fredrick-akojuru-32812a30b" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> View LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>

          <div className="mt-4">
            <h2 className="text-sm font-medium mb-2 text-center">Share this CV:</h2>
            <SocialShare
              title="Fredrick Akojuru's CV"
              description="Check out Fredrick Akojuru's professional CV"
              hashtags={["WebDeveloper", "FullStack", "Portfolio"]}
            />
          </div>

          <div className="mt-8 border rounded-lg overflow-hidden shadow-lg max-w-4xl w-full">
            <iframe src="/fredrick-akojuru-cv.pdf" className="w-full h-[800px]" title="Fredrick Akojuru CV" />
          </div>
        </div>
      </div>
    </>
  )
}
