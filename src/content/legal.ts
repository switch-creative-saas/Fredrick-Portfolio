import { site } from './site';

export interface LegalSection {
  heading: string;
  body: string[];
}

export const LEGAL_UPDATED = '14 October 2026';

// TODO(fred): read both pages and confirm they match how you run the site.

/** Built per request so the analytics paragraph matches the actual configuration. */
export function privacySections(gaEnabled: boolean): LegalSection[] {
  return [
    {
      heading: 'What the contact form collects',
      body: [
        'When you send a message through the contact form, I receive your name, your email address, the topic you picked and your message.',
        'I use these details only to reply to you. They are delivered to my inbox through an email provider (Resend, or Gmail as a fallback) and are not sold or shared for marketing.',
        'The form also has a hidden field that real visitors never see. It is used to filter out automated spam.',
      ],
    },
    {
      heading: 'Analytics',
      body: [
        'This site uses Vercel Web Analytics to count page views. It reports aggregated numbers such as which pages are visited and which countries visits come from, and it does not use cookies.',
        gaEnabled
          ? 'This site also uses Google Analytics, which sets cookies to measure visits. Google processes that data under its own privacy policy. You can block it with your browser settings or an extension.'
          : 'Google Analytics is not enabled on this site.',
      ],
    },
    {
      heading: 'How long data is kept',
      body: ['Contact form messages stay in my email inbox until I delete them. Ask me and I will delete yours.'],
    },
    {
      heading: 'Contact',
      body: [`For any question about your data, email ${site.email}.`],
    },
  ];
}

export const termsSections: LegalSection[] = [
  {
    heading: 'Using this site',
    body: [
      `This is the personal website of ${site.name}. You are welcome to browse it, share links to it and get in touch through it.`,
    ],
  },
  {
    heading: 'Content',
    body: [
      `Text, photos and designs on this site belong to ${site.name} unless stated otherwise. Please ask before reusing them.`,
      'The site source code is built on an open-source template released under the MIT License.',
    ],
  },
  {
    heading: 'No warranty',
    body: [
      'Information on this site is provided as is. I try to keep it accurate, but I cannot guarantee it is complete or up to date.',
    ],
  },
  {
    heading: 'External links',
    body: ['Links to other websites are provided for convenience. I am not responsible for their content.'],
  },
  {
    heading: 'Changes',
    body: ['I may update these terms. The date at the top shows the latest version.'],
  },
  {
    heading: 'Contact',
    body: [`Questions about these terms: ${site.email}.`],
  },
];

export const cvPage = {
  title: 'Curriculum Vitae',
  intro: site.tagline,
  download: { top: 'DOWNLOAD CV', bottom: 'PDF ↓' },
  viewerTitle: `${site.name} CV (PDF)`,
  viewerFallback: 'Your browser cannot show the PDF here.',
  viewerFallbackLink: 'Open the CV',
  sections: { education: 'Education', experience: 'Experience', research: 'Research & conferences', awards: 'Awards' },
};
