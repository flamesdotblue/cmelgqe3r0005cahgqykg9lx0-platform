import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Park & Ember — Hand-poured National Park Candles',
  description:
    'Hand-poured soy candles inspired by America\'s National Parks. Thoughtful scent notes, rich nature photography, and gift-ready packaging.',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
