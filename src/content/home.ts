import { site } from './site';
import { vitalink } from './vitalink';

const vitalinkCover = vitalink.blog.posts[0].image;

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
  description:
    'I study public health at Miva Open University and I build the software that health systems run on. Most days that means VitaLink.',
  label: '(About Me)',
  // Paragraphs are separated by a blank line.
  body: [
    'I trained as a software engineer at APTECH in Abuja and spent my first years building websites and web apps for churches, small businesses and friends with ideas. Public health came next, and it changed what I wanted to build.',
    'In class and in the field I kept meeting the same problem: records on paper that get lost between clinics, patients retelling their history at every visit, and disease data that reaches decision makers too late. Those are information problems. VitaLink is my answer to them.',
    'Alongside VitaLink I build platforms for organisations like The Leprosy Mission Nigeria, write research on digital health, and take on design and photography work.',
  ].join('\n\n'),
  timelineLabel: '(Experience)',
  timelineHeading: { before: 'The', accent: 'path', after: 'so far.' },
};

export const services = {
  heading: [{ t: 'WHAT' }, { t: 'i', serif: true }, { t: 'DO' }] as HeadingWord[],
  label: '(Services)',
  description:
    'My work sits where health, software and visual communication meet. Most projects need more than one of those, so I do all of them.',
  items: [
    {
      id: '01',
      title: 'Health Technology',
      description:
        'I design and build digital health systems: patient identity, medical records, disease surveillance and the admin tools around them. Most of this work lives inside VitaLink.',
      items: [
        'Health platforms and EMR workflows',
        'Disease surveillance and case reporting tools',
        'Role-based access and privacy designed in from the start',
      ],
    },
    {
      id: '02',
      title: 'Web Development',
      description:
        'Full-stack web apps and websites for organisations, from an NGO operations platform to a youth convention portal and a church website. I handle the whole build: interface, database, authentication and deployment.',
      items: [
        'Next.js, React and TypeScript front ends',
        'Supabase, PostgreSQL and Node.js back ends',
        'Deployment, transactional email and analytics',
      ],
    },
    {
      id: '03',
      title: 'Design',
      description:
        "Brand identities, campaign graphics and interface design. I designed VitaLink's brand kit and a health awareness carousel series for The Leprosy Mission Nigeria.",
      items: ['Brand kits and visual identity', 'Social media and campaign graphics', 'UI design and prototypes in Figma'],
    },
    {
      id: '04',
      title: 'Photography',
      // TODO(fred): confirm the kinds of shoots you take on.
      description: 'Photography for people, events and organisations in Abuja. Tell me what you need and I will plan the shoot with you.',
      items: ['Portraits', 'Events and programmes', 'Brand and organisation shoots'],
    },
  ],
};

export const marquee = ['Building VitaLink', 'Public Health', 'Development', 'Design', 'Photography'];

export type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

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
  description: 'The tools I use to design, build and ship web applications and health platforms.',
  allLabel: 'All Categories',
  sections: [
    {
      id: 'frontend',
      title: 'FRONTEND',
      filterLabel: 'Frontend',
      technologies: [
        { name: 'JavaScript', category: 'frontend', icon: '/stack/js.png' },
        { name: 'TypeScript', category: 'frontend', icon: '/stack/typescript.svg' },
        { name: 'React', category: 'frontend', icon: '/stack/react.png' },
        { name: 'Next.js', category: 'frontend', icon: '/stack/next.webp' },
        { name: 'Redux Toolkit', category: 'frontend', icon: '/stack/reduxtoolkit.svg' },
        { name: 'Tailwind CSS', category: 'frontend', icon: '/stack/tailwind.png' },
        { name: 'Bootstrap', category: 'frontend', icon: '/stack/bootstrap.svg' },
        { name: 'GSAP', category: 'frontend', icon: '/stack/gsap.png' },
      ],
    },
    {
      id: 'backend',
      title: 'BACKEND & REAL-TIME',
      filterLabel: 'Backend & Real-Time',
      technologies: [
        { name: 'Supabase', category: 'backend', icon: '/stack/supabase.svg' },
        { name: 'Node.js', category: 'backend', icon: '/stack/node.png' },
        { name: 'Express.js', category: 'backend', icon: '/stack/express.png' },
        { name: 'Socket.io', category: 'backend', icon: '/stack/socketio.svg' },
        { name: 'Firebase', category: 'backend', icon: '/stack/firebase.svg' },
      ],
    },
    {
      id: 'database',
      title: 'DATABASE & ORM',
      filterLabel: 'Database & ORM',
      technologies: [
        { name: 'Supabase Postgres', category: 'database', icon: '/stack/supabase.svg' },
        { name: 'MongoDB', category: 'database', icon: '/stack/mongodb.svg' },
        { name: 'Mongoose', category: 'database', icon: '/stack/mongoose.svg' },
        { name: 'MySQL', category: 'database', icon: '/stack/mysql.svg' },
      ],
    },
    {
      id: 'devops',
      title: 'DEVOPS & CLOUD',
      filterLabel: 'DevOps & Cloud',
      technologies: [
        { name: 'Vercel', category: 'devops', icon: '/stack/vercel.svg' },
        { name: 'Docker', category: 'devops', icon: '/stack/docker.svg' },
        { name: 'GitHub Actions', category: 'devops', icon: '/stack/githubactions.svg' },
        { name: 'AWS', category: 'devops', icon: '/stack/aws.webp' },
        { name: 'Nginx', category: 'devops', icon: '/stack/nginx.svg' },
        { name: 'Linux', category: 'devops', icon: '/stack/linux.svg' },
      ],
    },
    {
      id: 'tools',
      title: 'AI, TESTING & TOOLS',
      filterLabel: 'AI, Testing & Tools',
      technologies: [
        { name: 'Gemini AI', category: 'tools', icon: '/stack/geminiai.svg' },
        { name: 'Jest', category: 'tools', icon: '/stack/jest.svg' },
        { name: 'Zod', category: 'tools', icon: '/stack/zod.svg' },
        { name: 'Stripe', category: 'tools', icon: '/stack/stripe.svg' },
        { name: 'Cloudinary', category: 'tools', icon: '/stack/cloudinary.svg' },
        { name: 'Resend', category: 'tools', icon: '/stack/resend.svg' },
        { name: 'Git', category: 'tools', icon: '/stack/git.png' },
        { name: 'Postman', category: 'tools', icon: '/stack/postman-icon.svg' },
        { name: 'Figma', category: 'tools', icon: '/stack/figma.png' },
      ],
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
      image: vitalinkCover,
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
      sentence: 'Brand identities, campaign graphics and interface design for health and community organisations.',
      image: '/work/placeholder.webp', // TODO(fred): design image
    },
    {
      href: '/photography',
      label: 'Photography',
      sentence: 'Portraits, events and organisation shoots in Abuja.',
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
  slots: [] as string[],
};

export const contactCta = {
  heading: [{ t: "LET'S" }, { t: 'talk', serif: true }] as HeadingWord[],
  intro: 'Building something in health, need a website, or want to talk about VitaLink? Tell me what you are working on.',
  button: { top: 'CONTACT', bottom: 'SEND A MESSAGE →', href: '/contact' },
};

export const contactSection = {
  heading: [{ t: "LET'S" }, { t: 'talk', serif: true }] as HeadingWord[],
  intro:
    'Tell me about your project, partnership or question. Pick a topic so your message reaches me with the right context, and I will reply by email.',
};
