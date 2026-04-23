'use client'

import { motion } from 'framer-motion'

export default function MedicalFooter() {
  return (
    <footer className="bg-slate-900 border-t border-white/5 py-24 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* About */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-black">
              Medical & Dental <span className="text-teal-400">Tech Consultant</span>
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xl font-medium">
               I specialize in transforming medical and dental practice operations through secure automation. From multi-location EHR integrations to patient portal deployment, I help healthcare providers reduce administrative overhead and increase patient retention.
            </p>
            <div className="flex gap-4 pt-4">
               <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-bold text-teal-400 uppercase tracking-widest">
                  HIPAA Compliant Infrastructure
               </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest">Connect</h4>
            <div className="space-y-4 font-bold">
              <div className="group">
                <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:medical-consult@example.com" className="text-white hover:text-teal-400 transition-colors">medical-consult@example.com</a>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/1234567890" className="text-white hover:text-teal-400 transition-colors">Healthcare Priority Line</a>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <a href="#" className="text-white hover:text-teal-400 transition-colors">Professional Profile</a>
              </div>
            </div>
          </div>

          {/* Markets */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest">Expertise</h4>
            <nav className="flex flex-col gap-4 text-sm font-bold text-slate-400">
               <span className="hover:text-teal-400 transition-colors">Dental Practices</span>
               <span className="hover:text-teal-400 transition-colors">Surgical Centers</span>
               <span className="hover:text-teal-400 transition-colors">Family Medicine</span>
               <span className="hover:text-teal-400 transition-colors">MedSpas & Aesthetics</span>
               <span className="hover:text-teal-400 transition-colors">Multi-Location Groups</span>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance Statement</a>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © 2026 Practice Automation Systems. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
