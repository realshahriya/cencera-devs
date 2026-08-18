"use client"

import { Zap, Layers, TrendingUp, Target, Code2, ShieldCheck } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-cencera-surface)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#92DCE5]"
          >
            Who We Are //
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            A Premium Engineering Team
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-cencera-muted-2)' }}
          >
            Cencera is an elite technology agency and trust & safety engineering firm. We architect software for high-stakes startups and enterprises while pushing technical boundaries.
          </p>
        </div>

        {/* Distinct Bento Box Grid 1: Asymmetric Vertical Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tall Left Spotlight Card */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:row-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-cencera-bg) 0%, var(--color-cencera-surface-2) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-48 rounded-t-3xl blur-[90px] pointer-events-none opacity-20 bg-[#92DCE5]" />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#92DCE5]/15 border border-[#92DCE5]/30 text-[#92DCE5]">
                <Zap size={24} />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#92DCE5]/15 text-[#92DCE5] border border-[#92DCE5]/30 inline-block mb-4">
                TRUST & SAFETY PHILOSOPHY
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"
                style={{ color: 'var(--color-cencera-text)' }}
              >
                Zero-Trust Systems Architecture
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--color-cencera-muted-2)' }}
              >
                We obsess over architecture, zero-trust security, and long-term maintainability. Every system we ship is built to scale smoothly under extreme attack vectors.
              </p>
            </div>

            {/* Vertical Stack Stats */}
            <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Target Uptime</span>
                <span className="text-lg font-bold font-mono text-[#92DCE5]">99.99%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">P99 Latency</span>
                <span className="text-lg font-bold font-mono text-[#7DCD85]">&lt;50ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">TVL Secured</span>
                <span className="text-lg font-bold font-mono text-[#88D5B5]">$50M+</span>
              </div>
            </div>
          </div>

          {/* Right Top Wide Card */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-cencera-surface-2) 0%, var(--color-cencera-bg) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#92DCE5]/20 border border-[#92DCE5]/40 text-[#92DCE5] shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-cencera-text)' }}
                >
                  Earn Trust Through Craftsmanship
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--color-cencera-muted-2)' }}
                >
                  Craftsmanship is our differentiator. We take pride in clean interfaces, performant systems, zero visual bugs, and software that is a true pleasure to use.
                </p>
              </div>
            </div>
          </div>

          {/* Right Bottom Left Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-cencera-bg)',
              border: '1px solid var(--color-cencera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#7DCD85]/20 border border-[#7DCD85]/40 text-[#7DCD85]">
              <Layers size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-cencera-text)' }}
              >
                Solve Difficult Problems
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-cencera-muted-2)' }}
              >
                We tackle complex engineering challenges: distributed real-time pipelines, zero-trust security, and high-frequency Web3 protocols.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#92DCE5]">
              <Code2 size={14} />
              <span>Rust • Python • Solidity • Go</span>
            </div>
          </div>

          {/* Right Bottom Right Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-cencera-bg)',
              border: '1px solid var(--color-cencera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#92DCE5]/20 border border-[#92DCE5]/40 text-[#92DCE5]">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-cencera-text)' }}
              >
                Create Long-Term Value
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-cencera-muted-2)' }}
              >
                We build lasting technical partnerships, not just deliverables. Our software continues to generate ROI years after initial release.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#7DCD85]">
              <ShieldCheck size={14} />
              <span>100% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
