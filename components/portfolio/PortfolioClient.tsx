"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ExternalLink, GitBranch, X, Star } from 'lucide-react'
import type { Project } from '@/types/portfolio'

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="soft-card group overflow-hidden flex flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="h-44 sm:h-48 relative rounded-xl flex items-center justify-center overflow-hidden soft-card-inset mb-5">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="text-4xl font-black text-gradient opacity-60 group-hover:opacity-90 transition-opacity">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          )}

          {project.stargazersCount !== undefined && (
            <div className="absolute top-3 right-3 z-10">
              <span className="soft-pill font-mono text-[11px] text-[#2563EB]">
                <Star size={12} className="fill-[#2563EB]" />
                <span>{project.stargazersCount}</span>
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="soft-pill font-mono text-[11px] uppercase">
            {project.status}
          </span>
          <span className="text-xs font-mono text-slate-500">
            {new Date(project.date).getFullYear()}
          </span>
        </div>

        <h2
          className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#2563EB] transition-colors"
          style={{ color: 'var(--color-cencera-text)' }}
        >
          {project.title}
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: 'var(--color-cencera-muted-2)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="soft-pill font-mono text-[11px]">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span key="more" className="soft-pill font-mono text-[11px]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
        <Link
          href={`/portfolio/${project.slug}`}
          className="btn-butter-secondary flex-1 text-center text-xs !py-2 !px-4 font-semibold"
        >
          Read Case Study
        </Link>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demo"
            className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
          >
            <ExternalLink size={14} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
          >
            <GitBranch size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

export function PortfolioClient({ projects, tags }: { projects: Project[]; tags: string[] }) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [activeStatus, setActiveStatus] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      const matchTag = !activeTag || p.tags.includes(activeTag)
      const matchStatus = !activeStatus || p.status === activeStatus
      return matchSearch && matchTag && matchStatus
    })
  }, [projects, search, activeTag, activeStatus])

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-col gap-4 mb-10">
        {/* Search */}
        <div className="soft-card-inset flex items-center gap-3 px-4 py-3 w-full sm:max-w-md">
          <Search size={16} className="text-[#2563EB] shrink-0" />
          <input
            id="portfolio-search"
            type="text"
            placeholder="Search projects by name or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-xs sm:text-sm w-full text-slate-900 placeholder-slate-500 font-medium"
          />
          {search && (
            <button onClick={() => setSearch('')} aria-label="Clear search">
              <X size={14} className="text-slate-400 hover:text-slate-800" />
            </button>
          )}
        </div>

        {/* Status filter */}
        {['completed', 'in-progress', 'archived'].some(s => projects.some(p => p.status === s)) && (
          <div className="flex flex-wrap gap-2">
            {['completed', 'in-progress', 'archived'].map((status) => {
              const isActive = activeStatus === status
              return (
                <button
                  key={status}
                  id={`filter-status-${status}`}
                  onClick={() => setActiveStatus(isActive ? null : status)}
                  className="soft-pill capitalize text-xs !py-1.5 !px-3.5"
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(145deg, #2563EB 0%, #1D4ED8 100%)',
                          color: '#FFFFFF',
                        }
                      : {}
                  }
                >
                  {status.replace('-', ' ')}
                </button>
              )
            })}
          </div>
        )}

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.slice(0, 16).map((tag) => {
              const isActive = activeTag === tag
              return (
                <button
                  key={tag}
                  id={`filter-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveTag(isActive ? null : tag)}
                  className="soft-pill font-mono text-[11px] sm:text-xs !py-1 !px-3"
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(145deg, #2563EB 0%, #1D4ED8 100%)',
                          color: '#FFFFFF',
                        }
                      : {}
                  }
                >
                  {tag}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Count */}
      <p className="text-xs sm:text-sm mb-6 text-slate-600 font-mono font-medium">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="soft-card text-center py-16 sm:py-20 p-8">
          <p className="text-base sm:text-lg text-slate-700 font-semibold">
            No projects match your search or filters.
          </p>
          <button
            className="mt-4 soft-pill text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
            onClick={() => { setSearch(''); setActiveTag(null); setActiveStatus(null) }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
