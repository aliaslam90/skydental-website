'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px]">
      <div className="max-w-[1390px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="relative w-full h-[400px] md:h-[470px] lg:h-[537px] rounded-[20px] md:rounded-[25px] overflow-hidden"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#c4c4c4]" />
            <video
              autoPlay
              loop
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
              controlsList="nodownload"
            >
              {/* Add your video file in the public folder and update the src path below */}
              {/* Example: <source src="/technology-video.mp4" type="video/mp4" /> */}
              <source src="/technology-video.mp4" type="video/mp4" />
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[5.587%] to-[rgba(0,0,0,0.6)] to-[68.156%]" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-[24px] md:px-[36px] lg:px-[48px] pb-[24px] md:pb-[36px] lg:pb-[48px]">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[24px] lg:gap-0 max-w-[1294px]">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.6 }}
                className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] text-white w-full lg:max-w-[884px]"
              >
                <h2
                  className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px]"
                  style={{ fontFamily: "'Gilda Display', serif" }}
                >
                  Our Technology
                </h2>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.55]">
                  Innovation and readiness for change are always in the center of our attention, so patients will be able to appreciate a new approach to the treatment and diagnosis of diseases. The center is equipped with high-precision equipment and a research center with fully computerized equipment.
                </p>
              </motion.div>

              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.6 }}
                className="bg-[#cbff8f] flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-[8px] md:pr-[10px] py-2 rounded-[35px] flex-shrink-0 hover:bg-[#B1FF57] transition-colors"
              >
                <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">Request Appointment</span>
                <div className="bg-[#97c4ff] w-[32px] h-[32px] md:w-[34px] md:h-[34px] rounded-full flex items-center justify-center">
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
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}