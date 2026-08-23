"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, GitBranch, ArrowRight, Star, FolderGit2 } from 'lucide-react'
import type { Project } from '@/types/portfolio'

export function FeaturedPortfolio({ projects }: { projects: Project[] }) {
  const [imgError, setImgError] = useState(false)

  if (!projects || projects.length === 0) return null

  const spotlight = projects[0]
  const second = projects[1]
  const third = projects[2]
  const isSingle = projects.length === 1

  return (
    <section
      id="featured-portfolio"
      className="section-padding relative overflow-hidden px-4 sm:px-6"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      <div className="container-cencera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="section-tag">
              <FolderGit2 size={14} className="text-[#3B82F6]" />
              <span>PORTFOLIO SHOWCASE //</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-black tracking-tight"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Featured Engineering
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group btn-butter-secondary !py-2.5 !px-6 text-xs shrink-0"
          >
            View all projects //
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Soft UI Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Spotlight Card */}
          {spotlight && (
            <article
              className={`soft-card group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isSingle ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                  <span className="soft-pill font-mono text-xs">
                    FEATURED PROJECT
                  </span>

                  {spotlight.stargazersCount !== undefined && (
                    <div className="soft-pill font-mono text-xs text-[#3B82F6]">
                      <Star size={13} className="fill-[#3B82F6]" />
                      <span>{spotlight.stargazersCount} Stars</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className={spotlight.image && !imgError ? 'lg:col-span-7' : 'lg:col-span-12'}>
                    <h3
                      className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 group-hover:text-[#3B82F6] transition-colors"
                      style={{ color: 'var(--color-cencera-text)' }}
                    >
                      {spotlight.title}
                    </h3>
                    <p
                      className="text-xs sm:text-base leading-relaxed mb-6 sm:mb-8"
                      style={{ color: 'var(--color-cencera-muted-2)' }}
                    >
                      {spotlight.description}
                    </p>
                  </div>

                  {spotlight.image && !imgError && (
                    <div className="lg:col-span-5 w-full soft-card-inset p-2 overflow-hidden">
                      <img
                        src={spotlight.image}
                        alt={spotlight.title}
                        onError={() => setImgError(true)}
                        className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Tags & Action Row */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {spotlight.tags.map((tag) => (
                    <span key={tag} className="soft-pill font-mono text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {spotlight.github && (
                    <a
                      href={spotlight.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                      title="View GitHub Repository"
                    >
                      <GitBranch size={16} />
                    </a>
                  )}
                  {spotlight.demo && (
                    <a
                      href={spotlight.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-butter !py-2 !px-4 text-xs"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Second Project */}
          {second && (
            <article className="soft-card group relative p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="soft-pill font-mono text-xs">
                    PROJECT
                  </span>

                  {second.stargazersCount !== undefined && (
                    <div className="soft-pill font-mono text-xs text-[#3B82F6]">
                      <Star size={13} className="fill-[#3B82F6]" />
                      <span>{second.stargazersCount}</span>
                    </div>
                  )}
                </div>

                <h3
                  className="text-xl font-bold mb-3 group-hover:text-[#3B82F6] transition-colors"
                  style={{ color: 'var(--color-cencera-text)' }}
                >
                  {second.title}
                </h3>

                <p
                  className="text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-cencera-muted-2)' }}
                >
                  {second.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {second.tags.map((tag) => (
                    <span key={tag} className="soft-pill font-mono text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <Link
                    href={`/portfolio/${second.slug}`}
                    className="text-xs font-semibold text-[#3B82F6] hover:underline"
                  >
                    Read details &rarr;
                  </Link>

                  <div className="flex items-center gap-2">
                    {second.github && (
                      <a
                        href={second.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                        title="GitHub"
                      >
                        <GitBranch size={15} />
                      </a>
                    )}
                    {second.demo && (
                      <a
                        href={second.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                        title="Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Third Project */}
          {third && (
            <article className="soft-card group relative p-6 sm:p-8 flex flex-col justify-between lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="soft-pill font-mono text-xs">
                      CASE STUDY
                    </span>
                    {third.stargazersCount !== undefined && (
                      <div className="soft-pill font-mono text-xs text-[#3B82F6]">
                        <Star size={13} className="fill-[#3B82F6]" />
                        <span>{third.stargazersCount} Stars</span>
                      </div>
                    )}
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors"
                    style={{ color: 'var(--color-cencera-text)' }}
                  >
                    {third.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm leading-relaxed max-w-3xl"
                    style={{ color: 'var(--color-cencera-muted-2)' }}
                  >
                    {third.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                  <div className="flex flex-wrap gap-1.5">
                    {third.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="soft-pill font-mono text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${third.slug}`}
                    className="btn-butter-secondary !py-2.5 !px-5 text-xs whitespace-nowrap"
                  >
                    View Project Case Study
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
