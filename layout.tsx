import type { Metadata } from 'next'
import { Crimson_Pro, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vintage Travel | The Art of the Mediterranean',
  description: 'Handpicked villas with private pools across the Mediterranean. Authentic experiences, warm welcomes, and quality villas personally selected by our expert team.',
  keywords: 'villa rentals, Mediterranean villas, holiday villas, private pool, luxury villas, Spain, France, Italy, Greece, Portugal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
