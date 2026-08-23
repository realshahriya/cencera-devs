"use client"

import Link from 'next/link'
import { ArrowRight, ChevronDown, Code2, Cpu, FileCode, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { CodeBackgroundCanvas } from '@/components/ui/CodeBackgroundCanvas'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[100dvh]"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      {/* Animated Soft Code Background */}
      <CodeBackgroundCanvas variant="hero" />

      {/* Hero Content */}
      <div className="container-cencera relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center my-auto px-4 sm:px-6">

        {/* Soft UI Tag Pill */}
        <div className="section-tag">
          <ShieldCheck size={14} className="text-[#3B82F6]" />
          <span>AI &amp; SOFTWARE ENGINEERING AGENCY //</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8 leading-[1.12] sm:leading-[1.08] text-balance">
          <span className="text-gradient">High-Stakes Software</span>
          <br />
          <span className="text-gradient-accent">
            &amp; AI Engineering Studio.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          style={{ color: 'var(--color-cencera-muted-2)' }}
        >
          Cencera Devs is an elite software engineering agency &amp; developer studio. We partner with founders and enterprises to architect AI systems, Web3 protocols, cloud infrastructure, and custom software.
        </p>

        {/* Tactile Soft Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-14 sm:mb-16 px-4 sm:px-0">
          <Link
            href="/contact"
            id="hero-start-project"
            className="group btn-butter w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <Sparkles size={16} />
            Start a Project //
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            id="hero-view-portfolio"
            className="btn-butter-secondary w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <Code2 size={16} />
            View Work &amp; Case Studies
          </Link>
        </div>

        {/* Soft UI VS Code IDE Showcase */}
        <div className="w-full max-w-3xl soft-card text-left text-xs font-mono transition-all">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-[#141A2D]">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner" />
              <span className="ml-2 text-xs font-sans font-medium text-gray-300 flex items-center gap-1.5">
                <FileCode size={14} className="text-[#3B82F6]" /> CenceraDevs.ts — Engineering Studio
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="soft-pill !py-1 !px-3 font-sans">
                <CheckCircle2 size={12} className="text-[#60A5FA]" /> TypeScript 5.8
              </span>
            </div>
          </div>

          {/* Inset Code Window Body */}
          <div className="p-5 sm:p-6 overflow-x-auto leading-relaxed soft-card-inset m-2 sm:m-3 text-[11px] sm:text-xs">
            <div className="flex gap-4">
              {/* Line Numbers */}
              <div className="select-none text-gray-600 text-right pr-3 border-r border-white/5 space-y-1">
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
                  <span className="text-[#60A5FA]">import</span> &#123; <span className="text-[#93C5FD]">CenceraCore</span>, <span className="text-[#93C5FD]">TrustPipeline</span> &#125; <span className="text-[#60A5FA]">from</span> <span className="text-[#F0F7FF]">&quot;@cencera/engine&quot;</span>;
                </div>
                <div>&nbsp;</div>
                <div>
                  <span className="text-[#60A5FA]">export async function</span> <span className="text-[#93C5FD]">deployTrustInfrastructure</span>() &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#60A5FA]">const</span> engine = <span className="text-[#60A5FA]">new</span> <span className="text-[#93C5FD]">CenceraCore</span>(&#123; <span className="text-[#60A5FA]">mode</span>: <span className="text-[#F0F7FF]">&quot;zero-trust&quot;</span>, <span className="text-[#60A5FA]">latency</span>: <span className="text-[#F0F7FF]">&quot;&lt;10ms&quot;</span> &#125;);
                </div>
                <div className="pl-4">
                  <span className="text-[#60A5FA]">const</span> status = <span className="text-[#60A5FA]">await</span> engine.<span className="text-[#93C5FD]">verifyPipeline</span>(&#123; <span className="text-[#60A5FA]">audit</span>: <span className="text-[#F0F7FF]">&quot;automated&quot;</span> &#125;);
                </div>
                <div className="pl-4">
                  <span className="text-[#60A5FA]">return</span> status.<span className="text-[#93C5FD]">isSecured</span>;
                </div>
                <div>&#125;</div>
                <div className="text-emerald-400/90 pt-1.5 font-semibold">// ✓ Cencera Verified — 0 vulnerabilities • 99.99% target uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about-preview"
        aria-label="Scroll down to About section"
        className="relative z-20 mt-10 sm:mt-16 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="soft-pill !py-1 !px-3 text-[10px] tracking-widest font-mono">
          <Cpu size={12} className="text-[#3B82F6]" /> SCROLL
        </span>
        <ChevronDown size={18} className="animate-bounce text-[#3B82F6]" />
      </a>

      {/* Bottom Fade Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-60 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-cencera-bg) 100%)',
        }}
      />
    </section>
  )
}
