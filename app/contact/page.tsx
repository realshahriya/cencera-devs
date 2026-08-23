import { ContactForm } from '@/components/contact/ContactForm'
import { GitBranch, Link2, Mail, MessageSquare, Compass, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Cencera',
  description: "Start a project with CENCERA. Tell us what you're building.",
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@cencera.xyz',
    href: 'mailto:contact@cencera.xyz',
  },
  {
    icon: MessageSquare,
    label: 'Discord',
    value: 'discord.gg/cencera',
    href: 'https://discord.gg/cencera',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/cencera-xyz',
    href: 'https://github.com/cencera-xyz',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/company/cenceraxyz',
    href: 'https://linkedin.com/company/cenceraxyz',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="section-tag">
              <Compass size={14} className="text-[#3B82F6]" />
              <span>GET IN TOUCH //</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Start a Project
            </h1>
            <p
              className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              style={{ color: 'var(--color-cencera-muted-2)' }}
            >
              Tell us about what you&apos;re building. We respond within 24 hours with a clear proposal and engineering path forward.
            </p>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="soft-card p-4 flex items-center gap-3 group transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="soft-icon-box !w-10 !h-10 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono uppercase text-gray-400 font-semibold">
                      {label}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-semibold truncate group-hover:text-[#3B82F6] transition-colors"
                      style={{ color: 'var(--color-cencera-text)' }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time badge */}
            <div className="mt-8 sm:mt-10 soft-card p-4 flex items-center gap-3">
              <div className="soft-icon-box !w-9 !h-9 shrink-0">
                <Clock size={16} className="text-[#60A5FA]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Rapid Technical Response</p>
                <p className="text-xs text-gray-400">Guaranteed response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
