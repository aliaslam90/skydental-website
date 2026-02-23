'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import TestimonialsSection from '../components/TestimonialsSection'
import { 
  GeneralDentistryIcon, 
  CosmeticDentistryIcon, 
  OrthodonticsIcon, 
  PediatricDentistryIcon, 
  ImplantAdvancedCareIcon 
} from '../components/ServiceIcons'
import ScrollSection from '../components/ScrollSection'

// Services data with IDs for routing
const services = [
  {
    id: 'general-dentistry',
    Icon: GeneralDentistryIcon,
    title: 'General Dentistry',
    description: 'Care focused on prevention, early diagnosis, and maintaining healthy teeth and gums, including checkups, cleanings, and preventive treatments.',
    bgColor: '#CBFF8F'
  },
  {
    id: 'cosmetic-dentistry',
    Icon: CosmeticDentistryIcon,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced treatments; including whitening, veneers, and smile designs tailored to enhance your natural beauty and confidence.',
    bgColor: '#CBFF8F'
  },
  {
    id: 'orthodontics',
    Icon: OrthodonticsIcon,
    title: 'Orthodontics',
    description: 'Straighten and align your teeth with modern orthodontic treatments, including braces, Invisalign, and tailored solutions for a confident, healthy smile.',
    bgColor: '#CBFF8F'
  },
  {
    id: 'pediatric-dentistry',
    Icon: PediatricDentistryIcon,
    title: 'Pediatric Dentistry',
    description: 'Gentle, expert dental care for children and teens in a welcoming environment, designed to keep their smiles healthy and confident.',
    bgColor: '#CBFF8F'
  },
  {
    id: 'advanced-restorative',
    Icon: ImplantAdvancedCareIcon,
    title: 'Implant & Advanced Care',
    description: 'Advanced dental treatments for restoring function, structure, and confidence, including implants and full-mouth rehabilitation.',
    bgColor: '#CBFF8F'
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
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <Link
        to={`/services/${service.id}`}
        className="block h-full bg-white/90 backdrop-blur-sm rounded-[1.75rem] p-8 md:p-9 border border-black/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] hover:border-[#CBFF8F]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
      >
        {/* Subtle gradient glow on hover */}
        <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[#CBFF8F]/5 via-transparent to-[#e0edff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        {/* Soft corner accent */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#e0edff]/30 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center mb-6 bg-[#CBFF8F]/90 shadow-[0_4px_14px_-2px_rgba(203,255,143,0.4)] group-hover:bg-[#CBFF8F] group-hover:shadow-[0_8px_20px_-4px_rgba(203,255,143,0.35)] transition-all duration-300">
            <service.Icon className="w-[56px] h-[56px]" />
          </div>

          {/* Title */}
          <h3 className="text-[1.5rem] md:text-[1.625rem] font-['Gilda_Display'] text-black mb-3 tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-[0.9375rem] text-black/70 font-['Arial'] leading-[1.6] mb-7 max-w-[32ch]">
            {service.description}
          </p>

          {/* Learn More - pill CTA */}
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-['Poppins'] font-semibold text-black/80 bg-black/[0.06] group-hover:bg-[#CBFF8F] group-hover:text-black group-hover:gap-3 transition-all duration-300">
            Learn More
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}


export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const experiencesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const experiencesInView = useInView(experiencesRef, { once: true })

  return (
    <div className="bg-white">
      <ScrollSection>
      {/* Banner Section - on top */}
      <section
        ref={heroRef}
        className="relative min-h-[380px] overflow-hidden py-20 pt-28"
        style={{
          background: 'linear-gradient(160.216deg, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 50%, rgb(224, 237, 255) 100%)'
        }}
      >
        <div className="absolute -left-24 top-40 w-64 h-64 bg-[rgba(203,255,143,0.2)] rounded-full blur-[64px]" />
        <div className="absolute right-32 top-80 w-64 h-64 bg-[rgba(12,0,96,0.1)] rounded-full blur-[64px]" />
        <div className="container mx-auto px-6 py-12 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 flex justify-center">
              <SectionBadge icon="✚" text="Relief. Health. Confidence." />
            </div>
            <h1 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              From relieving pain to revealing your most beautiful smile
            </h1>
            <p className="text-lg text-black/80 font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              Fast, gentle, and complete care for urgent needs, lifelong oral health, and natural-looking cosmetic results for every stage of your life.
            </p>
          </motion.div>
        </div>
      </section>
      </ScrollSection>

      <ScrollSection>
      {/* What Do You Need Today - below banner */}
      <section
        ref={servicesRef}
        className="relative py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #fafbfc 0%, #f4f6f8 35%, #f0f3f7 100%)'
        }}
      >
        {/* Subtle background orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#CBFF8F]/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-[#e0edff]/50 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-['Poppins'] font-semibold tracking-[0.2em] text-black/50 uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-['Gilda_Display'] text-black tracking-tight leading-[1.15] max-w-2xl mx-auto">
              What Do You Need Today
            </h2>
          </motion.div>

          {/* Services Grid - First Row (3 cards) */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Services Grid - Second Row (2 cards centered) */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.slice(3).map((service, index) => (
                <ServiceCard key={index + 3} service={service} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollSection>

      <ScrollSection>
      {/* Testimonials Section */}
      <TestimonialsSection />
      </ScrollSection>

      <ScrollSection>
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
              A Collection of Memorable Patient Experiences
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
      </ScrollSection>
    </div>
  )
}