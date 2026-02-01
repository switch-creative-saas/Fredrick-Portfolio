import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimationProvider } from "@/components/animation-provider"
import { SeoOptimization } from "@/components/seo-optimization"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import { HeadTags } from "@/components/head-tags"
import { PerformanceOptimization } from "@/components/performance-optimization"
import { ServiceWorkerRegistration } from "./service-worker-registration"
import { LoadingScreen } from "@/components/loading-screen"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fredrickakojuru.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  title: {
    default: "Fredrick Akojuru – Full Stack Developer, CTO & Tech Entrepreneur",
    template: "%s | Fredrick Akojuru",
  },
  description:
    "Fredrick Akojuru - Full Stack Developer & CTO. Founder of GlintSell, Co-founder & CTO of mySwitch Health. Expert in Next.js, Supabase, cloud architecture, and scaling tech products from zero to millions of users.",
  verification: {
    google: "HaetaunXr6F5Bazo61bJvG1fZZCzG2twWksKBtXZJzU",
  },
  keywords: [
    "Fredrick Akojuru",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase Expert",
    "TypeScript Developer",
    "CTO",
    "Tech Founder",
    "mySwitch Health CTO",
    "GlintSell Founder",
    "E-commerce Developer",
    "Healthcare Tech",
    "Web Development",
    "Software Engineering",
    "Product Architecture",
    "Cloud Development",
    "Startup Scaling",
    "Tech Leadership",
    "Full Stack Engineering",
    "Developer Portfolio",
  ],
  authors: [{ name: "Fredrick Akojuru", url: `${baseUrl}/about` }],
  creator: "Fredrick Akojuru",
  publisher: "AlienDev Agency",
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": baseUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Fredrick Akojuru – Full Stack Developer & Tech Founder",
    description:
      "Full Stack Developer & CTO. Founder of GlintSell, Co-founder & CTO of mySwitch Health. Specialized in Next.js, Supabase, and building scalable products that serve millions.",
    siteName: "Fredrick Akojuru - Full Stack Developer",
    images: [
      {
        url: `${baseUrl}/favicon.jpg`,
        width: 512,
        height: 512,
        alt: "Fredrick Akojuru",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fredrick Akojuru – Full Stack Developer",
    description:
      "Full Stack Developer, Next.js specialist, CTO of mySwitch Health, Founder of GlintSell. Building products that impact millions.",
    creator: "@clearskiies11",
    creatorId: "1234567890",
  },
  applicationName: "Fredrick Akojuru Portfolio",
  appleWebApp: {
    capable: true,
    title: "Fredrick Akojuru",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
  category: "web development, portfolio, technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <HeadTags baseUrl={baseUrl} />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/profile.png" as="image" />

        {/* Add print stylesheet */}
        <link rel="stylesheet" href="/styles/print.css" media="print" />

        {/* Social Media Verification */}
        <meta name="facebook-domain-verification" content="yourdomain-verification-code" />
        <meta name="p:domain_verify" content="pinterest-verification-code" />
        <meta name="linkedin:owner" content="freddykojuru" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimationProvider>
            <LoadingScreen />
            <SeoOptimization baseUrl={baseUrl} />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
            <PerformanceOptimization />
            <ServiceWorkerRegistration />
            <div className="flex min-h-screen flex-col">
              <Header />
              <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
                <div className="flex-1">{children}</div>
              </Suspense>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLACEHOLDER"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PIXEL-ID-PLACEHOLDER&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
