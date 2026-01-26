import Link from "next/link"
import { FileText, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30 py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-xl font-bold mb-4">Fredrick Akojuru</h2>
          <p className="text-muted-foreground mb-4">
            Full stack developer and founding CEO of AlienDev Agency, focused on creating innovative digital solutions
            and bridging technology with healthcare through public health studies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="icon" asChild aria-label="GitHub Profile">
              <a href="https://github.com/fredrickakojuru" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="LinkedIn Profile">
              <a href="http://linkedin.com/in/fredrick-akojuru-32812a30b" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Twitter Profile">
              <a href="https://twitter.com/fredrickakojuru" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Instagram Profile">
              <a href="https://instagram.com/fredrickakojuru" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Facebook Page">
              <a href="https://facebook.com/aliendevagency" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#education" className="text-muted-foreground hover:text-primary transition-colors">
                Education
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/cv" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <FileText className="h-4 w-4 mr-1" /> CV
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                E-commerce
              </Link>
            </li>
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/#agency" className="text-muted-foreground hover:text-primary transition-colors">
                Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <a
                href="mailto:freddykojuru@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                freddykojuru@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <a href="tel:+2348148262447" className="text-muted-foreground hover:text-primary transition-colors">
                +234 814 826 2447
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground">Abuja, Nigeria</span>
            </li>
          </ul>

          <div className="mt-6">
            <form className="flex gap-2" action="/api/newsletter" method="post">
              <input
                type="email"
                name="email"
                placeholder="Subscribe to newsletter"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} AlienDev Agency. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-6 text-center text-sm md:justify-end">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link
              href="/rss.xml"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              <Rss className="h-4 w-4 mr-1" /> RSS
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
