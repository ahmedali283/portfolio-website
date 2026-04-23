'use client'

import { motion } from 'framer-motion'

const medicalPartners = [
  'Epic', 'Dentrix', 'Cerner',
  'AthenaHealth', 'eClinicalWorks', 'Allscripts',
  'Henry Schein', 'CareStream', 'Open Dental'
]

export default function MedicalPartners() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-black text-slate-800 mb-4"
          >
            Compatible with 50+ Practice Management Systems
          </motion.h2>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
            We integrate with the software you already know and trust
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {medicalPartners.map((partner, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.05 }}
               className="h-14 flex items-center justify-center text-xl font-black text-slate-800 px-8 border border-slate-300 rounded-2xl bg-white hover:bg-white hover:opacity-100 hover:border-teal-500/50 transition-all cursor-default select-none shadow-sm"
             >
               {partner}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
