import { site, socialList } from '@/content/site';
import { vitalink } from '@/content/vitalink';
import type { Project } from '@/content/projects';

const absolute = (path: string) => new URL(path, site.url).toString();

/** schema.org Person for the site owner. Rendered once in the root layout. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    image: absolute(site.photo),
    jobTitle: `Founder & CEO, ${vitalink.name}`,
    worksFor: { '@type': 'Organization', name: vitalink.name, ...(vitalink.website ? { url: vitalink.website } : {}) },
    alumniOf: { '@type': 'EducationalOrganization', name: 'APTECH Abuja' },
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Miva Open University' },
    address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
    sameAs: socialList.map((s) => s.href),
  };
}

/** schema.org CreativeWork for a project or design detail page. */
export function creativeWorkJsonLd(project: Project, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: absolute(path),
    image: absolute(project.hoverImage || project.images[0]),
    creator: { '@type': 'Person', name: site.name, url: site.url },
    ...(project.year ? { dateCreated: String(project.year) } : {}),
    ...(project.client ? { sponsor: { '@type': 'Organization', name: project.client } } : {}),
    ...(project.tech.length ? { keywords: project.tech.join(', ') } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}
