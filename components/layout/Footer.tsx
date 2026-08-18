"use client"

import Link from 'next/link'
import { GitBranch, Link2, Mail, MessageSquare } from 'lucide-react'
import { RoceraLogo } from '@/components/ui/RoceraLogo'

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
        background: 'var(--color-cencera-surface)',
        borderTop: '1px solid var(--color-cencera-border)',
      }}
    >
      <div className="container-rocera px-4 sm:px-6">
        {/* Main Footer Upper Grid */}
        <div className="flex justify-between items-start flex-wrap gap-10">
          {/* Brand Column */}
          <div className="footer__left flex flex-col gap-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <RoceraLogo className="w-8 h-8" />
              <span className="font-black text-2xl tracking-tighter uppercase text-white">
                Cencera
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Security infrastructure for human and agentic threats in Web3. High-stakes engineering firm.
            </p>
            <a
              href="https://cencera.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#92DCE5] hover:underline font-mono text-sm mt-1 inline-block"
            >
              cencera.xyz //
            </a>
          </div>

          {/* Nav Columns */}
          <div className="footer__right flex flex-wrap gap-10 sm:gap-16 font-sans">
            {/* Services Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#92DCE5] mb-1">
                Services
              </span>
              {servicesLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#92DCE5] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Company Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#92DCE5] mb-1">
                Company
              </span>
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#92DCE5] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Connect Column */}
            <div className="footer__col flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#92DCE5] mb-1">
                Connect
              </span>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-[#92DCE5] text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon size={14} className="text-[#92DCE5]" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CENCERA Huge Watermark SVG Banner (Matching CENCERA-main) */}
        <div className="w-full mt-12 sm:mt-20 md:mt-24 pointer-events-none select-none overflow-hidden flex justify-center">
          <svg
            className="w-full px-2 sm:px-6 md:px-8 text-white/10 max-w-[1600px]"
            viewBox="0 0 1000 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              className="font-sans font-black tracking-tighter"
              style={{ fontSize: '190px' }}
            >
              CENCERA
            </text>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom flex flex-col sm:flex-row justify-between items-center text-gray-500 font-sans text-xs sm:text-sm py-6 border-t border-white/10 gap-3">
          <span>© {new Date().getFullYear()} Cencera. All rights reserved.</span>
          <span className="font-mono text-xs text-gray-400">
            hello@cencera.xyz // cencera.xyz
          </span>
        </div>
      </div>
    </footer>
  )
}
