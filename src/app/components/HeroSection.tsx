'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { servicesData } from '../data/servicesData'

const serviceLinks = servicesData.map((s) => ({ id: s.id, title: s.title }))

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
        {/* Transparent dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" aria-hidden />
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
              Sky Dental Center
              <br />
              <span className="inline-block whitespace-nowrap">Your smile. Your confidence.</span>
              <br />
              Our expert care.
            </motion.h1>
          </div>

          {/* Services dropdown */}
          <motion.div ref={dropdownRef} variants={itemVariants} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm border border-white/40 text-[#0C0060] px-5 py-3 text-[15px] font-semibold hover:bg-white transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 min-w-[240px] rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl overflow-hidden z-20"
              >
                <ul className="py-2">
                  {serviceLinks.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={`/services/${service.id}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-2.5 text-[14px] font-medium text-[#0C0060] hover:bg-[#CBFF8F]/40 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#0C0060]/10 p-2">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-center w-full rounded-full bg-[#CBFF8F] text-[#0C0060] font-bold py-2.5 text-[14px] hover:bg-[#CBFF8F]/90 transition-colors"
                  >
                    View all services
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}