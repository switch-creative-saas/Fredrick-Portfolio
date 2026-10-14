import type { HeadingWord } from './home';

export interface VitalinkProduct {
  name: string;
  description: string;
}

export interface VitalinkAudience {
  name: string;
  description: string;
}

export interface VitalinkPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
  image: string;
}

// Copy rules:
// - Never describe VitaMind AI as diagnosing. Use "clinical decision support", "flags", "surfaces",
//   "assists clinicians".
// - Do not add users, hospitals, revenue or funding figures until they are confirmed and public.

const SITE = 'https://www.vitalink.africa';

export const vitalink = {
  name: 'VitaLink',
  previousName: 'Switch Health',
  summary: 'A healthcare operating system and infrastructure platform for Africa.',
  website: SITE as string | null,
  websiteLabel: 'vitalink.africa',
  heading: [{ t: 'VITA' }, { t: 'link', serif: true }] as HeadingWord[],
  tagline: 'Healthcare. Connected.',
  intro:
    'VitaLink is the healthcare operating system I founded and lead. It connects patient identity, medical records, telemedicine, clinical decision support and disease surveillance in one offline-first platform built for African health systems.',
  role: {
    label: '(My role)',
    body: 'I founded VitaLink and lead product and engineering. I designed the architecture, build the platform, and bring the public health thinking that decides what it should do and what it must never do with patient data.',
  },
  problem: {
    label: '(The problem)',
    body: 'Most health care in Nigeria still runs on paper folders and systems that do not talk to each other. Patients repeat their history at every visit, records go missing between facilities, tests are repeated, and the disease data public health teams need arrives late or not at all.',
  },
  what: {
    label: '(What VitaLink is)',
    body: 'VitaLink gives every patient one health identity that follows them from clinic to clinic, and gives facilities the tools to use it: records, pharmacy, laboratory, billing and telemedicine. Clinical activity also feeds VitaLink Sentinel, a surveillance layer that surfaces disease signals and is designed to report into Nigeria’s existing SORMAS system rather than replace it. Everything is built offline-first, because connectivity in many facilities is not guaranteed.',
  },
  productsLabel: '(Modules)',
  productsHeading: [{ t: 'THE' }, { t: 'platform', serif: true }] as HeadingWord[],
  products: [
    {
      name: 'VitaCard Identity',
      description:
        'An NFC health card and digital ID. A tap gives clinicians the patient’s VitaLink ID and emergency profile, while the full record stays in the secure backend.',
    },
    {
      name: 'Hospital System',
      description: 'EMR, pharmacy, laboratory, appointments, billing, inventory and analytics for hospitals and clinics.',
    },
    {
      name: 'Telemedicine',
      description: 'Remote consultations that write back to the same patient record, so care stays continuous.',
    },
    {
      name: 'VitaMind AI',
      description:
        'Clinical decision support for health workers. It helps with documentation and triage and flags risks for a clinician to review. It supports clinical judgement and does not replace it.',
    },
    {
      name: 'VitaLink Sentinel',
      description:
        'Disease surveillance and public health reporting: case reports from facilities and field teams, outbreak signals, heatmaps and NTD surveillance.',
    },
    {
      name: 'Insurance',
      description: 'Insurance integration, so cover can be checked and claims handled against the same verified record.',
    },
    {
      name: 'Patient App',
      description: 'Appointments, records, prescriptions, telemedicine and insurance in one app for patients.',
    },
  ] satisfies VitalinkProduct[],
  audienceLabel: '(Who it serves)',
  audienceHeading: [{ t: 'BUILT' }, { t: 'for', serif: true }] as HeadingWord[],
  audiences: [
    { name: 'Hospitals & clinics', description: 'Subscription access to the hospital system and patient identity.' },
    { name: 'Governments & public health agencies', description: 'Sentinel surveillance and reporting, deployed under contract.' },
    { name: 'NGOs', description: 'Field case reporting and programme data for health programmes.' },
    { name: 'Insurers', description: 'Verified identity and records for cleaner claims.' },
    { name: 'Health developers', description: 'API integrations for partners building on top of VitaLink.' },
  ] satisfies VitalinkAudience[],
  stack: {
    label: '(Built with)',
    items: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
  stage: {
    label: '(Where we are)',
    body: 'VitaLink started as Switch Health in 2024 with an early prototype, letters of intent for pilots with university teaching hospitals, and pre-seed funding. It has since grown into a full healthcare operating system. We are finishing core platform functionality and preparing for launch, and the VitaCard waitlist is open.',
  },
  blog: {
    label: '(From the VitaLink blog)',
    heading: [{ t: 'FEATURED' }, { t: 'writing', serif: true }] as HeadingWord[],
    allLink: { top: 'ALL POSTS', bottom: 'READ THE BLOG ↗', href: `${SITE}/blog` },
    readLabel: 'Read article ↗',
    posts: [
      {
        title: "Building Africa's Healthcare Infrastructure: Why We Created VitaLink",
        excerpt:
          'Fragmented records, slow administration and weak surveillance keep showing up across African health systems. This is why we are building an infrastructure layer that connects patients, providers and public health.',
        date: 'June 15, 2026',
        readTime: '8 min read',
        category: 'Healthcare infrastructure',
        href: `${SITE}/blog/building-africas-healthcare-infrastructure`,
        image:
          'https://cdn.sanity.io/images/zy7jnths/production/a6a132134a7fc4163e311477e0eaf26e0eef9f6f-1983x793.png?rect=237,0,1510,793&w=1200&h=630',
      },
      {
        title: 'The Hidden Cost of Lost Medical Records in Africa',
        excerpt:
          '"Do you have your hospital card?" When the answer is no, history disappears, tests are repeated and treatment is delayed. A look at what paper records really cost patients and facilities.',
        date: 'June 30, 2026',
        readTime: '7 min read',
        category: 'Healthcare infrastructure',
        href: `${SITE}/blog/the-hidden-cost-of-lost-medical-records-in-africa`,
        image:
          'https://cdn.sanity.io/images/zy7jnths/production/c1a4606dd9364d3829151328fbf51e50a102a8b6-1122x1402.png?rect=0,407,1122,589&w=1200&h=630',
      },
    ] satisfies VitalinkPost[],
  },
  cta: {
    heading: [{ t: 'TALK' }, { t: 'to', serif: true }, { t: 'ME' }] as HeadingWord[],
    intro:
      'Hospitals, NGOs, public health agencies and investors: if you want to pilot, partner with or invest in VitaLink, send me a message and I will set up a conversation.',
    button: { top: 'TALK TO ME', bottom: 'CONTACT →', href: '/contact?topic=vitalink' },
    websiteButton: { top: 'WEBSITE', bottom: 'VITALINK.AFRICA ↗' },
    waitlistButton: { top: 'VITACARD', bottom: 'JOIN THE WAITLIST ↗', href: `${SITE}/waitlist` },
  },
};
