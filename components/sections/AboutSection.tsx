"use client"

import { Zap, Layers, TrendingUp, Target, Code2, ShieldCheck, Award } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      <div className="container-cencera relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-tag">
            <Award size={14} className="text-[#3B82F6]" />
            <span>WHO WE ARE //</span>
          </div>
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
            Cencera is an elite technology agency and trust &amp; safety engineering firm. We architect software for high-stakes startups and enterprises while pushing technical boundaries.
          </p>
        </div>

        {/* Soft UI Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Tall Left Spotlight Card */}
          <div className="soft-card group relative p-8 sm:p-10 flex flex-col justify-between lg:row-span-2">
            <div className="relative z-10 mb-8">
              <div className="soft-icon-box mb-6">
                <Zap size={24} />
              </div>
              <div className="soft-pill mb-5">
                TRUST &amp; SAFETY PHILOSOPHY
              </div>
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

            {/* Inset Stats Panel */}
            <div className="relative z-10 space-y-3.5 p-5 soft-card-inset">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600 font-semibold">Target Uptime</span>
                <span className="text-lg font-bold font-mono text-[#3B82F6]">99.99%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600 font-semibold">P99 Latency</span>
                <span className="text-lg font-bold font-mono text-[#60A5FA]">&lt;50ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600 font-semibold">TVL Secured</span>
                <span className="text-lg font-bold font-mono text-[#93C5FD]">$50M+</span>
              </div>
            </div>
          </div>

          {/* Right Top Wide Card */}
          <div className="soft-card group relative p-8 sm:p-10 flex flex-col justify-between lg:col-span-2">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="soft-icon-box shrink-0">
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
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div>
              <div className="soft-icon-box mb-6">
                <Layers size={24} />
              </div>
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
            <div className="mt-8">
              <span className="soft-pill font-mono text-[11px]">
                <Code2 size={13} className="text-[#3B82F6]" /> Rust • Python • Solidity • Go
              </span>
            </div>
          </div>

          {/* Right Bottom Right Card */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div>
              <div className="soft-icon-box mb-6">
                <TrendingUp size={24} />
              </div>
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
            <div className="mt-8">
              <span className="soft-pill font-mono text-[11px]">
                <ShieldCheck size={13} className="text-[#60A5FA]" /> 100% On-Time Delivery
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
