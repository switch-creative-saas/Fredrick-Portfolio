"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

type HeadTagsProps = {
  baseUrl: string
}

export function HeadTags({ baseUrl }: HeadTagsProps) {
  const pathname = usePathname()
  const currentUrl = `${baseUrl}${pathname}`

  useEffect(() => {
    // Add preload for critical resources
    const preloadLogo = document.createElement("link")
    preloadLogo.rel = "preload"
    preloadLogo.href = "/images/profile.png"
    preloadLogo.as = "image"
    document.head.appendChild(preloadLogo)

    // Add preconnect to important domains
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
    ]

    preconnectDomains.forEach((domain) => {
      const link = document.createElement("link")
      link.rel = "preconnect"
      link.href = domain
      link.crossOrigin = "anonymous"
      document.head.appendChild(link)
    })

    // Add DNS prefetch
    const dnsPrefetchDomains = ["https://connect.facebook.net", "https://www.clarity.ms"]

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link")
      link.rel = "dns-prefetch"
      link.href = domain
      document.head.appendChild(link)
    })

    return () => {
      // Clean up dynamically added elements if component unmounts
      document.head.querySelectorAll('link[rel="preload"][as="image"]').forEach((el) => el.remove())
      document.head.querySelectorAll('link[rel="preconnect"]').forEach((el) => el.remove())
      document.head.querySelectorAll('link[rel="dns-prefetch"]').forEach((el) => el.remove())
    }
  }, [])

  return null
}
