'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const auditIncludes = [
  { icon: '💧', title: 'Lead Leakage Analysis', desc: "How many inquiries you're missing due to slow response times, after-hours gaps, and manual processes (most agencies lose 40-60%)" },
  { icon: '🌐', title: 'Listing Distribution Audit', desc: "Which platforms your properties are missing, how long updates take, where you're losing visibility" },
  { icon: '📊', title: 'Conversion Rate Benchmark', desc: "Where you stand versus market average (typical agencies convert 12-18%, automated systems convert 35-45%)" },
  { icon: '🕵️', title: 'Competitor Intelligence', desc: "What 2-3 top agencies in your market are doing differently (the ones capturing your lost deals)" },
  { icon: '⏱️', title: 'Time Waste Calculator', desc: "How many agent-hours per week you're burning on manual listing updates and lead follow-up" },
  { icon: '⚡', title: 'Quick Win Recommendations', desc: "3 immediate improvements you can implement this week (no cost, no technical skills required)" },
  { icon: '📐', title: 'System Blueprint', desc: "Exactly how MLS sync, lead routing, and showing automation would work for your specific agency size, markets, and technology stack" }
]

const steps = [
  { step: 'Step 1', action: 'Choose a time on the calendar below', detail: '(takes 60 seconds)' },
  { step: 'Step 2', action: 'I analyze your agency\'s online presence', detail: 'lead sources, listing distribution, and competitive landscape' },
  { step: 'Step 3', action: 'Personalized video audit delivered', detail: 'within 48 hours via email with specific findings' },
  { step: 'Step 4', action: 'Optional strategy call', detail: 'if the insights are valuable and you want to discuss full implementation' }
]

export default function RealEstateAudit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-[#0b1120] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Find Out Exactly How Many Leads <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">You're Losing Right Now</span>
          </h2>
          <p className="text-xl text-slate-300">
            I'm offering free agency audits for <span className="text-white font-bold">10 real estate companies</span> this month. Here's what you get:
          </p>
        </motion.div>

        {/* Audit Includes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 justify-center">
          {auditIncludes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className={`bg-slate-800/40 border border-slate-700 p-6 rounded-2xl ${idx === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What Makes This Different & Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-900/20 border border-blue-500/20 p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold text-white mb-6">What Makes This Different</h3>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              This is <strong className="text-white">not a sales call</strong> disguised as an audit. You receive a recorded Loom video you can watch on your own time, pause, rewatch, and share with your broker or team.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Use the insights whether you work with me or not. Many agencies implement the quick wins from the audit and see immediate improvement. If you want the full transformation, we can discuss that separately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">What Happens After You Book</h3>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                  <div className="bg-slate-700 text-white font-bold px-3 py-1 rounded text-sm shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-white font-medium">{step.action}</p>
                    <p className="text-sm text-slate-400">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <a href="/book" className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 md:px-16 py-5 rounded-xl text-xl md:text-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 hover:scale-105">
              Get Your Free Agency Audit Now →
            </a>
            <p className="text-slate-400 mt-4 text-sm">Choose a time that works for your timezone. Takes 60 seconds.</p>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-full mb-10">
            <span className="text-red-400 text-xl">⚠️</span>
            <span className="text-slate-300 font-medium">Limited to 10 audits this month. <strong className="text-white">7 slots available.</strong></span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-400 font-medium mb-12">
            <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> No credit card required</div>
            <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> No obligation to purchase</div>
            <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Video delivered in 48 hours</div>
            <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> US, UK, AU markets</div>
          </div>

          <div className="bg-slate-800/40 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-2xl max-w-3xl mx-auto text-left">
            <p className="text-lg text-slate-300 italic mb-4 leading-relaxed">
              "The audit revealed we were losing $18,000 per month in leads that came in after 6pm and sat in voicemail until next morning. We implemented the quick fixes Bazil recommended and saw immediate improvement. Then we built the full system."
            </p>
            <p className="text-blue-400 font-bold">— Broker/Owner, 8-Agent Agency, Phoenix</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
