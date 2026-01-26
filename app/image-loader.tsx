"use client"

import { useEffect, useState } from "react"

export function ImageLoader() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only preload critical images
    const criticalImages = ["/images/profile.png"]

    // Preload critical images immediately
    criticalImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    // Preload project images only when not on mobile
    if (!isMobile) {
      // Use requestIdleCallback to preload non-critical images when browser is idle
      const preloadNonCriticalImages = () => {
        const projectImages = [
          "/images/afrirecipes.png",
          "/images/mountain.png",
          "/images/sparked.png",
          "/images/benchmark.png",
        ]

        let index = 0

        const loadNextImage = () => {
          if (index < projectImages.length) {
            const img = new Image()
            img.src = projectImages[index]
            index++

            // Use requestIdleCallback if available, otherwise setTimeout
            if ("requestIdleCallback" in window) {
              // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
              window.requestIdleCallback(loadNextImage, { timeout: 2000 })
            } else {
              setTimeout(loadNextImage, 200)
            }
          }
        }

        loadNextImage()
      }

      // Start preloading after a delay
      setTimeout(preloadNonCriticalImages, 2000)
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return null
}
