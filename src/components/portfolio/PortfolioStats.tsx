'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Stat {
  prefix: string
  value: number
  suffix: string
  label: string
  description: string
  color: string
  decimals: number
}

const STATS: Stat[] = [
  {
    prefix: '',
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Across travel, medical, and real estate verticals',
    color: '#f97316',
    decimals: 0,
  },
  {
    prefix: '',
    value: 3.2,
    suffix: 'x',
    label: 'Avg. Conversion Lift',
    description: 'Measured across all client platforms post-launch',
    color: '#14b8a6',
    decimals: 1,
  },
  {
    prefix: '$',
    value: 2,
    suffix: 'M+',
    label: 'Client Revenue Generated',
    description: 'Directly attributable to our automation systems',
    color: '#ffd700',
    decimals: 0,
  },
  {
    prefix: '',
    value: 99.9,
    suffix: '%',
    label: 'Uptime Guarantee',
    description: 'Enterprise-grade reliability on every deployment',
    color: '#10b981',
    decimals: 1,
  },
]

function CountUp({
  target,
  prefix,
  suffix,
  color,
  decimals,
  isInView,
}: {
  target: number
  prefix: string
  suffix: string
  color: string
  decimals: number
  isInView: boolean
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const DURATION = 1800
    const STEPS = 60
    const increment = target / STEPS
    let step = 0

    const timer = setInterval(() => {
      step++
      if (step >= STEPS) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(parseFloat((increment * step).toFixed(decimals)))
      }
    }, DURATION / STEPS)

    return () => clearInterval(timer)
  }, [isInView, target, decimals])

  const display = decimals === 0 ? Math.round(current) : current.toFixed(decimals)

  return (
    <span className="font-black text-4xl sm:text-5xl md:text-6xl tabular-nums" style={{ color }}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function PortfolioStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Numbers{' '}
            <span className="bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Don&apos;t Lie
            </span>
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Every metric is real. Every result is documented.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}50, ${stat.color}20)`,
                }}
              />

              <div className="relative bg-divider/10 border border-divider/50 group-hover:border-transparent rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 h-full flex flex-col items-center">
                {/* Top accent line */}
                <div
                  className="w-12 h-0.5 rounded-full mb-6"
                  style={{ background: stat.color }}
                />

                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  color={stat.color}
                  decimals={stat.decimals}
                  isInView={isInView}
                />

                <p className="text-primary font-bold text-base mt-4 mb-2">{stat.label}</p>
                <p className="text-secondary text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
