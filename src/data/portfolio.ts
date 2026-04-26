export type ProjectCategory = 'travel' | 'medical' | 'real-estate' | 'gaming'
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
  images?: string[]
}

export const projects: Project[] = [
  {
    id: 'awt',
    category: 'travel',
    title: 'Air World Tours',
    tagline: 'Live Booking Engine',
    description:
      'End-to-end automated booking platform with live inventory from TBO, Amadeus, and Sabre — eliminating 100% of manual quote workflows. Enabled a specialty tour operator to run 24/7 with real-time pricing, instant confirmations, and zero API certification headaches. The agency owner said it best: "They completely transformed our business."',
    metrics: [
      { value: '3.2x', label: 'Conversion Lift' },
      { value: '35%', label: 'Revenue Increase' },
      { value: '25h+', label: 'Saved Weekly' },
    ],
    tags: ['Amadeus API', 'TBO', 'Sabre', 'Next.js', 'Real-time Pricing'],
    accentFrom: '#f97316',
    accentTo: '#fb923c',
    icon: '✈️',
    projectNumber: '01',
    images: ['/assets/awt/dashboard.png'],
  },
  /*
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
  */
  {
    id: 'doctomorris',
    category: 'medical',
    title: 'DoctorMorris',
    tagline: 'Doctor Booking & Telemedicine App',
    description:
      'Flutter mobile app connecting patients with doctors for both online consultations and in-person appointments. Features specialty-based doctor discovery (Dentist, Cardiology, Orthopedics, Neurology), real-time slot booking, integrated payment processing, and a live chat system — giving patients a complete healthcare experience from their phone.',
    metrics: [
      { value: '2-in-1', label: 'Online & In-Person' },
      { value: '30+', label: 'Specialties Covered' },
      { value: 'Live', label: 'Payment Processing' },
    ],
    tags: ['Flutter', 'Firebase', 'Telemedicine', 'Appointment Booking', 'Payments'],
    accentFrom: '#3b82f6',
    accentTo: '#2563eb',
    icon: '🩺',
    projectNumber: '03',
    images: [
      '/assets/doctormorris/dmoris.png',
    ],
  },
  /*
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
  */
  {
    id: 'cards-and-chaos',
    category: 'gaming',
    title: 'Cards & Chaos - Frontend',
    tagline: 'Multiplayer Party Game',
    description: 'Modern, responsive frontend for the Cards & Chaos multiplayer party game. Features real-time game state synchronization via WebSockets, optional WebRTC video calls, and a dark/light theme supporting card UI.',
    metrics: [
      { value: 'Live', label: 'WebSockets' },
      { value: 'WebRTC', label: 'Video Calls' },
      { value: '100%', label: 'Responsive' },
    ],
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    accentFrom: '#ec4899',
    accentTo: '#e11d48',
    icon: '🃏',
    projectNumber: '01',
    images: ['/assets/cnc/cnc.png'],
  },
  {
    id: 'ddi-gnn',
    category: 'medical',
    title: 'DDI-GNN',
    tagline: 'Drug Interaction Prediction',
    description: 'A production-ready deep learning framework for predicting drug-drug interactions using state-of-the-art Graph Neural Networks. Encodes molecular structures as graphs and leverages message-passing neural networks to predict potential adverse interactions.',
    metrics: [
      { value: '87.8%', label: 'Accuracy' },
      { value: '86', label: 'Interaction Types' },
      { value: 'SOTA', label: 'Graph Neural Nets' },
    ],
    tags: ['PyTorch', 'GNN', 'FastAPI', 'Streamlit', 'Docker'],
    accentFrom: '#8b5cf6',
    accentTo: '#6366f1',
    icon: '🧬',
    projectNumber: '04',
    images: ['/assets/ddi/ddi2.png'],
  },
  {
    id: 'voxel-sculpt',
    category: 'gaming',
    title: 'Voxel Sculpt',
    tagline: 'Gesture-Controlled 3D Modeling',
    description: 'A contactless 3D voxel modeling interface that leverages computer vision and machine learning for real-time hand tracking. Integrates MediaPipe Hands with WebGL-based rendering to let users construct and manipulate structures through natural hand gestures.',
    metrics: [
      { value: '<100ms', label: 'Latency' },
      { value: '60 FPS', label: 'Performance' },
      { value: '21', label: 'Hand Landmarks' },
    ],
    tags: ['React', 'Three.js', 'MediaPipe', 'Machine Learning'],
    accentFrom: '#06b6d4',
    accentTo: '#3b82f6',
    icon: '✋',
    projectNumber: '05',
    images: ['/assets/voxel/placeholder.png'],
  }
]

export const categoryCounts: Record<FilterCategory, number> = {
  all: projects.length,
  travel: projects.filter((p) => p.category === 'travel').length,
  medical: projects.filter((p) => p.category === 'medical').length,
  'real-estate': projects.filter((p) => p.category === 'real-estate').length,
  gaming: projects.filter((p) => p.category === 'gaming').length,
}
