export type ProjectCategory = 'travel' | 'medical' | 'gaming' | 'security'
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
      'An enterprise-grade, end-to-end automated travel booking engine that seamlessly aggregates live global inventory from top GDS providers including TBO, Amadeus, and Sabre. This platform successfully eliminated 100% of manual quote workflows, enabling a specialty tour operator to operate a 24/7 self-service portal. Featuring intelligent real-time pricing algorithms, automated margin calculations, instant booking confirmations, and a robust unified API architecture that completely abstracted away complex provider certification headaches.',
    metrics: [
      { value: '3.2x', label: 'Conversion Lift' },
      { value: '35%', label: 'Revenue Increase' },
      { value: '25h+', label: 'Saved Weekly' },
    ],
    tags: [
      'Next.js', 'React', 'Node.js', 'Amadeus API', 'TBO API', 'Sabre GDS',
      'Live Inventory Management', 'B2B Travel Portal', 'Automated Quoting',
      'Real-time Pricing Engine', 'PostgreSQL', 'Tailwind CSS'
    ],
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
      'A comprehensive, HIPAA-compliant telemedicine and healthcare management platform built natively with Flutter. It bridges the gap between patients and medical professionals by facilitating seamless discovery across 30+ medical specialties. The ecosystem features high-fidelity WebRTC video consultations, real-time clinical chat, intelligent slot-based appointment scheduling for both virtual and in-person visits, secure automated payment gateways via Stripe, and push notifications—delivering a unified, modern healthcare experience.',
    metrics: [
      { value: '2-in-1', label: 'Online & In-Person' },
      { value: '30+', label: 'Specialties Covered' },
      { value: 'Live', label: 'Payment Processing' },
    ],
    tags: [
      'Flutter', 'Dart', 'Firebase', 'WebRTC Video Calls', 'Stripe Payments',
      'Real-time Chat', 'Appointment Booking Engine', 'Telemedicine',
      'HIPAA Compliant Architecture', 'Push Notifications', 'Provider Dashboard'
    ],
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
    description: 'A highly interactive and fluid frontend architecture engineered for a massive multiplayer online party game. Leveraging the bleeding-edge performance of React 19 and Vite, the platform ensures sub-millisecond real-time game state synchronization across all connected clients via robust WebSockets. The immersive social experience is further enhanced by integrated peer-to-peer WebRTC video and voice channels, sophisticated Framer Motion micro-animations, and a meticulously crafted responsive UI.',
    metrics: [
      { value: 'Live', label: 'WebSockets' },
      { value: 'WebRTC', label: 'Video Calls' },
      { value: '100%', label: 'Responsive' },
    ],
    tags: [
      'React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'WebSockets',
      'Socket.io', 'WebRTC Video/Voice', 'Multiplayer Game State',
      'Zustand State Management', 'Responsive Design', 'Interactive UI/UX'
    ],
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
    description: 'A production-grade bioinformatics and deep learning pipeline specifically engineered to predict adverse drug-drug interactions (DDIs). By treating complex molecular structures as mathematical graphs, the system utilizes state-of-the-art Graph Convolutional Networks (GCN) and Siamese Message Passing Neural Networks to learn latent chemical representations. The framework features an interactive Streamlit dashboard, Monte Carlo dropout for uncertainty quantification, and a highly scalable FastAPI backend deployed via Docker.',
    metrics: [
      { value: '87.8%', label: 'Accuracy' },
      { value: '86', label: 'Interaction Types' },
      { value: 'SOTA', label: 'Graph Neural Nets' },
    ],
    tags: [
      'PyTorch', 'Graph Neural Networks (GNN)', 'FastAPI', 'Streamlit', 'Docker',
      'Deep Learning', 'Cheminformatics', 'SMILES Processing', 'Siamese Networks',
      'Molecular Graph Modeling', 'Python', 'Machine Learning'
    ],
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
    description: 'An experimental, contactless spatial computing interface that redefines digital 3D modeling through natural human gestures. By integrating Google\'s MediaPipe Hands ML framework with custom WebGL-based rendering via Three.js, the system processes 21 distinct 3D hand landmarks in real-time. It features a custom finite state machine for complex temporal gesture recognition combined with spatial hashing algorithms, enabling users to effortlessly sculpt and manipulate complex voxel environments.',
    metrics: [
      { value: '<100ms', label: 'Latency' },
      { value: '60 FPS', label: 'Performance' },
      { value: '21', label: 'Hand Landmarks' },
    ],
    tags: [
      'React', 'Three.js', 'WebGL', 'Google MediaPipe', 'Computer Vision',
      'Real-Time Gesture Control', 'Machine Learning', 'Zustand',
      'Spatial Computing', 'Voxel Rendering', 'Finite State Machines'
    ],
    accentFrom: '#06b6d4',
    accentTo: '#3b82f6',
    icon: '✋',
    projectNumber: '05',
    images: ['/assets/voxel/voxel.png'],
  },
  {
    id: 'signature-verification',
    category: 'security',
    title: 'Signature Verification System',
    tagline: 'Hybrid Ensemble AI & Biometric Auth',
    description: 'An enterprise-grade, offline biometric signature verification engine designed to detect highly skilled forgeries in financial and legal documents. This highly sophisticated system utilizes a novel hybrid ensemble approach, dynamically fusing state-of-the-art deep learning architectures (Siamese Networks, VGG16 CNNs, LSTMs) with classical computer vision feature extraction (GLCM texture analysis, morphological skeletonization). It boasts a fully containerized Django REST API backend and a responsive React frontend.',
    metrics: [
      { value: '6', label: 'Feature Engines' },
      { value: 'SOTA', label: 'Forgery Detection' },
      { value: '0.5s', label: 'Inference Latency' },
    ],
    tags: [
      'React 18', 'Django REST Framework', 'TensorFlow', 'Keras', 'OpenCV',
      'Siamese Neural Networks', 'LSTM Time-Series Analysis', 'VGG16 CNN',
      'Computer Vision', 'Biometrics Authentication', 'PostgreSQL', 'Ensemble AI'
    ],
    accentFrom: '#6366f1',
    accentTo: '#a855f7',
    icon: '✍️',
    projectNumber: '06',
    images: ['/assets/svs/svs.png'],
  },
  {
    id: 'crime-intelligence',
    category: 'security',
    title: 'CrimeIntel',
    tagline: 'Geospatial Crime Risk Profiling',
    description: 'An advanced, full-stack machine learning application engineered for geospatial crime risk assessment and predictive forecasting across diverse urban geographies. By aggregating complex datasets, the system employs K-Means clustering algorithms, probabilistic crime type distribution, and temporal trend regression to provide actionable location-based intelligence. It features a high-performance FastAPI backend and an interactive React mapping interface to deliver hotspot discovery, predictive trend analysis, and comprehensive risk profiling.',
    metrics: [
      { value: 'Top 5', label: 'Crime Probabilities' },
      { value: 'SOTA', label: 'Trend Forecasting' },
      { value: 'K-Means', label: 'Spatial Clustering' },
    ],
    tags: [
      'React 19', 'FastAPI', 'Scikit-Learn', 'Machine Learning', 'Python 3.10',
      'Data Engineering', 'K-Means Clustering', 'Linear Regression', 'Geospatial Analysis',
      'Leaflet Mapping', 'REST APIs', 'Predictive Modeling'
    ],
    accentFrom: '#eab308',
    accentTo: '#ea580c',
    icon: '🚨',
    projectNumber: '07',
    images: ['/assets/ci/ci.png'],
  }
]

export const categoryCounts: Record<FilterCategory, number> = {
  all: projects.length,
  travel: projects.filter((p) => p.category === 'travel').length,
  medical: projects.filter((p) => p.category === 'medical').length,
  // 'real-estate': projects.filter((p) => p.category === 'real-estate').length,
  gaming: projects.filter((p) => p.category === 'gaming').length,
  security: projects.filter((p) => p.category === 'security').length,
}
