"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { JsonLdSchema } from "./json-ld-schema"

interface SeoOptimizationProps {
  baseUrl: string
}

export function SeoOptimization({ baseUrl }: SeoOptimizationProps) {
  const pathname = usePathname()
  const currentUrl = `${baseUrl}${pathname}`

  // Update canonical URL dynamically
  useEffect(() => {
    // Find existing canonical link or create a new one
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = currentUrl

    // Add language alternate links
    const langLink = document.querySelector('link[hreflang="en-US"]') as HTMLLinkElement
    if (!langLink) {
      const link = document.createElement("link")
      link.rel = "alternate"
      link.hreflang = "en-US"
      link.href = currentUrl
      document.head.appendChild(link)
    }

    // Add x-default language link
    const xDefaultLink = document.querySelector('link[hreflang="x-default"]') as HTMLLinkElement
    if (!xDefaultLink) {
      const link = document.createElement("link")
      link.rel = "alternate"
      link.hreflang = "x-default"
      link.href = currentUrl
      document.head.appendChild(link)
    }
  }, [currentUrl])

  return (
    <>
      <JsonLdSchema />
    </>
  )
}
