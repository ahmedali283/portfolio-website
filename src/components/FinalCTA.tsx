'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent-teal/5 to-transparent" />

      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            Stop Losing Bookings to Competitors
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Who Automated This Years Ago
            </span>
          </h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Five years ago, having any website was enough. Three years ago, social media helped.{' '}
              <span className="text-primary font-semibold">
                Today, agencies winning market share are the ones who let customers book instantly.
              </span>
            </p>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Your competitors are researching this right now. The question isn't whether automated booking becomes standard—
              <span className="text-accent font-bold">
                it's whether you adopt early and capture advantage, or adopt late and play catch-up.
              </span>
            </p>

            <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed pt-6">
              The audit takes 60 seconds to book.
              <br />
              The insights could transform your business.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col gap-4 items-center">
              <a
                href="/book"
                className="inline-block bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark text-background font-bold px-32 py-7 rounded-xl text-2xl md:text-3xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)] outline outline-2 outline-gold-light/30 outline-offset-4"
              >
                Book Free Audit Call →
              </a>
              <p className="text-sm text-secondary">
                NO B.S. • No hidden fees • No credit card required
              </p>
            </div>
          </motion.div>

          {/* Scarcity Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-accent/50 p-6 rounded-lg inline-block"
          >
            <div className="flex items-center gap-3 text-lg md:text-xl">
              <span className="text-accent text-2xl">⚠️</span>
              <div>
                <span className="font-bold text-accent">7 audit slots remaining</span>
                <span className="text-secondary"> this month</span>
                <span className="hidden md:inline text-secondary"> | Next availability: May 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-12"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Zero obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>48-hour delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Actionable insights</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Watch on your time</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-teal to-transparent" />
    </section>
  )
}
