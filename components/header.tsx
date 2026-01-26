"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Fredrick Akojuru</span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#agency" className="text-sm font-medium hover:text-primary transition-colors">
            Agency
          </Link>
          <Link href="#goals" className="text-sm font-medium hover:text-primary transition-colors">
            Goals
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/cv" className="text-sm font-medium hover:text-primary transition-colors flex items-center">
            <FileText className="h-4 w-4 mr-1" /> CV
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#education"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#agency"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Agency
              </Link>
              <Link
                href="#goals"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Goals
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cv"
                className="text-sm font-medium hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="h-4 w-4 mr-1" /> CV
              </Link>
              <div className="pt-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
