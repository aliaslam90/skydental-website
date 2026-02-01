'use client'

import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export default function CustomCursor() {
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
      // Smooth interpolation for trailing effect
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
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
      <div className="w-10 h-10 md:w-12 md:h-12">
        <img 
          src="/tooth-logo.png" 
          alt="Sky Dental Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
