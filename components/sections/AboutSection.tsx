"use client"

import { Zap, Layers, TrendingUp, Target, Code2, ShieldCheck } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Who We Are
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            A Premium Engineering Team
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-rocera-muted-2)' }}
          >
            Rocera is an elite technology agency and engineering team. We architect software for high-stakes startups while pushing technical boundaries through open-source and research.
          </p>
        </div>

        {/* Distinct Bento Box Grid 1: Asymmetric Vertical Focus (1 Tall Left + 2x2 Stack Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tall Left Spotlight Card (Spans 2 Rows on Desktop) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:row-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-rocera-bg) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-48 rounded-t-3xl blur-[90px] pointer-events-none opacity-25 bg-[#068d9d]" />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#068d9d]/15 border border-[#068d9d]/30 text-[#80ded9]">
                <Zap size={24} />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#068d9d]/15 text-[#80ded9] border border-[#068d9d]/30 inline-block mb-4">
                ENGINEERING PHILOSOPHY
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Zero Tech Debt Architecture
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--color-rocera-muted-2)' }}
              >
                We obsess over architecture, code quality, and long-term maintainability. Every system we ship is built to scale smoothly under heavy load without accumulated debt.
              </p>
            </div>

            {/* Vertical Stack Stats */}
            <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Target Uptime</span>
                <span className="text-lg font-bold font-mono text-[#aeecef]">99.99%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">P99 Latency</span>
                <span className="text-lg font-bold font-mono text-[#80ded9]">&lt;50ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">TVL Secured</span>
                <span className="text-lg font-bold font-mono text-[#6d9dc5]">$50M+</span>
              </div>
            </div>
          </div>

          {/* Right Top Wide Card (Spans 2 Cols) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-bg) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#53599a]/20 border border-[#53599a]/40 text-[#80ded9] shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  Earn Trust Through Craftsmanship
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--color-rocera-muted-2)' }}
                >
                  Craftsmanship is our differentiator. We take pride in clean interfaces, performant systems, zero visual bugs, and software that is a true pleasure to use.
                </p>
              </div>
            </div>
          </div>

          {/* Right Bottom Left Card (1 Col) */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-bg)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#53599a]/20 border border-[#53599a]/40 text-[#80ded9]">
              <Layers size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Solve Difficult Problems
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                We tackle complex engineering challenges: distributed real-time pipelines, zero-trust security, and high-frequency Web3 protocols.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#80ded9]/90">
              <Code2 size={14} />
              <span>Rust • Python • Solidity • Go</span>
            </div>
          </div>

          {/* Right Bottom Right Card (1 Col) */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-bg)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#068d9d]/20 border border-[#068d9d]/40 text-[#aeecef]">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Create Long-Term Value
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                We build lasting technical partnerships, not just deliverables. Our software continues to generate ROI years after initial release.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#80ded9]/90">
              <ShieldCheck size={14} />
              <span>100% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-bg) 100%)',
        }}
      />
    </section>
  )
}
