'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart, TrendingUp, DollarSign, Search, Zap, Wrench } from 'lucide-react'

const auditIncludes = [
  { icon: <BarChart size={40} className="text-accent" />, title: 'Traffic & Bounce Analysis', description: 'How many visitors leave without booking' },
  { icon: <TrendingUp size={40} className="text-accent" />, title: 'Conversion Rate Benchmark', description: 'Where you stand vs. industry average' },
  { icon: <DollarSign size={40} className="text-accent" />, title: 'Revenue Leak Calculation', description: 'Estimated annual bookings lost' },
  { icon: <Search size={40} className="text-accent" />, title: 'Competitive Intelligence', description: 'What successful agencies are doing differently' },
  { icon: <Zap size={40} className="text-accent" />, title: 'Quick Win Recommendations', description: '3 immediate improvements (no cost)' },
  { icon: <Wrench size={40} className="text-accent" />, title: 'System Blueprint', description: 'Exactly how TBO/Yalago integration works for you' }
]

const nextSteps = [
  { step: 'Step 1', action: 'Choose a time', time: '60 seconds' },
  { step: 'Step 2', action: 'I analyze your website', time: null },
  { step: 'Step 3', action: 'Video audit delivered', time: '48 hours' },
  { step: 'Step 4', action: 'Optional strategy call', time: 'if you want implementation' }
]

export default function AuditOffer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="audit" ref={ref} className="section-padding bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Find Out Exactly How Many Bookings
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              You're Losing Right Now
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            I'm offering free website audits for{' '}
            <span className="text-accent font-bold">10 travel agencies</span> this month.
          </p>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Your Personalized 15-Minute Video Audit Includes:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {auditIncludes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-divider/30 backdrop-blur-sm border border-divider hover:border-accent transition-all duration-300 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Makes This Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent/30 p-8 md:p-10 rounded-2xl max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">What Makes This Different</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            This is <span className="text-accent font-bold">not a sales call</span> disguised as an audit.
            You receive a recorded video you can watch on your own time, pause, rewatch, and share with your team.
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Happens Next</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {nextSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="relative bg-divider/30 backdrop-blur-sm border border-divider p-6 rounded-lg text-center"
              >
                <div className="text-accent text-xl font-bold mb-4">{item.step}</div>
                <p className="font-semibold mb-2">{item.action}</p>
                {item.time && (
                  <p className="text-sm text-accent">({item.time})</p>
                )}
                {index < nextSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex flex-col gap-4 items-center mb-8">
            <a
              href="/book"
              className="inline-block w-full md:w-auto bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark text-background font-bold px-8 md:px-32 py-5 md:py-7 rounded-xl text-xl md:text-3xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)] outline outline-2 outline-gold-light/30 outline-offset-4"
            >
              Book Free Audit Call →
            </a>
            <p className="text-sm text-secondary">
              NO B.S. • No hidden fees • No credit card required
            </p>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary mb-6">
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Video delivered in 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Works with US, UK, AU, CA, EU agencies</span>
            </div>
          </div>

          {/* Micro Quote */}
          <div className="bg-divider/30 border-l-4 border-accent-teal p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg italic text-gray-300 mb-3">
              "The audit alone was worth thousands. Bazil identified 3 technical bottlenecks costing us conversions that we fixed the same day."
            </p>
            <p className="text-sm text-secondary font-semibold">— UK Travel Agency Owner</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
