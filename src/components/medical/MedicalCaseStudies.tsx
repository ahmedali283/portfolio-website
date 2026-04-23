'use client'

import { motion } from 'framer-motion'

export default function MedicalCaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Proven Results in Healthcare</h2>
          <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid lg:grid-cols-[1.2fr,1fr] gap-0 bg-slate-900 rounded-[64px] overflow-hidden shadow-2xl"
          >
            {/* Case Study Content */}
            <div className="p-10 md:p-16 lg:p-20 text-white flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 bg-teal-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Success Story</span>
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">3-Dentist Practice | Multi-Location</span>
               </div>
               
               <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                  How One Practice Added <span className="text-teal-400">$340K</span> to Their Annual Revenue While Cutting Phone Volume by 60%
               </h3>
               
               <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest border-l-2 border-red-500 pl-4">Before Platform</p>
                     <ul className="space-y-2 text-sm text-slate-400 font-medium">
                        <li>• 28% no-show rate</li>
                        <li>• 120+ calls daily just for scheduling</li>
                        <li>• 10-15 minute hold times average</li>
                        <li>• Manual SMS confirmation (unreliable)</li>
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <p className="text-xs font-bold text-teal-500 uppercase tracking-widest border-l-2 border-teal-500 pl-4">After Platform</p>
                     <ul className="space-y-2 text-sm text-teal-100 font-medium">
                        <li>• No-shows reduced to 11%</li>
                        <li>• 40% of appointments self-scheduled</li>
                        <li>• 12 extra appointments per day</li>
                        <li>• Practice added $340K yearly revenue</li>
                     </ul>
                  </div>
               </div>
               
               <p className="text-lg italic text-slate-400 border-t border-white/10 pt-8">
                  "Our front desk was drowning. Since implementing the automated portal, our team is happier, our chairs are fuller, and the revenue impact was visible in the first 30 days."
               </p>
            </div>

            {/* Visual Stats Panel */}
            <div className="bg-teal-600 p-10 md:p-16 flex flex-col justify-center gap-8 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
               <div className="relative space-y-8">
                  <div className="text-center">
                     <div className="text-6xl md:text-8xl font-black text-white mb-2 leading-none">60%</div>
                     <p className="text-teal-100 font-bold uppercase tracking-widest text-sm">Drop in Phone Volume</p>
                  </div>
                  <div className="h-px bg-white/20 w-1/2 mx-auto" />
                  <div className="text-center">
                     <div className="text-6xl md:text-8xl font-black text-white mb-2 leading-none">+$340K</div>
                     <p className="text-teal-100 font-bold uppercase tracking-widest text-sm">Revenue Increase</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
