'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import FlowField from '@/components/canvas/FlowField';
import CredentialTimeline from '@/components/sections/CredentialTimeline';
import { credentialsFromAwards, credentialsFromTimeline, type Credential } from '@/content/credentials';
import { aboutMe } from '@/content/home';
import { useReducedMotion } from '@/lib/useReducedMotion';

const CREDENTIALS: Credential[] = [
  ...credentialsFromTimeline('experience'),
  ...credentialsFromAwards(),
  ...credentialsFromTimeline('education'),
  ...credentialsFromTimeline('venture'),
];

const About = () => {
  const headingWords = aboutMe.heading;
  const descriptionText = aboutMe.description;
  const aboutMeText = aboutMe.body;

  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.about-image-wrapper',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '.about-image-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.about-label',
        { opacity: 0, letterSpacing: '0.45em' },
        {
          opacity: 1,
          letterSpacing: '0.3em',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-label',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <div className="bg-cream">
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen bg-ink text-light pt-24 pb-20 md:pt-32 md:pb-28 rounded-t-4xl overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 md:mb-20">
            <AnimatedHeading
              words={headingWords}
              className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
            />
            <ScrollWordReveal
              text={descriptionText}
              offset={['start 0.95', 'end 0.7']}
              className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 pb-16 md:pb-24 items-center">
            <div className="col-span-12 md:col-span-5 lg:col-span-5 flex items-center justify-center">
              <div className="about-image-wrapper relative group w-full max-w-[350px] md:max-w-[380px] h-[360px] md:h-[480px] bg-elevated-dark rounded-2xl overflow-hidden border border-border-subtler shadow-2xl">
                <FlowField />
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7 flex flex-col justify-center space-y-8">
              <span className="about-label font-mono text-sm sm:text-base md:text-base text-warm-light uppercase tracking-[0.3em] font-medium text-center md:text-left inline-block">
                {aboutMe.label}
              </span>
              <div className="space-y-6">
                {aboutMeText.split('\n\n').map((p, i) => (
                  <ScrollWordReveal
                    key={i}
                    text={p}
                    offset={['start 0.92', 'end 0.65']}
                    className="text-base sm:text-lg md:text-lg leading-relaxed font-sans"
                  />
                ))}
              </div>
            </div>
          </div>

          <CredentialTimeline
            items={CREDENTIALS}
            label={aboutMe.timelineLabel}
            heading={aboutMe.timelineHeading}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
