import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Free Audit Call - Travel Agency Booking System',
  description: 'Schedule your free website audit call to discover how many bookings you\'re losing and get a custom integration plan.',
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
