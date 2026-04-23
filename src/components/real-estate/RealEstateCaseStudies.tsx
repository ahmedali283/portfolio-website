'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Multi-Agent Boutique Agency',
    location: 'Austin, TX',
    stats: { agents: 12, leads: 180, volume: 'High' },
    before: [
      'Manual updates to 8 platforms',
      '12 hours/week per agent on admin',
      'Lead response: 4-6 hours average',
      '22 closings/month (12% conversion)',
      'Missed 40% of after-hours leads'
    ],
    after: [
      'Lead response: under 60 seconds',
      '68 closings/month (38% conversion)',
      'Captured 100% of leads 24/7',
      'Saved 120 agent-hours monthly',
      'Showings up 85% via online booking'
    ],
    quote: "We thought our 12% conversion was normal—turns out we were just slow. Now our auto-response goes out in 30 seconds. First month after launch, we closed 46 deals versus our usual 20. The system paid for itself in three weeks.",
    author: "Managing Broker, 12-Agent Agency"
  },
  {
    title: 'Growing Independent Agency',
    location: 'Denver Metro',
    stats: { listings: 85, agents: 6, revenue: '+$336k' },
    before: [
      '680 individual listing updates monthly',
      'Time waste: 22 hours/week across team',
      '18% conversion rate',
      'Listings took 6+ hours to hit platforms',
      'Frequent phone tag for showings'
    ],
    after: [
      'Update once, syncs everywhere in 5 mins',
      '41% conversion rate (+28 more deals/qtr)',
      '$336,000 additional commission (90 days)',
      'Market share increased 23% in 6 months',
      'Showing scheduler reduced phone tag by 80%'
    ],
    quote: "Our biggest problem was speed. By the time we manually posted, other agents had already captured the early interest. Now properties go live everywhere simultaneously. We're often the first agency buyers see.",
    author: "Owner, Independent Agency"
  }
]

const metrics = [
  { label: 'Avg. Conversion Improvement', value: '3.2x', sub: 'From 12% to 38%+' },
  { label: 'Time Saved Per Agent', value: '8-12h', sub: 'Every single week' },
  { label: 'Lead Response Time', value: '<60s', sub: 'From 4-6 hours' },
  { label: 'After-Hours Capture', value: '100%', sub: 'Previously 0%' }
]

export default function RealEstateCaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Real Results From Real Estate Agencies Who Made The Switch
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-800/20 border border-white/5 rounded-[32px] overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-10 border-b border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{cs.title}</h3>
                  <span className="text-blue-400 text-sm font-semibold">{cs.location}</span>
                </div>
                <div className="flex gap-4">
                   {Object.entries(cs.stats).map(([k, v], i) => (
                     <div key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                        <span className="capitalize">{k}:</span> <span className="text-white font-bold">{v}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 flex-grow">
                <div>
                  <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-4">Before</h4>
                  <ul className="space-y-3">
                    {cs.before.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 flex gap-2">
                        <span className="text-red-900">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">After</h4>
                  <ul className="space-y-3">
                    {cs.after.map((item, i) => (
                      <li key={i} className="text-sm text-emerald-400/80 flex gap-2 font-medium">
                        <span className="text-emerald-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-blue-600/5 mt-auto">
                 <p className="text-lg italic text-gray-300 mb-6">"{cs.quote}"</p>
                 <p className="text-sm font-bold text-white">— {cs.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-[#081018] rounded-3xl border border-white/5"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2">{m.value}</div>
              <div className="text-sm font-bold text-blue-500 mb-2">{m.label}</div>
              <div className="text-xs text-gray-500">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
