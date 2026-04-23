'use client'

import { motion } from 'framer-motion'

export default function MedicalFinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">
            Ready to reclaim your front desk and eliminate scheduling frustration?
          </h2>
          
          <div className="space-y-8 text-xl text-slate-500 mb-16 leading-relaxed font-medium">
            <p>
               Every day you wait is another day of missed revenue, overwhelmed staff, and frustrated patients. Join the 250+ practices who have automated their patient intake and scheduling.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/book" 
              className="inline-flex items-center gap-4 px-12 py-8 bg-teal-600 text-white font-black text-2xl rounded-[32px] hover:bg-teal-700 transition-all shadow-2xl shadow-teal-500/40 relative group overflow-hidden"
            >
              Book Your Free Efficiency Strategy Call
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          
          <div className="mt-12 flex flex-col items-center gap-4">
             <p className="text-sm font-bold text-teal-600 uppercase tracking-[0.2em]">
                ✓ No credit card required to start
             </p>
             <p className="text-xs text-slate-400 font-bold">
                AUDITS ARE 100% FREE | ZERO OBLIGATION
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
