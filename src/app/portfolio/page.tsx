'use client'

import { useState } from 'react'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import ProjectsGrid from '@/components/portfolio/ProjectsGrid'
import PortfolioStats from '@/components/portfolio/PortfolioStats'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'
import Footer from '@/components/Footer'
import { projects, type FilterCategory } from '@/data/portfolio'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all')

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="bg-background min-h-screen">
      <PortfolioHero
        active={activeCategory}
        onChange={setActiveCategory}
        filteredCount={filteredProjects.length}
      />
      <ProjectsGrid projects={filteredProjects} filterKey={activeCategory} />
      <PortfolioStats />
      <PortfolioCTA />
      <Footer />
    </main>
  )
}
