'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import TestimonialsSection from '../components/TestimonialsSection'
import { useBooking } from '../context/BookingContext'

// Services data with IDs for routing
const services = [
  {
    id: 'general-dentistry',
    icon: '🦷',
    title: 'General Dentistry',
    description: 'Comprehensive dental care for healthy teeth and gums, including checkups, cleanings, and preventive treatments.',
    bgColor: '#edfede'
  },
  {
    id: 'cosmetic-dentistry',
    icon: '✨',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced aesthetic treatments including whitening, veneers, and smile design.',
    bgColor: '#edfede'
  },
  {
    id: 'orthodontics',
    icon: '🦷',
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct misalignments with braces, Invisalign, and modern orthodontic solutions.',
    bgColor: '#edfede'
  },
  {
    id: 'pediatric-dentistry',
    icon: '👶',
    title: 'Pediatric Dentistry',
    description: 'Gentle, specialized dental care for children and teens in a welcoming and comfortable environment.',
    bgColor: '#edfede'
  },
  {
    id: 'advanced-restorative',
    icon: '🔬',
    title: 'Advanced & Restorative',
    description: 'Complex treatments for structural and functional restoration including implants and full-mouth restoration.',
    bgColor: '#edfede'
  }
]

// Guest experience images
const guestExperiences = [
  'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
]

function SectionBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[rgba(203,255,143,0.3)] px-4 py-2 rounded-full">
      <span className="text-sm">{icon}</span>
      <span className="text-sm text-black font-['Arial']">{text}</span>
    </div>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
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
        <span className="text-3xl">{service.icon}</span>
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


export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion()
  const { openBookingSidebar } = useBooking()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const experiencesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const experiencesInView = useInView(experiencesRef, { once: true })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[500px] overflow-hidden pt-24"
        style={{
          background: 'linear-gradient(160.216deg, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 50%, rgb(224, 237, 255) 100%)'
        }}
      >
        {/* Decorative blurs */}
        <div className="absolute -left-24 top-40 w-64 h-64 bg-[rgba(203,255,143,0.2)] rounded-full blur-[64px]" />
        <div className="absolute right-32 top-80 w-64 h-64 bg-[rgba(12,0,96,0.1)] rounded-full blur-[64px]" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <SectionBadge icon="✚" text="World-Class Dental Care" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Treatment and Restoration of Teeth
            </h1>

            {/* Description */}
            <p className="text-lg text-black/80 font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              We provide a full range of first-class dental services for adults and children using innovative digital equipment to ensure your comfort and perfect results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => openBookingSidebar()}
                className="bg-[#cbff8f] text-[#97c4ff] font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-[#b8ff6d] transition-colors font-['Arial']"
              >
                <span>Book Appointment</span>
                <div className="w-9 h-9 bg-[#97c4ff] rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-[#cbff8f]" />
                </div>
              </motion.button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={servicesRef} className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Our Services
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-black/70 font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              Treatment and restoration of teeth at the highest level with our experienced and kind heart team.
            </p>
          </motion.div>

          {/* Services Grid - First Row (3 cards) */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Services Grid - Second Row (2 cards centered) */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(3).map((service, index) => (
                <ServiceCard key={index + 3} service={service} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Guest Experiences Section */}
      <section ref={experiencesRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Gilda_Display'] text-black tracking-tight">
              A Collection of Unforgettable<br />Guest Experiences
            </h2>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guestExperiences.map((image, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: "-100px" })
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`Guest experience ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}