'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState, useCallback, useEffect } from 'react'
import imgFeP2ZzQx9VG9AjMrPfeb0N3UDkJpg from 'figma:asset/088aac21103ad32cfae40ab80743ee00c733ec5e.png'
import img3WwYqzhCzeuAa0TSlhUw9W1OcJpeg from 'figma:asset/c25fd727883742a604968c2f6e0b9b6946936405.png'

export default function ResultsSection() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  
  // Track slider position (0-100%)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Clamp between 0 and 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }, [isDragging])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add/remove event listeners when dragging state changes
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <section className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px]">
      <div className="max-w-[1390px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="bg-[#e0edff] rounded-[24px] p-[24px] md:p-[36px] lg:p-[48px]"
        >
          <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[64px]">
            {/* Before/After Images */}
            <motion.div
              ref={containerRef}
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="relative w-full lg:w-[600px] h-[400px] md:h-[500px] lg:h-[565px] rounded-[12px] overflow-hidden select-none"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {/* After Image (Full width - underneath) */}
              <div className="absolute inset-0">
                <img
                  src={img3WwYqzhCzeuAa0TSlhUw9W1OcJpeg}
                  alt="After treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" />
                
                {/* After Label */}
                <div className="absolute top-[20px] right-[20px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#0C0060] font-semibold text-[14px]">AFTER</span>
                </div>
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div 
                className="absolute inset-0 transition-all duration-100"
                style={{ 
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  pointerEvents: 'none'
                }}
              >
                <img
                  src={imgFeP2ZzQx9VG9AjMrPfeb0N3UDkJpg}
                  alt="Before treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
                
                {/* Before Label */}
                <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#0C0060] font-semibold text-[14px]">BEFORE</span>
                </div>
              </div>

              {/* Draggable Divider with controls */}
              <div 
                className="absolute top-0 bottom-0 w-[4px] bg-white transition-all duration-100"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[8px]">
                  {/* Left Arrow */}
                  <button 
                    className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSliderPosition(Math.max(0, sliderPosition - 10))
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M12 15L7 10L12 5" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {/* Right Arrow */}
                  <button 
                    className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSliderPosition(Math.min(100, sliderPosition + 10))
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M8 5L13 10L8 15" stroke="#0C0060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="flex flex-col gap-[32px] md:gap-[40px] lg:gap-[46px] max-w-full lg:max-w-[610px]"
            >
              <div className="flex flex-col gap-[16px]">
                <h2
                  className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px] capitalize"
                  style={{ fontFamily: "'Gilda Display', serif" }}
                >
                  Your excellent results
                </h2>
                <p className="text-[#202020] text-[16px] leading-[1.55]">
                  To deliver comprehensive, high-quality dental care using advanced technology and evidence-based clinical practices. We are committed to creating healthy, confident smiles through personalised, safe, and comfortable treatment experiences.
                </p>
              </div>

              <button className="bg-[#cbff8f] flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-[8px] md:pr-[10px] py-2 rounded-[35px] self-start hover:bg-[#B1FF57] transition-colors">
                <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">Request Appointment</span>
                <div className="bg-[#97c4ff] w-[32px] h-[32px] md:w-[34px] md:h-[34px] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path 
                      d="M5 15L15 5" 
                      stroke="#CBFF8F" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M6.875 5H15V13.125" 
                      stroke="#CBFF8F" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}