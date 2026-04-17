'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const accommodationProviders = [
  { name: 'TBO Holidays', description: '900,000+ hotels worldwide' },
  { name: 'Yalago', description: 'Global accommodation network' },
  { name: 'Hotelbeds', description: '180,000+ hotels in 200+ countries' },
  { name: 'Expedia TAAP', description: 'Direct Expedia inventory' }
]

const flightProviders = [
  { name: 'Amadeus', description: 'Global GDS' },
  { name: 'Sabre', description: 'Major airline network' },
  { name: 'Air World Innovation', description: 'Competitive flight API' },
  { name: 'Travelfusion', description: 'Multi-source aggregation' },
  { name: 'Mystifly', description: 'Budget + full-service airlines' }
]

const flowSteps = [
  'Customer visits',
  'Searches',
  'System queries multiple APIs',
  'Aggregates results',
  'Displays best pricing',
  'Customer books',
  'Payment processed',
  'Confirmation sent',
  'Dashboard synced'
]

export default function TechnicalProof() {
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            How It Works:
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              The Technical Architecture
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            I integrate your website with the world's leading travel inventory providers
          </p>
        </motion.div>

        {/* Accommodation Providers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-accent">✦</span> Accommodation Providers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-divider/50 backdrop-blur-sm p-6 rounded-lg border border-divider hover:border-accent transition-all duration-300"
              >
                <h4 className="text-lg font-bold mb-2">{provider.name}</h4>
                <p className="text-sm text-secondary">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flight Providers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-accent-teal">✦</span> Flight Providers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {flightProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-divider/50 backdrop-blur-sm p-6 rounded-lg border border-divider hover:border-accent-teal transition-all duration-300"
              >
                <h4 className="text-lg font-bold mb-2">{provider.name}</h4>
                <p className="text-sm text-secondary">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Visual Flow</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center"
              >
                <div className="bg-gradient-to-br from-accent/20 to-accent-teal/20 border border-accent/50 px-6 py-3 rounded-lg">
                  <span className="text-sm md:text-base font-medium">{step}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="text-accent text-2xl mx-2 hidden md:block">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Multi-Source Capability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent/30 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Multi-Source Capability</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Your system can query{' '}
            <span className="text-accent font-semibold">multiple providers simultaneously</span>,
            compare rates in real-time, and display the best options—all under your brand.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
