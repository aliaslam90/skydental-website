'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = shouldReduceMotion ? 0 : 2000
    const startTime = Date.now()

    const animateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOut(progress)

      setCount1(Math.floor(easedProgress * 10))
      setCount2(Math.floor(easedProgress * 50))
      setCount3(Math.floor(easedProgress * 10000))

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      } else {
        // Ensure we hit exact final values
        setCount1(10)
        setCount2(50)
        setCount3(10000)
      }
    }

    if (duration === 0) {
      setCount1(10)
      setCount2(50)
      setCount3(10000)
    } else {
      requestAnimationFrame(animateCount)
    }
  }, [isInView, shouldReduceMotion])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  }

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1390px] mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[24px] md:gap-[32px] lg:gap-0 mb-[40px] md:mb-[50px] lg:mb-[60px] max-w-[1294px] mx-auto">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-[10px] h-[40px] md:h-[45px] px-[20px] md:px-[25px] py-[9px] md:py-[11px] rounded-[35px] backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] border border-[#0061af]">
              <div className="w-[13.627px] h-[13.627px] flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 13.6274 13.6274">
                  <rect fill="#B3CFE7" width="13.6274" height="13.6274" rx="6.81372" />
                  <circle cx="6.81372" cy="6.81372" r="4.5" fill="#0061AF" />
                </svg>
              </div>
              <span className="text-[#0061af] text-[14px] md:text-[16px]">About</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-black text-[24px] md:text-[30px] lg:text-[37px] leading-[1.32] text-justify w-full lg:max-w-[835px]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Sky Dental Center stands as one of the leading and most trusted dental facilities in Abu Dhabi, offering a distinguished clinical experience that unites more than 10 years of expertise with state-of-the-art dental technologies.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="w-full max-w-[1390px] mx-auto mb-[40px] md:mb-[50px] lg:mb-[60px]">
          <svg className="w-full h-[0.6px]" viewBox="0 0 1390 0.6" preserveAspectRatio="none">
            <path d="M0 0.3H1390" stroke="#6D669F" strokeWidth="0.6" />
          </svg>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[24px] lg:gap-0 lg:flex lg:items-center lg:justify-between max-w-[1356px] mx-auto"
        >
          <motion.div variants={statsVariants} className="flex items-center gap-[16px] md:gap-[20px] justify-center md:justify-start">
            <h2 
              className="text-black text-[40px] md:text-[48px] lg:text-[55px] leading-[1.15] tracking-[-1.65px] capitalize"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              {count1}+
            </h2>
            <p className="text-black text-[14px] md:text-[16px] leading-[1.55] whitespace-nowrap">Years of Excellence</p>
          </motion.div>

          <motion.div variants={statsVariants} className="flex items-center gap-[16px] md:gap-[20px] justify-center md:justify-start">
            <h2 
              className="text-black text-[40px] md:text-[48px] lg:text-[55px] leading-[1.15] tracking-[-1.65px] capitalize"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              {count2}+
            </h2>
            <p className="text-black text-[14px] md:text-[16px] leading-[1.55] whitespace-nowrap">Amazing Team</p>
          </motion.div>

          <motion.div variants={statsVariants} className="flex items-center gap-[16px] md:gap-[20px] justify-center md:justify-start">
            <h2 
              className="text-black text-[40px] md:text-[48px] lg:text-[55px] leading-[1.15] tracking-[-1.65px] capitalize"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              {count3} +
            </h2>
            <p className="text-black text-[14px] md:text-[16px] leading-[1.55] whitespace-nowrap">Lovely clients</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}