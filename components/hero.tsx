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

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none slide-in-left">
                <span className="typewriter" data-speed="100">
                  Fredrick Akojuru
                </span>
              </h1>
              <p className="text-xl text-muted-foreground slide-in-left" style={{ animationDelay: "0.2s" }}>
                Full Stack Developer | Founding CEO at AlienDev Agency | Public Health Student
              </p>
            </div>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              Building innovative digital solutions through AlienDev Agency while pursuing a second degree in public
              health to bridge technology and healthcare.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row slide-in-left" style={{ animationDelay: "0.6s" }}>
              <Link href="#contact">
                <Button className="gap-1 button-hover">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="gap-1 button-hover" asChild>
                <a href="/fredrick-akojuru-cv.pdf" download="Fredrick-Akojuru-CV.pdf">
                  Download CV <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center slide-in-right">
            <div
              ref={imageRef}
              className="relative aspect-square overflow-hidden rounded-full border bg-muted md:w-[400px] transition-transform duration-200 ease-out"
            >
              <img src="/images/profile.png" alt="Fredrick Akojuru" className="object-cover" width={400} height={400} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
