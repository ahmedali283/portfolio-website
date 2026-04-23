'use client'

import { motion } from 'framer-motion'

const trackRecord = [
  {
    title: 'Listing Platforms',
    items: [
      { name: 'MLS APIs', count: '8 Regional Systems' },
      { name: 'Zillow API', count: '12 Implementations' },
      { name: 'Realtor.com API', count: '9 Implementations' },
      { name: 'Trulia', count: '7 Implementations' },
      { name: 'Facebook Real Estate', count: '6 Implementations' }
    ]
  },
  {
    title: 'Lead Management',
    items: [
      { name: 'Follow Up Boss', count: '5 Implementations' },
      { name: 'LionDesk', count: '4 Implementations' },
      { name: 'BoomTown', count: '3 Implementations' },
      { name: 'Zillow Premier Agent', count: '12 Integrations' }
    ]
  },
  {
    title: 'Showing/Scheduling',
    items: [
      { name: 'ShowingTime API', count: '6 Implementations' },
      { name: 'Custom Schedulers', count: '8 Built from Scratch' },
      { name: 'Calendly Integration', count: '15 Implementations' }
    ]
  },
  {
    title: 'Virtual Tours & Media',
    items: [
      { name: 'Matterport API', count: '10 Implementations' },
      { name: 'CloudPano', count: '4 Implementations' },
      { name: 'iGuide', count: '3 Implementations' }
    ]
  }
]

export default function RealEstateIntegration() {
  return (
    <section className="py-24 md:py-32 bg-[#081018]">
      <div className="container-custom">
        <div className="max-w-4xl mb-20 underline decoration-blue-500/20 underline-offset-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Why Multi-Platform Integration Matters
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 mt-12"
          >
             <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">The Single-Entry Point Advantage</h3>
                <p className="text-gray-400 leading-relaxed">
                   Most agencies waste 15-20 hours per week updating the same property information across multiple platforms. Update the price once, it changes everywhere. Add photos once, they appear on every platform.
                </p>
             </div>
             <div className="bg-blue-600/5 border border-blue-500/10 p-8 rounded-3xl">
                <p className="text-4xl font-black text-white mb-2">120 hrs</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Monthly Reclaimed for Actual Selling</p>
             </div>
          </motion.div>
        </div>

        <div className="space-y-16">
          <div className="text-center">
             <h3 className="text-2xl font-bold mb-4">My Real Estate Integration Track Record</h3>
             <p className="text-gray-500">I've integrated 15+ different real estate APIs across 25+ agency projects.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecord.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] border-b border-white/5 pb-4">
                  {track.title}
                </h4>
                <div className="space-y-4">
                  {track.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center group cursor-default">
                      <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors font-medium">{item.name}</span>
                      <span className="text-[10px] font-bold py-0.5 px-2 bg-white/5 text-gray-500 rounded-md border border-white/5">{item.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[48px] border border-white/5 text-center"
        >
           <p className="text-xl text-gray-400 italic max-w-4xl mx-auto leading-relaxed">
             "Each platform has unique authentication, rate limits, data formatting, and error handling. I've solved these problems so your implementation is smooth and your listings flow flawlessly."
           </p>
        </motion.div>
      </div>
    </section>
  )
}
