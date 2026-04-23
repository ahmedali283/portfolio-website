'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const integrations = [
  {
    category: 'MLS & Listing Distribution',
    icon: '🏠',
    items: [
      'MLS APIs - Your local MLS feed (auto-sync new listings)',
      'Zillow - Real-time syndication with enhanced profiles',
      'Realtor.com - Direct API integration',
      'Trulia - Automatic listing updates',
      'Homes.com - Full property data sync',
      'Facebook Marketplace - Auto-post properties',
      'Your Website - IDX integration with live MLS data'
    ]
  },
  {
    category: 'Lead Management & CRM',
    icon: '👥',
    items: [
      'Follow Up Boss - Lead routing and nurture automation',
      'LionDesk - Smart CRM with drip campaigns',
      'BoomTown - Lead generation and management',
      'Zillow Premier Agent - Instant lead delivery',
      'Realtor.com Connections - Lead capture',
      'Custom lead scoring - Auto-prioritize hot buyers'
    ]
  },
  {
    category: 'Showing & Scheduling',
    icon: '🗓️',
    items: [
      'ShowingTime - Industry-standard showing management',
      'Calendly-style booking - Public showing scheduler',
      'Agent calendar sync - Google/Outlook integration',
      'Automated reminders - SMS + Email confirmations'
    ]
  },
  {
    category: 'Virtual Tours & Media',
    icon: '🎥',
    items: [
      'Matterport - 3D tour embedding',
      'CloudPano - Virtual tour hosting',
      'iGuide - Interactive floor plans',
      'Auto-upload - Tours appear on all listing platforms'
    ]
  }
]

const flowSteps = [
  "Agent lists property in MLS",
  "System detects new listing",
  "Auto-syncs to all platforms simultaneously (Zillow, Realtor, Facebook, IDX)",
  "Lead submits inquiry on Zillow",
  "System captures lead instantly",
  "Auto-qualifies based on your rules (budget, location, timeline)",
  "Routes to right agent (by territory, availability, expertise)",
  "Sends instant auto-response with property info",
  "Offers showing times (synced with agent calendar)",
  "Buyer books showing online",
  "Agent gets notification and confirmation",
  "Automated reminders sent to buyer",
  "Showing happens → Agent closes deal"
]

export default function RealEstateTechnical() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0f172a] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            How It Works: <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">The Complete Integration System</span>
          </h2>
          <p className="text-xl text-slate-400">
            I connect your agency to every major real estate platform and create a single command center.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            {integrations.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-white">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => {
                    const [platform, ...descParts] = item.split(' - ')
                    const desc = descParts.join(' - ')
                    return (
                      <li key={i} className="flex items-start text-sm md:text-base">
                        <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                        <span className="text-slate-300">
                          <strong className="text-white font-medium">{platform}</strong>
                          {desc ? ` - ${desc}` : ''}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Visual Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-blue-900/20 to-slate-900/20 border border-blue-500/20 p-8 rounded-2xl sticky top-24"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">The Automated Deal Flow</h3>
            <div className="space-y-0">
              {flowSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-center">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-4 h-4 rounded-full border-2 ${idx === 0 || idx === flowSteps.length - 1 ? 'border-blue-400 bg-blue-500/20' : 'border-slate-500 bg-slate-800'}`} />
                    {idx < flowSteps.length - 1 && (
                      <div className="w-0.5 h-10 bg-slate-700 my-1" />
                    )}
                  </div>
                  <div className={`flex-1 pb-10 ${idx === flowSteps.length - 1 ? 'pb-0' : ''}`}>
                    <p className={`text-sm md:text-base ${idx === 0 || idx === flowSteps.length - 1 ? 'text-white font-bold' : 'text-slate-300'}`}>
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
