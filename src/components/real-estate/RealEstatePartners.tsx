'use client'

import { motion } from 'framer-motion'

const partners = [
  'MLS', 'Zillow', 'Realtor.com',
  'Trulia', 'Matterport', 'ShowingTime',
  'Follow Up Boss', 'BoomTown', 'CloudPano'
]

export default function RealEstatePartners() {
  return (
    <section className="py-24 bg-[#0f172a] border-y border-white/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-4"
          >
            Trusted Integration Partners
          </motion.h2>
          <p className="text-sm text-gray-500 font-medium tracking-widest uppercase">
            Certified partner integrations with leading real estate technology providers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {partners.map((partner, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.05 }}
               className="h-12 flex items-center justify-center text-xl font-black text-white px-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:opacity-100 transition-all cursor-default select-none"
             >
               {partner}
             </motion.div>
           ))}
           <div className="hidden lg:flex h-12 items-center justify-center text-xs font-bold text-blue-500/50 px-6 italic">
             + 15 more APIs
           </div>
        </div>
        
        <p className="text-center text-xs text-gray-600 mt-16 max-w-2xl mx-auto">
          I maintain certified partner integrations, ensuring your data flows securely and your listings meet platform requirements for maximum visibility.
        </p>
      </div>
    </section>
  )
}
