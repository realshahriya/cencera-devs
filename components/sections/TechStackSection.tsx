"use client"

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiGo,
  SiRust,
  SiPostgresql,
  SiRedis,
  SiSolidity,
  SiKubernetes,
  SiTerraform,
  SiDocker,
  SiPytorch,
  SiLangchain,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { Cpu } from 'lucide-react'

interface TechBadge {
  name: string
  icon: IconType
}

const frontendTech: TechBadge[] = [
  { name: 'Next.js 16', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React 19', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

const aiTech: TechBadge[] = [
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'Python', icon: SiPython },
]

const web3Tech: TechBadge[] = [
  { name: 'Rust', icon: SiRust },
  { name: 'Go', icon: SiGo },
  { name: 'Solidity', icon: SiSolidity },
]

const cloudTech: TechBadge[] = [
  { name: 'AWS', icon: FaAws },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Docker', icon: SiDocker },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
]

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-cencera-bg)' }}
    >
      <div className="container-cencera relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <div className="section-tag">
            <Cpu size={14} className="text-[#1D4ED8]" />
            <span>OUR TECH STACK //</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#020617]"
          >
            Technologies We Master
          </h2>
          <p className="text-base leading-relaxed text-[#1E293B] font-medium">
            We leverage production-proven tools and modern frameworks to deliver scalable, high-performance software.
          </p>
        </div>

        {/* Soft Light Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 — Frontend & Full Stack */}
          <div className="soft-card group relative p-8 flex flex-col justify-between lg:col-span-2">
            <div className="mb-6">
              <span className="soft-pill font-mono text-xs mb-3">
                FRONTEND &amp; FULL-STACK ENGINE
              </span>
              <h3 className="text-2xl font-bold mt-2 text-[#020617]">
                Modern Web &amp; Client Applications
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {frontendTech.map(({ name, icon: Icon }) => (
                <div key={name} className="soft-card-inset p-4 flex flex-col items-center gap-2.5 text-center">
                  <Icon size={24} className="text-[#1D4ED8]" />
                  <span className="text-xs font-bold text-[#0F172A]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — AI & ML */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div className="mb-6">
              <span className="soft-pill font-mono text-xs mb-3">
                AI &amp; INTELLIGENCE
              </span>
              <h3 className="text-2xl font-bold mt-2 text-[#020617]">
                Machine Learning &amp; LLMs
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {aiTech.map(({ name, icon: Icon }) => (
                <div key={name} className="soft-card-inset p-3 flex flex-col items-center gap-2 text-center">
                  <Icon size={22} className="text-[#1D4ED8]" />
                  <span className="text-[11px] font-bold text-[#0F172A]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — Systems & Web3 */}
          <div className="soft-card group relative p-8 flex flex-col justify-between">
            <div className="mb-6">
              <span className="soft-pill font-mono text-xs mb-3">
                SYSTEMS &amp; PROTOCOLS
              </span>
              <h3 className="text-2xl font-bold mt-2 text-[#020617]">
                High-Performance Core
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {web3Tech.map(({ name, icon: Icon }) => (
                <div key={name} className="soft-card-inset p-3 flex flex-col items-center gap-2 text-center">
                  <Icon size={22} className="text-[#1D4ED8]" />
                  <span className="text-[11px] font-bold text-[#0F172A]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 — Cloud Infrastructure (Spans 2 Columns) */}
          <div className="soft-card group relative p-8 flex flex-col justify-between lg:col-span-2">
            <div className="mb-6">
              <span className="soft-pill font-mono text-xs mb-3">
                CLOUD &amp; DATA INFRASTRUCTURE
              </span>
              <h3 className="text-2xl font-bold mt-2 text-[#020617]">
                Enterprise Scale &amp; Databases
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {cloudTech.map(({ name, icon: Icon }) => (
                <div key={name} className="soft-card-inset p-3 flex flex-col items-center gap-2 text-center">
                  <Icon size={22} className="text-[#1D4ED8]" />
                  <span className="text-[11px] font-bold text-[#0F172A]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
