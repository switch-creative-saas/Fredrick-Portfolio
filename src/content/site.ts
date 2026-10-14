import { designs } from './designs';
import { realPhotos } from './photography';

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  menuOnly?: boolean;
}

export const site = {
  name: 'Fredrick Akojuru',
  firstName: 'Fredrick',
  lastName: 'Akojuru',
  brand: 'Fredrick Akojuru',
  // Navbar wordmark: `lead` is always shown, `short` expands to `long` on hover.
  logo: { lead: 'fredrick', short: 'a.', long: 'akojuru' },
  // TODO(fred): confirm which email to publish.
  email: 'freddykojuru@gmail.com',
  location: 'Abuja, Nigeria',
  timeZone: 'Africa/Lagos',
  timeZoneLabel: 'WAT',
  twitterHandle: '@clearskiies11',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fredrickakojuru.vercel.app',
  tagline: 'Public health student building VitaLink, healthcare infrastructure for Africa.',
  roles: ['Founder, VitaLink', 'Public Health, Miva', 'Developer', 'Designer', 'Photographer'],
  cvPath: '/fredrick-akojuru-cv.pdf',
  photo: '/images/fredrick-akojuru-portrait.webp',
  // Words cycled by the preloader before the site appears.
  // TODO(fred): confirm these greetings (English, Hausa, Igbo, Yoruba) or replace with your own.
  greetings: ['Hello', 'Sannu', 'Ndewo', 'Ẹ n lẹ', 'Welcome'],
};

export type SocialKey = 'github' | 'linkedin' | 'x' | 'instagram';

export const socials: Record<SocialKey, SocialLink> = {
  github: { label: 'GitHub', href: 'https://github.com/fredrickakojuru' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/fredrick-akojuru-32812a30b' },
  x: { label: 'X', href: 'https://x.com/clearskiies11' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/_clearskiies' },
};

export const socialList: SocialLink[] = [socials.linkedin, socials.github, socials.x, socials.instagram];

export const footer = {
  legalLinks: [
    { name: 'CV', href: '/cv' },
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-service' },
  ],
  // The MIT license asks that the original author is credited.
  credit: {
    text: 'Built on an open-source template by',
    author: 'Aitezaz Sikandar',
    href: 'https://github.com/aitezazdev/Portfolio',
  },
};

/** A portfolio section is promoted (navbar, home, sitemap) only once it has this many real items. */
export const MIN_PORTFOLIO_ITEMS = 6;
export const showDesign = designs.length >= MIN_PORTFOLIO_ITEMS;
export const showPhotography = realPhotos.length >= MIN_PORTFOLIO_ITEMS;

/** False for routes that exist but should not be promoted yet. */
export function isPromoted(href: string): boolean {
  if (href === '/design') return showDesign;
  if (href === '/photography') return showPhotography;
  return true;
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/', menuOnly: true },
  { name: 'About', href: '/about' },
  { name: 'VitaLink', href: '/vitalink' },
  { name: 'Work', href: '/work' },
  { name: 'Design', href: '/design' },
  { name: 'Photography', href: '/photography' },
  { name: 'Contact', href: '/contact' },
].filter((link) => isPromoted(link.href));
