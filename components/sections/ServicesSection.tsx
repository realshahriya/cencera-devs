"use client"

import {
  Brain,
  Code2,
  Link2,
  Cloud,
  Palette,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Engineering Across Every Layer
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold shrink-0 transition-colors duration-200"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View all services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Distinct Bento Box Grid 2: Horizontal Tiered Structure (3 Top Equal Cards + 1 Full-Width Bottom Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Row Card 1 — AI Systems & RAG Pipelines */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#068d9d]/15 border border-[#068d9d]/30 text-[#80ded9]">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                AI Systems & Fine-Tuning
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted-2)' }}>
                LLM integration, fine-tuning, RAG vector pipelines, and sub-50ms inference engines built with PyTorch and FastAPI.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['PyTorch', 'RAG', 'LangChain', 'FastAPI'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Top Row Card 2 — Full Stack Web & Mobile */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#53599a]/20 border border-[#53599a]/40 text-[#80ded9]">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                Full Stack Web Apps
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted-2)' }}>
                High-concurrency web and mobile platforms engineered with Next.js 16, TypeScript, WebSockets, and PostgreSQL.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['Next.js 16', 'TypeScript', 'React 19', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Top Row Card 3 — Web3 & Blockchain Protocols */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(180deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#068d9d]/20 border border-[#068d9d]/40 text-[#aeecef]">
                <Link2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                Web3 & Blockchain Protocols
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted-2)' }}>
                Solidity and Rust smart contracts, zero-knowledge proofs, and DeFi vaults across EVM and Solana chains.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {['Solidity', 'Rust', 'Anchor', 'Solana'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row Wide Banner Card (Spans All 3 Columns on Desktop) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col lg:col-span-3 transition-all duration-500 hover:scale-[1.005]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-surface) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono tracking-wider uppercase text-[#80ded9] flex items-center gap-1.5">
                <Cloud size={14} /> CLOUD, SECURITY & INFRASTRUCTURE CAPABILITIES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#068d9d]/15 text-[#80ded9]">
                  <Cloud size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                  Cloud & DevOps
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  Kubernetes cluster management, Terraform IaC, and Docker containerization.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#53599a]/25 text-[#aeecef]">
                  <Shield size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                  Security & Audits
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  Zero-trust penetration testing and smart contract static audits.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#6d9dc5]/20 text-[#6d9dc5]">
                  <Zap size={20} />
                </div>
                <h4 className="text-base font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                  gRPC & GraphQL APIs
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  High-throughput gRPC streaming and distributed telemetry backends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-surface) 100%)',
        }}
      />
    </section>
  )
}
