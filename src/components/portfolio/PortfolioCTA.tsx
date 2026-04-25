'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PortfolioCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          {/* Availability badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-success/10 border border-success/30 text-success text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              Limited Spots Available
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Ready to Be Our
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Next Success Story?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Book a free audit call. We&apos;ll analyse your current setup and show you exactly
            what a custom platform could do for your business.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <a href="/book" className="btn-primary">
              Book Free Audit Call
            </a>
            <p className="text-sm text-secondary">
              No commitment · No credit card · Results or we don&apos;t charge
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
