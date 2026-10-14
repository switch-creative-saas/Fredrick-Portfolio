import type { HeadingWord } from './home';

export interface VitalinkProduct {
  name: string;
  description: string;
}

// Copy rule: never describe VitaMind AI as diagnosing. Use "clinical decision support",
// "flags", "surfaces", "assists clinicians".
// Do not add users, hospitals, revenue or funding figures until they are confirmed.
export const vitalink = {
  name: 'VitaLink',
  previousName: 'Switch Health',
  summary: 'A healthcare operating system and infrastructure platform for Africa.',
  // TODO(fred): VitaLink website URL.
  website: null as string | null,
  heading: [{ t: 'VITA' }, { t: 'link', serif: true }] as HeadingWord[],
  intro: 'A healthcare operating system and infrastructure platform for Africa, formerly Switch Health.',
  problem: {
    label: '(The problem)',
    body: 'TODO(fred): the problem VitaLink solves, in two or three plain sentences. Who is affected and what breaks today.',
  },
  what: {
    label: '(What VitaLink is)',
    body: 'VitaLink is a healthcare operating system and infrastructure platform for Africa. It was previously called Switch Health. TODO(fred): one or two sentences on how the modules work together.',
  },
  productsLabel: '(Modules)',
  productsHeading: [{ t: 'THE' }, { t: 'platform', serif: true }] as HeadingWord[],
  products: [
    { name: 'Health Identity', description: 'TODO(fred): one line on Health Identity.' },
    { name: 'EMR', description: 'TODO(fred): one line on the EMR.' },
    { name: 'Telemedicine', description: 'TODO(fred): one line on Telemedicine.' },
    {
      name: 'VitaMind AI',
      description: 'Clinical intelligence that assists clinicians. TODO(fred): one line on what it flags or surfaces.',
    },
    { name: 'VitaLink Sentinel', description: 'Disease surveillance. TODO(fred): one line on Sentinel.' },
    { name: 'Insurance', description: 'TODO(fred): one line on Insurance.' },
    { name: 'Patient App', description: 'TODO(fred): one line on the Patient App.' },
  ] satisfies VitalinkProduct[],
  stage: {
    label: '(Where we are)',
    body: 'TODO(fred): current stage (for example pilot, building, raising). Only confirmed facts: no invented users, hospitals, revenue or funding.',
  },
  cta: {
    heading: [{ t: 'TALK' }, { t: 'to', serif: true }, { t: 'ME' }] as HeadingWord[],
    intro: 'To talk about partnering with or investing in VitaLink, send me a message.',
    button: { top: 'TALK TO ME', bottom: 'CONTACT →', href: '/contact?topic=vitalink' },
    websiteButton: { top: 'WEBSITE', bottom: 'VISIT ↗' },
  },
};
