'use client'

import { motion, useReducedMotion, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import svgPaths from '../../imports/svg-p4rwj0t9df'
import imgImage3 from '../../assets/bad2f27ff5079a0e6ec2492bdc6955e6b191903e.png'

const testimonials = [
  {
    id: 1,
    text: "Sky Dental Center offers top-notch care with expert dentists and a welcoming atmosphere. My treatment was seamless and pain-free. Highly recommended!",
    author: "A Happy Patient",
    image: "https://images.unsplash.com/photo-1684607633024-f1a2179118fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRlbnRhbCUyMHBhdGllbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2Nzc4OTY1NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    text: "Exceptional service and expert care! The team ensures comfort and confidence at every step. The best choice for quality dental care.",
    author: "A Satisfied Client",
    image: "https://images.unsplash.com/photo-1681939283065-011297ba26eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjB3b21hbiUyMGRlbnRhbCUyMGNsaW5pY3xlbnwxfHx8fDE3Njc4NjU2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    text: "Professional, caring, and thorough! Every visit is a positive experience. The staff goes above and beyond to make you feel comfortable.",
    author: "A Delighted Patient",
    image: "https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwYXRpZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzg2NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    text: "Outstanding dental care with state-of-the-art technology. My smile has never looked better. Thank you, Sky Dental Center!",
    author: "A Grateful Client",
    image: "https://images.unsplash.com/photo-1684607633024-f1a2179118fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRlbnRhbCUyMHBhdGllbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2Nzc4OTY1NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    text: "Friendly staff, modern facilities, and painless procedures. I always feel taken care of. Highly recommend to anyone seeking dental excellence!",
    author: "A Loyal Patient",
    image: "https://images.unsplash.com/photo-1681939283065-011297ba26eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjB3b21hbiUyMGRlbnRhbCUyMGNsaW5pY3xlbnwxfHx8fDE3Njc4NjU2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    text: "From routine checkups to complex procedures, they handle everything with expertise and care. My go-to dental clinic!",
    author: "A Returning Patient",
    image: "https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwYXRpZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzg2NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  
  // Track which testimonials to show (show 3 at a time)
  const [startIndex, setStartIndex] = useState(0)
  
  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    if (shouldReduceMotion) return
    
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [shouldReduceMotion])
  
  // Get current 3 visible testimonials
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length]
  ]

  return (
    <section className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px]">
      <div className="max-w-[1390px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="rounded-[24px] p-[24px] md:p-[36px] lg:p-[48px]"
        >
          <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[48px] lg:gap-[64px]">
            {/* Left Content */}
            <div className="flex flex-col gap-[24px] md:gap-[32px] flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-[10px] h-[45px] px-[25px] py-[11px] rounded-[35px] backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] border border-[#1b1810] self-start">
                <div className="w-[13.627px] h-[13.627px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 13.6274 13.6274">
                    <rect fill="#1B1810" fillOpacity="0.2" width="13.6274" height="13.6274" rx="6.81372" />
                    <circle cx="6.81372" cy="6.81372" r="4.5" fill="#1B1810" />
                  </svg>
                </div>
                <span className="text-[#1b1810] text-[16px]">Testimonial</span>
              </div>

              {/* Heading */}
              <h2
                className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px]"
                style={{ fontFamily: "'Gilda Display', serif" }}
              >
                Hear What Our Thrilled Clientele Have to Say
              </h2>

              {/* Learn More Button */}
              <button className="bg-[#cbff8f] flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-[8px] md:pr-[10px] py-2 rounded-[35px] self-start hover:bg-[#B1FF57] transition-colors mt-[8px] md:mt-[16px]">
                <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">Learn More</span>
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
            </div>

            {/* Right Testimonials */}
            <div className="flex flex-col gap-[16px] md:gap-[20px] flex-1 relative overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    layout
                    initial={{ 
                      y: shouldReduceMotion ? 0 : 100, 
                      opacity: shouldReduceMotion ? 1 : 0 
                    }}
                    animate={{ 
                      y: 0, 
                      opacity: 1 
                    }}
                    exit={{ 
                      y: shouldReduceMotion ? 0 : -100, 
                      opacity: shouldReduceMotion ? 1 : 0 
                    }}
                    transition={{ 
                      duration: shouldReduceMotion ? 0 : 0.5,
                      ease: "easeInOut"
                    }}
                    className="bg-[#cbff8f] rounded-[20px] p-[20px] md:p-[24px] flex gap-[16px] md:gap-[20px]"
                  >
                    <div className="flex-1 flex flex-col gap-[12px] md:gap-[16px]">
                      <p className="text-black text-[14px] md:text-[15px] leading-[1.5]">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-black font-semibold text-[14px] md:text-[15px]">{testimonial.author}</span>
                        <div className="flex gap-[4px]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" viewBox="0 0 16 16" fill="none">
                              <path d="M8 2L9.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H6.5L8 2Z" fill="black" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}