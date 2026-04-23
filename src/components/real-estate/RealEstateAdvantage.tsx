'use client'

import { motion } from 'framer-motion'

const comparison = [
  { feature: 'Lead response', us: '60 seconds', them: '"I\'ll call you back in a few hours"' },
  { feature: '24/7 lead capture', us: 'Always on', them: 'Business hours only' },
  { feature: 'Showing booking', us: 'Instant self-service', them: 'Manual phone tag' },
  { feature: 'Listings distribution', us: '8 platforms instantly', them: 'Manual over 2-3 days' },
  { feature: 'Virtual tours', us: 'Included on every listing', them: 'In-person only' },
  { feature: 'Follow-up', us: 'Automated nurture', them: 'Forgotten leads' },
  { feature: 'MLS sync', us: 'Automatic everywhere', them: 'Copy-paste individually' },
  { feature: 'Lead ownership', us: 'You own all data', them: 'Zillow owns the relationship' }
]

const timeline = [
  { period: 'Month 1-3', impact: 'You respond faster than competitors → Your conversion rate jumps 2-3x' },
  { period: 'Month 4-6', impact: 'Happy buyers leave reviews → Your online reputation improves → Organic lead volume increases' },
  { period: 'Month 7-12', impact: 'Rich data on patterns → You optimize what\'s working → Competitors are still guessing' },
  { period: 'Year 2', impact: 'Agents are more productive → You attract and retain top talent → Market share compounds' },
  { period: 'Year 3', impact: 'Brand known as "the agency that responds immediately" → You\'re the first call' }
]

export default function RealEstateAdvantage() {
  return (
    <section className="py-24 md:py-32 bg-[#081018] relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            What Happens When You're The Fastest Agency In Your Market?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-400"
          >
            Modern home buyers research 10-15 properties online, submit inquiries to 3-5 agencies, and book showings with whoever responds first. Your competition is a race against time.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/20 border border-white/5 rounded-[40px] overflow-hidden mb-24"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-8 text-sm font-bold text-gray-500 uppercase">Competitive Edge</th>
                  <th className="p-8 text-sm font-bold text-blue-400 uppercase">Your Agency (With System)</th>
                  <th className="p-8 text-sm font-bold text-gray-500 uppercase">Competitors (Manual)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-8 text-sm font-bold text-gray-300">{row.feature}</td>
                    <td className="p-8 text-sm font-medium text-emerald-400">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">⚡</span> {row.us}
                      </div>
                    </td>
                    <td className="p-8 text-sm text-gray-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Compounding Effect */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold">The Compounding Effect</h3>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-24 text-xs font-bold text-blue-500 uppercase py-1 border-t border-blue-500/30">
                    {item.period}
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {item.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Market Share Math */}
          <div className="space-y-8 bg-blue-600/5 p-10 md:p-12 rounded-[40px] border border-blue-500/10">
            <h3 className="text-3xl font-bold">The Market Share Math</h3>
            <p className="text-gray-400 leading-relaxed italic">
              Assume there are 20 active agencies in your market competing for the same buyers.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-[#081018] rounded-3xl border border-white/5">
                <p className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Without Automation</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• You're one of 20</li>
                  <li>• Buyers contact 4-5 agencies</li>
                  <li>• Your odds of winning: <span className="text-white font-bold">20-25%</span></li>
                </ul>
              </div>
              
              <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                <p className="text-xs font-bold text-emerald-400 uppercase mb-4 tracking-widest">With Automation</p>
                <ul className="space-y-2 text-sm text-white font-medium">
                  <li>• You respond in 60 seconds</li>
                  <li>• You offer instant showing booking</li>
                  <li>• Your odds of winning: <span className="text-emerald-400 font-black text-xl">60-70%</span></li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl font-bold text-white pt-4">
              That's not incremental improvement. <br className="hidden md:block" />
              <span className="text-blue-400">That's market dominance.</span>
            </p>
          </div>
        </div>

        {/* The Window Is Closing */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 md:p-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[60px] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-8xl opacity-[0.03] select-none font-black italic">URGENCY</div>
          <h3 className="text-3xl md:text-4xl font-black mb-8">The Window Is Closing</h3>
          <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-400 leading-relaxed">
            <p>
              Right now, most independent agencies still manually update listings and respond to leads during business hours. <span className="text-white font-semibold">That's your opportunity.</span>
            </p>
            <p>
              In 2-3 years, this will be expected by every buyer. The agencies who move first capture the reputation, the top agents, and the market position.
            </p>
            <p className="text-blue-400 font-bold italic">
              The question isn't whether this becomes standard. The question is whether you're leading or following.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
