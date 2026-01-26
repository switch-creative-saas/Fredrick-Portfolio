"use client"

import { useEffect } from "react"

export function PerformanceOptimization() {
  useEffect(() => {
    // Lazy load non-critical resources
    const lazyLoadScript = (src: string, async = true, defer = true) => {
      const script = document.createElement("script")
      script.src = src
      script.async = async
      script.defer = defer
      document.body.appendChild(script)
    }

    // Wait until page is fully loaded and idle
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      // @ts-ignore - requestIdleCallback exists but TypeScript doesn't recognize it
      window.requestIdleCallback(() => {
        // Load non-critical scripts after page load
        setTimeout(() => {
          // Example: Analytics or other non-critical scripts
          // lazyLoadScript("https://example.com/non-critical-script.js")
        }, 2000)
      })
    }

    // Add intersection observer for lazy loading images and iframes
    if ("IntersectionObserver" in window) {
      const lazyImages = document.querySelectorAll("img.lazy-load")
      const lazyIframes = document.querySelectorAll("iframe.lazy-load")

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.classList.remove("lazy-load")
              imageObserver.unobserve(img)
            }
          }
        })
      })

      const iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target as HTMLIFrameElement
            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src
              iframe.classList.remove("lazy-load")
              iframeObserver.unobserve(iframe)
            }
          }
        })
      })

      lazyImages.forEach((img) => imageObserver.observe(img))
      lazyIframes.forEach((iframe) => iframeObserver.observe(iframe))
    }

    // Add event listener for print media
    const beforePrintHandler = () => {
      // Load print-specific styles
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "/styles/print.css"
      link.media = "print"
      document.head.appendChild(link)
    }

    window.addEventListener("beforeprint", beforePrintHandler)

    return () => {
      window.removeEventListener("beforeprint", beforePrintHandler)
    }
  }, [])

  return null
}
