'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import awtImage from '@/assets/awt image.png'

const metrics = [
  { label: 'Avg conversion improvement', value: '3.2x' },
  { label: 'Time saved per agent', value: '8-12 hrs/wk' },
  { label: 'Lead response time', value: '< 60s' },
  { label: 'After-hours capture', value: '100%' },
  { label: 'Showing booking rate', value: '+75%' }
]

export default function RealEstateCaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0b1120] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4">
            Real Results From Real Estate Agencies<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Who Made The Switch
            </span>
          </h2>
        </motion.div>

        {/* Case Study 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-700/50">
              <div>
                <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Case Study 1</span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-6">Multi-Agent Boutique Agency</h3>
                <p className="text-xl font-medium text-slate-300 mb-4">The Transformation:</p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                  <h4 className="text-red-400 font-bold mb-3">BEFORE IMPLEMENTATION</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 12 agents manually updating listings to 8 platforms</li>
                    <li>• 12 hours per week per agent spent on maintenance</li>
                    <li>• Lead response time: 4-6 hours average</li>
                    <li>• 180 monthly leads, 22 closings (12% conversion)</li>
                    <li>• Missed 40% of after-hours leads completely</li>
                    <li>• No systematic showing scheduling</li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl">
                  <h4 className="text-blue-400 font-bold mb-3">AFTER (FIRST 90 DAYS)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><span className="text-blue-400">✓</span> Same 180 monthly leads</li>
                    <li><span className="text-blue-400">✓</span> Lead response time: under 60 seconds</li>
                    <li><span className="text-blue-400">✓</span> <strong className="text-white">68 closings per month (38% conversion)</strong></li>
                    <li><span className="text-blue-400">✓</span> Captured 100% of leads (24/7 auto-response)</li>
                    <li><span className="text-blue-400">✓</span> Saved 120 agent-hours monthly</li>
                    <li><span className="text-blue-400">✓</span> Showings up 85% (easy online booking)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900/50">
              <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden border border-slate-700/50 hidden md:block">
                <Image src={awtImage} alt="Real Estate Dashboard" fill className="object-cover" />
              </div>
              <blockquote className="text-xl text-slate-300 italic leading-relaxed border-l-4 border-blue-500 pl-6 mb-6">
                "We thought our 12% conversion was normal—turns out we were just slow. Zillow leads would come in at 7pm, sit in the inbox until next morning, and the buyer had already booked showings with three other agents. Now our auto-response goes out in 30 seconds... The system paid for itself in three weeks."
              </blockquote>
              <p className="text-blue-400 font-semibold">— Managing Broker, 12-Agent Boutique Agency, Austin, TX</p>
            </div>
          </div>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Case Study 2</span>
            <h3 className="text-3xl font-bold text-white mt-2 mb-8">Growing Independent Agency</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-1 bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">The Numbers</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li><strong className="text-white">Agents:</strong> 6 (two territories)</li>
                  <li><strong className="text-white">Listings:</strong> 85 active</li>
                  <li><strong className="text-white">Before:</strong> 680 individual updates monthly</li>
                  <li><strong className="text-white">Time saved:</strong> 22 hours/week across team</li>
                  <li><strong className="text-white">Conversion:</strong> 18% → 41%</li>
                  <li><strong className="text-blue-400 text-base">Impact: $336,000 additional commission (first 90 days)</strong></li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-1 bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">What Changed</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2"><span className="text-blue-400">✓</span> Listings live everywhere within 5 mins</li>
                  <li className="flex gap-2"><span className="text-blue-400">✓</span> Matterport tours embedded automatically</li>
                  <li className="flex gap-2"><span className="text-blue-400">✓</span> Hot leads get priority routing</li>
                  <li className="flex gap-2"><span className="text-blue-400">✓</span> Phone tag reduced by 80%</li>
                  <li className="flex gap-2"><span className="text-blue-400">✓</span> Drip campaigns run automatically</li>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
                <blockquote className="text-lg text-slate-300 italic leading-relaxed border-l-4 border-blue-500 pl-6 mb-6">
                  "Our biggest problem was speed. By the time we manually posted a new listing to all platforms—4-6 hours later—other agents had already captured early interest. Now properties go live everywhere simultaneously. Our market share increased 23% in six months."
                </blockquote>
                <p className="text-blue-400 font-semibold">— Owner, Independent Agency, Denver Metro</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Performance Metrics Across Clients</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Averaged data from dozens of successful agency implementations.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group flex-1 min-w-[200px] max-w-[240px] bg-slate-800/20 backdrop-blur-md border border-slate-700 hover:border-blue-500/40 p-6 rounded-2xl transition-all duration-300 text-center"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <p className="text-sm font-semibold text-slate-400 group-hover:text-slate-300">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
