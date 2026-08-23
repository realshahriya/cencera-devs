"use client"

import { useEffect, useRef } from 'react'

interface CodeBackgroundCanvasProps {
  variant?: 'hero' | 'cta'
  className?: string
}

const CODE_SYMBOLS = [
  '{}',
  '</>',
  '=>',
  'fn()',
  'async',
  '01',
  'struct',
  ';',
  '//',
  'import',
  'return',
  '0x1F',
  'verify()',
  'try',
  'const',
  'await',
  'type',
  'git',
]

interface NodeParticle {
  x: number
  y: number
  vx: number
  vy: number
  symbol: string
  size: number
  alpha: number
  baseAlpha: number
  pulseSpeed: number
  pulseAngle: number
}

interface CircuitTrack {
  points: { x: number; y: number }[]
  signals: { progress: number; speed: number; char: string; alpha: number }[]
}

export function CodeBackgroundCanvas({ variant = 'hero', className = '' }: CodeBackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let dpr = window.devicePixelRatio || 1

    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Mouse state for interactive feel
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Read brand colors from CSS variables
    const style = getComputedStyle(document.documentElement)
    const neonRgb = style.getPropertyValue('--color-cencera-neon-rgb').trim() || '29, 78, 216'
    const secRgb = style.getPropertyValue('--color-cencera-secondary-rgb').trim() || '37, 99, 235'

    // Generate PCB / Neural Circuit Tracks
    const trackCount = variant === 'hero' ? 16 : 10
    const tracks: CircuitTrack[] = []

    for (let t = 0; t < trackCount; t++) {
      const startX = Math.random() * width
      const startY = Math.random() * height
      const segments = Math.floor(Math.random() * 3) + 3
      const points: { x: number; y: number }[] = [{ x: startX, y: startY }]

      let currX = startX
      let currY = startY

      for (let s = 0; s < segments; s++) {
        const dir = Math.floor(Math.random() * 4)
        const dist = Math.random() * 120 + 60

        if (dir === 0) currX += dist
        else if (dir === 1) currX -= dist
        else if (dir === 2) {
          currX += dist * 0.7
          currY += dist * 0.7
        } else {
          currY += (Math.random() > 0.5 ? 1 : -1) * dist
        }

        points.push({ x: currX, y: currY })
      }

      // Add animated data signals traveling along this track
      const signals = [
        {
          progress: Math.random(),
          speed: Math.random() * 0.0035 + 0.002,
          char: Math.random() > 0.4 ? '1' : '0',
          alpha: Math.random() * 0.4 + 0.5,
        },
        {
          progress: Math.random(),
          speed: Math.random() * 0.0035 + 0.002,
          char: Math.random() > 0.5 ? '•' : '0',
          alpha: Math.random() * 0.35 + 0.45,
        },
      ]

      tracks.push({ points, signals })
    }

    // Instantiate floating code particles
    const particleCount = variant === 'hero' ? 36 : 22
    const particles: NodeParticle[] = []

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.3 + 0.35
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.08,
        symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        size: Math.floor(Math.random() * 3) + 11,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseAngle: Math.random() * Math.PI * 2,
      })
    }

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw Special High-Contrast Neural / Circuit PCB Tracks
      tracks.forEach((track) => {
        const pts = track.points
        if (pts.length < 2) return

        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)

        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y)
        }

        const midPt = pts[Math.floor(pts.length / 2)]
        const mdx = midPt.x - mouse.x
        const mdy = midPt.y - mouse.y
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        const isNearMouse = mdist < mouse.radius

        ctx.strokeStyle = isNearMouse
          ? `rgba(${neonRgb}, ${0.55 + (1 - mdist / mouse.radius) * 0.45})`
          : `rgba(${neonRgb}, 0.16)`
        ctx.lineWidth = isNearMouse ? 1.75 : 1.25
        ctx.stroke()

        // Micro-via terminal pads
        pts.forEach((pt) => {
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = isNearMouse ? `rgba(${secRgb}, 0.9)` : `rgba(${neonRgb}, 0.35)`
          ctx.fill()
        })

        // Draw Animated High-Contrast Signals along track
        track.signals.forEach((sig) => {
          sig.progress += sig.speed
          if (sig.progress > 1) sig.progress = 0

          const totalSegs = pts.length - 1
          const segIndex = Math.min(Math.floor(sig.progress * totalSegs), totalSegs - 1)
          const segProgress = (sig.progress * totalSegs) - segIndex

          const p1 = pts[segIndex]
          const p2 = pts[segIndex + 1]
          if (!p1 || !p2) return

          const sx = p1.x + (p2.x - p1.x) * segProgress
          const sy = p1.y + (p2.y - p1.y) * segProgress

          ctx.font = '800 11px "JetBrains Mono", monospace'
          ctx.fillStyle = `rgba(${neonRgb}, ${sig.alpha})`
          ctx.fillText(sig.char, sx, sy)
        })
      })

      // 2. Draw Code Particles & Connecting Constellations
      ctx.font = '700 12px "JetBrains Mono", "Fira Code", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 110

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.22
            ctx.strokeStyle = `rgba(${neonRgb}, ${lineAlpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update & render code particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -30) p.x = width + 30
        if (p.x > width + 30) p.x = -30
        if (p.y < -30) p.y = height + 30
        if (p.y > height + 30) p.y = -30

        p.pulseAngle += p.pulseSpeed
        p.alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.05

        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        let highlightAlpha = p.alpha
        let scale = 1

        if (mdist < mouse.radius) {
          const proximity = 1 - mdist / mouse.radius
          highlightAlpha = Math.min(1, p.alpha + proximity * 0.4)
          scale = 1 + proximity * 0.15

          p.x += (mdx / mdist) * proximity * 0.4
          p.y += (mdy / mdist) * proximity * 0.4
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        if (scale !== 1) ctx.scale(scale, scale)

        // Soft light pill container
        ctx.fillStyle = '#FFFFFF'
        const textWidth = ctx.measureText(p.symbol).width + 14
        ctx.beginPath()
        ctx.roundRect(-textWidth / 2, -11, textWidth, 22, 11)
        ctx.fill()

        ctx.strokeStyle = `rgba(${neonRgb}, 0.45)`
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Code text in deep royal blue
        ctx.fillStyle = `rgb(${neonRgb})`
        ctx.fillText(p.symbol, 0, 0)
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 ${className}`}
    />
  )
}
