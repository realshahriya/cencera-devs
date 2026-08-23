import { getDedicatedHackathons } from '@/lib/hackathons'
import { Trophy, MapPin, Users, Calendar, Code2, ExternalLink, Zap, Star, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hackathons — Cencera',
  description:
    "Cencera's hackathon track record — awards, tech stacks, and results from top global competitions.",
}

const placeConfig: Record<string, { emoji: string; label: string; gradientStyle: string; glow: string; border: string }> = {
  '1st': { emoji: '🥇', label: '1st Place', gradientStyle: 'linear-gradient(to right, #3B82F6, #93C5FD)', glow: 'rgba(59, 130, 246, 0.35)', border: 'rgba(59, 130, 246, 0.40)' },
  '2nd': { emoji: '🥈', label: '2nd Place', gradientStyle: 'linear-gradient(to right, #60A5FA, #F0F7FF)', glow: 'rgba(96, 165, 250, 0.30)', border: 'rgba(96, 165, 250, 0.35)' },
  default: { emoji: '🏅', label: 'Finalist', gradientStyle: 'linear-gradient(to right, #93C5FD, #F0F7FF)', glow: 'rgba(147, 197, 253, 0.25)', border: 'rgba(147, 197, 253, 0.30)' },
}

function getPlaceCfg(place: string) {
  return placeConfig[place] ?? placeConfig.default
}

export default async function HackathonsPage() {
  const hackathons = await getDedicatedHackathons()

  const totalAwards = hackathons.reduce((s, h) => s + (h.awards?.length ?? 0), 0)
  const wins = hackathons.reduce((s, h) => s + (h.awards?.filter(a => a.place === '1st').length ?? 0), 0)
  const totalPrize = hackathons.reduce((s, h) => {
    return s + (h.awards?.reduce((ps, a) => {
      const m = a.prize?.match(/\$?([\d,]+)/)
      return ps + (m ? parseInt(m[1].replace(/,/g, '')) : 0)
    }, 0) ?? 0)
  }, 0)

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-cencera-bg)' }}>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container-cencera relative">
          <div className="max-w-3xl">
            <div className="section-tag">
              <Trophy size={14} className="text-[#3B82F6]" />
              <span>COMPETITION TRACK RECORD //</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Hackathons
              <span className="block text-gradient-accent mt-1">
                &amp; Podium Wins
              </span>
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              style={{ color: 'var(--color-cencera-muted-2)' }}
            >
              We compete at premier global hackathons to push new technology under extreme time pressure —
              proving engineering capability and shipping production-quality systems in hours, not weeks.
            </p>
          </div>

          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: Trophy, label: 'Gold Wins', value: wins },
              { icon: Award, label: 'Total Awards', value: totalAwards },
              { icon: Zap, label: 'Hackathons', value: hackathons.length },
              { icon: Star, label: 'Prize Money', value: `$${(totalPrize / 1000).toFixed(0)}K+` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="soft-card p-5 flex flex-col gap-1">
                <Icon size={18} className="text-[#3B82F6] mb-1" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#3B82F6]">
                  {value}
                </span>
                <span
                  className="text-[11px] uppercase tracking-widest font-semibold"
                  style={{ color: 'var(--color-cencera-muted-2)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="container-cencera">
          <div className="relative max-w-4xl mx-auto">

            {/* Vertical Axis */}
            <div
              className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, #3B82F6 0%, rgba(59, 130, 246, 0.2) 80%, transparent 100%)',
              }}
            />

            <div className="flex flex-col gap-10 sm:gap-14">
              {hackathons.map((h, idx) => {
                const topAward = h.awards?.[0]
                const cfg = topAward ? getPlaceCfg(topAward.place) : null

                return (
                  <article key={h.id} className="relative pl-12 sm:pl-16 group">
                    {/* Timeline Node */}
                    <div
                      className="absolute left-[9px] sm:left-[17px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                      style={{
                        borderColor: '#3B82F6',
                        background: 'var(--color-cencera-bg)',
                      }}
                    />

                    {/* Card */}
                    <div className="soft-card group relative p-6 sm:p-8 md:p-10">
                      {/* Top Accent Line */}
                      {cfg && (
                        <div className="h-1 w-full rounded-t-2xl mb-6" style={{ background: cfg.gradientStyle }} />
                      )}

                      <div>
                        {/* Meta Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="soft-pill font-mono text-xs">
                              <Calendar size={13} className="text-[#3B82F6]" />
                              {new Date(h.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                            </span>
                            <span className="soft-pill font-mono text-xs">
                              <MapPin size={13} className="text-[#60A5FA]" />
                              {h.location}
                            </span>
                            {h.teamSize && (
                              <span className="soft-pill font-mono text-xs">
                                <Users size={13} className="text-[#93C5FD]" />
                                {h.teamSize}-person team
                              </span>
                            )}
                          </div>

                          {h.url && (
                            <a
                              href={h.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-butter-secondary !py-1.5 !px-4 text-xs"
                            >
                              <ExternalLink size={12} />
                              View Project
                            </a>
                          )}
                        </div>

                        {/* Award Badges */}
                        {h.awards && h.awards.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-5">
                            {h.awards.map((award) => {
                              const ac = getPlaceCfg(award.place)
                              return (
                                <div
                                  key={award.category}
                                  className="soft-pill font-semibold text-xs !py-1.5 !px-3.5"
                                  style={{
                                    borderColor: ac.border,
                                  }}
                                >
                                  <Trophy size={13} className="text-[#3B82F6]" />
                                  <span>{ac.emoji} {ac.label} — {award.category}</span>
                                  {award.prize && (
                                    <span className="font-mono font-bold text-[#93C5FD]">
                                      ({award.prize})
                                    </span>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )}

                        {/* Title */}
                        <h2
                          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-3 group-hover:text-[#3B82F6] transition-colors"
                          style={{ color: 'var(--color-cencera-text)' }}
                        >
                          {h.name}
                        </h2>

                        {/* Description */}
                        <p
                          className="text-sm leading-relaxed mb-6"
                          style={{ color: 'var(--color-cencera-muted-2)' }}
                        >
                          {h.description}
                        </p>

                        {/* Tech Stack */}
                        {h.techStack && h.techStack.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Code2 size={13} className="text-[#3B82F6]" />
                              <span
                                className="text-[10px] uppercase tracking-widest font-mono font-bold"
                                style={{ color: 'var(--color-cencera-muted-2)' }}
                              >
                                Stack Built
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {h.techStack.map((t) => (
                                <span key={t.name} className="soft-pill font-mono text-xs">
                                  {t.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
