'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RealEstateHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] pt-20 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white max-w-5xl mx-auto">
            I help Real Estate Agencies transform from <span className="text-gray-400">manual listing chaos</span> into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              automated lead-closing machines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed">
            By building platforms that sync your properties everywhere, route hot leads instantly, and schedule showings automatically—so you close more deals with zero grunt work.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <a href="/book" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Get Your Free Agency Audit →
            </a>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              Watch 2-Min Case Study
            </button>
          </motion.div>

          {/* Before/After Visual (Code based) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto pt-16 pb-12"
          >
            <div className="flex-1 p-6 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-red-500/20 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
              <p className="text-red-400 font-bold tracking-widest text-sm mb-4 uppercase">Before</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400">Process</span>
                  <span className="text-white font-medium">Manual updates</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400">Conversion</span>
                  <span className="text-white font-medium text-xl">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Time Wasted</span>
                  <span className="text-red-300 font-medium">20 hrs/week</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-blue-400 text-3xl hidden md:flex">→</div>
            
            <div className="flex-1 p-6 bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
              <p className="text-blue-400 font-bold tracking-widest text-sm mb-4 uppercase">After</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">Process</span>
                  <span className="text-white font-bold text-blue-100">Auto-sync listings</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">Conversion</span>
                  <span className="text-white font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">38%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Admin Time</span>
                  <span className="text-blue-300 font-bold">2 hrs/week</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-4 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>MLS | Zillow | Realtor.com | Trulia | Matterport</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>4-week implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Serving US, UK, AU agencies</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
