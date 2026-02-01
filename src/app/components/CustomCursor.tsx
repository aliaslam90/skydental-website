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
        <div className="w-12 h-12 md:w-14 md:h-14">
          <ToothLogo />
        </div>
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
      {/* Stylized tooth with intertwining lines - two continuous dark blue lines */}
      <g stroke="#0C0060" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* First line: bottom left root -> up to crown -> intertwines -> down to bottom right root */}
        <path 
          d="M30 90 
             C25 85, 20 75, 25 60
             C30 45, 35 35, 40 30
             C42 28, 45 26, 50 25
             C55 26, 58 28, 60 30
             C65 35, 70 45, 75 60
             C80 75, 75 85, 70 90" 
        />
        {/* Second line: bottom right root -> up to crown -> intertwines -> down to bottom left root */}
        <path 
          d="M70 90 
             C75 85, 80 75, 75 60
             C70 45, 65 35, 60 30
             C58 28, 55 26, 50 25
             C45 26, 42 28, 40 30
             C35 35, 30 45, 25 60
             C20 75, 25 85, 30 90" 
        />
      </g>
    </svg>
  )
}
