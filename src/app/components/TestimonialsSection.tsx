'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

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
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  // Carousel: rotate to next 3 testimonials every 4 seconds
  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ]

  return (
    <section className="py-[80px] px-[16px] md:px-[20px] lg:px-[25px]">
      <div className="max-w-[1390px] mx-auto">
        <div className="rounded-[24px] p-[24px] md:p-[36px] lg:p-[48px]">
          <h2
            className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px] text-center mb-10 md:mb-14"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Hear From Those Who Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 min-h-[280px] md:min-h-[260px] relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {visible.map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-[#CBFF8F] rounded-[20px] p-[20px] md:p-[24px] flex flex-col sm:flex-row gap-4 sm:gap-5"
                >
                  <div className="flex-1 flex flex-col gap-3 min-w-0">
                    <p className="text-black text-[14px] md:text-[15px] leading-[1.55] line-clamp-4">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <span className="text-black font-semibold text-[14px] md:text-[15px] shrink-0">
                        {testimonial.author}
                      </span>
                      <div className="flex gap-0.5 shrink-0">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 2L9.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H6.5L8 2Z"
                              fill="black"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white self-start sm:self-center">
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
      </div>
    </section>
  )
}