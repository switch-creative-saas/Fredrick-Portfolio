"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { useEffect, useState } from "react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || pathname === "/") return null

  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      href: `/${segment}`,
    }))

  return (
    <nav aria-label="Breadcrumb" className="container py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {index === pathSegments.length - 1 ? (
              <span className="font-medium text-foreground">{segment.name}</span>
            ) : (
              <Link href={segment.href} className="hover:text-primary transition-colors">
                {segment.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
