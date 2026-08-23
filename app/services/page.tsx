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
  Layers,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering Services & Solutions — Cencera Devs',
  description: 'Explore Cencera Devs engineering services: AI Applications & LLMs, DeFi & Web3 Protocols, Smart Contract Audits, Token Listings, and Enterprise Full Stack Web Apps.',
  keywords: ['AI engineering', 'Web3 software development', 'Smart contract audits', 'Token CEX listing', 'Full stack development agency'],
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
    badge: 'FLAGSHIP SERVICE',
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
  },
  {
    id: 'tokens-exchange-listing',
    icon: TrendingUp,
    title: 'Tokens & CEX / DEX Listing',
    description:
      'Tokenomics design, ERC-20 / SPL token development, liquidity deployment, market making strategy, and guaranteed listings on premier exchanges.',
    capabilities: [
      'Tokenomics & Vesting Architecture',
      'ERC-20 / SPL Token Smart Contracts',
      'Liquidity Pool Deployment & AMM Setup',
      'CEX & DEX Exchange Listing Execution',
      'Automated Market Making (AMM) Strategy',
      'Launchpad & Token Sale Portals',
    ],
    tags: ['Tokens', 'CEX Listing', 'DEX Launch', 'Uniswap', 'Tokenomics'],
    badge: 'EXCHANGE EXECUTION',
  },
  {
    id: 'ai-apps',
    icon: Brain,
    title: 'AI & LLM Applications',
    description:
      'Custom autonomous AI agents, Retrieval-Augmented Generation (RAG) pipelines, model fine-tuning, and intelligent automation systems.',
    capabilities: [
      'Custom Autonomous AI Agents',
      'Retrieval-Augmented Generation (RAG)',
      'Model Fine-Tuning & Quantization',
      'PyTorch & TensorFlow Pipelines',
      'LangChain & LlamaIndex Integrations',
      'Real-Time Vector Database Setup',
    ],
    tags: ['PyTorch', 'LangChain', 'Python', 'RAG', 'Vector DB'],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web & Enterprise Systems',
    description:
      'High-performance web applications, cloud-native SaaS platforms, microservices architecture, and real-time streaming data backends.',
    capabilities: [
      'Next.js 16 & React 19 Applications',
      'TypeScript & Modern Frontend Systems',
      'Cloud Microservices (AWS & GCP)',
      'High-Concurrency Backend APIs',
      'Real-Time WebSocket Data Streams',
      'Enterprise SaaS Architecture',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'smart-contract-audits',
    icon: ShieldCheck,
    title: 'Smart Contract Audits & Security',
    description:
      'Comprehensive security audits, static code analysis, formal verification, fuzz testing, and mathematical proof of contract safety.',
    capabilities: [
      'Manual Code Review & Architecture Audit',
      'Static Analysis (Slither & Mythril)',
      'Fuzz Testing & Invariant Checking',
      'Formal Verification & Math Proofs',
      'Detailed Security Audit Reports',
      'Post-Audit Certification & Support',
    ],
    tags: ['Security Audit', 'Slither', 'Foundry', 'Formal Verification'],
    badge: 'SECURITY CERTIFICATION',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <div className="section-tag">
            <Layers size={14} className="text-[#3B82F6]" />
            <span>WHAT WE DO //</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Services &amp; Engineering
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            We cover the full spectrum of high-stakes software engineering — from DeFi, dApps, Tokens, and Exchange Listings to AI Apps, Web Development, and Smart Contract Audits.
          </p>
        </div>

        {/* Soft UI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {services.map((service) => {
            const Icon = service.icon
            const isWide = service.badge !== undefined

            return (
              <article
                key={service.id}
                id={service.id}
                className={`soft-card group relative p-6 sm:p-8 flex flex-col justify-between ${isWide ? 'lg:col-span-2' : ''
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                    <div className="soft-icon-box">
                      <Icon size={24} />
                    </div>
                    {service.badge && (
                      <span className="soft-pill font-mono text-[11px]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-base leading-relaxed mb-6" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-cencera-text)' }}>
                        <CheckCircle2 size={14} className="text-[#3B82F6] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="soft-pill font-mono text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="soft-card text-center max-w-3xl mx-auto p-8 sm:p-12">
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
            className="group btn-butter text-center inline-flex justify-center gap-2"
          >
            <Sparkles size={16} />
            Start a Conversation //
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
