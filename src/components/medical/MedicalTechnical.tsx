'use client'

import { motion } from 'framer-motion'

const integrations = [
  { name: 'Epic', type: 'EHR', status: 'Certified Partner' },
  { name: 'Dentrix', type: 'PMS', status: 'API Integration' },
  { name: 'Open Dental', type: 'PMS', status: '2-Way Sync' },
  { name: 'eClinicalWorks', type: 'EHR', status: 'HL7 / FHIR' },
  { name: 'CERNER', type: 'EHR', status: 'Direct Connect' },
  { name: 'Practice Fusion', type: 'EHR', status: 'Cloud Integration' },
  { name: 'Eaglesoft', type: 'PMS', status: 'Secure Sync' },
  { name: 'Nextech', type: 'EHR', status: 'Specialty Sync' }
]

export default function MedicalTechnical() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
             >
                Seamless Integration with Your Existing EHR / PMS
             </motion.h2>
             <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Our platform doesn't replace your center of truth—it enhances it. We integrate directly with every major practice management system via secure, HL7/FHIR compliant APIs.
             </p>
             
             <ul className="space-y-6">
                <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">1</div>
                   <p className="text-slate-700 font-bold">2-Way Appointment Syncing</p>
                </li>
                <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">2</div>
                   <p className="text-slate-700 font-bold">Automatic Patient Chart Creation</p>
                </li>
                <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">3</div>
                   <p className="text-slate-700 font-bold">HIPAA Compliant Data Transit</p>
                </li>
             </ul>
          </div>

          <div className="w-full lg:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                {integrations.map((int, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group text-center"
                   >
                      <div className="text-lg font-black text-slate-800 group-hover:text-teal-600 transition-colors">{int.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{int.type} • {int.status}</div>
                   </motion.div>
                ))}
             </div>
             
             <div className="mt-12 p-6 bg-teal-50 border border-teal-100 rounded-3xl flex items-center justify-center gap-4">
                <span className="text-2xl">🔒</span>
                <p className="text-xs font-bold text-teal-800 uppercase tracking-widest">Enterprise-Grade Security & Encryption</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-teal-100/20 blur-[120px] -z-10" />
    </section>
  )
}
