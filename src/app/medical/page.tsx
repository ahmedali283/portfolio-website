import MedicalHero from '@/components/medical/MedicalHero'
import MedicalInterest from '@/components/medical/MedicalInterest'
import MedicalTechnical from '@/components/medical/MedicalTechnical'
import MedicalCaseStudies from '@/components/medical/MedicalCaseStudies'
import MedicalAudit from '@/components/medical/MedicalAudit'
import MedicalPartners from '@/components/medical/MedicalPartners'
import MedicalFinalCTA from '@/components/medical/MedicalFinalCTA'
import MedicalFooter from '@/components/medical/MedicalFooter'

export const metadata = {
  title: 'Medical & Dental Automation | Patient Scheduling Platforms',
  description: 'Reduce no-shows by 60% and free up your front desk with automated patient scheduling and portals.',
}

export default function MedicalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500/30">
      <MedicalHero />
      <MedicalInterest />
      <MedicalTechnical />
      <MedicalCaseStudies />
      <MedicalAudit />
      <MedicalPartners />
      <MedicalFinalCTA />
      <MedicalFooter />
    </main>
  )
}
