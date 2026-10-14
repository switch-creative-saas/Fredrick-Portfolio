import { site } from './site';

export interface HeadingWord {
  t: string;
  serif?: boolean;
}

export const hero = {
  // The two lines of the big hero name.
  nameLines: [site.firstName.toUpperCase(), site.lastName.toLowerCase()] as const,
  intro: site.tagline,
  stamp: "LET'S WORK TOGETHER • SAY HELLO • ",
  stampLabel: 'Scroll to contact section',
  ctas: {
    work: { top: 'PROJECTS', bottom: 'VIEW WORK →' },
    contact: { top: 'CONTACT', bottom: 'GET IN TOUCH →', href: '/contact' },
    cv: { top: 'CV', bottom: 'DOWNLOAD →' },
  },
};

export const aboutMe = {
  heading: [{ t: 'WHO' }, { t: 'am', serif: true }, { t: 'i?' }] as HeadingWord[],
  description: 'TODO(fred): one sentence that introduces you.',
  label: '(About Me)',
  // Paragraphs are separated by a blank line.
  body: [
    'TODO(fred): why public health.',
    'TODO(fred): why you build software.',
    'TODO(fred): what you want to do next.',
  ].join('\n\n'),
  timelineLabel: '(Experience)',
  timelineHeading: { before: 'The', accent: 'path', after: 'so far.' },
};

export const services = {
  heading: [{ t: 'WHAT' }, { t: 'i', serif: true }, { t: 'DO' }] as HeadingWord[],
  label: '(Services)',
  description: 'TODO(fred): two sentences on the kind of work you take on.',
  items: [
    {
      id: '01',
      title: 'Web Development',
      description: 'TODO(fred): what you build and for whom.',
      items: ['React, Supabase, Vercel, Resend', 'TODO(fred): service detail', 'TODO(fred): service detail'],
    },
    {
      id: '02',
      title: 'Design',
      description: 'TODO(fred): the design work you do.',
      items: ['TODO(fred): service detail', 'TODO(fred): service detail', 'TODO(fred): service detail'],
    },
    {
      id: '03',
      title: 'Photography',
      description: 'TODO(fred): the photography you do and how to book it.',
      items: ['TODO(fred): service detail', 'TODO(fred): service detail', 'TODO(fred): service detail'],
    },
  ],
};

export const marquee = ['Building VitaLink', 'Public Health', 'Development', 'Design', 'Photography'];

export type TechCategory = 'frontend' | 'backend' | 'devops' | 'tools';

export interface TechItem {
  name: string;
  category: TechCategory;
  icon: string;
}

export interface StackCategory {
  id: TechCategory;
  title: string;
  filterLabel: string;
  technologies: TechItem[];
}

export const techStack = {
  heading: [{ t: 'MY' }, { t: 'TECH' }, { t: 'stack', serif: true }] as HeadingWord[],
  mobileHeading: [{ t: 'MY' }, { t: 'stack', serif: true }] as HeadingWord[],
  description: 'The tools I use to build and ship web applications.',
  allLabel: 'All Categories',
  // TODO(fred): add the rest of your stack. Icons live in /public/stack.
  sections: [
    {
      id: 'frontend',
      title: 'FRONTEND',
      filterLabel: 'Frontend',
      technologies: [{ name: 'React', category: 'frontend', icon: '/stack/react.png' }],
    },
    {
      id: 'backend',
      title: 'BACKEND & DATA',
      filterLabel: 'Backend & Data',
      technologies: [{ name: 'Supabase', category: 'backend', icon: '/stack/supabase.svg' }],
    },
    {
      id: 'devops',
      title: 'DEPLOYMENT',
      filterLabel: 'Deployment',
      technologies: [{ name: 'Vercel', category: 'devops', icon: '/stack/vercel.svg' }],
    },
    {
      id: 'tools',
      title: 'SERVICES & TOOLS',
      filterLabel: 'Services & Tools',
      technologies: [{ name: 'Resend', category: 'tools', icon: '/stack/resend.svg' }],
    },
  ] as StackCategory[],
};

export const projectsSection = {
  heading: [{ t: 'SELECTED' }, { t: 'works', serif: true }] as HeadingWord[],
  viewLabel: 'View Project',
};

export interface PathCard {
  href: string;
  label: string;
  sentence: string;
  image: string;
}

export const paths = {
  heading: [{ t: 'FIND' }, { t: 'your', serif: true }, { t: 'WAY' }] as HeadingWord[],
  exploreLabel: 'Explore',
  cards: [
    {
      href: '/vitalink',
      label: 'VitaLink',
      sentence: 'The healthcare operating system and infrastructure platform I am building for Africa.',
      image: '/work/placeholder.webp', // TODO(fred): VitaLink image
    },
    {
      href: '/work',
      label: 'Development',
      sentence: 'Websites and platforms I have built, from a church website to an NGO operations platform.',
      image: '/work/mountain-of-solution/cover.webp',
    },
    {
      href: '/design',
      label: 'Design',
      sentence: 'TODO(fred): one sentence on your design work.',
      image: '/work/placeholder.webp', // TODO(fred): design image
    },
    {
      href: '/photography',
      label: 'Photography',
      sentence: 'TODO(fred): one sentence on your photography.',
      image: '/work/placeholder.webp', // TODO(fred): photography image
    },
  ] as PathCard[],
};

export const featured = {
  heading: [{ t: 'FEATURED' }, { t: 'work', serif: true }] as HeadingWord[],
  allLink: { top: 'ALL WORK', bottom: 'VIEW ALL →', href: '/work' },
};

export const recognition = {
  label: '(Recognition)',
  // Shown after the entries from content/awards.ts.
  slots: ['TODO(fred): recognition', 'TODO(fred): recognition'],
};

export const contactCta = {
  heading: [{ t: "LET'S" }, { t: 'talk', serif: true }] as HeadingWord[],
  intro: 'Tell me what you are working on and how I can help.',
  button: { top: 'CONTACT', bottom: 'SEND A MESSAGE →', href: '/contact' },
};

export const contactSection = {
  heading: [{ t: "LET'S" }, { t: 'talk', serif: true }] as HeadingWord[],
  intro: 'Have a project in mind or just want to say hello? Send me a message.',
};
