import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FeaturedPortfolio } from '@/components/sections/FeaturedPortfolio'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { HackathonsPreview } from '@/components/sections/HackathonsPreview'
import { CTASection } from '@/components/sections/CTASection'
import { getFeaturedProjects } from '@/lib/portfolio'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'cencera — Engineering Software That Lasts',
  description:
    'cencera partners with startups, founders, and organizations to design and build reliable software, AI systems, blockchain solutions, and modern digital products.',
}

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <>
      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'cencera',
            url: 'https://cencera.dev',
            logo: 'https://cencera.dev/logo.svg',
            description:
              'Premium technology agency specializing in Full Stack, AI, Blockchain, and Cloud engineering.',
            sameAs: [
              'https://github.com/cencera-dev',
              'https://linkedin.com/company/cenceraxyz',
            ],
          }),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedPortfolio projects={featuredProjects} />
      <TechStackSection />
      <HackathonsPreview />
      <CTASection />
    </>
  )
}
