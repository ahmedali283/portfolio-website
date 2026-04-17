'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const caseStudy = {
  client: 'Specialty Tour Operator',
  before: {
    inquiries: 180,
    bookings: '18-22',
    conversion: '12%',
    manualWork: '20+ hours/week',
    issues: ['Customers ghosting after quotes', 'Zero off-hours bookings']
  },
  after: {
    inquiries: 180,
    bookings: 68,
    conversion: '38%',
    manualWork: '2 hours/week',
    benefits: ['24/7 booking capability', '15% higher average booking value']
  },
  quote: `We assumed 12% conversion was normal. Turns out we were just slow. The first weekend after launch, we woke up to 4 completed bookings that came in overnight—revenue we would have lost completely. The platform paid for itself in 45 days.`,
  author: 'Operations Director, Specialty Tour Operator'
}

const metrics = [
  { label: 'Average conversion improvement', value: '3.2x' },
  { label: 'Time saved per week', value: '15-20 hours' },
  { label: 'Booking window', value: '24/7/365' },
  { label: 'Commission savings', value: '15-25% per booking' },
  { label: 'System uptime', value: '99.9%' }
]

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Real Results From Travel Agencies
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Who Made The Switch
            </span>
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
                alt="Travel agency office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold mb-2">CASE STUDY</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.client}</h3>
                <p className="text-xl font-semibold mb-4">The Transformation:</p>
              </div>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-divider/30 border border-red-500/30 p-6 rounded-lg">
                  <p className="text-red-400 font-bold mb-4 text-lg">BEFORE</p>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{caseStudy.before.inquiries} monthly inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{caseStudy.before.bookings} bookings ({caseStudy.before.conversion})</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{caseStudy.before.manualWork} manual quoting</span>
                    </li>
                    {caseStudy.before.issues.map((issue, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent/50 p-6 rounded-lg">
                  <p className="text-accent font-bold mb-4 text-lg">AFTER (First 60 Days)</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>Same {caseStudy.after.inquiries} inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span className="font-bold text-accent">{caseStudy.after.bookings} bookings ({caseStudy.after.conversion})</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>{caseStudy.after.manualWork} manual work</span>
                    </li>
                    {caseStudy.after.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-success mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-divider/30 backdrop-blur-sm border-l-4 border-accent p-8 md:p-10 rounded-lg"
          >
            <p className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
              "{caseStudy.quote}"
            </p>
            <p className="text-secondary font-semibold">— {caseStudy.author}</p>
          </motion.div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Metrics</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-4">
                  {metric.value}
                </div>
                <p className="text-sm text-secondary">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
