'use client'

import { motion } from 'framer-motion'

const transformations = [
  {
    title: 'Zero-Touch Listing Distribution',
    icon: '🚀',
    description: 'Your listings sync automatically to MLS, Zillow, Realtor.com, Trulia, Facebook, and your website—all from one place. Update the price once, it changes everywhere. Add photos once, they appear on every platform.',
    emphasis: "Meanwhile, agents still copying and pasting to 8 different sites are working weekends while you're closing deals."
  },
  {
    title: 'Instant Lead Response',
    icon: '⚡',
    description: 'Hot leads from Zillow hit your system, get auto-qualified based on your criteria, route to the right agent in 60 seconds, and receive instant response with property details and showing availability.',
    emphasis: "Your competitors using shared inbox and manual follow-up? Those leads sit for 4-6 hours. By then, the buyer already booked three showings with faster agencies."
  },
  {
    title: 'Self-Service Showing Scheduler',
    icon: '📅',
    description: 'Buyers see a property online, click "Schedule Showing," pick a time that works, get auto-confirmation, and receive reminders. Your agent just shows up. No phone tag, no double-bookings.',
    emphasis: "Showings book themselves while you sleep, while competitors lose buyers to friction."
  }
]

export default function RealEstateInterest() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            What Changes When Listings Update Themselves and Leads Route Automatically
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Here's what happens when you stop manually updating platforms and let technology handle the repetitive work:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-800/20 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm font-medium text-blue-500/80 italic leading-relaxed">
                {item.emphasis}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 text-center max-w-5xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-200">
            This isn't about getting a nicer website. This is about transforming your agency into a modern real estate platform that captures every opportunity <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">while competitors drown in manual busywork.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
