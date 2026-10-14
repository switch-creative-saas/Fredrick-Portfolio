export type ProjectCategory = 'dev' | 'design';
export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  /** null until the year is confirmed. */
  year: number | null;
  /** null until the status is confirmed. */
  status: ProjectStatus | null;
  client?: string;
  featured: boolean;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  accent: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  /** Omit for private repositories. */
  github?: string;
  liveUrl?: string;
}

const PLACEHOLDER_IMAGE = '/work/placeholder.webp';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'mosyf-convention-portal',
    title: 'MOSYF Convention Portal',
    category: 'dev',
    year: null, // TODO(fred): year
    status: null, // TODO(fred): status
    featured: true,
    type: 'Convention management portal',
    role: 'TODO(fred): your role on this project',
    tech: ['React', 'Supabase', 'Vercel', 'Resend'],
    description:
      'A portal for a youth convention that handles registration, ID tags, check-in and claims tracking.',
    overview:
      'A portal for a youth convention that handles registration, ID tags, check-in and claims tracking. TODO(fred): who used it and what problem it solved.',
    architecture: 'TODO(fred): how the React app, Supabase and Resend fit together.',
    implementation: 'TODO(fred): the parts that were hardest to build and how you solved them.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: [PLACEHOLDER_IMAGE], // TODO(fred): screenshots
    hoverImage: PLACEHOLDER_IMAGE,
  },
  {
    id: 2,
    slug: 'tlmn-dohrmp',
    title: 'TLMN DOHRMP',
    category: 'dev',
    year: null, // TODO(fred): year
    status: null, // TODO(fred): status
    client: 'The Leprosy Mission Nigeria',
    featured: true,
    type: 'NGO operations management platform',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'A white-label operations management platform built for The Leprosy Mission Nigeria.',
    overview:
      'A white-label operations management platform built for The Leprosy Mission Nigeria. TODO(fred): scope of the platform.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    // TODO(fred): screenshots. Use demo data only, never real patient or beneficiary records.
    images: [PLACEHOLDER_IMAGE],
    hoverImage: PLACEHOLDER_IMAGE,
  },
  {
    id: 3,
    slug: 'mountain-of-solution',
    title: 'Mountain of Solution',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    featured: true,
    type: 'Church website',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'The website for Mountain of Solution church.',
    overview: 'The website for Mountain of Solution church. TODO(fred): what the site does for the church.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/mountain-of-solution/cover.webp'],
    hoverImage: '/work/mountain-of-solution/cover.webp',
    liveUrl: 'https://www.mountainofsolution.org',
  },
  {
    id: 4,
    slug: 'afrirecipes',
    title: 'AfriRecipes',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    featured: false,
    type: 'TODO(fred): project type',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'TODO(fred): one-sentence description.',
    overview: 'TODO(fred): overview.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/afrirecipes/cover.webp'],
    hoverImage: '/work/afrirecipes/cover.webp',
    liveUrl: 'https://afrirecipes.vercel.app',
  },
  {
    id: 5,
    slug: 'sparked',
    title: 'SparkED',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    featured: false,
    type: 'TODO(fred): project type',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'TODO(fred): one-sentence description.',
    overview: 'TODO(fred): overview.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/sparked/cover.webp'],
    hoverImage: '/work/sparked/cover.webp',
    liveUrl: 'https://sparked-ng.vercel.app',
  },
  {
    id: 6,
    slug: 'nova-secret',
    title: 'Nova Secret',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    featured: false,
    type: 'TODO(fred): project type',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'TODO(fred): one-sentence description.',
    overview: 'TODO(fred): overview.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/nova-secret/cover.webp'],
    hoverImage: '/work/nova-secret/cover.webp',
    liveUrl: 'https://novasecret.vercel.app',
  },
  {
    id: 7,
    slug: 'bright-prayer-hub',
    title: 'Bright Prayer Hub',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    featured: false,
    type: 'TODO(fred): project type',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'TODO(fred): one-sentence description.',
    overview: 'TODO(fred): overview.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/bright-prayer-hub/cover.webp'],
    hoverImage: '/work/bright-prayer-hub/cover.webp',
    liveUrl: 'https://bbright.vercel.app',
  },
  {
    id: 8,
    slug: 'benchmark-app',
    title: 'Benchmark App',
    category: 'dev',
    year: null, // TODO(fred): year
    status: null, // TODO(fred): status
    featured: false,
    type: 'TODO(fred): project type',
    role: 'TODO(fred): your role on this project',
    tech: [], // TODO(fred): stack
    description: 'TODO(fred): one-sentence description.',
    overview: 'TODO(fred): overview.',
    architecture: 'TODO(fred): architecture and stack.',
    implementation: 'TODO(fred): implementation details.',
    stats: [],
    accent: '#34D399',
    myRole: ['TODO(fred): list what you personally built.'],
    images: ['/work/benchmark-app/cover.webp'],
    hoverImage: '/work/benchmark-app/cover.webp',
    // TODO(fred): live URL, if there is one.
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: projects[(idx - 1 + projects.length) % projects.length],
    next: projects[(idx + 1) % projects.length],
  };
}
