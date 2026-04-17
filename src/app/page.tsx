import Hero from '@/components/Hero'
import InterestSection from '@/components/InterestSection'
import TechnicalProof from '@/components/TechnicalProof'
import CaseStudies from '@/components/CaseStudies'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import AuditOffer from '@/components/AuditOffer'
import APIExpertise from '@/components/APIExpertise'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <InterestSection />
      <TechnicalProof />
      <CaseStudies />
      <CompetitiveAdvantage />
      <AuditOffer />
      <APIExpertise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
