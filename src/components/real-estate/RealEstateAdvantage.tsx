'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const comparison = [
  { yours: 'Lead response: 60 seconds', theirs: '"I\'ll call you back in a few hours"' },
  { yours: '24/7 lead capture', theirs: 'Business hours only, voicemail after 6pm' },
  { yours: 'Instant showing booking', theirs: '"Let me check agent calendar and get back to you"' },
  { yours: 'Properties on 8 platforms simultaneously', theirs: 'Updated manually over 2-3 days' },
  { yours: 'Virtual tours on every listing', theirs: '"We can schedule an in-person showing"' },
  { yours: 'Automated follow-up nurture', theirs: 'Sticky notes and forgotten leads' },
  { yours: 'MLS updates sync everywhere automatically', theirs: 'Copy-paste to each site individually' },
  { yours: 'You own all lead data', theirs: 'Zillow owns the relationship' }
]

const compounding = [
  { time: 'Month 1-3', result: 'You respond faster than competitors → Your conversion rate jumps 2-3x' },
  { time: 'Month 4-6', result: 'Happy buyers leave reviews → Your online reputation improves → Organic lead volume increases' },
  { time: 'Month 7-12', result: 'You have rich data on lead sources, conversion patterns, agent performance → You optimize what\'s working → Competitors are still guessing' },
  { time: 'Year 2', result: 'Your agents are more productive and happier → You attract and retain top talent → Market share compounds' },
  { time: 'Year 3', result: 'Your brand becomes known as "the agency that responds immediately" → You\'re the first call for serious buyers → Competitors can\'t catch up' }
]

export default function RealEstateAdvantage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            What Happens When You're The <span className="text-blue-400">Fastest Agency</span> In Your Market?
          </h2>
          <p className="text-xl text-slate-300">
            Modern home buyers research 10-15 properties online, submit inquiries to 3-5 agencies, and book showings with whoever responds first. Your competition is a race against time.
          </p>
        </motion.div>

        {/* Competitive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 bg-slate-800/80 border-b border-slate-700 p-6">
              <div className="text-center font-bold text-xl text-blue-400">Your Agency (With System)</div>
              <div className="text-center font-bold text-xl text-slate-400">Competitors (Manual Process)</div>
            </div>
            <div className="divide-y divide-slate-700/50">
              {comparison.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-4 md:p-6 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center gap-3 pr-4 border-r border-slate-700/50">
                    <span className="text-blue-400 shrink-0">✓</span>
                    <span className="text-white font-medium">{row.yours}</span>
                  </div>
                  <div className="flex items-center gap-3 pl-4 md:pl-6">
                    <span className="text-red-400/70 shrink-0">✕</span>
                    <span className="text-slate-400">{row.theirs}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Compounding Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">The Compounding Effect</h3>
            <div className="space-y-6">
              {compounding.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-24 pt-1">
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">{item.time}</span>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market Share Math */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-slate-800/50 border border-slate-700 p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Market Share Math</h3>
            <p className="text-slate-300 mb-6">In your market, assume there are 20 active agencies competing for the same buyers.</p>
            
            <div className="space-y-8">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-slate-400 font-bold mb-3 uppercase text-sm tracking-wider">Without automation:</h4>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li>• You're one of 20</li>
                  <li>• Buyers contact 4-5 agencies</li>
                  <li>• Whoever responds first usually wins</li>
                </ul>
                <div className="text-xl font-medium text-white">Your odds: <span className="text-red-400">20-25%</span></div>
              </div>

              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl" />
                <h4 className="text-blue-400 font-bold mb-3 uppercase text-sm tracking-wider">With automation:</h4>
                <ul className="space-y-2 text-slate-200 mb-4 relative z-10">
                  <li>• You respond in 60 seconds</li>
                  <li>• Competitors take 4-6 hours</li>
                  <li>• You offer instant showing booking</li>
                </ul>
                <div className="text-xl font-medium text-white relative z-10">Your odds: <span className="text-blue-400 text-2xl font-bold">60-70%</span></div>
              </div>
            </div>
            
            <p className="text-white font-bold text-center mt-8 text-lg">
              That's not incremental improvement. That's market dominance.
            </p>
          </motion.div>
        </div>

        {/* The Window Is Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800/40 to-slate-900/80 p-8 md:p-12 rounded-3xl border border-slate-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">The Window Is Closing</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Right now, most independent real estate agencies still manually update listings and respond to leads during business hours. That's your opportunity. In 2-3 years, automated lead response and listing syndication will be expected by every buyer.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            The agencies who move first capture the reputation, the reviews, the top agents, and the market position. The agencies who move late spend years playing catch-up.
          </p>
          <p className="text-blue-400 font-bold text-xl md:text-2xl">
            The question isn't whether this becomes standard. The question is whether you're leading or following.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
