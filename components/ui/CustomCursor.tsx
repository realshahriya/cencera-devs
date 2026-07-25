"use client"

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)

  const mouseRef = useRef({ x: -100, y: -100 })
  const currentRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      const interactiveEl = target?.closest('a, button, input, textarea, select, [role="button"]')

      if (interactiveEl) {
        setIsHovered(true)
        if (interactiveEl.tagName === 'A' || interactiveEl.closest('a')) {
          setHoverText('LINK')
        } else if (interactiveEl.tagName === 'BUTTON' || interactiveEl.closest('button')) {
          setHoverText('EXEC')
        } else if (interactiveEl.tagName === 'INPUT' || interactiveEl.tagName === 'TEXTAREA') {
          setHoverText('EDIT')
        } else {
          setHoverText('VIEW')
        }
      } else {
        setIsHovered(false)
        setHoverText('')
      }
    }

    // Smooth viscous LERP tracking loop
    const updatePhysics = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.16
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.16

      setPosition({
        x: Math.round(currentRef.current.x * 100) / 100,
        y: Math.round(currentRef.current.y * 100) / 100,
      })

      animId = requestAnimationFrame(updatePhysics)
    }

    updatePhysics()

    const onMouseDown = () => setIsMouseDown(true)
    const onMouseUp = () => setIsMouseDown(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Inner Laser Dot (#80ded9 / #068d9d) */}
      <div
        className="fixed top-0 left-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isMouseDown ? 0.6 : 1
          })`,
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#80ded9] shadow-[0_0_10px_#80ded9,0_0_20px_#068d9d]" />
      </div>

      {/* Developer Reticle Outer Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isMouseDown ? 0.8 : isHovered ? 1.35 : 1
          })`,
        }}
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 rounded-xl border border-[#80ded9]/80 bg-[#068d9d]/15 backdrop-blur-[2px] shadow-[0_0_20px_rgba(128,222,217,0.4)]'
              : 'w-9 h-9 rounded-full border border-[#068d9d]/40 bg-[#068d9d]/5'
          }`}
        >
          {/* Corner Brackets on Hover */}
          {isHovered ? (
            <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-[#aeecef] tracking-wider">
              <span>{hoverText || '</>'}</span>
            </div>
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-[#80ded9]/60" />
          )}

          {/* Crosshair Corner Indicators */}
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#80ded9]/80" />
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#80ded9]/80" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#80ded9]/80" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#80ded9]/80" />
        </div>
      </div>
    </div>
  )
}
