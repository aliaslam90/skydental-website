'use client'

import { motion, useReducedMotion } from 'motion/react'
import svgPaths from '../../imports/svg-p4rwj0t9df'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }
    }
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 rounded-[15px] md:rounded-[20px] lg:rounded-[25px] overflow-hidden mx-[16px] md:mx-[20px] lg:mx-[25px] my-[16px] md:my-[20px] lg:my-[25px]">
        <video 
          autoPlay 
          loop 
          playsInline 
          muted
          className="absolute w-full h-full object-cover"
          controlsList="nodownload"
        >
          <source src="/_videos/v1/cac7ef0f2078d54cbca9b2ac882dd44881ca13ba" />
        </video>
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[44.828%] to-[rgba(0,0,0,0.7)]"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col justify-end px-[20px] md:px-[40px] lg:px-6 pb-[32px] md:pb-[40px] lg:pb-[48px] w-[calc(100%-50px)] max-w-[1340px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-[32px] md:gap-[40px]">
          {/* Left Content */}
          <div className="flex flex-col gap-[16px] max-w-full lg:max-w-[771px]">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-[8px] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] rounded-[35px] backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.55)]">
                <div className="w-[13.627px] h-[13.627px] flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 13.6274 13.6274">
                    <rect fill="white" fillOpacity="0.2" width="13.6274" height="13.6274" rx="6.81372" />
                    <circle cx="6.81372" cy="6.81372" r="4.5" fill="white" />
                  </svg>
                </div>
                <span className="text-white text-[14px] md:text-[16px]">Welcome to Sky Dental Center</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white text-[32px] md:text-[50px] lg:text-[70px] leading-[1.2] tracking-[-2.1px]"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              Sky Dental Center is a full-service dental center
            </motion.h1>
          </div>

          {/* Right Content */}
          <div className="flex flex-row lg:flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-center lg:items-end w-full lg:w-auto lg:max-w-[473px] justify-between lg:justify-start">
            <motion.p
              variants={itemVariants}
              className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-[1.55] text-left lg:text-right max-w-full order-2 lg:order-2 flex-1 lg:flex-initial"
            >
              We perform operations of any level and restore comfort, confidence and joy of life along with a new smile.
            </motion.p>

            <motion.button
              variants={itemVariants}
              onClick={scrollToContent}
              animate={{
                y: shouldReduceMotion ? 0 : [0, -8, 0],
                opacity: 1
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.55)] rounded-[15px] p-[14px] md:p-[16px] lg:p-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all order-1 lg:order-1 flex-shrink-0 hover:bg-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.75)]"
            >
              <div className="flex flex-col items-center gap-[5px]">
                <motion.svg 
                  className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]" 
                  fill="none" 
                  viewBox="0 0 32 32"
                  animate={{
                    y: shouldReduceMotion ? 0 : [0, 4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path 
                    d={svgPaths.p2e5bcf00} 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M16 14V8" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </motion.svg>
                <span className="text-white text-[12px] md:text-[13px] lg:text-[14px] text-center whitespace-nowrap">Scrol Down</span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}