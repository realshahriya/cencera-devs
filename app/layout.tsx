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
    default: 'CENCERA — Trust & Safety Infrastructure',
    template: '%s | CENCERA',
  },
  description:
    'CENCERA is a high-stakes technology agency and trust & safety infrastructure engineering firm. We partner with founders and enterprises to design AI systems, Web3 protocols, cloud infrastructure, and enterprise software.',
  keywords: [
    'cencera',
    'trust and safety infrastructure',
    'software engineering agency',
    'AI engineering',
    'blockchain security',
    'full stack development',
    'cloud devops',
  ],
  authors: [{ name: 'CENCERA', url: 'https://cencera.xyz' }],
  creator: 'CENCERA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cencera.xyz',
    siteName: 'CENCERA',
    title: 'CENCERA — Trust & Safety Infrastructure',
    description:
      'High-stakes technology agency specializing in Full Stack, AI Systems, Web3 Protocols, and Trust & Safety Infrastructure.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CENCERA — Trust & Safety Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CENCERA — Trust & Safety Infrastructure',
    description: 'High-stakes technology agency specializing in Full Stack, AI Systems, Web3 Protocols, and Trust & Safety Infrastructure.',
    images: ['/og-image.png'],
    creator: '@cencera_dev',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
