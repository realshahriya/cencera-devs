"use client"

import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function CTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Binary Code Matrix Backdrop matching Hero section design language
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
        const randomOpacity = Math.random() * 0.25 + 0.12
        const char = Math.random() > 0.5 ? '1' : '0'

        if (char === '1') {
          const brightAlpha = Math.min(0.38, Math.max(0.22, randomOpacity * 0.8 + 0.16))
          ctx.fillStyle = `rgba(128, 222, 217, ${brightAlpha})`
        } else {
          const dimAlpha = Math.min(0.14, Math.max(0.05, randomOpacity * 0.3 + 0.04))
          ctx.fillStyle = `rgba(6, 141, 157, ${dimAlpha})`
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
          'linear-gradient(180deg, var(--color-rocera-surface) 0%, var(--color-rocera-bg) 50%, var(--color-rocera-surface) 100%)',
        borderTop: '1px solid var(--color-rocera-border)',
        borderBottom: '1px solid var(--color-rocera-border)',
      }}
    >
      {/* 1. Seamless Binary Code Matrix Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Soft Radial Spotlight Glow behind CTA Headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[120px] sm:blur-[150px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, #80ded9 0%, #068d9d 50%, transparent 75%)',
        }}
      />

      {/* Seamless Main Content (No Box Container) */}
      <div className="container-rocera relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono mb-6 border border-white/10 glass shadow-lg">
          <Compass size={13} style={{ color: '#80ded9' }} />
          <span style={{ color: '#80ded9' }}>LET&apos;S BUILD TOGETHER</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-balance"
          style={{ color: 'var(--color-rocera-text)' }}
        >
          Ready to Start Your Project?
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-2 sm:px-0"
          style={{ color: 'var(--color-rocera-muted-2)' }}
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
            Start a Project
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
