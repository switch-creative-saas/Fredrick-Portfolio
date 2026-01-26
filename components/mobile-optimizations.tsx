"use client"

import { useEffect, useState } from "react"

export function MobileOptimizations() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check for low-end devices
    const checkLowEndDevice = () => {
      // Check if device has limited memory or CPU
      const memory = (navigator as any).deviceMemory
      const cores = navigator.hardwareConcurrency

      // Consider devices with less than 4GB RAM or fewer than 4 cores as low-end
      if ((memory && memory < 4) || (cores && cores < 4)) {
        setIsLowEndDevice(true)
      }
    }

    checkMobile()

    // Try to detect device capabilities
    try {
      checkLowEndDevice()
    } catch (e) {
      console.log("Device memory detection not supported")
    }

    window.addEventListener("resize", checkMobile)

    // Apply mobile-specific optimizations
    if (isMobile || isLowEndDevice) {
      // Reduce animation complexity
      document.documentElement.classList.add("reduce-animations")

      // Disable non-essential features
      const nonEssentialElements = document.querySelectorAll(".non-essential")
      nonEssentialElements.forEach((el) => {
        el.classList.add("hidden")
      })

      // Reduce image quality
      const images = document.querySelectorAll("img:not(.essential-image)")
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          // Add loading="lazy" to all non-critical images
          img.loading = "lazy"

          // Add fetchpriority="low" to deprioritize
          img.fetchPriority = "low"

          // Add decoding="async" to not block rendering
          img.decoding = "async"
        }
      })

      // Optimize video elements
      const videos = document.querySelectorAll("video")
      videos.forEach((video) => {
        // Disable autoplay on mobile
        video.autoplay = false

        // Add poster image
        if (!video.hasAttribute("poster")) {
          video.poster = "/images/video-placeholder.jpg"
        }

        // Add loading="lazy"
        video.setAttribute("loading", "lazy")

        // Add preload="none"
        video.preload = "none"
      })

      // Optimize iframes
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        // Add loading="lazy"
        iframe.loading = "lazy"
      })
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile, isLowEndDevice])

  return null
}
