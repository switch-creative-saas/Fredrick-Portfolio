"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { useTypewriterEffect } from "@/utils/animation"
import { useEffect, useRef } from "react"

export function Hero() {
  useTypewriterEffect()
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
    }

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
      }
    }

    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
      }
    }

    const imageElement = imageRef.current
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    if (imageElement) {
      imageElement.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      if (imageElement) {
        imageElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-b from-blue-50 via-blue-25 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 h-full">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] h-full items-center">
          <div className="flex flex-col justify-center space-y-4 min-h-full justify-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none slide-in-left">
                <span className="typewriter" data-speed="100">
                  Fredrick Akojuru
                </span>
              </h1>
              <p className="text-xl text-muted-foreground slide-in-left" style={{ animationDelay: "0.2s" }}>
                Founder & CEO at GlintSell | Co-founder & CTO at mySwitch Health | Full Stack Engineer
              </p>
            </div>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              Building transformative healthcare and e-commerce platforms. Experienced in technical leadership, product architecture, and scaling startups. Passionate about solving real-world problems through innovative technology and strategic product vision.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row slide-in-left" style={{ animationDelay: "0.6s" }}>
              <Link href="#contact">
                <Button className="gap-1 button-hover">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="gap-1 button-hover bg-transparent" asChild>
                <a href="/fredrick-akojuru-cv.pdf" download="Fredrick-Akojuru-CV.pdf">
                  Download CV <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center slide-in-right">
            <div className="frosted-glass relative md:w-[400px] md:h-[400px] p-2 rounded-full">
              <div
                ref={imageRef}
                className="relative aspect-square overflow-hidden rounded-full border bg-muted md:w-full transition-transform duration-200 ease-out"
              >
                <img src="/images/profile.png" alt="Fredrick Akojuru" className="object-cover" width={400} height={400} />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
