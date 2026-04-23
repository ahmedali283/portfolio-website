'use client'

export default function Footer() {
  return (
    <footer className="bg-divider/30 border-t border-divider py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side: CTA & Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-secondary">
            <a href="/book" className="bg-gradient-to-r from-accent to-accent-teal text-background font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
              Book Free Audit Call
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Disclaimer
            </a>
            <a href="/contact" className="hover:text-accent transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-sm text-secondary text-center md:text-right">
            <p>© {new Date().getFullYear()} SkaleUp. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
