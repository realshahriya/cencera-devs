"use client"

import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function CTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Binary Code Matrix Backdrop matching CENCERA design language (Softened Intensity)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, w, h)
    ctx.font = '600 16px "JetBrains Mono", "Fira Code", monospace'

    const charW = 19
    const charH = 24
    const cols = Math.ceil(w / charW)
    const rows = Math.ceil(h / charH)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const randomOpacity = Math.random() * 0.18 + 0.06
        const char = Math.random() > 0.5 ? '1' : '0'

        if (char === '1') {
          // Softened '1's (subtle cyan around 0.16 opacity)
          const brightAlpha = Math.min(0.22, Math.max(0.10, randomOpacity * 0.6 + 0.08))
          ctx.fillStyle = `rgba(146, 220, 229, ${brightAlpha})`
        } else {
          // Softened '0's (very dim dark mint around 0.04 opacity)
          const dimAlpha = Math.min(0.07, Math.max(0.02, randomOpacity * 0.2 + 0.02))
          ctx.fillStyle = `rgba(125, 205, 133, ${dimAlpha})`
        }

        ctx.fillText(char, c * charW, r * charH)
      }
    }
  }, [])

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 sm:py-32 md:py-40 text-center px-4 sm:px-6"
      style={{
        background:
          'linear-gradient(180deg, var(--color-cencera-surface) 0%, var(--color-cencera-bg) 50%, var(--color-cencera-surface) 100%)',
        borderTop: '1px solid var(--color-cencera-border)',
        borderBottom: '1px solid var(--color-cencera-border)',
      }}
    >
      {/* 1. Seamless Binary Code Matrix Background Canvas (Softened) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50"
      />

      {/* 2. Soft Ambient Radial Spotlight Glow behind CTA Headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[120px] sm:blur-[150px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #92DCE5 0%, #7DCD85 50%, transparent 75%)',
        }}
      />

      {/* Seamless Main Content */}
      <div className="container-rocera relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono mb-6 border border-white/10 glass shadow-lg">
          <Compass size={13} style={{ color: '#92DCE5' }} />
          <span style={{ color: '#92DCE5' }}>LET&apos;S BUILD TOGETHER //</span>
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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/contact"
            id="cta-start-project"
            className="group btn-butter text-center"
          >
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
    </section>
  )
}
