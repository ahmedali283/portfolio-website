'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const comparisons = [
  { yours: 'Instant pricing', competitors: '"Email quote in 4-6 hours"' },
  { yours: '24/7/365 booking', competitors: 'Business hours only' },
  { yours: '900K+ inventory', competitors: 'Limited suppliers' },
  { yours: 'Professional flow', competitors: 'PDF quotes' },
  { yours: '100% margin', competitors: '15-25% to OTAs' },
  { yours: 'You own data', competitors: 'OTAs own relationship' }
]

const multiplierSteps = [
  { year: 'Year 1', effect: 'Capture lost inquiries', result: '2-3x revenue' },
  { year: 'Year 2', effect: 'Word spreads', result: 'Organic traffic increases' },
  { year: 'Year 3', effect: 'Customer data advantage', result: 'Competitors can\'t catch up' }
]

export default function CompetitiveAdvantage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background via-divider/10 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            What Happens When You're The Only Agency
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              In Your Market With This System?
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-accent/20 to-accent-teal/20 border border-accent/50 p-6 rounded-t-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Your Agency</h3>
                <p className="text-sm text-accent mt-2">With Automated System</p>
              </div>
              <div className="bg-divider/30 border border-divider p-6 rounded-t-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Competitors</h3>
                <p className="text-sm text-secondary mt-2">Manual Process</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent/30 p-6 rounded-lg flex items-center">
                    <span className="text-success text-2xl mr-4">✓</span>
                    <span className="text-lg font-semibold">{comparison.yours}</span>
                  </div>
                  <div className="bg-divider/20 border border-divider p-6 rounded-lg flex items-center">
                    <span className="text-red-400 text-2xl mr-4">✗</span>
                    <span className="text-lg text-secondary">{comparison.competitors}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Multiplier Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-accent">✦</span> The Multiplier Effect
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {multiplierSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="bg-divider/30 backdrop-blur-sm border border-divider hover:border-accent transition-all duration-300 p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-4">
                  {step.year}
                </div>
                <p className="text-lg font-semibold mb-2">{step.effect}</p>
                <p className="text-accent font-bold">→ {step.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Window is Closing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-accent p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto"
        >
          <div className="text-accent text-5xl mb-6">⚠️</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">The Window Is Closing</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Right now, most independent agencies still use manual processes. That's your competitive window.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            In 2-3 years, automated booking will be table stakes.{' '}
            <span className="text-accent font-bold">
              The agencies who move first capture the early adopter advantage.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
