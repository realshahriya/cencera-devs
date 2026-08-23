"use client"

import Link from 'next/link'
import { GitBranch, Link2, Mail, MessageSquare, ExternalLink } from 'lucide-react'
import { CenceraLogo } from '@/components/ui/CenceraLogo'

const servicesLinks = [
  { href: '/services#defi-dapps', label: 'DeFi & dApps' },
  { href: '/services#smart-contracts', label: 'Smart Contracts' },
  { href: '/services#tokens-exchange-listing', label: 'Token & CEX Listing' },
  { href: '/services#ai-apps', label: 'AI Applications' },
  { href: '/services#web-development', label: 'Web Development' },
  { href: '/services#smart-contract-audits', label: 'Smart Contract Audits' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/hackathons', label: 'Hackathons' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/cencera', label: 'GitHub', Icon: GitBranch },
  { href: 'https://linkedin.com/company/cencera', label: 'LinkedIn', Icon: Link2 },
  { href: 'https://discord.gg/cencera', label: 'Discord', Icon: MessageSquare },
  { href: 'mailto:hello@cencera.xyz', label: 'Email', Icon: Mail },
]

export function Footer() {
  return (
    <footer
      className="footer relative z-10 pt-16 pb-8"
      style={{
        background: 'var(--color-cencera-bg)',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
      }}
    >
      <div className="container-cencera px-4 sm:px-6">
        {/* Flat, Seamless Footer Upper Section */}
        <div className="flex justify-between items-start flex-wrap gap-10 py-4 mb-12">

          {/* Brand Column */}
          <div className="footer__left flex flex-col gap-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <CenceraLogo className="w-8 h-8" />
              <span className="font-black text-2xl tracking-tighter uppercase text-gradient">
                Cencera Devs
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Elite software development studio and engineering agency specializing in AI systems, Web3 protocols, cloud infrastructure, and custom software.
            </p>
            <a
              href="https://cencera.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:text-[#1D4ED8] font-mono text-xs flex items-center gap-1.5 transition-colors w-fit font-medium"
            >
              cencera.xyz <ExternalLink size={12} />
            </a>
          </div>

          {/* Nav Columns */}
          <div className="footer__right flex flex-wrap gap-10 sm:gap-16 font-sans">
            {/* Services Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase mb-1">
                SERVICES
              </span>
              {servicesLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-[#2563EB] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Company Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase mb-1">
                COMPANY
              </span>
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-[#2563EB] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Connect Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase mb-1">
                CONNECT
              </span>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-600 hover:text-[#2563EB] text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon size={14} className="text-[#2563EB]" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CENCERA DEVS Huge Watermark SVG Banner */}
        <div className="w-full pointer-events-none select-none overflow-hidden flex justify-center opacity-30">
          <svg
            className="w-full px-2 sm:px-6 md:px-8 text-slate-400/40 max-w-[1600px]"
            viewBox="0 0 1000 180"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              className="font-sans font-black tracking-tighter"
              style={{ fontSize: '130px' }}
            >
              CENCERA DEVS
            </text>
          </svg>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Cencera Developers. All rights reserved.</span>
          <span className="font-mono text-[11px]">Designed with Soft Light UI</span>
        </div>
      </div>
    </footer>
  )
}
