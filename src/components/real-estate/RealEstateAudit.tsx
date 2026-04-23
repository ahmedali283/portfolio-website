'use client'

import { motion } from 'framer-motion'

const auditPoints = [
  { label: 'Lead Leakage Analysis', text: 'How many inquiries you\'re missing due to slow response times and after-hours gaps (most agencies lose 40-60%)' },
  { label: 'Listing Distribution Audit', text: 'Which platforms your properties are missing and where you\'re losing visibility' },
  { label: 'Conversion Rate Benchmark', text: 'Where you stand versus market average (typical 12-18% vs automated 35-45%)' },
  { label: 'Competitor Intelligence', text: 'What 2-3 top agencies in your market are doing differently to capture your deals' },
  { label: 'Time Waste Calculator', text: 'How many agent-hours per week you\'re burning on manual listing updates' },
  { label: 'System Blueprint', text: 'Exactly how MLS sync and lead routing would work for your specific agency size' }
]

export default function RealEstateAudit() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
              Find Out Exactly How Many Leads You're Losing Right Now
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl text-gray-400 mb-12"
            >
              I'm offering free agency audits for 10 real estate companies this month. Here's exactly what you get in your personalized 15-minute video analysis:
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {auditPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group"
                >
                  <div className="text-emerald-500 font-bold mb-2 flex items-center gap-2">
                    <span className="text-lg">✓</span> {point.label}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[40px] text-slate-900 shadow-2xl shadow-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-8 bg-slate-100 p-4 rounded-2xl">
                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl animate-pulse">🎥</div>
                 <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">The Format</p>
                    <p className="text-sm font-bold">15-Minute Personalized Video Audit</p>
                 </div>
              </div>
              
              <h3 className="text-2xl font-black mb-6">What Makes This Different:</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This is not a sales call. You receive a recorded Loom video you can watch on your own time. Use the insights whether you work with me or not.
              </p>
              
              <div className="space-y-6 mb-10">
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
                    <p className="text-sm">Choose a time on the calendar (60s)</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
                    <p className="text-sm">I analyze your agency's online presence and competition</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
                    <p className="text-sm">Receive personalized video audit within 48 hours</p>
                 </div>
              </div>
              
              <a 
                href="/book" 
                className="block w-full text-center py-6 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 mb-6"
              >
                Get Your Free Agency Audit Now
              </a>
              
              <div className="flex flex-col items-center gap-2">
                 <p className="text-red-600 font-bold flex items-center gap-2 text-sm animate-pulse">
                   ⚠️ LIMITED TO 10 AUDITS THIS MONTH. 7 SLOTS LEFT.
                 </p>
                 <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span>No credit card</span>
                    <span>No obligation</span>
                    <span>Delivered in 48h</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-white/5 border border-white/10 rounded-3xl"
            >
               <p className="text-sm italic text-gray-400 line-clamp-3">
                 "The audit revealed we were losing $18,000 per month in leads that came in after 6pm. We implemented the quick fixes and saw immediate improvement."
               </p>
               <p className="text-xs font-bold text-white mt-4">— Broker/Owner, 8-Agent Agency, Phoenix</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
