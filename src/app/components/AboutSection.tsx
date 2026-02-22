'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

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

  return (
    <section id="about" className="py-[80px] px-[16px] md:px-[20px] lg:px-[25px]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1390px] mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[16px] md:gap-[20px] lg:gap-0 max-w-[1294px] mx-auto">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-[10px] h-[40px] md:h-[45px] px-[20px] md:px-[25px] py-[9px] md:py-[11px] rounded-[35px] backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] border border-[#0061af]">
              <div className="w-[13.627px] h-[13.627px] flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 13.6274 13.6274">
                  <rect fill="#B3CFE7" width="13.6274" height="13.6274" rx="6.81372" />
                  <circle cx="6.81372" cy="6.81372" r="4.5" fill="#0061AF" />
                </svg>
              </div>
              <span className="text-[#0061af] text-[14px] md:text-[16px]">Learn More</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-black text-[24px] md:text-[30px] lg:text-[37px] leading-[1.32] text-justify w-full lg:max-w-[835px]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            At Sky Dental Center, every appointment is thoughtfully designed around you, combining experience, precision, and personalised care in a calm, welcoming setting.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}