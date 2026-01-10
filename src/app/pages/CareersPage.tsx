'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import imgImage from "../../assets/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "../../assets/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "../../assets/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

interface WhyJoinCard {
  title: string
  description: string
  bgColor: string
}

interface JobCategory {
  title: string
  icon: string
}

const whyJoinCards: WhyJoinCard[] = [
  {
    title: 'Supportive Work Culture',
    description: 'Join a team that values collaboration, mutual respect, and work-life balance. We foster an environment where every member feels valued and empowered.',
    bgColor: 'bg-[#e0edff]',
  },
  {
    title: 'Advanced Technology',
    description: 'Work with cutting-edge dental technology and modern equipment. We invest in the latest innovations to ensure you have the best tools for exceptional patient care.',
    bgColor: 'bg-[#cbff8f]',
  },
  {
    title: 'Career Development',
    description: 'Continuous learning and advancement opportunities are part of our culture. We support your professional growth through training, workshops, and skill development programs.',
    bgColor: 'bg-[#e0edff]',
  },
  {
    title: 'Meaningful Impact',
    description: 'Make a real difference in people\'s lives every day. Your work directly contributes to improving oral health and creating confident, beautiful smiles in our community.',
    bgColor: 'bg-[#e0edff]',
  },
]

const jobCategories: JobCategory[] = [
  {
    title: 'General & Specialist Dentists',
    icon: '🦷',
  },
  {
    title: 'Dental Assistants & Nurses',
    icon: '👨‍⚕️',
  },
  {
    title: 'Front Desk & Patient Relations',
    icon: '💼',
  },
  {
    title: 'Administrative/Support Roles',
    icon: '📋',
  },
]

export default function CareersPage() {
  const shouldReduceMotion = useReducedMotion()

  const heroRef = useRef(null)
  const whyJoinRef = useRef(null)
  const opportunitiesRef = useRef(null)
  const applyRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const whyJoinInView = useInView(whyJoinRef, { once: true })
  const opportunitiesInView = useInView(opportunitiesRef, { once: true })
  const applyInView = useInView(applyRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[500px] overflow-hidden pt-32 pb-20"
        style={{
          background: 'linear-gradient(160deg, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 50%, rgb(224, 237, 255) 100%)',
        }}
      >
        {/* Decorative blurs */}
        <div className="absolute -left-24 top-40 w-80 h-80 bg-[rgba(203,255,143,0.3)] rounded-full blur-[80px]" />
        <div className="absolute right-20 top-60 w-96 h-96 bg-[rgba(151,196,255,0.2)] rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-[24px] mr-[296px] mb-[0px] ml-[296px]"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight leading-tight">
              Shape Your Future with Sky Dental Center
            </h1>

            {/* Description */}
            <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              At Sky Dental Center, we believe that incredible care starts with exceptional people. We are constantly seeking talented, dedicated professionals who share our vision for creating a best-in-class oral healthcare experience, are values-driven, and eager to grow with us.
            </p>

            {/* Pills/Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-6 py-2.5 bg-[#cbff8f] rounded-full text-[14px] font-['Arial'] font-medium text-black"
              >
                Dynamic Environment
              </motion.div>
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="px-6 py-2.5 bg-[#cbff8f] rounded-full text-[14px] font-['Arial'] font-medium text-black"
              >
                Professional Growth
              </motion.div>
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-6 py-2.5 bg-[#cbff8f] rounded-full text-[14px] font-['Arial'] font-medium text-black"
              >
                Rewarding Career
              </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <Home className="w-4 h-4" />
                <span className="font-['Arial']">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 font-['Arial']">More</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#97c4ff] font-['Arial']">Careers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section ref={whyJoinRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={whyJoinInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Why Join Us?
            </h2>
            <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              We offer more than just a position—a professional home, rewarding, and fulfilling. Join us and experience the difference of working in an environment that prioritizes your growth, well-being, and the impact you make.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {whyJoinCards.map((card, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '-50px' })

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${card.bgColor} p-8 rounded-3xl`}
                >
                  <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section ref={opportunitiesRef} className="py-24 bg-[#e0edff]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Current Opportunities
            </h2>
            <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed max-w-2xl mx-auto">
              We regularly look for the following positions. If your dream role isn't listed, we still encourage you to apply.
            </p>
          </motion.div>

          {/* Job Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {jobCategories.map((job, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '-50px' })

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#cbff8f] rounded-full flex items-center justify-center text-2xl shrink-0">
                    {job.icon}
                  </div>
                  <h3 className="text-lg font-['Arial'] font-semibold text-black">
                    {job.title}
                  </h3>
                </motion.div>
              )
            })}
          </div>

          {/* Who We're Looking For Card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 rounded-3xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-['Gilda_Display'] text-black mb-6 text-center">
              Who We're Looking For
            </h3>
            <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed text-center max-w-3xl mx-auto">
              We welcome individuals who are passionate, patient-focused, and committed to excellence. Whether you're an experienced professional or just starting your career, if you align with our values and have a genuine desire to make a positive impact, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section
        ref={applyRef}
        className="py-24"
        style={{
          background: 'linear-gradient(to bottom, rgb(203, 255, 143) 0%, rgb(203, 255, 143) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={applyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Email Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-[#97c4ff]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Apply Now
            </h2>

            {/* Description */}
            <p className="text-base text-black font-['Arial'] leading-relaxed mb-8">
              Send your CV and cover letter to
            </p>

            {/* Email */}
            <a
              href="mailto:careers@skydental.ae"
              className="text-2xl font-['Arial'] font-semibold text-black hover:text-[#97c4ff] transition-colors inline-block mb-12"
            >
              careers@skydental.ae
            </a>

            {/* WhatsApp Contact */}
            <div className="mb-10">
              <p className="text-base text-black font-['Arial'] mb-4">
                Get The Right Job Guidance: WhatsApp Link/Contact Form
              </p>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white rounded-full text-[15px] font-['Arial'] font-medium text-black hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>

            {/* Footer Note */}
            <p className="text-sm text-black/70 font-['Arial'] mt-8">
              WE HELP BY UNDERSTANDING THROUGH CONTINUOUS BUSINESS ACTIVITIES.<br />
              WE BELIEVE WE CAN MAKE PERFECT COLLECTION.
            </p>
          </motion.div>
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
              A Collection of Unforgettable
              <br />
              Guest Experiences
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

    </div>
  )
}
