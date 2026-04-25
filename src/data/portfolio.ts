export type ProjectCategory = 'travel' | 'medical' | 'real-estate'
export type FilterCategory = 'all' | ProjectCategory

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  tagline: string
  description: string
  metrics: ProjectMetric[]
  tags: string[]
  accentFrom: string
  accentTo: string
  icon: string
  projectNumber: string
}

export const projects: Project[] = [
  {
    id: 'awt',
    category: 'travel',
    title: 'Adventure World Tours',
    tagline: 'Live Booking Engine',
    description:
      'End-to-end automated booking platform integrating live inventory from TBO, Amadeus, and Sabre — replacing 100% manual quote workflows. Built a real-time pricing engine with instant confirmation for 400+ daily transactions.',
    metrics: [
      { value: '3.2x', label: 'Conversion Lift' },
      { value: '38%', label: 'Booking Rate' },
      { value: '25h+', label: 'Saved Weekly' },
    ],
    tags: ['Amadeus API', 'TBO', 'Next.js', 'Real-time Pricing'],
    accentFrom: '#f97316',
    accentTo: '#fb923c',
    icon: '✈️',
    projectNumber: '01',
  },
  {
    id: 'global-escapes',
    category: 'travel',
    title: 'Global Escapes Platform',
    tagline: 'Multi-Provider B2B Portal',
    description:
      'Scalable B2B booking portal connecting 12 travel API providers into a unified inventory system. Automated quote generation, supplier negotiations, and commission tracking for a major US-based tour operator.',
    metrics: [
      { value: '48%', label: 'Revenue Increase' },
      { value: '400+', label: 'Daily Bookings' },
      { value: '12', label: 'API Integrations' },
    ],
    tags: ['Yalago', 'Sabre', 'React', 'Node.js'],
    accentFrom: '#14b8a6',
    accentTo: '#06b6d4',
    icon: '🌍',
    projectNumber: '02',
  },
  {
    id: 'clearview-dental',
    category: 'medical',
    title: 'ClearView Dental Group',
    tagline: 'Patient Acquisition System',
    description:
      'HIPAA-compliant patient acquisition and scheduling automation for a 4-location dental group. Reduced no-shows by 65% through automated reminders and rebuilt the digital intake process from scratch.',
    metrics: [
      { value: '2.8x', label: 'Lead Conversion' },
      { value: '65%', label: 'Fewer No-Shows' },
      { value: '$180K', label: 'Annual Savings' },
    ],
    tags: ['HIPAA Compliant', 'Scheduling API', 'Patient Portal', 'SEO'],
    accentFrom: '#3b82f6',
    accentTo: '#6366f1',
    icon: '🦷',
    projectNumber: '03',
  },
  {
    id: 'prohealth',
    category: 'medical',
    title: 'ProHealth Network',
    tagline: 'Multi-Location Management',
    description:
      'Enterprise clinic management system deployed across 30+ locations. EHR integration, automated billing, and a patient self-service portal — built to handle 4x the patient volume without additional staff.',
    metrics: [
      { value: '4x', label: 'Patient Capacity' },
      { value: '92%', label: 'Satisfaction Score' },
      { value: '30+', label: 'Locations' },
    ],
    tags: ['EHR Integration', 'Stripe Billing', 'Multi-location', 'Analytics'],
    accentFrom: '#8b5cf6',
    accentTo: '#a855f7',
    icon: '🏥',
    projectNumber: '04',
  },
  {
    id: 'luxeproperties',
    category: 'real-estate',
    title: 'LuxeProperties Group',
    tagline: 'AI-Powered Lead Generation',
    description:
      'End-to-end lead acquisition and CRM automation for a luxury real estate firm. Built intelligent follow-up sequences that qualify leads 24/7, pushing $12M in new deals through the automated pipeline.',
    metrics: [
      { value: '5x', label: 'Qualified Leads' },
      { value: '$12M', label: 'Deals Closed' },
      { value: '<48h', label: 'Response Time' },
    ],
    tags: ['CRM Automation', 'Zapier', 'SMS Follow-up', 'Property Feeds'],
    accentFrom: '#0ea5e9',
    accentTo: '#6366f1',
    icon: '🏡',
    projectNumber: '05',
  },
  {
    id: 'primehomes',
    category: 'real-estate',
    title: 'PrimeHomes Realty',
    tagline: 'Virtual Showing Platform',
    description:
      'Automated virtual tour and showing scheduling platform that eliminated every missed lead. Integrated calendar sync, automated email nurture sequences, and a real-time analytics dashboard for agents.',
    metrics: [
      { value: '310%', label: 'More Showings' },
      { value: '22%', label: 'Close Rate' },
      { value: '0', label: 'Missed Leads' },
    ],
    tags: ['Calendly', 'Virtual Tours', 'Email Sequences', 'Analytics'],
    accentFrom: '#f59e0b',
    accentTo: '#ef4444',
    icon: '🏢',
    projectNumber: '06',
  },
]

export const categoryCounts: Record<FilterCategory, number> = {
  all: projects.length,
  travel: projects.filter((p) => p.category === 'travel').length,
  medical: projects.filter((p) => p.category === 'medical').length,
  'real-estate': projects.filter((p) => p.category === 'real-estate').length,
}
