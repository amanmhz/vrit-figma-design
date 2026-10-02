import workspaceDesk from '../assets/images/workspace-desk.jpg'
import conferencePhone from '../assets/images/conference-phone.jpg'
import partnerCloudEducation from '../assets/images/partner-cloud-education.png'
import partnerCmc from '../assets/images/partner-cmc.png'
import partnerSnp from '../assets/images/partner-snp.png'
import partnerZebec from '../assets/images/partner-zebec.png'

export const servicesHero = {
  description:
    'Experience our expert solutions tailored to enhance your business with top-tier design, development, and animation.',
  ctaLabel: 'Services',
  services: ['UI & UX', 'Development', 'Blockchain'],
} as const

export interface CarouselSlide {
  src: string
  alt: string
  placeholder: string
}

export const carouselSlides: CarouselSlide[] = [
  {
    src: workspaceDesk,
    alt: 'Person reviewing financial charts on a laptop at a bright desk',
    placeholder: 'var(--color-surface-placeholder)',
  },
  {
    src: conferencePhone,
    alt: 'Conference phone and remote on a meeting table',
    placeholder: 'var(--color-surface-placeholder-alt)',
  },
  {
    src: workspaceDesk,
    alt: 'Person reviewing financial charts on a laptop at a bright desk',
    placeholder: 'var(--color-surface-placeholder)',
  },
  {
    src: conferencePhone,
    alt: 'Conference phone and remote on a meeting table',
    placeholder: 'var(--color-surface-placeholder-alt)',
  },
]

export interface Partner {
  name: string
  logo: string
  width: number
  height: number
  crop?: [number, number, number, number]
}

export const partners: Partner[] = [
  { name: 'Cloud Education', logo: partnerCloudEducation, width: 102, height: 74.5, crop: [0.8042, 0.0922, 0.979, -0.042] },
  { name: 'CMC', logo: partnerCmc, width: 143, height: 52, crop: [1, 0, 0.6061, 0.2145] },
  { name: 'SNP', logo: partnerSnp, width: 120, height: 72.17 },
  { name: 'Zebec', logo: partnerZebec, width: 139, height: 41, crop: [0.972, 0, 0.9782, 0.0109] },
]

export const coursesIntro = {
  eyebrow: 'Explore our classes and master trending skills!',
  headingLead: 'Dive Into ',
  headingHighlight: 'What’s Hot Right Now! 🔥',
} as const
