"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface ResponsiveImageProps {
  src: string
  alt: string
  sizes?: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
  onLoad?: () => void
}

export function ResponsiveImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  priority = false,
  width = 1200,
  height = 800,
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  loading,
  fetchPriority,
  onLoad,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices for optimized image delivery
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Determine optimal image quality based on device
  const optimizedQuality = isMobile ? Math.min(quality, 70) : quality

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  // For external images
  if (src.startsWith("http") || src.startsWith("//")) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          loading={loading || (priority ? "eager" : "lazy")}
          fetchpriority={fetchPriority || (priority ? "high" : "auto")}
          onLoad={handleImageLoad}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    )
  }

  // For local images using Next.js Image component
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={optimizedQuality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={handleImageLoad}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
