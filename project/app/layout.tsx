import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenith Club',
  description:
    'This is main page for the Zenith Club . A premier event management club.',
  openGraph: {
    title: 'Zenith | Event Management Club',
    description:
      'A flagship student-run club for event management and creative production.',
  },
  themeColor: '#00ff9d',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection-accent`}>
        {children}
      </body>
    </html>
  )
}
