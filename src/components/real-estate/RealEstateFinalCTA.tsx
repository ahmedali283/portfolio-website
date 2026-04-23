'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RealEstateFinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden" ref={ref}>
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">
            Stop Losing Deals to Agencies Who Respond <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">While You're Still Checking Voicemail</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed mb-12 text-left bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <p>
              Five years ago, having a website was enough. Three years ago, being on Zillow helped. Today, the agencies winning market share are the ones who respond to leads before competitors even see the notification.
            </p>
            <p>
              Your competitors are researching automated systems right now. Some are already implementing them. The question isn't whether instant lead response and auto-synced listings become the standard—<span className="text-white font-bold">it's whether you adopt early and capture advantage, or adopt late and spend years fighting for scraps.</span>
            </p>
            <p className="text-blue-400 font-bold border-l-4 border-blue-500 pl-4 py-1">
              The window is still open, but it's closing.
            </p>
            <p>
              Buyers expect immediate responses. They expect self-service showing booking. They expect properties to be listed everywhere simultaneously. The agencies providing this experience are capturing 60-70% of deals in competitive markets.
            </p>
            <p className="text-white font-bold pt-4 text-center text-xl md:text-2xl">
              The audit takes 60 seconds to book. The insights could transform your agency.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/book"
              className="inline-block w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 md:px-24 py-6 rounded-2xl text-2xl transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 hover:scale-105 outline outline-2 outline-blue-500/30 outline-offset-4"
            >
              Book Your Free Audit →
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  )
}
