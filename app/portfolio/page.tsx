import { getAllProjects, getAllTags } from '@/lib/portfolio'
import { PortfolioClient } from '@/components/portfolio/PortfolioClient'
import { FolderGit2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Cencera',
  description:
    'Explore Cencera\'s engineering portfolio — production AI systems, Web3 protocols, cloud infrastructure, and open-source tools.',
}

export default async function PortfolioPage() {
  const projects = await getAllProjects()
  const tags = getAllTags(projects)

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="section-tag">
            <FolderGit2 size={14} className="text-[#3B82F6]" />
            <span>OUR WORK //</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Engineering Portfolio
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            Production systems, open-source tools, and research prototypes built with engineering excellence.
          </p>
        </div>

        {/* Client: filtering + search */}
        <PortfolioClient projects={projects} tags={tags} />
      </div>
    </div>
  )
}
