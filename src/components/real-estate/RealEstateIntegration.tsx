'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const mathProblem = [
  { text: '10 active listings per agent', highlight: false },
  { text: '8 platforms per listing', highlight: false },
  { text: '80 individual updates per agent', highlight: false },
  { text: '6 agents = 480 updates per week', highlight: false },
  { text: 'At 15 minutes average = 120 hours monthly wasted', highlight: true }
]

const platforms = [
  'Your local MLS',
  'Zillow (with enhanced agent profile)',
  'Realtor.com (full details)',
  'Trulia (optimized for search)',
  'Homes.com',
  'Facebook Marketplace (auto-post)',
  'Your agency website (IDX integration)',
  'Instagram (optional auto-post with photos)'
]

const trackRecord = [
  {
    category: 'Listing Platforms',
    items: [
      { name: 'MLS APIs', count: '8 regional systems' },
      { name: 'Zillow API', count: '12 implementations' },
      { name: 'Realtor.com API', count: '9 implementations' },
      { name: 'Trulia', count: '7 implementations' },
      { name: 'Facebook Real Estate', count: '6 implementations' }
    ]
  },
  {
    category: 'Lead Management',
    items: [
      { name: 'Follow Up Boss', count: '5 implementations' },
      { name: 'LionDesk', count: '4 implementations' },
      { name: 'BoomTown', count: '3 implementations' },
      { name: 'Zillow Premier Agent', count: '12 integrations' }
    ]
  },
  {
    category: 'Showing & Scheduling',
    items: [
      { name: 'ShowingTime API', count: '6 implementations' },
      { name: 'Custom Schedulers', count: '8 built from scratch' },
      { name: 'Calendly Integration', count: '15 implementations' }
    ]
  },
  {
    category: 'Virtual Tours',
    items: [
      { name: 'Matterport API', count: '10 implementations' },
      { name: 'CloudPano', count: '4 implementations' },
      { name: 'iGuide', count: '3 implementations' }
    ]
  }
]

export default function RealEstateIntegration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo-900/10 blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Multi-Platform <span className="text-blue-400">Integration Matters</span>
          </h2>
          <p className="text-xl text-slate-300">
            Stop wasting 15-20 hours per week updating the same property information across multiple platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Single-Entry Point Advantage</h3>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              New listing? Copy photos to Zillow. Paste description into Realtor.com. Update Facebook. Re-enter on your website. Price reduction? Do it all again. New photos from photographer? Update everywhere manually.
            </p>

            <div className="bg-slate-900/80 border border-slate-700 p-8 rounded-2xl mb-8">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-4">The Multiplication Problem</h4>
              <ul className="space-y-3">
                {mathProblem.map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${item.highlight ? 'text-red-400 font-bold mt-4 pt-4 border-t border-slate-700/50 text-lg' : 'text-slate-300'}`}>
                    <span className={item.highlight ? 'text-red-400' : 'text-slate-500'}>✖</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-900/20 border border-blue-500/30 p-8 md:p-10 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">My Multi-Platform Solution</h3>
            <p className="text-blue-100/80 mb-6 relative z-10">
              Update once in your MLS or central dashboard. System propagates changes to all platforms automatically within 5 minutes.
            </p>

            <div className="mb-6 relative z-10">
              <h4 className="text-white font-bold mb-3 border-b border-blue-500/30 pb-2">One listing entry → Appears everywhere:</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-blue-100">
                {platforms.map((platform, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-blue-400">✓</span> {platform}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-sm text-blue-100 bg-blue-950/50 p-4 rounded-xl border border-blue-800/50 relative z-10 mb-6">
              <p><strong className="text-white">One price change</strong> → Updates everywhere simultaneously</p>
              <p><strong className="text-white">One new photo</strong> → Added to all platforms automatically</p>
              <p><strong className="text-white">One status change</strong> → Removes from all platforms instantly</p>
            </div>

            <p className="text-xl font-bold text-white text-center relative z-10">
              The result: <span className="text-blue-400">120 hours monthly reclaimed</span> for actual selling activities.
            </p>
          </motion.div>
        </div>

        {/* Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">My Real Estate Integration Track Record</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trackRecord.map((section, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-3">{section.category}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">{item.name}</span>
                      <span className="text-blue-400/80 bg-blue-500/10 px-2 py-0.5 rounded text-xs">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-blue-900/40 border border-blue-500/20 p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              I've integrated <strong className="text-white">15+ different real estate APIs</strong> across <strong className="text-white">25+ agency projects</strong>. Each platform has unique authentication, rate limits, data formatting, and error handling. I've solved these problems so your implementation is smooth and your listings flow flawlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
