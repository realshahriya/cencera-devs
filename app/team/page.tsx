import teamData from '@/content/team.json'
import { GitBranch, Link2, X as XIcon, Mail, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Cencera',
  description: 'Meet the developers, researchers, marketers, and auditors behind CENCERA.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <div className="section-tag">
            <Users size={14} className="text-[#3B82F6]" />
            <span>THE BUILDERS //</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Meet Our Team
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            Engineers, auditors, analysts, and marketing specialists dedicated to building resilient technology and executing high-stakes Web3 deployments.
          </p>
        </div>

        {/* Soft UI Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <article key={member.id} className="soft-card group relative p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Avatar Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="soft-icon-box !w-14 !h-14 !text-base font-black tracking-wider">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <span className="soft-pill font-mono text-[10px]">
                    CORE TEAM
                  </span>
                </div>

                {/* Member Info */}
                <h2
                  className="text-base sm:text-lg font-bold mb-1 group-hover:text-[#3B82F6] transition-colors"
                  style={{ color: 'var(--color-cencera-text)' }}
                >
                  {member.name}
                </h2>
                <p className="text-xs font-semibold mb-4 text-[#60A5FA]">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                    aria-label={`${member.name} GitHub`}
                  >
                    <GitBranch size={14} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Link2 size={14} />
                  </a>
                )}
                {(member as { twitter?: string }).twitter && (
                  <a
                    href={(member as { twitter?: string }).twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                    aria-label={`${member.name} Twitter`}
                  >
                    <XIcon size={14} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="soft-pill !p-2 text-slate-600 hover:text-[#2563EB]"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
