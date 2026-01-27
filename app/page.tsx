import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WorkExperience } from "@/components/work-experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { AgencyServices } from "@/components/agency-services"
import { Goals } from "@/components/goals"
import { Contact } from "@/components/contact"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ImageLoader } from "./image-loader"
import { Suspense } from "react"
import { CriticalCSS } from "@/components/critical-css"
import { FontOptimization } from "@/components/font-optimization"
import { MobileOptimizations } from "@/components/mobile-optimizations"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Performance optimizations */}
      <CriticalCSS />
      <FontOptimization />
      <MobileOptimizations />

      {/* Preload critical images */}
      <ImageLoader />

      {/* Main content with optimized loading */}
      <Hero />

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading about section...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading work experience section...</div>}>
        <WorkExperience />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading education section...</div>}>
        <Education />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading skills section...</div>}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects section...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading agency section...</div>}>
        <AgencyServices />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading goals section...</div>}>
        <Goals />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading contact section...</div>}>
        <Contact />
      </Suspense>

      <ScrollToTop />
    </main>
  )
}
