'use client'

import { motion } from 'framer-motion'

export default function RealEstateFinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-[#081018] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            Stop Losing Deals to Agencies Who Respond While You're Still Checking Voicemail
          </h2>
          
          <div className="space-y-8 text-xl text-gray-400 mb-16 leading-relaxed">
            <p>
              Five years ago, having a website was enough. Three years ago, being on Zillow helped. Today, the agencies winning market share are the ones who respond to leads <span className="text-white font-bold">before competitors even see the notification.</span>
            </p>
            <p>
              The window is still open, but it's closing. The audit takes 60 seconds to book. The insights could transform your agency's trajectory for the next decade.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/book" 
              className="inline-flex items-center gap-4 px-12 py-8 bg-blue-600 text-white font-black text-2xl rounded-[32px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 relative group overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              Book Your Free Audit
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          
          <div className="mt-12 flex flex-col items-center gap-4">
             <p className="text-sm font-bold text-red-500 uppercase tracking-[0.2em] animate-pulse">
               ⚠️ 7 audit slots remaining this month
             </p>
             <p className="text-xs text-gray-600 font-medium">
                NEXT AVAILABILITY: MAY 2026
             </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Text */}
      <div className="absolute bottom-10 left-0 w-full text-center text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none">
         DOMINANCE
      </div>
    </section>
  )
}
