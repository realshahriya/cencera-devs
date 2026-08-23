import teamData from '@/content/team.json'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Mail, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Cencera Devs',
  description: 'Meet the developers, researchers, marketers, and auditors behind CENCERA DEVS.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <div className="section-tag">
            <Users size={14} className="text-[#1D4ED8]" />
            <span>THE BUILDERS //</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-[#020617]"
          >
            Meet Our Team
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed text-[#1E293B] font-medium">
            Engineers, auditors, analysts, and marketing specialists dedicated to building resilient technology and executing high-stakes Web3 deployments.
          </p>
        </div>

        {/* Soft Light UI Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <article key={member.id} className="soft-card group relative p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Team Member Photo / Avatar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden soft-card-inset p-0.5 border border-slate-300 shadow-sm shrink-0">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-black tracking-wider text-[#1D4ED8] bg-[#EFF6FF]">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    )}
                  </div>

                  <span className="soft-pill font-mono text-[10px]">
                    CORE TEAM
                  </span>
                </div>

                {/* Member Info */}
                <h2
                  className="text-base sm:text-lg font-bold mb-1 text-[#020617] group-hover:text-[#1D4ED8] transition-colors"
                >
                  {member.name}
                </h2>
                <p className="text-xs font-bold mb-4 text-[#1D4ED8]">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-xs leading-relaxed mb-6 text-[#1E293B] font-medium">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-slate-200">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2.5 text-slate-700 hover:text-[#1D4ED8] hover:border-[#2563EB] transition-colors"
                    aria-label={`${member.name} GitHub`}
                    title="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2.5 text-slate-700 hover:text-[#1D4ED8] hover:border-[#2563EB] transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                    title="LinkedIn"
                  >
                    <FaLinkedin size={15} />
                  </a>
                )}
                {(member as { twitter?: string }).twitter && (
                  <a
                    href={(member as { twitter?: string }).twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill !p-2.5 text-slate-700 hover:text-[#1D4ED8] hover:border-[#2563EB] transition-colors"
                    aria-label={`${member.name} X / Twitter`}
                    title="X / Twitter"
                  >
                    <FaXTwitter size={15} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="soft-pill !p-2.5 text-slate-700 hover:text-[#1D4ED8] hover:border-[#2563EB] transition-colors"
                    aria-label={`${member.name} Email`}
                    title="Email"
                  >
                    <Mail size={15} />
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
