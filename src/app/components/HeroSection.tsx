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
    <section id="home" className="relative w-full h-screen overflow-hidden">
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
          {/* Left Content - main headline only for focus */}
          <div className="flex flex-col gap-[16px] max-w-full lg:max-w-[771px]">
            <motion.h1
              variants={itemVariants}
              className="text-white text-[32px] md:text-[50px] lg:text-[70px] leading-[1.2] tracking-[-2.1px]"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              SKY Dental Center
              <br />
              <span className="inline-block whitespace-nowrap">Your smile. Your confidence.</span>
              <br />
              Our expert care.
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}