'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Don't show custom cursor on mobile/touch devices or if user prefers reduced motion
    if (shouldReduceMotion || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
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
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [shouldReduceMotion])

  // Don't render on mobile or if reduced motion is preferred
  if (shouldReduceMotion || typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
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
