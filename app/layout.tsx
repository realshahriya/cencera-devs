import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cencera.xyz'),
  title: {
    default: 'CENCERA DEVS — Software Engineering Studio & Agency',
    template: '%s | Cencera Devs',
  },
  description:
    'Cencera Devs is an elite software engineering agency & developer studio. We partner with founders and enterprises to design and ship AI systems, Web3 protocols, cloud infrastructure, and custom software.',
  keywords: [
    'cencera devs',
    'cencera developers',
    'software engineering agency',
    'developer studio',
    'AI engineering agency',
    'Web3 developers',
    'full stack engineering agency',
    'custom software studio',
  ],
  authors: [{ name: 'CENCERA DEVS', url: 'https://cencera.xyz' }],
  creator: 'CENCERA DEVS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cencera.xyz',
    siteName: 'CENCERA DEVS',
    title: 'CENCERA DEVS — Software Engineering Studio & Agency',
    description:
      'Elite developer agency specializing in Full Stack Web Engineering, AI Systems, Web3 Protocols, and Custom Software Development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CENCERA DEVS — Software Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CENCERA DEVS — Software Engineering Studio & Agency',
    description: 'Elite developer agency specializing in Full Stack Web Engineering, AI Systems, Web3 Protocols, and Custom Software Development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-cencera-bg text-cencera-text selection:bg-[rgba(59,130,246,0.3)] selection:text-cencera-mint">
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
