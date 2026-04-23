'use client'

import { motion } from 'framer-motion'

export default function MedicalAudit() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
               Discover Exactly How Much Revenue Your Waiting Room Is Costing You
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
               I'm offering a free **Practice Efficiency Audit** for medical groups and dental offices. You'll receive a custom 10-page report analyzing your patient flow, no-show rates, and administrative bottlenecks.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                  <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2 italic">
                     <span className="text-lg">✓</span> No-Show Revenue Leakage
                  </h3>
                  <p className="text-sm text-slate-400">Calculation of exactly how much money you lose every month to missed appointments.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                  <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2 italic">
                     <span className="text-lg">✓</span> Front Desk Burden Audit
                  </h3>
                  <p className="text-sm text-slate-400">Analysis of how many hours your staff wastes on manual data entry and scheduling calls.</p>
               </div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
               <a 
                 href="/book" 
                 className="px-12 py-8 bg-teal-600 text-white font-black text-2xl rounded-3xl hover:bg-teal-700 transition-all hover:scale-[1.05] shadow-2xl shadow-teal-500/20"
               >
                 Get Your Free Practice Audit
               </a>
               <p className="text-sm font-bold text-red-400 uppercase tracking-[0.2em] animate-pulse">
                  ⚠️ Only 4 Audit slots left for April 2026
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
