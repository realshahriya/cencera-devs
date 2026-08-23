"use client"

import {
  Brain,
  Code2,
  Link2,
  TrendingUp,
  Globe,
  ShieldCheck,
  ArrowRight,
  Layers,
} from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      <div className="container-cencera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="section-tag">
              <Layers size={14} className="text-[#3B82F6]" />
              <span>WHAT WE DO //</span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tighter"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Engineering Across Every Layer
            </h2>
          </div>
          <Link
            href="/services"
            className="group btn-butter-secondary !py-2.5 !px-6 text-xs shrink-0"
          >
            View all services //
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Soft UI Bento Grid: Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — DeFi & dApp Engineering */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div>
              <div className="soft-icon-box mb-6">
                <Link2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                DeFi &amp; dApp Development
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                DEXs, yield vaults, liquidity pools, staking protocols, and Web3 dApps across EVM, Solana, and Move.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {['DeFi', 'dApps', 'Solidity', 'Rust', 'Anchor'].map((tag) => (
                <span key={tag} className="soft-pill font-mono text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — Smart Contracts Development */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div>
              <div className="soft-icon-box mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                Smart Contracts Development
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                Solidity &amp; Rust smart contracts, ERC-20/721 standards, upgradable proxy patterns, and Yul gas optimization.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {['Solidity', 'Rust', 'Yul', 'Foundry', 'ERC-20'].map((tag) => (
                <span key={tag} className="soft-pill font-mono text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — Tokens/Coins & CEX/DEX Listing */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div>
              <div className="soft-icon-box mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                Tokens &amp; CEX / DEX Listing
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                Tokenomics, token smart contracts, AMM liquidity setup, and guaranteed listing on top CEX &amp; DEX exchanges.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {['Tokenomics', 'CEX Listing', 'DEX Launch', 'Uniswap'].map((tag) => (
                <span key={tag} className="soft-pill font-mono text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Wide Banner Card (Spans All 3 Columns) — AI Apps, Web Dev & Audits */}
          <div className="soft-card group relative p-8 sm:p-10 flex flex-col lg:col-span-3">
            <div className="mb-8">
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3"
                style={{ color: 'var(--color-cencera-text)' }}
              >
                AI Applications, Web Engineering &amp; Security Audits
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed max-w-3xl"
                style={{ color: 'var(--color-cencera-muted-2)' }}
              >
                End-to-end technical execution: custom LLM agents, high-frequency backend pipelines, Next.js web applications, and rigorous smart contract security audits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <div className="soft-card-inset p-5 flex flex-col justify-between">
                <div>
                  <div className="soft-icon-box !w-10 !h-10 mb-4">
                    <Brain size={20} />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: 'var(--color-cencera-text)' }}>
                    AI &amp; LLM Engineering
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    Autonomous AI agents, RAG, PyTorch model fine-tuning, and LangChain pipelines.
                  </p>
                </div>
              </div>

              <div className="soft-card-inset p-5 flex flex-col justify-between">
                <div>
                  <div className="soft-icon-box !w-10 !h-10 mb-4">
                    <Globe size={20} />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: 'var(--color-cencera-text)' }}>
                    Modern Web Applications
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    Next.js 16, TypeScript, React 19, and cloud-native scalable microservices.
                  </p>
                </div>
              </div>

              <div className="soft-card-inset p-5 flex flex-col justify-between">
                <div>
                  <div className="soft-icon-box !w-10 !h-10 mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: 'var(--color-cencera-text)' }}>
                    Smart Contract Audits
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    Static analysis, formal verification, Slither, and manual security reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
