'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🚀',
    title: 'Automatic Revenue Generation',
    description: `Your website works while you sleep. Customers browse 900,000+ hotels, see live pricing, and book instantly—no forms, no waiting, no lost inquiries. Meanwhile, agencies still using "contact us" forms are losing 70% of those visitors.`
  },
  {
    icon: '⏰',
    title: 'Reclaim 20+ Hours Every Week',
    description: `Stop manually pulling rates. The system queries TBO and Yalago APIs in real-time, processes bookings automatically, sends confirmations, and syncs to your dashboard. Your team focuses on high-value work: complex itineraries, upselling, relationships.`
  },
  {
    icon: '📈',
    title: 'Premium Positioning',
    description: `When customers see instant availability and professional booking flows, they perceive you as a premium operator on par with Expedia—but you keep 100% of the margin because it's your platform.`
  }
]

export default function InterestSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-background relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            What Changes When Your Website Becomes
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              a 24/7 Booking Machine
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-divider/30 backdrop-blur-sm p-8 rounded-xl border border-divider hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed">
            This isn't about adding features. This is about{' '}
            <span className="text-accent font-semibold">transforming your agency</span>
            {' '}into a modern booking platform that captures revenue while you focus on growth.
          </p>
        </motion.div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
