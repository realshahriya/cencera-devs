import Link from 'next/link'
import { ArrowRight, ShieldCheck, Cpu, Compass, HeartHandshake, Award, Sparkles } from 'lucide-react'
import { CenceraLogo } from '@/components/ui/CenceraLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Cencera Devs',
  description: 'Learn about CENCERA DEVS — our story, mission, and approach to software engineering.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6" style={{ background: 'var(--color-cencera-bg)' }}>
      <div className="container-cencera">
        {/* Story Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div>
            <div className="section-tag">
              <Award size={14} className="text-[#3B82F6]" />
              <span>OUR ORIGIN &amp; STORY //</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1]"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Built by Engineers,
              <br />
              <span className="text-gradient-accent">
                For Engineers.
              </span>
            </h1>
            <p
              className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6"
              style={{ color: 'var(--color-cencera-muted-2)' }}
            >
              Cencera Devs was founded on a simple conviction: the best software comes from teams who care deeply about their craft. We&apos;re not a typical agency — we&apos;re elite engineers who partner with high-stakes founders.
            </p>
            <p
              className="text-xs sm:text-base leading-relaxed"
              style={{ color: 'var(--color-cencera-muted-2)' }}
            >
              Our mission is to build resilient software infrastructure and high-throughput systems that power the next generation of AI, Web3, and cloud infrastructure.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="soft-card p-8 sm:p-14 w-full max-w-sm sm:max-w-none flex items-center justify-center">
              <CenceraLogo className="w-28 sm:w-40 h-28 sm:h-40 opacity-90 transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Values Bento Box Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <div className="section-tag">
              <Compass size={14} className="text-[#3B82F6]" />
              <span>HOW WE WORK //</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-cencera-text)' }}
            >
              Our Core Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1 — First Principles (Spans 2 Cols) */}
            <div className="soft-card group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between lg:col-span-2">
              <div>
                <div className="soft-icon-box mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                  Engineering First Principles
                </h3>
                <p className="text-xs sm:text-base leading-relaxed max-w-xl" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  We start every project by understanding the problem at a systems level. No premature solutions. No cargo-culted frameworks. Just clear architectural thinking and the exact right tools for the job.
                </p>
              </div>
            </div>

            {/* Bento Card 2 — Craftsmanship */}
            <div className="soft-card group relative p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="soft-icon-box mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                  Craftsmanship Over Speed
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  We take the time to get architecture decisions right from day one rather than spending months refactoring bad tech choices.
                </p>
              </div>
            </div>

            {/* Bento Card 3 — Ownership */}
            <div className="soft-card group relative p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="soft-icon-box mb-6">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-cencera-text)' }}>
                  Long-Term Ownership
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                  We treat client codebases as if they were our own. We write software we are confident maintaining five years down the road.
                </p>
              </div>
            </div>

            {/* Bento Card 4 — Communication (Spans 2 Cols) */}
            <div className="soft-card group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="soft-icon-box shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--color-cencera-text)' }}>
                    Direct &amp; Honest Technical Communication
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
                    We tell clients what they need to hear, not just what is convenient. If a proposed technical path will break at scale, we speak up immediately and provide a battle-tested alternative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="soft-card text-center max-w-3xl mx-auto p-8 sm:p-12">
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Want to Build With Us?
          </h2>
          <p className="text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--color-cencera-muted-2)' }}>
            We&apos;re always open to partnering on ambitious engineering projects.
          </p>
          <Link
            href="/contact"
            className="group btn-butter text-center inline-flex justify-center gap-2"
          >
            <Sparkles size={16} />
            Get in touch // <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
