'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { 
  GeneralDentistryIcon, 
  CosmeticDentistryIcon, 
  OrthodonticsIcon, 
  PediatricDentistryIcon, 
  ImplantAdvancedCareIcon 
} from './ServiceIcons'

// Services data matching ServicesPage
const services = [
  {
    id: 'general-dentistry',
    Icon: GeneralDentistryIcon,
    title: 'General Dentistry',
    description: 'Comprehensive dental care for healthy teeth and gums, including checkups, cleanings, and preventive treatments.',
    bgColor: '#edfede'
  },
  {
    id: 'cosmetic-dentistry',
    Icon: CosmeticDentistryIcon,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced aesthetic treatments including whitening, veneers, and smile design.',
    bgColor: '#edfede'
  },
  {
    id: 'orthodontics',
    Icon: OrthodonticsIcon,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct misalignments with braces, Invisalign, and modern orthodontic solutions.',
    bgColor: '#edfede'
  },
  {
    id: 'pediatric-dentistry',
    Icon: PediatricDentistryIcon,
    title: 'Pediatric Dentistry',
    description: 'Gentle, specialized dental care for children and teens in a welcoming and comfortable environment.',
    bgColor: '#edfede'
  },
  {
    id: 'advanced-restorative',
    Icon: ImplantAdvancedCareIcon,
    title: 'Implant & Advanced Care',
    description: 'Complex treatments for structural and functional restoration including implants and full-mouth restoration.',
    bgColor: '#edfede'
  }
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative overlay */}
      <div 
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30"
        style={{ backgroundColor: 'rgba(224, 237, 255, 0.5)' }}
      />
      
      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
        style={{ backgroundColor: service.bgColor }}
      >
        <service.Icon className="w-12 h-12" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">
        {service.title}
      </h3>
      <p className="text-base text-black/80 font-['Arial'] leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Learn More Link */}
      <Link to={`/services/${service.id}`} className="flex items-center gap-2 text-black font-['Poppins'] font-semibold group-hover:gap-3 transition-all">
        <span>Learn More</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

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

  return (
    <section id="services" className="pt-[30px] pb-[50px] md:pt-[40px] md:pb-[70px] px-[16px] md:px-[25px]">
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
            className="text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.44px] text-center mb-[32px] md:mb-[48px] relative z-10"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            Our Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          {/* Second Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6 relative z-10">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index + 3} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function BigToothIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 641.997 612.581">
      <g>
        <path d="M320.999 0C144.5 0 0 137.29 0 306.291C0 475.291 144.5 612.581 320.999 612.581C497.499 612.581 641.997 475.291 641.997 306.291C641.997 137.29 497.499 0 320.999 0Z" fill="black" />
        <path d="M320.999 122.516C220.5 122.516 140.5 202.516 140.5 303.016C140.5 403.516 220.5 483.516 320.999 483.516C421.499 483.516 501.499 403.516 501.499 303.016C501.499 202.516 421.499 122.516 320.999 122.516Z" fill="black" />
        <path d="M320.999 183.774C253.5 183.774 201.75 235.524 201.75 303.024C201.75 370.524 253.5 422.274 320.999 422.274C388.499 422.274 440.249 370.524 440.249 303.024C440.249 235.524 388.499 183.774 320.999 183.774Z" fill="black" />
        <path d="M320.999 244.032C286.5 244.032 263 267.532 263 302.032C263 336.532 286.5 360.032 320.999 360.032C355.499 360.032 378.999 336.532 378.999 302.032C378.999 267.532 355.499 244.032 320.999 244.032Z" fill="black" />
      </g>
    </svg>
  )
}