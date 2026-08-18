import {
  Code2,
  Brain,
  Link2,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Coins,
  TrendingUp,
  Globe,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'DeFi & dApp Development, Smart Contracts, Token & Coin Creation, CEX/DEX Exchange Listing, AI Apps, Web Development, and Smart Contract Audits by CENCERA.',
}

const services = [
  {
    id: 'defi-dapps',
    icon: Link2,
    title: 'DeFi & dApp Engineering',
    description:
      'Decentralized exchanges (DEX), yield vaults, liquidity pools, staking protocols, and responsive Web3 dApps across EVM, Solana, and Move chains.',
    capabilities: [
      'DEX & Automated Market Makers (AMM)',
      'Staking & Yield Farming Vaults',
      'ERC-4626 & Custom Liquidity Pools',
      'Web3 Wallet Connect & dApp Interfaces',
      'Solidity & Solana Anchor Integration',
      'Zero-Knowledge Proofs (ZK)',
    ],
    tags: ['DeFi', 'dApp', 'Solidity', 'Rust', 'Anchor', 'Web3'],
    featured: true,
  },
  {
    id: 'smart-contracts',
    icon: Code2,
    title: 'Smart Contracts Development',
    description:
      'Production-ready smart contract architecture, token standards, upgradable proxy patterns, and custom protocol logic built with Solidity, Rust, and Yul.',
    capabilities: [
      'Custom EVM & Solana Smart Contracts',
      'Upgradable Proxy Architecture',
      'ERC-20, ERC-721, ERC-1155 Protocols',
      'Gas Optimization & Assembly (Yul)',
      'On-Chain Governance & DAOs',
      'Automated Contract Testing (Foundry)',
    ],
    tags: ['Solidity', 'Rust', 'Yul', 'Foundry', 'Hardhat', 'ERC-20'],
    featured: true,
  },
  {
    id: 'tokens-exchange-listing',
    icon: TrendingUp,
    title: 'Tokens/Coins Creation & CEX / DEX Listing',
    description:
      'End-to-end tokenomics, token contract development, liquidity pool setup, market making, and guaranteed listing execution on top CEX & DEX exchanges.',
    capabilities: [
      'Tokenomics & Vesting Schedules',
      'Custom Token Smart Contracts',
      'DEX Liquidity Pool Launching',
      'Top-Tier CEX Exchange Listing Execution',
      'Automated Market Making (AMM) Setup',
      'CoinGecko & CoinMarketCap Listing',
    ],
    tags: ['Tokenomics', 'CEX Listing', 'DEX Launch', 'Liquidity', 'Uniswap', 'Raydium'],
    featured: true,
  },
  {
    id: 'ai-apps',
    icon: Brain,
    title: 'AI-Powered Apps & Web Development',
    description:
      'LLM integrations, autonomous AI agents, custom RAG vector search, fine-tuning, computer vision, and sub-50ms ML inference backends for web & mobile.',
    capabilities: [
      'Autonomous AI Agent Workflows',
      'Custom RAG Vector Search Databases',
      'LLM Fine-Tuning & Prompt Engineering',
      'PyTorch & TorchServe Inference Engine',
      'Sub-50ms API Latency Optimization',
      'Gemini & OpenAI API Integration',
    ],
    tags: ['AI Agents', 'RAG', 'PyTorch', 'FastAPI', 'OpenAI', 'Gemini'],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Normal & Enterprise Web Development',
    description:
      'High-performance web applications, enterprise software, and mobile apps engineered with Next.js 16, React 19, TypeScript, and scalable cloud infrastructure.',
    capabilities: [
      'Next.js 16 & React 19 App Router',
      'TypeScript End-to-End Type Safety',
      'Real-Time WebSockets & SSE Streams',
      'PostgreSQL, Redis & Prisma Backends',
      'Pixel-Perfect Responsive UI/UX',
      'Serverless & Edge Deployment',
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 'smart-contract-audits',
    icon: ShieldCheck,
    title: 'Smart Contract Audits & Security',
    description:
      'Comprehensive smart contract static audits, formal verification, zero-trust penetration testing, logic flaw analysis, and official audit reports.',
    capabilities: [
      'Smart Contract Static Analysis',
      'Slither & Mythril Vulnerability Scans',
      'Formal Verification & Invariants',
      'Zero-Trust Penetration Testing',
      'Reentrancy & Logic Flaw Remediation',
      'Official Audit PDF Certificate Reports',
    ],
    tags: ['Audit', 'Penetration Testing', 'Security', 'OWASP', 'Zero-Trust', 'Foundry'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#92DCE5]"
          >
            What We Do //
          </p>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Services & Engineering
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            We cover the full spectrum of high-stakes software engineering — from DeFi, dApps, Tokens, and Exchange Listings to AI Apps, Web Development, and Smart Contract Audits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {/* Service 1 — DeFi & dApps */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-cencera-surface) 0%, var(--color-cencera-surface-2) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 bg-[#92DCE5]" />
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#92DCE5]/15 border border-[#92DCE5]/30 text-[#92DCE5]">
                  <Link2 size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#92DCE5]/15 text-[#92DCE5] border border-[#92DCE5]/30">
                  FLAGSHIP SERVICE
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[0].title}
              </h2>
              <p className="text-xs sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-8" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[0].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 sm:mb-8">
                {services[0].capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-cencera-text)' }}>
                    <CheckCircle2 size={14} className="text-[#92DCE5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-6 border-t border-white/10">
              {services[0].tags.map((tag) => (
                <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 2 — Smart Contracts */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-cencera-surface)',
              border: '1px solid var(--color-cencera-border)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#7DCD85]/20 border border-[#7DCD85]/40 text-[#7DCD85]">
                <Code2 size={24} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[1].title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[1].description}
              </p>
              <div className="space-y-2 mb-6">
                {services[1].capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    <CheckCircle2 size={13} className="text-[#7DCD85] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {services[1].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 3 — Tokens / Coins & Exchange Listing (Spans 2 Cols) */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-cencera-surface-2) 0%, var(--color-cencera-surface) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#88D5B5]/20 border border-[#88D5B5]/40 text-[#88D5B5]">
                  <TrendingUp size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#88D5B5]/15 text-[#88D5B5] border border-[#88D5B5]/30">
                  CEX & DEX EXECUTION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[2].title}
              </h2>
              <p className="text-xs sm:text-base leading-relaxed max-w-xl mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[2].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {services[2].capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-cencera-text)' }}>
                    <CheckCircle2 size={14} className="text-[#88D5B5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {services[2].tags.map((tag) => (
                <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 4 — AI Apps */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-cencera-surface)',
              border: '1px solid var(--color-cencera-border)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#92DCE5]/20 border border-[#92DCE5]/40 text-[#92DCE5]">
                <Brain size={24} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[3].title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[3].description}
              </p>
              <div className="space-y-2 mb-6">
                {services[3].capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    <CheckCircle2 size={13} className="text-[#92DCE5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {services[3].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 5 — Normal & Enterprise Web Development */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-cencera-surface)',
              border: '1px solid var(--color-cencera-border)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#7DCD85]/20 border border-[#7DCD85]/40 text-[#7DCD85]">
                <Globe size={24} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[4].title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[4].description}
              </p>
              <div className="space-y-2 mb-6">
                {services[4].capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    <CheckCircle2 size={13} className="text-[#7DCD85] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {services[4].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 6 — Smart Contract Audits & Security (Spans 2 Cols) */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-cencera-surface-2) 0%, var(--color-cencera-bg) 100%)',
              border: '1px solid var(--color-cencera-border-2)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#92DCE5]/20 border border-[#92DCE5]/40 text-[#92DCE5]">
                  <ShieldCheck size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#92DCE5]/15 text-[#92DCE5] border border-[#92DCE5]/30">
                  SECURITY AUDIT CERTIFICATION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                {services[5].title}
              </h2>
              <p className="text-xs sm:text-base leading-relaxed max-w-xl mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                {services[5].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {services[5].capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-cencera-text)' }}>
                    <CheckCircle2 size={14} className="text-[#92DCE5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {services[5].tags.map((tag) => (
                <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono" style={{ background: 'var(--color-cencera-bg)', color: 'var(--color-cencera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto py-12 px-4">
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tighter mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Have a High-Stakes Project in Mind?
          </h2>
          <p className="text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            We&apos;d love to learn about your technical requirements. Tell us what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="group btn-butter text-center inline-flex justify-center"
          >
            Start a Conversation //
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
