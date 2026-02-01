'use client'

import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Don't show custom cursor on mobile/touch devices or if user prefers reduced motion
    if (shouldReduceMotion || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const animate = () => {
      // Smooth interpolation for following effect
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`
        cursorRef.current.style.top = `${currentY}px`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    // Hide default cursor
    const style = document.createElement('style')
    style.textContent = `
      * {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.head.removeChild(style)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [shouldReduceMotion])

  // Don't render on mobile or if reduced motion is preferred
  if (shouldReduceMotion || typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
        willChange: 'transform',
      }}
    >
      <div className="flex items-center justify-center">
        <div className="bg-[#cbff8f] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg border border-[#0C0060]/10">
          <span 
            className="text-[#0C0060] font-bold text-xs md:text-sm whitespace-nowrap tracking-tight"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Sky Dental
          </span>
        </div>
      </div>
    </div>
  )
}
