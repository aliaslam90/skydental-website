'use client'

import { motion, useReducedMotion } from 'motion/react'

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

  return (
    <section id="home" className="relative w-full min-h-[70vh] h-[85vh] md:h-[90vh] lg:h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 rounded-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          playsInline 
          muted
          className="absolute w-full h-full object-cover"
          controlsList="nodownload"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Transparent dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[44.828%] to-[rgba(0,0,0,0.7)]"
        />
      </div>

      {/* Content - extra bottom padding on mobile so text isn't cut by browser UI */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col justify-end px-5 md:px-[40px] lg:px-6 pb-14 pt-12 md:pb-[40px] lg:pb-[48px] md:pt-0 w-full max-w-[1340px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-6 md:gap-[40px]">
          {/* Left Content - main headline only for focus */}
          <div className="flex flex-col gap-3 md:gap-[16px] max-w-full lg:max-w-[771px]">
            <motion.h1
              variants={itemVariants}
              className="text-white text-[28px] leading-[1.25] md:text-[50px] lg:text-[70px] md:leading-[1.2] tracking-[-1.5px] md:tracking-[-2.1px]"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              Sky Dental Center
              <br />
              <span className="inline-block">Your smile. Your confidence.</span>
              <br />
              Our expert care.
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}