"use client"

import Link from 'next/link'
import { ArrowRight, Compass, Sparkles } from 'lucide-react'
import { CodeBackgroundCanvas } from '@/components/ui/CodeBackgroundCanvas'

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 sm:py-32 text-center px-4 sm:px-6"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      {/* Animated Soft Code Background */}
      <CodeBackgroundCanvas variant="cta" />

      {/* Main Content Soft Card Box */}
      <div className="container-cencera relative z-10 max-w-4xl mx-auto">
        <div className="soft-card p-8 sm:p-14 md:p-16 flex flex-col items-center">

          {/* Top Tag Pill */}
          <div className="section-tag">
            <Compass size={14} className="text-[#1D4ED8]" />
            <span>LET&apos;S BUILD TOGETHER //</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.15] text-balance"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Ready to Start Your Project?
          </h2>

          {/* Description */}
          <p
            className="text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-2 sm:px-0"
            style={{ color: 'var(--color-cencera-muted-2)' }}
          >
            Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours with a clear engineering path forward.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/contact"
              id="cta-start-project"
              className="group btn-butter text-center inline-flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              Start a Project //
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/portfolio"
              id="cta-view-portfolio"
              className="btn-butter-secondary text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
