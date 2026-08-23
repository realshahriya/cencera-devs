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
    'smart contract audit agency',
    'DeFi development studio',
  ],
  authors: [{ name: 'CENCERA DEVS', url: 'https://cencera.xyz' }],
  creator: 'CENCERA DEVS',
  publisher: 'CENCERA DEVS',
  category: 'technology',
  alternates: {
    canonical: 'https://cencera.xyz',
  },
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
    creator: '@cencera',
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

// JSON-LD Structured Data Schema for Google & AI Search Engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CENCERA DEVS',
  url: 'https://cencera.xyz',
  logo: 'https://cencera.xyz/logo.png',
  image: 'https://cencera.xyz/og-image.png',
  description: 'Elite software engineering studio & developer agency specializing in AI systems, Web3 protocols, cloud infrastructure, and custom software development.',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [
    'https://github.com/cencera',
    'https://linkedin.com/company/cencera',
    'https://discord.gg/cencera',
  ],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence & LLMs',
    'Web3 Protocols & Smart Contracts',
    'Cloud Architecture',
    'Full Stack Web Development',
    'Smart Contract Auditing',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-cencera-bg text-cencera-text selection:bg-[rgba(37,99,235,0.25)] selection:text-[#1D4ED8]">
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
