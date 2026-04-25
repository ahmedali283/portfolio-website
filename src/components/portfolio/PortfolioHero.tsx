'use client'

import { motion } from 'framer-motion'
import type { FilterCategory } from '@/data/portfolio'
import { categoryCounts } from '@/data/portfolio'

const CATEGORIES: { id: FilterCategory; label: string; mobileLabel: string }[] = [
  { id: 'all', label: 'All Projects', mobileLabel: 'All' },
  { id: 'travel', label: 'Travel', mobileLabel: 'Travel' },
  { id: 'medical', label: 'Medical', mobileLabel: 'Medical' },
  { id: 'real-estate', label: 'Real Estate', mobileLabel: 'Estate' },
]

interface Props {
  active: FilterCategory
  onChange: (cat: FilterCategory) => void
  filteredCount: number
}

export default function PortfolioHero({ active, onChange, filteredCount }: Props) {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-dark to-background">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-light/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10 text-center pt-20 sm:pt-24 pb-10">
        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-secondary hover:text-accent-teal transition-colors duration-200 mb-10 text-sm group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          Back to Home
        </motion.a>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Live Portfolio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-none mb-6"
        >
          Work That{' '}
          <span className="bg-gradient-to-r from-accent via-gold-light to-accent-teal bg-clip-text text-transparent">
            Speaks
          </span>
          <br className="hidden sm:block" />
          {' '}For Itself
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed"
        >
          Real platforms. Real results. Built for Travel, Medical, and Real Estate businesses
          that refused to stay average.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-5"
        >
          {/* Outer scroll wrapper: scrollable on mobile, centered on sm+ */}
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
            <div className="flex justify-start sm:justify-center px-1">
              <div className="inline-flex shrink-0 bg-divider/20 backdrop-blur-md border border-divider/50 rounded-2xl p-1.5 gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`relative px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      active === cat.id ? 'text-background' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {active === cat.id && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-accent to-accent-teal rounded-xl"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {/* Short label on mobile, full label on sm+ */}
                      <span className="sm:hidden">{cat.mobileLabel}</span>
                      <span className="hidden sm:inline">{cat.label}</span>
                      {/* Count badge hidden on mobile */}
                      <span
                        className={`hidden sm:inline text-xs px-1.5 py-0.5 rounded-full font-bold transition-colors duration-200 ${
                          active === cat.id
                            ? 'bg-background/20 text-background'
                            : 'bg-divider text-secondary'
                        }`}
                      >
                        {categoryCounts[cat.id]}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Count indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-secondary text-sm"
        >
          Showing{' '}
          <motion.span
            key={filteredCount}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-accent font-semibold"
          >
            {filteredCount}
          </motion.span>
          {' '}of{' '}
          <span className="font-semibold text-primary">{categoryCounts.all}</span> projects
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
