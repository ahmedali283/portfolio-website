'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const integrations = [
  {
    category: 'MLS & Listing Distribution',
    items: [
      'MLS APIs - Auto-sync new listings',
      'Zillow - Real-time syndication',
      'Realtor.com - Direct API integration',
      'Trulia - Automatic updates',
      'Homes.com - Full data sync',
      'Facebook Marketplace - Auto-post',
      'Your Website - IDX integration'
    ]
  },
  {
    category: 'Lead Management & CRM',
    items: [
      'Follow Up Boss - Lead routing',
      'LionDesk - Smart CRM drips',
      'BoomTown - Generation & management',
      'Zillow Premier Agent - Instant delivery',
      'Realtor.com Connections - Capture',
      'Custom lead scoring - Prioritize'
    ]
  },
  {
    category: 'Showing & Scheduling',
    items: [
      'ShowingTime - Management',
      'Calendly-style booking - Public',
      'Agent calendar sync - Google/Outlook',
      'Automated reminders - SMS + Email'
    ]
  },
  {
    category: 'Virtual Tours & Media',
    items: [
      'Matterport - 3D tour embedding',
      'CloudPano - Hosting',
      'iGuide - Interactive floor plans',
      'Auto-upload - All platforms'
    ]
  }
]

const flowSteps = [
  { label: 'Agent lists property in MLS', icon: '📝' },
  { label: 'System detects new listing', icon: '🔍' },
  { label: 'Auto-syncs to all platforms', icon: '🔄', subItems: ['Zillow', 'Realtor.com', 'Trulia', 'Facebook', 'Your Site'] },
  { label: 'Lead submits inquiry', icon: '👤' },
  { label: 'System captures instantly', icon: '📥' },
  { label: 'Auto-qualifies based on rules', icon: '⚖️' },
  { label: 'Routes to right agent', icon: '🎯' },
  { label: 'Instant auto-response', icon: '✉️' },
  { label: 'Offers showing times', icon: '🕒' },
  { label: 'Buyer books showing', icon: '📅' },
  { label: 'Agent gets confirmation', icon: '🔔' },
  { label: 'Automated reminders sent', icon: '📱' },
  { label: 'Showing happens → Close deal', icon: '🤝' }
]

export default function RealEstateTechnical() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-[#081018] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="container-custom">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Technical Architecture</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            How It Works: The Complete Integration System
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            I connect your agency to every major real estate platform and create a single command center where everything stays in sync automatically.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Detailed Lists */}
          <div className="space-y-6">
            {integrations.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-800/20 border border-white/5 p-6 rounded-2xl hover:bg-slate-800/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  {cat.category}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 bg-blue-500/50 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 3D Flow Diagram */}
          <div className="relative pt-10">
            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative perspective-[2000px] transform-gpu">
              <motion.div
                initial={{ rotateY: -15, rotateX: 20, rotateZ: 0 }}
                animate={{ rotateY: -10, rotateX: 15 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
                className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl preserve-3d"
                 style={{ 
                    transformStyle: 'preserve-3d',
                    boxShadow: '20px 40px 80px rgba(0,0,0,0.5), inset 0 0 40px rgba(59,130,246,0.05)'
                 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-white">Full-Cycle Automation</h4>
                        <p className="text-xs text-blue-400">Real-time Data Pipeline</p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 relative">
                    {flowSteps.slice(0, 8).map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20, transform: 'translateZ(0px)' }}
                        whileInView={{ opacity: 1, x: 0, transform: `translateZ(${idx * 15}px)` }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group relative overflow-hidden"
                      >
                         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                         <span className="text-xl shrink-0">{step.icon}</span>
                         <span className="text-xs font-medium text-gray-300">{step.label}</span>
                         {idx === 2 && (
                           <div className="ml-auto flex gap-1">
                             <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" />
                             <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                             <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                           </div>
                         )}
                      </motion.div>
                    ))}
                    
                    {/* Connecting Line */}
                    <div className="absolute -left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-blue-600/50 via-blue-400/50 to-emerald-500/50" />
                    
                    {/* Pulsing indicator of current state */}
                    <div className="absolute -left-7 top-[40%] w-3 h-3 bg-blue-500 rounded-full border-2 border-[#081018] shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-bounce" />
                  </div>
                  
                  <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4" style={{ transform: 'translateZ(150px)' }}>
                     <div className="text-2xl">💰</div>
                     <div>
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">End Goal</p>
                        <p className="text-sm font-bold text-white">Agent Closes More Deals</p>
                     </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Back shadows/reflections */}
              <div className="absolute -inset-4 bg-blue-600/10 blur-[60px] rounded-[60px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
