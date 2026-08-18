"use client"

import Link from 'next/link'
import { ArrowRight, ChevronDown, Code2, Cpu, FileCode, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // CENCERA VS Code-Style Binary Matrix
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1
    let w = canvas.offsetWidth
    let h = canvas.offsetHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    const fontSize = 16
    const charW = 19
    const charH = 24
    const cols = Math.ceil(w / charW)
    const rows = Math.ceil(h / charH)

    interface Cell {
      col: number
      row: number
      char: '0' | '1'
      vignetteAlpha: number
      isGlowPoint: boolean
      flipHighlight: number
    }

    const grid: Cell[] = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const randomOpacity = Math.random() * 0.18 + 0.06

        grid.push({
          col: c,
          row: r,
          char: Math.random() > 0.5 ? '1' : '0',
          vignetteAlpha: randomOpacity,
          isGlowPoint: Math.random() < 0.03,
          flipHighlight: 0,
        })
      }
    }

    let animId: number
    let frameCount = 0

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.font = `600 ${fontSize}px "JetBrains Mono", "Fira Code", monospace`

      frameCount++

      if (frameCount % 10 === 0 && grid.length > 0) {
        const flipCount = Math.floor(Math.random() * 2) + 1
        for (let i = 0; i < flipCount; i++) {
          const idx = Math.floor(Math.random() * grid.length)
          const cell = grid[idx]
          cell.char = Math.random() > 0.5 ? '1' : '0'
          cell.flipHighlight = 1.0
        }
      }

      grid.forEach((cell) => {
        const x = cell.col * charW
        const y = cell.row * charH

        if (cell.flipHighlight > 0) {
          ctx.fillStyle = `rgba(146, 220, 229, ${0.15 + cell.flipHighlight * 0.15})`
          cell.flipHighlight -= 0.03
        } else if (cell.char === '1') {
          // Softened '1's (subtle cyan around 0.16 opacity)
          const brightAlpha = Math.min(0.22, Math.max(0.10, cell.vignetteAlpha * 0.6 + 0.08))
          if (cell.isGlowPoint) {
            ctx.fillStyle = `rgba(243, 232, 238, ${brightAlpha + 0.05})`
          } else {
            ctx.fillStyle = `rgba(146, 220, 229, ${brightAlpha})`
          }
        } else {
          // Softened '0's (very dim dark mint around 0.04 opacity)
          const dimAlpha = Math.min(0.07, Math.max(0.02, cell.vignetteAlpha * 0.2 + 0.02))
          ctx.fillStyle = `rgba(125, 205, 133, ${dimAlpha})`
        }

        ctx.fillText(cell.char, x, y)
      })

      animId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      if (!canvas) return
      dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[100dvh]"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      {/* 1. Cencera Binary Code Matrix Backdrop (Softened Intensity) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      />

      {/* Main Content */}
      <div className="container-rocera relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center my-auto px-4 sm:px-6">
        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8 leading-[1.12] sm:leading-[1.08] text-balance">
          <span className="text-gradient">Trust & Safety</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F3E8EE 0%, #92DCE5 50%, #7DCD85 100%)',
            }}
          >
            Infrastructure.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          style={{ color: 'var(--color-cencera-muted-2)' }}
        >
          Cencera is a high-stakes technology agency and trust & safety engineering firm. We partner with founders and enterprises to architect AI systems, Web3 protocols, cloud infrastructure, and enterprise software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <Link
            href="/contact"
            id="hero-start-project"
            className="group btn-butter w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            Start a Project //
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            id="hero-view-portfolio"
            className="btn-butter-secondary w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <Code2 size={16} />
            View Work & Case Studies
          </Link>
        </div>

        {/* 2. VS Code-Style IDE Showcase Card */}
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-[#92DCE5]/30 bg-[#161616] shadow-[0_20px_60px_rgba(146,220,229,0.2)] text-left font-mono text-xs text-gray-300 transition-all hover:border-[#92DCE5]/60">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1a1a] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-sans text-gray-400 flex items-center gap-1.5">
                <FileCode size={13} className="text-[#92DCE5]" /> CenceraAgent.ts — Trust & Safety Engine
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <span className="flex items-center gap-1 text-[#92DCE5]">
                <CheckCircle2 size={12} /> TypeScript 5.8
              </span>
            </div>
          </div>

          {/* Code Window Body */}
          <div className="p-4 sm:p-6 overflow-x-auto leading-relaxed bg-[#111111] text-[11px] sm:text-xs">
            <div className="flex gap-4">
              {/* Line Numbers */}
              <div className="select-none text-gray-600 text-right pr-2 border-r border-white/5 space-y-1">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1 overflow-hidden">
                <div>
                  <span className="text-[#88D5B5]">import</span> &#123; <span className="text-[#92DCE5]">CenceraCore</span>, <span className="text-[#92DCE5]">TrustPipeline</span> &#125; <span className="text-[#88D5B5]">from</span> <span className="text-[#F3E8EE]">&quot;@cencera/engine&quot;</span>;
                </div>
                <div>&nbsp;</div>
                <div>
                  <span className="text-[#88D5B5]">export async function</span> <span className="text-[#92DCE5]">deployTrustInfrastructure</span>() &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#88D5B5]">const</span> engine = <span className="text-[#88D5B5]">new</span> <span className="text-[#92DCE5]">CenceraCore</span>(&#123; <span className="text-[#7DCD85]">mode</span>: <span className="text-[#F3E8EE]">&quot;zero-trust&quot;</span>, <span className="text-[#7DCD85]">latency</span>: <span className="text-[#F3E8EE]">&quot;&lt;10ms&quot;</span> &#125;);
                </div>
                <div className="pl-4">
                  <span className="text-[#88D5B5]">const</span> status = <span className="text-[#88D5B5]">await</span> engine.<span className="text-[#92DCE5]">verifyPipeline</span>(&#123; <span className="text-[#7DCD85]">audit</span>: <span className="text-[#F3E8EE]">&quot;automated&quot;</span> &#125;);
                </div>
                <div className="pl-4">
                  <span className="text-[#88D5B5]">return</span> status.<span className="text-[#92DCE5]">isSecured</span>;
                </div>
                <div>&#125;</div>
                <div className="text-emerald-400/80 pt-1">// ✓ Cencera Verified — 0 vulnerabilities • 99.99% target uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <a
        href="#about-preview"
        aria-label="Scroll down to About section"
        className="relative z-20 mt-10 sm:mt-16 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-gray-400 flex items-center gap-1">
          <Cpu size={12} style={{ color: '#92DCE5' }} /> Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" style={{ color: '#92DCE5' }} />
      </a>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-60 md:h-80 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(12, 12, 12, 0.4) 30%, rgba(22, 22, 22, 0.85) 70%, var(--color-cencera-surface) 100%)',
        }}
      />
    </section>
  )
}
