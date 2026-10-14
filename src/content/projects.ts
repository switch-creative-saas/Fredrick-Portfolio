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
  myRole?: string[];
  images: string[];
  hoverImage: string;
  /** Omit for private repositories. */
  github?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'tlmn-dohrmp',
    title: 'TLMN DOHRMP',
    category: 'dev',
    year: 2026,
    status: 'in-progress',
    client: 'The Leprosy Mission Nigeria',
    featured: true,
    tags: ['health', 'web-app'],
    type: 'NGO operations management platform',
    role: 'Lead developer',
    // TODO(fred): add the rest of the stack (database, auth, UI library).
    tech: ['Next.js', 'TypeScript', 'Vercel'],
    description:
      'A white-label operations platform for The Leprosy Mission Nigeria that runs HR, approvals, reporting and programme tracking in one place.',
    overview:
      'DOHRMP brings an NGO’s day-to-day operations into one system: people, approvals, reports, time and programme results. It is built white-label, so the same platform can be rebranded and deployed for other NGOs.',
    architecture:
      'A Next.js and TypeScript application deployed on Vercel and organised into modules behind role-based access. Every staff member works inside a scoped workspace with a dashboard for their role, and requests move through multi-stage approval chains from Audit to Finance to the National Director.',
    implementation:
      'The platform covers HR and role management, QR attendance, a unified request and concept note module, activity reports, timesheets, leave, logframe and OKR tracking, recruitment, communications, safeguarding, a receptionist desk and intern management. Along the way I fixed server-rendering crashes caused by browser-only libraries, approval requests that routed to the wrong approver, and TypeScript build failures on Vercel.',
    stats: [
      { value: '12', label: 'Operational modules' },
      { value: '3-stage', label: 'Approval chains' },
      { value: 'White-label', label: 'Reusable for other NGOs' },
    ],
    myRole: [
      'Designed the module structure and the scoped-workspace access model.',
      'Built multi-role dashboards and the approval chain engine for requests and concept notes.',
      'Built QR attendance, timesheets, leave management and activity reporting.',
      'Built logframe and OKR tracking so programme results sit next to day-to-day operations.',
      'Debugged and stabilised server rendering, layout switching and production builds on Vercel.',
    ],
    // Demo workspace only: never real staff, patient or beneficiary data.
    images: ['/work/tlmn-dohrmp/cover.webp'],
    hoverImage: '/work/tlmn-dohrmp/cover.webp',
  },
  {
    id: 2,
    slug: 'mosyf-convention-portal',
    title: 'MOSYF Convention Portal',
    category: 'dev',
    year: 2026,
    status: 'in-progress',
    client: 'Mountain of Solution Youth Fellowship',
    featured: true,
    tags: ['web-app'],
    type: 'Event registration and operations platform',
    role: 'Lead developer',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'Resend', 'Vercel'],
    description:
      'Registration, ID tags, check-in and meal and souvenir tracking for a four-day church youth convention.',
    overview:
      'The registration and event operations system for the Mountain of Solution Youth Fellowship Convention 2026, held in October 2026. Admins generate registration links and QR codes, members register and receive an ID and a printable tag by email, and staff run check-in, meal and souvenir claims and activities from the same system.',
    architecture:
      'A React 19 and TypeScript app on Vercel. Supabase handles authentication, Postgres with row-level security, realtime updates, edge functions and photo storage, and Resend sends each member a confirmation email with their tag and a private link to a status page. Members never need an account. Staff sign in with role-based access for super admins, admins and executives.',
    implementation:
      'Members are placed into balanced groups automatically by band, with a separate group for members without one. Check-in and claims run through idempotent database functions keyed by a client event ID, so a queue of actions recorded offline can be replayed without counting a meal or souvenir twice. Bands, departments, groups and church locations are lists that admins manage, and a first-run setup wizard replaces hardcoded seed data.',
    stats: [
      { value: '4', label: 'Access roles' },
      { value: '5', label: 'Auto-balanced groups' },
      { value: '0', label: 'Accounts needed by members' },
    ],
    myRole: [
      'Designed the Supabase schema, row-level security policies and database functions.',
      'Built the registration flow, member and executive IDs, printable tags and confirmation emails.',
      'Built check-in and claim tracking with duplicate prevention that is safe to replay offline.',
      'Led the interface redesign and the admin setup wizard.',
    ],
    // Screenshots show empty forms only, no registrant data.
    images: [
      '/work/mosyf-convention-portal/cover.webp',
      '/work/mosyf-convention-portal/2.webp',
      '/work/mosyf-convention-portal/3.webp',
    ],
    hoverImage: '/work/mosyf-convention-portal/cover.webp',
    liveUrl: 'https://www.msfmcyouthfellowship.org.ng',
  },
  {
    id: 3,
    slug: 'mountain-of-solution',
    title: 'Mountain of Solution',
    category: 'dev',
    year: null, // TODO(fred): year
    status: 'live',
    client: 'Mountain of Solution',
    featured: true,
    tags: ['client-site'],
    type: 'Church website',
    role: 'Designer and developer',
    tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
    description: 'The website for Mountain of Solution church, with service times, sermons, events and community resources.',
    overview:
      'The public home of Mountain of Solution church. Members and visitors find service information, sermons, upcoming events and community resources in one place.',
    architecture:
      'A responsive React site deployed on Vercel and served from the church’s own domain, mountainofsolution.org. I also handled the domain and DNS setup.',
    stats: [],
    myRole: ['Designed and built the site.', 'Set up hosting, the custom domain and DNS.'],
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
    tags: ['web-app'],
    type: 'Recipe web app',
    role: 'Developer',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'API integration'],
    description: 'A web app with recipes for African dishes from across the continent.',
    overview:
      'AfriRecipes collects recipes for African dishes in one place, so anyone can cook food from across the continent and learn where it comes from.',
    stats: [],
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
    tags: ['web-app'],
    type: 'Developer mentorship platform',
    role: 'Founder and developer',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Authentication', 'Database'],
    description: 'A platform that gives new developers access to live projects and mentorship.',
    overview:
      'SparkED helps upcoming developers get past tutorials by connecting them with live projects and mentors, so they build real experience before their first job.',
    stats: [],
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
    client: 'Nova Secret',
    featured: false,
    tags: ['client-site'],
    type: 'Catering business website',
    role: 'Designer and developer',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'The website for a catering and baking business in Abuja: custom cakes, catering, pastries and private chef bookings.',
    overview:
      'Nova Secret offers custom cakes, event catering, pastries and private chef experiences in Abuja. The site presents each service and makes it easy for customers to enquire for their events.',
    stats: [],
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
    client: 'Bright Prayer Hub',
    featured: false,
    tags: ['client-site'],
    type: 'E-commerce store',
    role: 'Developer',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'E-commerce'],
    description: 'An online store for Islamic books, literature and faith resources.',
    overview:
      'Bright Prayer Hub sells authentic Islamic books and faith-based resources online, with a catalogue that is simple to browse on a phone.',
    stats: [],
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
    status: 'archived',
    featured: false,
    tags: ['web-app'],
    type: 'Gaming benchmark app',
    role: 'Designer and developer',
    tech: ['React', 'Mobile-first design', 'Data visualisation'],
    description: 'A mobile-first app that helps gamers find games that will run well on their device.',
    overview:
      'Benchmark App matches games to the hardware a player actually has, so they can see what will run well before they download anything.',
    stats: [],
    images: ['/work/benchmark-app/cover.webp'],
    hoverImage: '/work/benchmark-app/cover.webp',
    liveUrl: 'https://v0-mobile-app-redesign-im47oo.vercel.app',
  },
  {
    id: 9,
    slug: 'artisan-connect',
    title: 'ArtisanConnect',
    category: 'dev',
    year: 2026,
    status: 'in-progress',
    featured: false,
    tags: ['web-app'],
    type: 'Artisan services marketplace',
    role: 'Full-stack developer',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API', 'Vercel'],
    description:
      'A marketplace where people find, message, hire and pay local artisans for home services, from plumbing and electrical work to tailoring.',
    overview:
      'Finding a reliable plumber, electrician or carpenter usually depends on who you know. ArtisanConnect puts that search in one place: customers browse artisans by service and location, compare profiles, ratings and hourly rates, message them about the job, then book, pay and track the work through the platform.',
    architecture:
      'The front end is a multi-page site in HTML, CSS and vanilla JavaScript, split into modules for search, profiles, chat, the hire flow, payment, orders and tracking. It talks to a PHP REST API backed by MySQL, with tables for users, categories, artisans, their past work, reviews, conversations, messages and orders. Accounts use server-side sessions and hashed passwords.',
    implementation:
      'Hiring runs as a three-step flow that ends in an order summary itemising the service fee, materials, platform fee and tax, with card or bank transfer as the payment method. Order tracking geocodes the job address with the Google Maps API. The artisan side is not built yet, so for now a simulation layer in the API plays the artisan role and payments are simulated, which lets the full customer journey be tested end to end.',
    stats: [
      { value: '8', label: 'Database tables' },
      { value: '3-step', label: 'Hire flow' },
      { value: '30+', label: 'Pages' },
    ],
    myRole: [
      'Designed and built the customer-facing site: search, artisan profiles, chat, hiring, payment, orders and tracking.',
      'Built the PHP REST API and designed the MySQL schema.',
      'Implemented session authentication with hashed passwords.',
      'Integrated Google Maps geocoding for job locations and order tracking.',
      'Wrote a simulation layer so the customer journey works before the artisan module exists.',
    ],
    images: ['/work/artisan-connect/cover.webp'],
    hoverImage: '/work/artisan-connect/cover.webp',
    github: 'https://github.com/switch-creative-saas/ArtisanConnect',
    liveUrl: 'https://artisan-connect-ten.vercel.app',
  },
  {
    id: 10,
    slug: 'saint-kay',
    title: 'Saint Kay',
    category: 'dev',
    year: 2026,
    status: 'live',
    client: 'Saint Kay Sport Management',
    featured: true,
    tags: ['client-site'],
    type: 'Sport management agency website and roster system',
    role: 'Designer and developer',
    tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    description:
      'The website and private roster manager for Saint Kay, a Lagos sport management agency representing players and coaches in football, basketball and boxing.',
    overview:
      'Saint Kay represents athletes and coaches across several sports, and its site has to do two jobs: present the agency and its talent to clubs and scouts, and let new players apply. Public pages cover the agency, the founder and his credentials, a featured roster, and searchable directories of players and coaches with full profiles.',
    architecture:
      'A Next.js 14 and TypeScript app on Vercel. The data model treats sports, nationalities, leagues, clubs and people as separate records, so a profile can carry club history, stats, accomplishments, contract details and market value, and boxing can use weight classes where football uses positions. Directories filter by sport, nationality, club, country and age, with compact, detailed and gallery views.',
    implementation:
      'The agency manages everything from a private admin portal. Its URL is set by an environment variable and kept out of search engines, and access is checked on the server with a signed, httpOnly session cookie and an optional 30-day remember-me. Inside, staff edit sports, clubs, people, applications and the founder profile, and uploaded photos are compressed in the browser first. Automated tests cover forged sessions and login expiry. Roster data is currently stored in the browser, and moving it to Supabase with per-user accounts is the next step.',
    stats: [
      { value: '3', label: 'Sports supported' },
      { value: '3', label: 'Directory views' },
      { value: '1', label: 'Private admin portal' },
    ],
    myRole: [
      'Designed the brand presentation and every public page.',
      'Modelled sports, clubs, leagues and people so one site can serve several sports.',
      'Built searchable player and coach directories and detailed profiles.',
      'Built the admin portal with server-checked sessions, and wrote tests for the auth flow.',
    ],
    images: ['/work/saint-kay/cover.webp', '/work/saint-kay/2.webp', '/work/saint-kay/3.webp'],
    hoverImage: '/work/saint-kay/cover.webp',
    github: 'https://github.com/switch-creative-saas/SaintKay',
    liveUrl: 'https://saint-kay.vercel.app',
  },
  {
    id: 11,
    slug: 'eco-tracker',
    title: 'EcoTracker',
    category: 'dev',
    year: 2026,
    status: 'live',
    featured: false,
    tags: ['health', 'web-app'],
    type: 'Personal carbon footprint calculator',
    role: 'Designer and developer',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Recharts', 'jsPDF'],
    description:
      'A carbon footprint calculator that turns everyday travel, food and home energy habits into an estimate, a score and practical tips.',
    overview:
      'Most people have no feel for how their daily habits add up. EcoTracker asks simple questions about how you travel, what you eat and how much energy and water you use at home, then shows your estimated emissions as they change, compares them with world averages, and suggests changes with the biggest effect.',
    architecture:
      'A React 19 and TypeScript single-page app built with Vite. Inputs feed a calculation hook that applies emission factors per kilometre, per serving and per kilowatt-hour, and returns daily and annual totals by category. Everything is saved in the browser’s local storage, so no account is needed and no data leaves the device.',
    implementation:
      'Sliders update a live preview as you move them. The results dashboard shows annual tonnes of CO2e, a daily average, an eco score out of 100, a breakdown chart by category and a comparison with world, EU and US averages and the 2-tonne target linked to the Paris Agreement, built with Recharts. Tips are personalised to the categories that matter most for each user, and the full report can be downloaded as a PDF. The emission factors are simplified averages, so results are estimates for awareness rather than a formal audit.',
    stats: [
      { value: '3', label: 'Footprint categories' },
      { value: '100%', label: 'Stored on your device' },
      { value: 'PDF', label: 'Downloadable report' },
    ],
    myRole: [
      'Designed the interface and the calculator flow.',
      'Built the emission calculation, live preview and local persistence.',
      'Built the results dashboard, charts and PDF report.',
    ],
    images: ['/work/eco-tracker/cover.webp', '/work/eco-tracker/2.webp', '/work/eco-tracker/3.webp', '/work/eco-tracker/4.webp'],
    hoverImage: '/work/eco-tracker/cover.webp',
    github: 'https://github.com/switch-creative-saas/EcoTracker',
    liveUrl: 'https://ecotracker-beta.vercel.app',
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
