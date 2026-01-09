'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import imgImage4 from 'figma:asset/958080d80a0502b2239e7bf8312770b39e189c59.png'
import imgImage5 from 'figma:asset/c428fe717bbbc4d96b0993d331398a01e16a965a.png'
import imgImage6 from 'figma:asset/9820c349dd5b4ac1658cc8b535bf4db2bebb8ebb.png'
import imgImage7 from 'figma:asset/9fbf72269945d89340291423575f203d2365fd2d.png'

export default function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const doctors = [
    { name: 'Dr. Ahmed Hassan', specialty: 'Orthodontist', image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzg2NjAzOHww&ixlib=rb-4.1.0&q=80&w=1080', useImageWithFallback: true },
    { name: 'Dr. Maria Rodriguez', specialty: 'Cosmetic Dentist', image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzc0NTMxMXww&ixlib=rb-4.1.0&q=80&w=1080', useImageWithFallback: true },
    { name: 'Dr. James Wilson', specialty: 'Oral Surgeon', image: imgImage6, useImageWithFallback: false },
    { name: 'Dr. Lisa Chen', specialty: 'Periodontist', image: imgImage7, useImageWithFallback: false }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="doctors" className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px] bg-[#e0edff]">
      <div className="max-w-[1390px] mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-[32px] md:mb-[48px] flex flex-col items-center gap-[24px] md:gap-[32px]"
        >
          <h2
            className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px] max-w-[900px]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Professional, Experienced Doctors who are Fluent in all Modern Treatment Methods
          </h2>
          
          <button className="bg-[#cbff8f] flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-[8px] md:pr-[10px] py-2 rounded-[35px] hover:bg-[#B1FF57] transition-colors">
            <span className="text-[#97c4ff] font-bold text-[14px] md:text-[16px] whitespace-nowrap">View All Team</span>
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
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px] lg:gap-[32px]"
        >
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function DoctorCard({ doctor, variants }: { doctor: { name: string; specialty: string; image: string; useImageWithFallback: boolean }; variants: any }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={variants}
      className="group"
    >
      <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          {doctor.useImageWithFallback ? (
            <ImageWithFallback
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          )}
          {/* Specialty Badge */}
          <div className="absolute bottom-[16px] left-[16px] bg-black/70 backdrop-blur-sm px-[16px] py-[8px] rounded-[20px]">
            <span className="text-white text-[12px] md:text-[13px] font-medium">{doctor.specialty}</span>
          </div>
        </div>
        <div className="p-[20px] md:p-[24px] text-center flex flex-col gap-[8px]">
          <h3
            className="text-black text-[18px] md:text-[20px] leading-[1.2]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            {doctor.name}
          </h3>
          <button className="text-[#97c4ff] text-[14px] md:text-[15px] hover:underline">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}