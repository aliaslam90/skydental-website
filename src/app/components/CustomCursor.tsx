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
        <ToothLogo />
      </div>
    </div>
  )
}

function ToothLogo() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Single continuous dark blue line - starts bottom left, curves up to crown, intertwines in middle, forms roots */}
      <path 
        stroke="#0C0060" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
        d="M28 92 
           Q22 88, 20 82
           Q18 72, 22 58
           Q26 44, 32 34
           Q36 28, 42 25
           Q45 23, 48 22
           Q50 21, 52 22
           Q55 23, 58 25
           Q64 28, 68 34
           Q74 44, 78 58
           Q82 72, 80 82
           Q78 88, 72 92
           Q68 90, 64 92
           Q60 90, 56 92
           Q52 90, 48 92
           Q44 90, 40 92
           Q36 90, 32 92
           Q30 92, 28 92"
      />
    </svg>
  )
}
