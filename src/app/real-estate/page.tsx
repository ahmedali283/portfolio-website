import RealEstateHero from '@/components/real-estate/RealEstateHero'
import RealEstateInterest from '@/components/real-estate/RealEstateInterest'
import RealEstateTechnical from '@/components/real-estate/RealEstateTechnical'
import RealEstateCaseStudies from '@/components/real-estate/RealEstateCaseStudies'
import RealEstateAdvantage from '@/components/real-estate/RealEstateAdvantage'
import RealEstateAudit from '@/components/real-estate/RealEstateAudit'
import RealEstateIntegration from '@/components/real-estate/RealEstateIntegration'
import RealEstatePartners from '@/components/real-estate/RealEstatePartners'
import RealEstateFinalCTA from '@/components/real-estate/RealEstateFinalCTA'
import RealEstateFooter from '@/components/real-estate/RealEstateFooter'

export const metadata = {
  title: 'Real Estate Automation | Lead-Closing Systems',
  description: 'Transform your Real Estate Agency from manual listing chaos into an automated lead-closing machine.',
}

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
      <RealEstateHero />
      <RealEstateInterest />
      <RealEstateTechnical />
      <RealEstateCaseStudies />
      <RealEstateAdvantage />
      <RealEstateAudit />
      <RealEstateIntegration />
      <RealEstatePartners />
      <RealEstateFinalCTA />
      <RealEstateFooter />
    </main>
  )
}
