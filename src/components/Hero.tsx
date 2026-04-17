'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-dark to-background">
      {/* Travel Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2400"
          alt="Travel background"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

      {/* Animated travel elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-5">✈️</div>
        <div className="absolute top-40 right-20 text-5xl opacity-5">🌍</div>
        <div className="absolute bottom-32 left-1/4 text-4xl opacity-5">🗺️</div>
        <div className="absolute top-1/2 right-1/3 text-5xl opacity-5">🧳</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-5">📍</div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-5.5xl font-bold leading-relaxed">
            I help Travel Agencies transform from{' '}
            <span className="text-secondary">slow manual systems</span>
            <br />
            into{' '}
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              high-performance booking machines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            By building automated platforms that convert inquiries 24/7
            <br />
            without your team lifting a finger
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-3 justify-center items-center pt-4"
          >
            <a href="/book" className="btn-primary">
              Book Free Audit Call
            </a>
            <p className="text-sm text-secondary">
              NO B.S. • No hidden fees • No credit card required
            </p>
          </motion.div>

          {/* Before/After Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-3xl mx-auto py-12"
          >
            <div className="flex-1 p-8 bg-divider/50 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-semibold mb-2">BEFORE</p>
              <p className="text-secondary text-sm mb-1">Manual quotes</p>
              <p className="text-4xl font-bold">12%</p>
              <p className="text-secondary text-sm">conversion</p>
            </div>
            <div className="text-accent text-4xl font-bold hidden md:block">→</div>
            <div className="flex-1 p-8 bg-gradient-to-br from-accent/20 to-accent-teal/20 rounded-lg border border-accent/50">
              <p className="text-accent font-semibold mb-2">AFTER</p>
              <p className="text-gray-300 text-sm mb-1">Live pricing</p>
              <p className="text-4xl font-bold">38%</p>
              <p className="text-gray-300 text-sm">conversion</p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-4 pt-12"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>TBO | Yalago | Amadeus | Sabre integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>4-week implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Serving US, UK, AU agencies</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-secondary text-sm"
        >
          <div className="w-6 h-10 border-2 border-secondary rounded-full mx-auto mb-2 relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-secondary rounded-full absolute left-1/2 top-2 -translate-x-1/2"
            />
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
