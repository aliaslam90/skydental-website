'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Check, FileText, ClipboardList, Plane, Shield, DollarSign, MapPin } from 'lucide-react'
import imgDentalCare from "figma:asset/7e26eb0c35bbd0356cd593caf48b0b5a702f7753.png"
import imgImage from "figma:asset/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "figma:asset/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "figma:asset/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

interface FirstVisitStep {
  id: string
  title: string
  description: string
  color: string
}

interface SecondOpinionCard {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface InsurancePartner {
  id: string
  name: string
}

const firstVisitSteps: FirstVisitStep[] = [
  {
    id: 'step1',
    title: 'Book Welcome Consultation',
    description: 'Choose the date and time that suits you with our online appointment system',
    color: 'bg-[#cbff8f]',
  },
  {
    id: 'step2',
    title: 'Comprehensive Exam',
    description: 'Our dentists will examine your teeth, gums and overall oral health to identify any issues',
    color: 'bg-[#cbff8f]',
  },
  {
    id: 'step3',
    title: 'Care plan & Plan',
    description: "We'll discuss findings with you and create a personalized treatment plan tailored to your needs",
    color: 'bg-[#cbff8f]',
  },
]

const secondOpinionCards: SecondOpinionCard[] = [
  {
    id: 'assessment',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Thorough Assessment',
    description: 'Our specialists conduct a detailed review of your records and current condition.',
  },
  {
    id: 'explanation',
    icon: <FileText className="w-6 h-6" />,
    title: 'Honest Explanation',
    description: 'We provide a transparent, detailed explanation of all available treatment options.',
  },
  {
    id: 'peace',
    icon: <Shield className="w-6 h-6" />,
    title: 'Peace of Mind',
    description: 'Empowering you to make informed decisions with complete confidence and trust.',
  },
]

const insurancePartners: InsurancePartner[] = [
  { id: '1', name: 'NextCare' },
  { id: '2', name: 'NAS' },
  { id: '3', name: 'NAS' },
  { id: '4', name: 'Mednet' },
  { id: '5', name: 'MetLife' },
  { id: '6', name: 'Cigna' },
  { id: '7', name: 'DAMAN' },
  { id: '8', name: 'AXA GULF' },
  { id: '9', name: 'Neuron' },
  { id: '10', name: 'ALIAR' },
]

export default function PatientGuidePage() {
  const shouldReduceMotion = useReducedMotion()

  const heroRef = useRef(null)
  const firstVisitRef = useRef(null)
  const secondOpinionRef = useRef(null)
  const dentalTourismRef = useRef(null)
  const insuranceRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const firstVisitInView = useInView(firstVisitRef, { once: true })
  const secondOpinionInView = useInView(secondOpinionRef, { once: true })
  const dentalTourismInView = useInView(dentalTourismRef, { once: true })
  const insuranceInView = useInView(insuranceRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[400px] overflow-hidden pt-32 pb-16"
        style={{
          background: 'linear-gradient(160deg, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 50%, rgb(224, 237, 255) 100%)',
        }}
      >
        {/* Decorative blurs */}
        <div className="absolute -left-24 top-40 w-64 h-64 bg-[rgba(203,255,143,0.2)] rounded-full blur-[64px]" />
        <div className="absolute right-32 top-80 w-64 h-64 bg-[rgba(12,0,96,0.1)] rounded-full blur-[64px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Patient Guide
            </h1>

            {/* Description */}
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              At Sky Dental Center, we understand that visiting the dentist can feel overwhelming, especially for new patients. This guide will help walk you through the entire process, making sure you feel confident, cared for, and ready to take the next steps in your oral care.
            </p>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <Home className="w-4 h-4" />
                <span className="font-['Arial']">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#97c4ff] font-['Arial']">Patient Guide</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your First Dental Visit Section */}
      <section ref={firstVisitRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={firstVisitInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
                  Your First Dental Visit
                </h2>
                <p className="text-base text-[#1b1b1b] font-['Arial'] leading-relaxed mb-10">
                  Your first visit sets the tone for a welcoming, pain-free experience at Sky Dental Center. Here's what you can expect. Arrive, relax, and let our caring team make you feel comfortable from the moment you step in.
                </p>

                {/* Steps */}
                <div className="space-y-5">
                  {firstVisitSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                      animate={firstVisitInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`${step.color} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0`}>
                        <Check className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-['Arial'] font-bold text-black mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={firstVisitInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <img
                  src={imgDentalCare}
                  alt="Dental Care"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#cbff8f] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-['Arial'] font-bold text-black mb-1">
                        Sky Dental Center
                      </h4>
                      <p className="text-xs text-[#6b7280] font-['Arial']">
                        Modern dental clinic in Abu Dhabi
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Opinion Service Section */}
      <section
        ref={secondOpinionRef}
        className="py-24"
        style={{
          background: 'rgb(224, 237, 255)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={secondOpinionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Second Opinion Service
            </h2>
            <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed max-w-2xl mx-auto">
              At Sky Dental Center, we understand the importance of confidence when it comes to your oral health. Our Second Opinion service offers clarity, reassurance, and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {secondOpinionCards.map((card, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '-100px' })

              return (
                <motion.div
                  key={card.id}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-[#fefefe] rounded-[32px] p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#cbff8f] rounded-2xl flex items-center justify-center text-black mb-6 mx-auto">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-['Gilda_Display'] text-black mb-4 text-center">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#4b5563] font-['Arial'] leading-relaxed text-center">
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={secondOpinionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="bg-[#cbff8f] text-black font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-[#b8ff6d] transition-colors font-['Arial'] text-[15px]"
            >
              <span>Get a Second Opinion</span>
              <div className="w-8 h-8 bg-[#97c4ff] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Dental Tourism Section */}
      <section
        ref={dentalTourismRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual Card */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={dentalTourismInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Large Background Card */}
                <div 
                  className="rounded-[48px] p-12 min-h-[500px] relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(224, 237, 255, 0.6) 0%, rgba(230, 220, 255, 0.6) 100%)',
                    border: '2px solid rgba(151, 196, 255, 0.3)',
                  }}
                >
                  {/* Badge at top */}
                  <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md border-2 border-[#cbff8f]">
                    <div className="w-10 h-10 bg-[#cbff8f] rounded-full flex items-center justify-center">
                      <Plane className="w-5 h-5 text-black" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#6b7280] font-['Arial'] uppercase tracking-wider">INTERNATIONAL</p>
                      <p className="text-sm text-black font-['Arial'] font-semibold">Patients Welcome</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={dentalTourismInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black tracking-tight mb-6">
                  Dental Tourism
                </h2>
                
                <p className="text-[15px] text-[#1b1b1b] font-['Arial'] leading-relaxed mb-4">
                  Sky Dental Center proudly welcomes international patients seeking premium dental care in the UAE. Our Dental Tourism program offers a luxurious experience that blends world-class dentistry with the exceptional hospitality of Abu Dhabi.
                </p>

                <p className="text-[15px] text-[#1b1b1b] font-['Arial'] leading-relaxed mb-8">
                  We assist with everything—from treatment planning to scheduling appointments around your stay, allowing you to enjoy the beauty and culture of the Emirates.
                </p>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-[#e0edff] to-[#f0f4ff] rounded-2xl px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#cbff8f] rounded-xl flex items-center justify-center shrink-0">
                      <Plane className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-sm text-black font-['Arial'] font-semibold">Pre-Travel Coordination</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#e0edff] to-[#f0f4ff] rounded-2xl px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#cbff8f] rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-sm text-black font-['Arial'] font-semibold">Hotel Recommendations</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#e0edff] to-[#f0f4ff] rounded-2xl px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#cbff8f] rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-sm text-black font-['Arial'] font-semibold">Airport Guidance</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#e0edff] to-[#f0f4ff] rounded-2xl px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#cbff8f] rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-black font-['Arial'] font-semibold">Concierge Scheduling</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="bg-[#cbff8f] text-black font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-[#b8ff6d] transition-colors font-['Arial'] text-[15px]"
                >
                  <span>Plan Your Visit</span>
                  <div className="w-8 h-8 bg-[#97c4ff] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners Section */}
      <section
        ref={insuranceRef}
        className="py-24 overflow-hidden"
        style={{
          background: 'rgb(224, 237, 255)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 border border-[#e5e7eb]">
              <Shield className="w-4 h-4 text-[#4b5563]" />
              <span className="text-xs text-[#4b5563] font-['Arial'] font-medium uppercase tracking-wider">
                DIRECT BILLING AVAILABLE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black tracking-tight mb-6">
              Insurance Partners
            </h2>
            <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              To make premium dental care more accessible, we collaborate with a wide network of trusted local and international insurance providers. Our team handles benefits verification, approvals, and claims support.
            </p>
          </motion.div>

          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={shouldReduceMotion ? {} : {
                  x: [0, -1920],
                }}
                transition={shouldReduceMotion ? {} : {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of partners */}
                {insurancePartners.map((partner) => (
                  <div
                    key={`first-${partner.id}`}
                    className="bg-white rounded-2xl px-12 py-8 flex items-center justify-center min-w-[200px] shrink-0"
                  >
                    <p className="text-base text-[#9ca3af] font-['Arial'] font-semibold whitespace-nowrap">
                      {partner.name}
                    </p>
                  </div>
                ))}
                {/* Duplicate set for infinite scroll */}
                {insurancePartners.map((partner) => (
                  <div
                    key={`second-${partner.id}`}
                    className="bg-white rounded-2xl px-12 py-8 flex items-center justify-center min-w-[200px] shrink-0"
                  >
                    <p className="text-base text-[#9ca3af] font-['Arial'] font-semibold whitespace-nowrap">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experiences Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black tracking-tight">
              A Collection of Unforgettable<br />Guest Experiences
            </h2>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[imgImage, imgImage1, imgImage2].map((image, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '-100px' })

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
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

      {/* Footer Info Section */}
      <section
        className="py-16"
        style={{
          background: 'linear-gradient(to right, rgb(203, 255, 143) 0%, rgb(255, 255, 255) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-base text-[#1b1b1b] font-['Arial'] hover:text-[#97c4ff] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/our-doctors" className="text-base text-[#1b1b1b] font-['Arial'] hover:text-[#97c4ff] transition-colors">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-base text-[#1b1b1b] font-['Arial'] hover:text-[#97c4ff] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-base text-[#1b1b1b] font-['Arial'] hover:text-[#97c4ff] transition-colors">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>

            {/* All Services */}
            <div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-6">All Services</h3>
              <ul className="space-y-3 text-base text-[#1b1b1b] font-['Arial']">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Dental Implants</li>
              </ul>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-6">Office Hours</h3>
              <ul className="space-y-3 text-base text-[#1b1b1b] font-['Arial']">
                <li>Saturday - Wednesday<br />9:00 AM - 9:00 PM</li>
                <li>Thursday<br />9:00 AM - 6:00 PM</li>
                <li>Friday: Closed</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-6">Contact Information</h3>
              <ul className="space-y-3 text-base text-[#1b1b1b] font-['Arial']">
                <li>📞 +971 2 123 4567</li>
                <li>✉️ info@skydentalcenter.ae</li>
                <li>📍 Abu Dhabi, UAE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}