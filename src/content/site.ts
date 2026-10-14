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
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fredrickakojuru.vercel.app',
  tagline: 'Public health student building VitaLink, healthcare infrastructure for Africa.',
  roles: ['Founder, VitaLink', 'Public Health, Miva', 'Developer', 'Designer', 'Photographer'],
  cvPath: '/fredrick-akojuru-cv.pdf',
  photo: '/images/fredrick-akojuru.webp',
  // Words cycled by the preloader before the site appears.
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

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];
