"use client"

import { useAnimations, useParallaxEffect } from "@/utils/animation"
import { type ReactNode, useEffect, useState } from "react"

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Initialize animations
  useAnimations()

  // Only use parallax on desktop devices
  const shouldUseParallax = !isMobile && !prefersReducedMotion
  useParallaxEffect({ enabled: shouldUseParallax })

  // Detect mobile devices and reduced motion preference
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(motionQuery.matches)

    // Set up listeners
    checkMobile()
    window.addEventListener("resize", checkMobile)

    motionQuery.addEventListener("change", (e) => {
      setPrefersReducedMotion(e.matches)
    })

    // Add scroll progress indicator (only for non-reduced motion)
    if (!motionQuery.matches) {
      const progressBar = document.createElement("div")
      progressBar.className = "fixed top-0 left-0 h-1 bg-primary z-50"
      progressBar.style.width = "0%"
      document.body.appendChild(progressBar)

      const updateProgress = () => {
        const scrollPosition = window.scrollY
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const progress = (scrollPosition / totalHeight) * 100
        progressBar.style.width = `${progress}%`
      }

      window.addEventListener("scroll", updateProgress)

      // Force all animation elements to be visible after a delay
      const timer = setTimeout(
        () => {
          document
            .querySelectorAll(
              ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .zoom-in, .stagger-item",
            )
            .forEach((el) => {
              el.classList.add("animate-in")
            })
        },
        isMobile ? 500 : 1000,
      ) // Faster on mobile

      return () => {
        window.removeEventListener("scroll", updateProgress)
        window.removeEventListener("resize", checkMobile)
        motionQuery.removeEventListener("change", (e) => {
          setPrefersReducedMotion(e.matches)
        })
        document.body.removeChild(progressBar)
        clearTimeout(timer)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
      motionQuery.removeEventListener("change", (e) => {
        setPrefersReducedMotion(e.matches)
      })
    }
  }, [isMobile])

  return <>{children}</>
}
