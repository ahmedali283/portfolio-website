'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const transformations = [
  {
    icon: '🚀',
    title: 'Zero-Touch Listing Distribution',
    description: "Your listings sync automatically to MLS, Zillow, Realtor.com, Trulia, Facebook, and your website—all from one place. Update the price once, it changes everywhere. Add photos once, they appear on every platform. Meanwhile, agents still copying and pasting to 8 different sites are working weekends while you're closing deals.",
  },
  {
    icon: '⚡',
    title: 'Instant Lead Response',
    description: "Hot leads from Zillow hit your system, get auto-qualified based on your criteria, route to the right agent in 60 seconds, and receive instant response with property details and showing availability. Your competitors using shared inbox and manual follow-up? Those leads sit for 4-6 hours. By then, the buyer already booked three showings with faster agencies.",
  },
  {
    icon: '📅',
    title: 'Self-Service Showing Scheduler',
    description: "Buyers see a property online, click \"Schedule Showing,\" pick a time that works, get auto-confirmation, and receive reminders. Your agent just shows up. No phone tag, no double-bookings, no \"let me check my calendar and call you back.\" Showings book themselves while you sleep, while competitors lose buyers to friction.",
  }
]

export default function RealEstateInterest() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0b1120] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            What Changes When Listings Update Themselves and <span className="text-blue-400">Leads Route Automatically</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Here's what happens when you stop manually updating platforms and let technology handle the repetitive work:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/60 transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-blue-900/30 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">
            This isn't about getting a nicer website. This is about transforming your agency into a modern real estate platform that captures every opportunity while competitors drown in manual busywork.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
