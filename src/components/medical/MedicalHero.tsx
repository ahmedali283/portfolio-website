'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MedicalHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background with Professional Medical Feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/medical/hero-bg.png"
          alt="Modern Dental Clinic"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white to-white" />
        
        {/* Soft Medical Blue Glows */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container-custom relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Trust Badge */}
          <div className="flex justify-center">
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest border border-teal-100 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Practice Efficiency System 2.0
            </motion.span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] max-w-5xl mx-auto">
            I help Medical and Dental Practices transform from{' '}
            <span className="text-slate-400 line-through decoration-red-400/50 underline-offset-8">phone-scheduling chaos</span>
            <br />
            into{' '}
            <span className="text-teal-600 bg-teal-50 px-4 py-1 rounded-2xl">automated patient platforms</span>
            {' '}that reduce no-shows by 60%
          </h1>

          {/* Pitch */}
          <p className="text-lg md:text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Most practices lose 20-30% of appointments to no-shows and spend 15-20 hours per week on phone scheduling. I build patient portals where 
            <span className="text-slate-900"> appointments book themselves</span>, 
            reminders send automatically, and intake forms fill digitally—so you free up your front desk and see more patients.
          </p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-6 justify-center items-center pt-8"
          >
            <a 
              href="/book" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-white transition-all duration-300 bg-teal-600 rounded-2xl hover:bg-teal-700 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-teal-500/20"
            >
              Get Your Free Efficiency Audit
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
              <span>✓ HIPAA Compliant</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>✓ Integrated with EHR</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>✓ No Software to Install</span>
            </p>
          </motion.div>

          {/* Impact Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-16"
          >
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-[32px] text-left">
               <div className="text-teal-600 font-bold text-sm mb-2">No-Show Reduction</div>
               <div className="text-4xl font-black text-slate-900 mb-1">60%</div>
               <div className="text-xs text-slate-400 font-medium">Average across patients</div>
            </div>
            <div className="p-8 bg-teal-600 rounded-[32px] text-left text-white shadow-lg shadow-teal-500/20">
               <div className="text-teal-100 font-bold text-sm mb-2">Staff Time Reclaimed</div>
               <div className="text-4xl font-black mb-1">20h+</div>
               <div className="text-xs text-teal-100/70 font-medium">Per week, per location</div>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-[32px] text-left">
               <div className="text-sky-600 font-bold text-sm mb-2">Self-Scheduled</div>
               <div className="text-4xl font-black text-slate-900 mb-1">40%</div>
               <div className="text-xs text-slate-400 font-medium">Of new appointments</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
