'use client'

import Link from 'next/link'

export default function RealEstateFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b1120] border-t border-slate-800 py-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side: CTA & Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-400">
            <Link href="/book" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-md transition-colors">
              Book Free Audit Call
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-slate-500 text-sm">
            © {currentYear} SkaleUp. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
