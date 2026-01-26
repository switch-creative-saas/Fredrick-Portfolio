"use client"

import { useEffect } from "react"

export function CriticalCSS() {
  useEffect(() => {
    // Inline critical CSS
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      body {
        margin: 0;
        padding: 0;
        font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
      }
      
      .container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      header {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(8px);
      }
      
      h1, h2, h3 {
        margin: 0;
      }
      
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
    `

    // Add critical CSS to head
    const style = document.createElement("style")
    style.textContent = criticalCSS
    document.head.appendChild(style)

    // Defer non-critical CSS
    const deferCSS = () => {
      const links = document.querySelectorAll('link[rel="stylesheet"][media="print"]')
      links.forEach((link) => {
        if (link instanceof HTMLLinkElement) {
          link.media = "all"
        }
      })
    }

    // Execute after content is loaded
    if (document.readyState === "complete") {
      deferCSS()
    } else {
      window.addEventListener("load", deferCSS)
    }

    return () => {
      window.removeEventListener("load", deferCSS)
      document.head.removeChild(style)
    }
  }, [])

  return null
}
