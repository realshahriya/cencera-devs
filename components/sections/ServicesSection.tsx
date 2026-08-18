"use client"

import {
  Brain,
  Code2,
  Link2,
  TrendingUp,
  Globe,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#92DCE5]"
            >
              What We Do //
            </p>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tighter"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Engineering Across Every Layer
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold shrink-0 text-[#92DCE5] hover:underline"
          >
            View all services //
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid: 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — DeFi & dApp Engineering */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-cencera-surface) 0%, var(--color-cencera-surface-2) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#92DCE5]/15 border border-[#92DCE5]/30 text-[#92DCE5]">
                <Link2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                DeFi & dApp Development
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                DEXs, yield vaults, liquidity pools, staking protocols, and Web3 dApps across EVM, Solana, and Move.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['DeFi', 'dApps', 'Solidity', 'Rust', 'Anchor'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — Smart Contracts Development */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-cencera-surface) 0%, var(--color-cencera-surface-2) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#7DCD85]/20 border border-[#7DCD85]/40 text-[#7DCD85]">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                Smart Contracts Development
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                Solidity & Rust smart contracts, ERC-20/721 standards, upgradable proxy patterns, and Yul gas optimization.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['Solidity', 'Rust', 'Yul', 'Foundry', 'ERC-20'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — Tokens/Coins & CEX/DEX Listing */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-cencera-surface) 0%, var(--color-cencera-surface-2) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#88D5B5]/20 border border-[#88D5B5]/40 text-[#88D5B5]">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                Tokens & CEX / DEX Listing
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                Tokenomics, token smart contracts, AMM liquidity setup, and guaranteed listing on top CEX & DEX exchanges.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['Tokenomics', 'CEX Listing', 'DEX Launch', 'Uniswap'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Wide Banner Card (Spans All 3 Columns) — AI Apps, Web Dev & Audits */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col lg:col-span-3 transition-all duration-500 hover:scale-[1.005]"
            style={{
              background: 'linear-gradient(135deg, var(--color-cencera-surface-2) 0%, var(--color-cencera-surface) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono tracking-wider uppercase text-[#92DCE5] flex items-center gap-1.5">
                FULL-STACK, AI & SECURITY AUDIT CAPABILITIES //
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#92DCE5]/15 text-[#92DCE5]">
                  <Brain size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-cencera-text)' }}>
                  AI Apps & Web Dev
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  Autonomous AI agent workflows, custom RAG vector search, and sub-50ms ML inference pipelines.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#7DCD85]/20 text-[#7DCD85]">
                  <Globe size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-cencera-text)' }}>
                  Normal & Enterprise Web
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  Next.js 16, React 19, TypeScript, PostgreSQL, WebSockets, and high-concurrency backends.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#88D5B5]/20 text-[#88D5B5]">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-cencera-text)' }}>
                  Smart Contract Audits
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  Static security scans, formal verification, zero-trust pentesting, and official PDF audit certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-cencera-surface) 100%)',
        }}
      />
    </section>
  )
}
