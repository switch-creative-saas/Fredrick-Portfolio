import HomeBanner from '@/components/sections/HomeBanner';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Paths from '@/components/sections/Paths';
import RecognitionStrip from '@/components/sections/RecognitionStrip';
import ContactCta from '@/components/sections/ContactCta';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import CurvedSectionDivider from '@/components/ui/CurvedSectionDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import HomeScrollOrchestrator from '@/components/home/HomeScrollOrchestrator';
import { getAllProjects } from '@/content/projects';
import { getAllDesigns } from '@/content/designs';
import { featured } from '@/content/home';

export default function Home() {
  const featuredItems = [...getAllProjects(), ...getAllDesigns()].filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Navbar />
      <HomeScrollOrchestrator
        banner={<HomeBanner />}
        about={<About />}
      >
        <CurvedSectionDivider curveColor="#0A0F0D" bottomColor="#E2E8E4" />
        <section className="relative z-20 bg-cream">
          <Paths />
          <Projects items={featuredItems} heading={featured.heading} />
          <div className="flex justify-center px-6 pb-16 md:pb-24">
            <AnimatedButton
              as="a"
              href={featured.allLink.href}
              topText={featured.allLink.top}
              bottomText={featured.allLink.bottom}
              variant="light"
            />
          </div>
          <RecognitionStrip />
        </section>
        <MarqueeStrip />
        <CurvedSectionDivider curveColor="#E2E8E4" bottomColor="#0A0F0D" />
        <div className="relative z-25 bg-ink overflow-hidden">
          <ContactCta />
          <Footer />
        </div>
      </HomeScrollOrchestrator>
    </>
  );
}
