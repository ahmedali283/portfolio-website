'use client'

import { useEffect } from 'react'

export default function BookPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-divider">
        <div className="container-custom py-6">
          <a
            href="/"
            className="text-lg font-semibold hover:text-accent transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </a>
        </div>
      </header>

      {/* Calendly Container */}
      <div className="flex-1 w-full">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ennvest/free-strategy-audit-call"
          style={{
            minWidth: '320px',
            width: '100%',
            height: 'calc(100vh - 89px)' // Full height minus header
          }}
        />
      </div>
    </div>
  )
}
