'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RealEstateHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/real-estate/hero-bg.png"
          alt="Luxury Real Estate Automation"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/90 to-[#0f172a]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10 py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wider uppercase mb-4"
            >
              Real Estate Tech Consultancy
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              I help Real Estate Agencies transform from{' '}
              <span className="text-gray-500">manual listing chaos</span>
              <br className="hidden md:block" />
              {' '}into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                automated lead-closing machines
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            By building platforms that sync your properties everywhere, route hot leads instantly, and schedule showings automatically—so you close more deals with zero grunt work
          </p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-6 justify-center items-center pt-4"
          >
            <a 
              href="/book" 
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_50px_-12px_rgba(37,99,235,0.5)]"
            >
              <span className="relative">Get Your Free Agency Audit</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>MLS | Zillow | Matterport integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>4-week implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Serving US, UK, AU agencies</span>
              </div>
            </div>
          </motion.div>

          {/* Before/After Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-8 items-center max-w-5xl mx-auto pt-16"
          >
            {/* Before Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-900/10 rounded-3xl blur-xl transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative bg-[#1e293b]/40 backdrop-blur-md border border-red-500/20 p-8 rounded-3xl text-left">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-red-500 font-bold tracking-widest text-xs uppercase">The Chaos (Before)</span>
                   <span className="bg-red-500/10 text-red-500 p-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-red-500/10 pb-4">
                    <span className="text-gray-400 text-sm">Manual Updates</span>
                    <span className="text-2xl font-bold text-red-400">20 hrs/wk</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm">Conversion Rate</span>
                    <span className="text-4xl font-black text-white">12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex md:flex-col items-center justify-center gap-2 opacity-50">
              <div className="w-12 h-[2px] md:w-[2px] md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-red-500/50 to-emerald-500/50" />
              <div className="text-2xl">⚡</div>
              <div className="w-12 h-[2px] md:w-[2px] md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-red-500/50 to-emerald-500/50" />
            </div>

            {/* After Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-xl transition-opacity group-hover:opacity-100 opacity-70" />
              <div className="relative bg-[#1e293b]/60 backdrop-blur-md border border-emerald-500/30 p-8 rounded-3xl text-left shadow-2xl shadow-emerald-500/10 active:scale-[1.01] transition-transform">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase">Automated (After)</span>
                   <span className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-gray-400 text-sm">Auto-Sync Listings</span>
                    <span className="text-2xl font-bold text-emerald-400">2 hrs/wk</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm">Conversion Rate</span>
                    <span className="text-4xl font-black text-white">38%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
           className="absolute top-[20%] right-[10%] p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
         >
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-xs font-mono text-gray-300">Listing Synced: 2.1s ago</span>
           </div>
         </motion.div>
         
         <motion.div 
           animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[25%] left-[10%] p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
         >
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-xs font-mono text-gray-300">New Lead Routed: Instant</span>
           </div>
         </motion.div>
      </div>
    </section>
  )
}
