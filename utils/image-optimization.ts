// Helper functions for image optimization

// Generates appropriate srcset for responsive images
export function generateSrcSet(basePath: string, imageName: string, extensions: string[] = ["jpg", "webp"]) {
  const widths = [640, 768, 1024, 1280, 1536, 1920]

  return extensions.map((ext) => {
    const srcSet = widths.map((width) => `${basePath}/${imageName}-${width}.${ext} ${width}w`).join(", ")

    return {
      type: ext === "webp" ? "image/webp" : `image/${ext}`,
      srcSet,
    }
  })
}

// Generates appropriate sizes attribute for responsive images
export function generateSizes(sizes: string[] = ["100vw"]) {
  return sizes.join(", ")
}

// Estimates image file size based on dimensions and format
export function estimateImageSize(width: number, height: number, format: string): number {
  // Rough estimation of file size in KB
  const compressionRatio =
    {
      jpg: 0.8,
      jpeg: 0.8,
      png: 1.2,
      webp: 0.5,
      avif: 0.3,
    }[format.toLowerCase()] || 1.0

  return Math.round((width * height * 3 * compressionRatio) / 1024)
}

// Adds loading attributes based on priority
export function getLoadingAttribute(priority: boolean, inView: boolean): "eager" | "lazy" {
  if (priority || inView) {
    return "eager"
  }
  return "lazy"
}

// Gets appropriate image quality based on importance
export function getImageQuality(isHero: boolean, isImportant: boolean): number {
  if (isHero) return 90
  if (isImportant) return 85
  return 80
}
