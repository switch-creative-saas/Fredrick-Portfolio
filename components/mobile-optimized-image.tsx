"use client"

import { useState, useEffect, useRef } from "react"
import { ResponsiveImage } from "./responsive-image"

interface MobileOptimizedImageProps {
  src: string
  alt: string
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function MobileOptimizedImage({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  width = 1200,
  height = 800,
  className = "",
  priority = false,
}: MobileOptimizedImageProps) {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [isInView, setIsInView] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Detect device type
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setDeviceType("mobile")
      } else if (width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Check if image is in viewport
  useEffect(() => {
    if (!imageRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(imageRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Select appropriate image source based on device
  const optimizedSrc = (() => {
    if (deviceType === "mobile" && mobileSrc) {
      return mobileSrc
    } else if (deviceType === "tablet" && tabletSrc) {
      return tabletSrc
    } else if (deviceType === "desktop" && desktopSrc) {
      return desktopSrc
    }
    return src
  })()

  // Calculate appropriate sizes based on device
  const sizes = (() => {
    if (deviceType === "mobile") {
      return "100vw"
    } else if (deviceType === "tablet") {
      return "50vw"
    } else {
      return "33vw"
    }
  })()

  // Determine loading strategy
  const shouldPrioritize = priority || isInView

  return (
    <div ref={imageRef} className={className}>
      <ResponsiveImage
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={shouldPrioritize}
        loading={shouldPrioritize ? "eager" : "lazy"}
        fetchPriority={shouldPrioritize ? "high" : "auto"}
        quality={deviceType === "mobile" ? 70 : 85}
      />
    </div>
  )
}
