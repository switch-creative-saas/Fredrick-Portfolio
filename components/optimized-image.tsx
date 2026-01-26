import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  // Check if the image is from an external source
  const isExternal = src.startsWith("http") || src.startsWith("//")

  if (isExternal) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    )
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
      quality={90}
    />
  )
}
