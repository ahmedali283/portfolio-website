import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transform Your Travel Agency Into a 24/7 Booking Machine',
  description: 'I help travel agencies replace manual quote processes with automated booking systems. TBO, Yalago, Amadeus, Sabre integrations. 4-week implementation.',
  keywords: [
    'travel agency booking system',
    'TBO integration',
    'Yalago API',
    'Amadeus integration',
    'Sabre booking system',
    'travel tech consultant',
    'automated booking platform'
  ],
  authors: [{ name: 'Travel Tech Consultant' }],
  openGraph: {
    title: 'Travel Agency Booking System Integration',
    description: 'Convert 3x more website visitors into bookings with automated travel booking systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your Travel Agency Into a 24/7 Booking Machine',
    description: 'Convert 3x more website visitors into bookings with automated travel booking systems.',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
