"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { cenceraLogo } from '@/components/ui/cenceraLogo'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/hackathons', label: 'Hackathons' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on page navigate
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => setIsOpen((prev) => !prev)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none py-4 sm:py-5`}
    >
      <div className="container-cencera flex items-center justify-between">

        {/* Soft Glassmorphism Logo Capsule */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-full glass-capsule transition-all duration-300 group"
          aria-label="CENCERA DEVS Home"
        >
          <cenceraLogo className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-black text-lg tracking-tighter font-sans uppercase text-gradient">
            CENCERA DEVS
          </span>
        </Link>

        {/* Soft Glassmorphism Nav Bar Pill (Desktop) */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1.5 p-1.5 rounded-full glass-capsule transition-all duration-300"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300"
                style={
                  isActive
                    ? {
                      background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(29, 78, 216, 0.35)',
                    }
                    : {
                      color: 'var(--color-cencera-muted-2)',
                    }
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Soft Glass CTA (Desktop) */}
        <div className="pointer-events-auto hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            id="nav-start-project"
            className="btn-butter !py-2.5 !px-6 !text-xs tracking-wider font-bold"
          >
            <Sparkles size={14} className="text-white" />
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="nav-mobile-toggle"
          className="pointer-events-auto md:hidden p-2.5 rounded-full glass-capsule transition-all duration-200 text-[#020617]"
          onClick={toggleMobileMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className="pointer-events-auto md:hidden fixed top-20 left-4 right-4 z-40 rounded-3xl transition-all duration-300 flex flex-col gap-5 p-6 glass-capsule"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.96)',
        }}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200"
                  style={
                    isActive
                      ? {
                        background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(29, 78, 216, 0.35)',
                      }
                      : {
                        background: 'rgba(241, 245, 249, 0.8)',
                        color: 'var(--color-cencera-muted-2)',
                      }
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="opacity-70" />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="pt-4 border-t border-slate-200">
          <Link
            href="/contact"
            className="btn-butter w-full !py-3.5 text-center text-sm"
          >
            Start a Project //
          </Link>
        </div>
      </div>
    </header>
  )
}
