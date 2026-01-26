"use client"

import { useEffect, useState } from "react"

export function useAnimations() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Ensure all elements are visible by default
    document
      .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .zoom-in")
      .forEach((el) => {
        // Add a fallback to make elements visible after a delay even if observer doesn't trigger
        setTimeout(
          () => {
            el.classList.add("animate-in")
          },
          isMobile ? 300 : 500,
        ) // Faster on mobile
      })

    // Use Intersection Observer API with optimized options for mobile
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1, // Lower threshold on mobile
      rootMargin: isMobile ? "30px" : "50px", // Smaller margin on mobile
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          // For staggered animations - optimize for mobile
          if (entry.target.classList.contains("stagger-container")) {
            const children = entry.target.querySelectorAll(".stagger-item")
            children.forEach((child, index) => {
              setTimeout(
                () => {
                  child.classList.add("animate-in")
                },
                isMobile ? index * 50 : index * 100,
              ) // Faster on mobile
            })
          }

          // Stop observing after animation is triggered
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    document
      .querySelectorAll(
        ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .zoom-in, .stagger-container",
      )
      .forEach((el) => {
        observer.observe(el)
      })

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])
}

export function useParallaxEffect() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Skip parallax effect on mobile devices
    if (isMobile) return

    // Use requestAnimationFrame for smoother parallax
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll(".parallax")
          parallaxElements.forEach((element) => {
            const speed = element.getAttribute("data-speed") || "0.5"
            const yPos = window.scrollY * Number.parseFloat(speed)
            element.style.transform = `translateY(${yPos}px)`
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])
}

export function useTypewriterEffect() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const typewriterElements = document.querySelectorAll(".typewriter")

    typewriterElements.forEach((element) => {
      const text = element.textContent || ""
      element.textContent = ""

      let i = 0
      // Faster typing on mobile
      const speed = isMobile ? 50 : Number.parseInt(element.getAttribute("data-speed") || "100")

      function typeWriter() {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, speed)
        }
      }

      typeWriter()
    })

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])
}
