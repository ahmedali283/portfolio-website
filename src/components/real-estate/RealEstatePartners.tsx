'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  'MLS', 'Zillow', 'Realtor.com', 
  'Trulia', 'Matterport', 'ShowingTime',
  'Follow Up Boss', 'BoomTown', 'CloudPano'
]

export default function RealEstatePartners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0b1120] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Trusted Integration Partners
          </h2>

          {/* Partner Grid - Using text blocks as placeholders since we don't have actual logo images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12 justify-center">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="bg-slate-800/50 border border-slate-700/50 h-24 rounded-xl flex items-center justify-center p-4 hover:border-slate-500 transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <span className="text-slate-300 font-bold text-center tracking-wide">{partner}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            I maintain certified partner integrations with leading real estate technology providers, ensuring your data flows securely and your listings meet platform requirements for maximum visibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
