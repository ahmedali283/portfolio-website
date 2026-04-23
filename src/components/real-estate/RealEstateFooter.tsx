'use client'

import { motion } from 'framer-motion'

export default function RealEstateFooter() {
  return (
    <footer className="bg-[#081018] border-t border-white/5 py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* About */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Real Estate Tech Consultant
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-xl">
              I specialize in multi-platform integration and lead automation for independent agencies and brokerages. I've integrated MLS systems, Zillow, Realtor.com, Trulia, Matterport, ShowingTime, Follow Up Boss, BoomTown, and LionDesk across 25+ agency projects—transforming manual listing chaos into automated lead-closing machines.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Work With Me</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:your-email@example.com" className="text-white hover:text-blue-400 transition-colors">your-email@example.com</a>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/1234567890" className="text-white hover:text-blue-400 transition-colors">+[Your Number]</a>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">Serving</p>
                <p className="text-white">US | UK | AU Markets</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Resources</h4>
            <nav className="flex flex-col gap-4">
               <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Case Studies</a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Real Estate Tech Blog</a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Integration Docs</a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Lead Leakage Calculator
                  <span className="px-1.5 py-0.5 bg-blue-600 text-[8px] font-bold text-white rounded-md uppercase">Free</span>
               </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © 2026 [Your Name]. All Rights Reserved.
          </p>
        </div>

        <div className="mt-12 text-center">
           <p className="text-[9px] text-gray-700 max-w-2xl mx-auto leading-relaxed uppercase tracking-tighter">
             Disclaimer: This site is independently operated and not affiliated with MLS, Zillow, Realtor.com, or any other real estate platform mentioned.
           </p>
        </div>
      </div>
    </footer>
  )
}
