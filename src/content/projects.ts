export type ProjectCategory = 'dev' | 'design';
export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export type ProjectTag = 'health' | 'web-app' | 'client-site';

/** Filter row on /work. Each id other than 'all' matches a ProjectTag. */
export const WORK_FILTERS: { id: 'all' | ProjectTag; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'health', label: 'Health' },
  { id: 'web-app', label: 'Web apps' },
  { id: 'client-site', label: 'Client sites' },
];

/** Labels used on the project detail page. */
export const detailCopy = {
  privateCodebase: 'Private codebase',
  keyMovesHeading: [{ t: 'KEY' }, { t: 'moves', serif: true }],
  builtWithLabel: 'Built with',
  toolsLabel: 'Tools',
};

/** Optional long-form text sections. Dev projects use overview/architecture/implementation, design uses overview/process/outcome. */
export type ProjectTextSection = 'overview' | 'architecture' | 'implementation' | 'process' | 'outcome';

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
  tags: ProjectTag[];
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview?: string;
  architecture?: string;
  implementation?: string;
  process?: string;
  outcome?: string;
  stats: ProjectStat[];
  accent: string;
  myRole?: string[];
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
    tags: ['web-app'], // TODO(fred): confirm tags
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
    tags: ['health', 'web-app'], // TODO(fred): confirm tags
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
    tags: ['client-site'], // TODO(fred): confirm tags
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
    tags: ['web-app'], // TODO(fred): confirm tags
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
    tags: ['web-app'], // TODO(fred): confirm tags
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
    tags: ['web-app'], // TODO(fred): confirm tags
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
    tags: ['web-app'], // TODO(fred): confirm tags
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
    tags: ['web-app'], // TODO(fred): confirm tags
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

/** Featured first, then newest first. Items without a year sort last. */
export function sortProjects(items: Project[]): Project[] {
  return [...items].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return (b.year ?? -Infinity) - (a.year ?? -Infinity);
  });
}

export function getAllProjects(): Project[] {
  return projects;
}

/** Dev projects in display order for /work. */
export function getWorkProjects(): Project[] {
  return sortProjects(projects.filter((p) => p.category === 'dev'));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Previous and next items within one collection, wrapping around. None when the collection has one item. */
export function getAdjacent(items: Project[], slug: string): { prev?: Project; next?: Project } {
  const idx = items.findIndex((p) => p.slug === slug);
  if (idx === -1 || items.length < 2) return {};
  return {
    prev: items[(idx - 1 + items.length) % items.length],
    next: items[(idx + 1) % items.length],
  };
}
