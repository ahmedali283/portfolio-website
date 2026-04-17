'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const hotelProviders = [
  { name: 'TBO Holidays', implementations: 4 },
  { name: 'Yalago', implementations: 3 },
  { name: 'Hotelbeds', implementations: 2 },
  { name: 'Expedia TAAP', implementations: 1 }
]

const flightProviders = [
  { name: 'Amadeus', implementations: 2 },
  { name: 'Sabre', implementations: 1 },
  { name: 'Air World Innovation', implementations: 3 },
  { name: 'Travelfusion', implementations: 2 },
  { name: 'Mystifly', implementations: 1 }
]

export default function APIExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const totalIntegrations = [...hotelProviders, ...flightProviders].reduce(
    (sum, provider) => sum + provider.implementations,
    0
  )

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
            Why Multi-Provider Integration
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
        </motion.div>

        {/* Problem/Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
        >
          <div className="bg-divider/30 border-2 border-red-500/30 p-8 rounded-xl">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">Single Provider Problem</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Agencies locked into one API miss better rates. Customer searches Dubai hotel, your rate is{' '}
              <span className="font-bold">$180</span>, but competitor has{' '}
              <span className="font-bold text-red-400">$155</span>.{' '}
              <span className="text-accent">You lose the sale.</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border-2 border-accent/50 p-8 rounded-xl">
            <div className="text-success text-4xl mb-4">✓</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Multi-Provider Solution</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your system queries TBO, Yalago, Hotelbeds simultaneously. Shows the{' '}
              <span className="font-bold text-accent">$155 rate</span>. Customer books through you.{' '}
              <span className="text-accent font-bold">You capture the sale.</span>
            </p>
          </div>
        </motion.div>

        {/* Integration Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Integration Track Record
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Hotels/Accommodation */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-4xl">🏨</span>
                <h4 className="text-2xl font-bold">Hotels/Accommodation</h4>
              </div>
              <div className="space-y-4">
                {hotelProviders.map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-divider/30 backdrop-blur-sm border border-divider hover:border-accent transition-all duration-300 p-6 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <span className="text-success text-xl mr-3">✓</span>
                      <span className="text-lg font-semibold">{provider.name}</span>
                    </div>
                    <div className="text-accent font-bold text-lg">
                      {provider.implementations} {provider.implementations === 1 ? 'implementation' : 'implementations'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Flights */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-4xl">✈️</span>
                <h4 className="text-2xl font-bold">Flights</h4>
              </div>
              <div className="space-y-4">
                {flightProviders.map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-divider/30 backdrop-blur-sm border border-divider hover:border-accent-teal transition-all duration-300 p-6 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <span className="text-success text-xl mr-3">✓</span>
                      <span className="text-lg font-semibold">{provider.name}</span>
                    </div>
                    <div className="text-accent-teal font-bold text-lg">
                      {provider.implementations} {provider.implementations === 1 ? 'implementation' : 'implementations'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-accent/20 to-accent-teal/20 border-2 border-accent/50 p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-6">
            {totalIntegrations}+
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Total Integrations Completed</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I've integrated{' '}
            <span className="text-accent font-bold">9 different travel APIs</span> across{' '}
            <span className="text-accent font-bold">{totalIntegrations}+ projects</span>.
            Each API has unique quirks—I've solved these problems so your implementation is smooth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
