import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Earendel - Embedded Software Solutions',
  description: 'Professional embedded software development for consumer and automotive applications. Specializing in low level programming and hardware integration.',
  keywords: 'embedded software, C programming, automotive software, consumer electronics, hardware integration, Earendel',
  authors: [{ name: 'Earendel' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Earendel - Embedded Software Solutions',
    description: 'Professional embedded software and hardware development for consumer and automotive applications.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-secondary-900 text-secondary-100 antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
          <div className="circuit-overlay min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
