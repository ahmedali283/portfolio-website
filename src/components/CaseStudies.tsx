'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import awtImage from '@/assets/awt image.png'

const caseStudy = {
  client: 'Specialty Tour Operator',
  quote: `They completely transformed our business. By integrating live rates and real-time bookings, our platform now operates seamlessly 24/7. Best of all, they handled all the complex API certifications directly with the providers, so we never had to worry about technical compliances or integration headaches.`,
  author: 'Agency Owner'
}

const metrics = [
  { label: 'Average conversion improvement', value: '3.2x' },
  { label: 'Hours saved per week', value: '25+' },
  { label: 'Booking window', value: '24/7' },
  { label: 'Increase in revenue', value: '35%' },
  { label: 'System uptime', value: '98%' }
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
          <div className="mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={awtImage}
                alt="Travel agency dashboard"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
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
          className="mt-24 pt-16 border-t border-divider/50"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              The Impact in <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">Numbers</span>
            </h3>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Real performance improvements experienced by agencies after switching to our automated booking engine.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group relative flex-1 min-w-[220px] max-w-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-teal/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-divider/10 backdrop-blur-md border border-divider/50 group-hover:border-accent/40 p-8 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                    {metric.value}
                  </div>
                  <p className="text-sm font-semibold text-secondary group-hover:text-gray-300 transition-colors duration-300">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
