'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Self-Service Patient Portal',
    icon: '🏥',
    text: 'Patients book, reschedule, or cancel appointments 24/7 without calling your office. Real-time availability syncs directly with your practice management software.'
  },
  {
    title: 'Automated SMS Reminders',
    icon: '📱',
    text: 'Multi-stage reminder sequences (1 week, 2 days, 2 hours) with simplified 1-click confirmation. Dramatically reduces late arrivals and no-shows.'
  },
  {
    title: 'Digital Intake & Consent',
    icon: '✍️',
    text: 'Forms are sent via text/email before the appointment. Data flows into your EHR, eliminating clipboard data entry and reducing lobby wait times.'
  }
]

export default function MedicalInterest() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
          >
            End the "Hold Music" Era
          </motion.h2>
          <p className="text-xl text-slate-500 font-medium">
            Your front desk should focus on the patients in the room, not the ones on the phone. Here's how we automate the workflow:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-200 hover:shadow-xl hover:border-teal-500/20 transition-all group"
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mt-20 p-12 bg-teal-600 rounded-[48px] text-white text-center relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
           <p className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto relative z-10">
             "Reduce administrative burden by <span className="underline decoration-teal-300 underline-offset-8 font-black">75%</span> and let your staff provide real patient care."
           </p>
        </motion.div>
      </div>
    </section>
  )
}
