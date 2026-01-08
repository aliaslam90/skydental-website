'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import svgPaths from '../../imports/svg-p4rwj0t9df'
import imgImage from '../../assets/4fafeb49b310a78e44a5f2d40f54b8605c5129d1.png'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
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

  const buttonVariants = {
    hover: { 
      scale: shouldReduceMotion ? 1 : 1.05,
      y: shouldReduceMotion ? 0 : -2,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    tap: { scale: shouldReduceMotion ? 1 : 0.98 }
  }

  return (
    <section id="services" className="py-[70px] px-[25px] md:py-[70px] py-[50px] px-[16px] md:px-[25px]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1390px] mx-auto"
      >
        {/* Service Detail Card */}
        <motion.div
          variants={itemVariants}
          className="bg-[#e0edff] rounded-[25px] p-[24px] md:p-[36px] lg:p-[48px] relative overflow-hidden"
        >
          {/* Background Tooth Icon */}
          <div className="absolute left-[-163px] top-[-97px] w-[642px] h-[642px] opacity-5 hidden lg:block">
            <BigToothIcon />
          </div>

          {/* Title */}
          <h2
            className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px] text-center mb-[24px] md:mb-[32px] relative z-10"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Our Services
          </h2>

          {/* Tabs Menu */}
          <motion.div variants={containerVariants} className="flex items-center gap-[16px] md:gap-[20px] mb-[32px] md:mb-[48px] relative z-10 overflow-x-auto scrollbar-hide pb-2">
            <button className="bg-[#cbff8f] border border-[#97c4ff] flex items-center gap-[8px] h-[44px] md:h-[50px] px-[14px] md:px-[18px] py-[12px] md:py-[15px] rounded-[35px] flex-shrink-0 hover:bg-[#B1FF57] transition-colors">
              <ToothIcon />
              <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">General Dentistry</span>
            </button>

            <ServiceButton icon={<HappyToothIcon />} label="Cosmetic Dentistry" />
            <ServiceButton icon={<BracketsIcon />} label="Orthodontics" />
            <ServiceButton icon={<ToothacheIcon />} label="Pediatric Dentistry" />
            <ServiceButton icon={<FlossIcon />} label="Advanced & Restorative Care" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[32px] md:gap-[40px] lg:gap-[48px] relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] w-full lg:max-w-[494px]">
              <div className="flex flex-col gap-[16px] md:gap-[20px]">
                <h3
                  className="text-black text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-1.2px]"
                  style={{ fontFamily: "'Gilda Display', serif" }}
                >
                  General Dentistry
                </h3>
                <p className="text-black text-[15px] md:text-[16px] leading-[1.55] text-justify">
                  General Dentistry forms the foundation of lifelong oral health, focusing on early diagnosis, prevention, and treatment of common dental concerns. Our team provides precise, comfortable care designed to protect your smile and maintain healthy teeth and gums. We adopt modern techniques to ensure accurate results and an exceptional patient journey.
                </p>
              </div>

              <button className="bg-white flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-[8px] md:pr-[10px] py-2 rounded-[35px] self-start hover:bg-[#f5f9ff] transition-colors">
                <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">Request Appointment</span>
                <div className="bg-[#cbff8f] w-[32px] h-[32px] md:w-[34px] md:h-[34px] rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowIcon />
                </div>
              </button>
            </div>

            {/* Right Content - Image and Checklist */}
            <div className="flex flex-col md:flex-row items-start gap-[24px] md:gap-[32px] lg:gap-[48px] flex-1 w-full">
              <div className="relative rounded-[20px] overflow-hidden w-full md:w-[380px] lg:w-[465px] h-[300px] md:h-[350px] lg:h-[414px] transform rotate-180 scale-y-[-1]">
                <div className="absolute inset-0 bg-[#c4c4c4]" />
                <img
                  src={imgImage}
                  alt="Dental procedure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[16px] md:gap-[20px] flex-1 w-full">
                <CheckItem text="Dental Checkup & Cleaning" />
                <CheckItem text="Tooth- Colored fillings" />
                <CheckItem text="Tooth- Colored fillings." />
                <CheckItem text="Tooth- Colored fillings." />
                <CheckItem text="Gum Disease Treatment" />
                <CheckItem text="Preventive Dental Care" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="border-[0.7px] border-black flex items-center gap-[8px] h-[44px] md:h-[50px] px-[14px] md:px-[18px] py-[12px] md:py-[15px] rounded-[35px] hover:bg-[#e0edff] hover:border-[#97c4ff] transition-colors flex-shrink-0">
      {icon}
      <span className="text-black text-[14px] md:text-[16px] whitespace-nowrap">{label}</span>
    </button>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[10px]">
      <svg className="w-[25px] h-[25px] flex-shrink-0" fill="none" viewBox="0 0 25 25">
        <circle cx="12.5" cy="12.5" r="8.5" stroke="black" strokeWidth="1" fill="none" />
        <path d="M7.41 12.58L11.5 16.67L17.59 10.58" fill="black" />
      </svg>
      <p className="text-black text-[16px] leading-[1.55] flex-1">{text}</p>
    </div>
  )
}

function ToothIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.pa3a5000} fill="#97C4FF" />
        <path d={svgPaths.p3489ba80} fill="#97C4FF" />
        <path d={svgPaths.p99b4f00} fill="#97C4FF" />
        <path d={svgPaths.p3c163100} fill="#97C4FF" />
      </g>
    </svg>
  )
}

function HappyToothIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p114e7e00} fill="black" />
        <path d={svgPaths.p36b80570} fill="black" />
        <path d={svgPaths.p53b900} fill="black" />
        <path d={svgPaths.p99b4f00} fill="black" />
        <path d={svgPaths.p3c163100} fill="black" />
        <path d={svgPaths.p398361ea} fill="black" />
        <path d={svgPaths.pd448400} fill="black" />
      </g>
    </svg>
  )
}

function BracketsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p524cff1} fill="black" />
        <path d={svgPaths.p1b06b780} fill="black" />
        <path d={svgPaths.p2263d900} fill="black" />
      </g>
    </svg>
  )
}

function ToothacheIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p9acb240} fill="black" />
        <path d={svgPaths.p686dcf0} fill="black" />
        <path d={svgPaths.p3f2b9400} fill="black" />
        <path d={svgPaths.p3d5ee200} fill="black" />
        <path d={svgPaths.p1d301000} fill="black" />
      </g>
    </svg>
  )
}

function FlossIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p16c99000} fill="black" />
        <path d={svgPaths.p2f0d7e00} fill="black" />
        <path d={svgPaths.pe518300} fill="black" />
      </g>
    </svg>
  )
}

function BigToothIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 641.997 612.581">
      <g>
        <path d={svgPaths.p5a95e80} fill="black" />
        <path d={svgPaths.p1270ad00} fill="black" />
        <path d={svgPaths.p319fbf00} fill="black" />
        <path d={svgPaths.p6e11200} fill="black" />
      </g>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path 
        d="M5 15L15 5" 
        stroke="#97C4FF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M6.875 5H15V13.125" 
        stroke="#97C4FF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}