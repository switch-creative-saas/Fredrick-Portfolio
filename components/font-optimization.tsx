"use client"

import { useEffect } from "react"

export function FontOptimization() {
  useEffect(() => {
    // Check if the browser supports the Font Loading API
    if ("fonts" in document) {
      // Preload and optimize critical fonts
      Promise.all([(document as any).fonts.load("1em Inter"), (document as any).fonts.load("bold 1em Inter")]).then(
        () => {
          document.documentElement.classList.add("fonts-loaded")
        },
      )
    } else {
      // Fallback for browsers that don't support the Font Loading API
      document.documentElement.classList.add("fonts-loaded")
    }

    // Add font-display: swap to all font faces
    const style = document.createElement("style")
    style.textContent = `
      @font-face {
        font-display: swap !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
