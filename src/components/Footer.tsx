'use client'

import { motion } from 'framer-motion'

const hotelAPIs = ['TBO', 'Yalago', 'Hotelbeds', 'Expedia']
const flightAPIs = ['Amadeus', 'Sabre', 'Air World Innovation', 'Travelfusion', 'Mystifly']
const regions = ['US', 'UK', 'AU', 'CA', 'EU']

export default function Footer() {
  return (
    <footer className="bg-divider/30 border-t border-divider py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
              Travel Tech Consultant
            </h3>
            <p className="text-secondary leading-relaxed mb-6">
              I'm a travel tech consultant specializing in multi-provider booking system integration.
              I've integrated TBO Holidays, Yalago, Amadeus, Sabre, Hotelbeds, Air World Innovation,
              Travelfusion, Mystifly, and Expedia TAAP across 15+ projects—transforming manual processes
              into automated 24/7 booking machines.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-secondary">
              <div className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:contact@example.com" className="hover:text-accent transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span>📱</span>
                <a href="https://wa.me/1234567890" className="hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span>💼</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Serving */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              <span className="text-accent">🌍</span> Serving
            </h4>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <span key={region} className="bg-divider/50 border border-divider px-3 py-1 rounded text-sm">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* API Integration Experience */}
        <div className="mb-12 pb-12 border-b border-divider">
          <h4 className="text-lg font-bold mb-6 text-center">API Integration Experience</h4>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-accent font-semibold mb-3">Hotels:</p>
              <div className="flex flex-wrap gap-2">
                {hotelAPIs.map((api) => (
                  <span key={api} className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent/30 px-3 py-1 rounded text-sm">
                    {api}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent-teal font-semibold mb-3">Flights:</p>
              <div className="flex flex-wrap gap-2">
                {flightAPIs.map((api) => (
                  <span key={api} className="bg-gradient-to-br from-accent/10 to-accent-teal/10 border border-accent-teal/30 px-3 py-1 rounded text-sm">
                    {api}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary">
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 Travel Tech Consultant. All Rights Reserved.</p>
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-divider/50"
        >
          <p className="text-accent text-2xl">✦</p>
        </motion.div>
      </div>
    </footer>
  )
}
