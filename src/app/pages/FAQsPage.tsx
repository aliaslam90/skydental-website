'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Search, Plus, Minus } from 'lucide-react'
import imgImage from "../../assets/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "../../assets/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "../../assets/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

interface Category {
  id: string
  label: string
  icon: string
  color: string
}

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQCategory {
  id: string
  title: string
  icon: string
  faqs: FAQ[]
}

const categories: Category[] = [
  { id: 'general', label: 'General Dentistry', icon: '🦷', color: 'bg-[#cbff8f]' },
  { id: 'cosmetic', label: 'Cosmetic Dentistry', icon: '✨', color: 'bg-[#e0edff]' },
  { id: 'orthodontics', label: 'Orthodontics', icon: '🦷', color: 'bg-[#e8f4ff]' },
  { id: 'pediatric', label: 'Pediatric Dentistry', icon: '👶', color: 'bg-[#fff9e6]' },
  { id: 'advanced', label: 'Advanced & Restorative Care', icon: '🔬', color: 'bg-[#e8efff]' },
  { id: 'endodontics', label: 'Endodontics', icon: '🦷', color: 'bg-[#ffe8f5]' },
  { id: 'prosthodontics', label: 'Prosthodontics', icon: '🦷', color: 'bg-[#e8f4ff]' },
  { id: 'oral-surgery', label: 'Oral Surgery', icon: '⚕️', color: 'bg-[#e8f4ff]' },
  { id: 'dental-tourism', label: 'Dental Tourism', icon: '✈️', color: 'bg-[#e8f4ff]' },
  { id: 'insurance', label: 'Insurance', icon: '🛡️', color: 'bg-[#ffe8f5]' },
  { id: 'loyalty', label: 'Loyalty Program', icon: '⭐', color: 'bg-[#fff9e6]' },
  { id: 'appointments', label: 'Appointments & Clinic', icon: '📅', color: 'bg-[#e8f4ff]' },
]

const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: '🦷',
    faqs: [
      {
        id: 'q1',
        question: 'What should I expect during my first dental visit?',
        answer: 'During your first visit, we will conduct a comprehensive examination of your teeth, gums, and overall oral health. This includes X-rays if necessary, a professional cleaning, and a discussion about your dental history and any concerns you may have. Our team will create a personalized treatment plan tailored to your needs.',
      },
      {
        id: 'q2',
        question: 'How often should I have a dental check-up and cleaning?',
        answer: 'We recommend visiting the dentist every 6 months for a routine check-up and professional cleaning. However, some patients may need more frequent visits based on their oral health condition. Our team will advise you on the best schedule for your specific needs.',
      },
      {
        id: 'q3',
        question: 'Do tooth-colored fillings last long?',
        answer: 'Yes, tooth-colored composite fillings are durable and can last many years with proper care. They blend naturally with your teeth and provide excellent strength. The longevity depends on factors like the size of the filling, oral hygiene habits, and regular dental check-ups.',
      },
    ],
  },
]

export default function FAQsPage() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState<string>('general')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const heroRef = useRef(null)
  const categoriesRef = useRef(null)
  const faqsRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const categoriesInView = useInView(categoriesRef, { once: true })
  const faqsInView = useInView(faqsRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  const activeCategoryData = faqCategories.find((cat) => cat.id === selectedCategory)

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
              Frequently Asked Questions
            </h1>

            {/* Description */}
            <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed mb-10 max-w-2xl mx-auto">
              Find answers to the most common questions about our services, treatments, and patient care. If you don't find what you're looking for, our team is always here to help.
            </p>

            {/* Tabs - Static Design Elements */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-white/50 text-[#97c4ff] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#97c4ff]" />
                <span>Expert Answers</span>
              </div>
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-white/50 text-[#97c4ff] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#97c4ff]" />
                <span>Comprehensive Guide</span>
              </div>
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-white/50 text-[#97c4ff] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#97c4ff]" />
                <span>Always Here to Help</span>
              </div>
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
              <span className="text-[#97c4ff] font-['Arial']">FAQ</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id ? category.color : 'bg-white border border-[#e5e7eb]'
                  } px-5 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium text-black hover:shadow-md transition-all flex items-center gap-2`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#e5e7eb] text-[15px] font-['Arial'] text-black placeholder:text-[#9ca3af] focus:outline-none focus:border-[#97c4ff] focus:ring-2 focus:ring-[#97c4ff]/20 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqsRef} className="py-16 bg-[#e0edff]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {activeCategoryData && (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={faqsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{activeCategoryData.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-['Gilda_Display'] text-black">
                    {activeCategoryData.title}
                  </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                  {activeCategoryData.faqs.map((faq, index) => {
                    const isExpanded = expandedFAQ === faq.id

                    return (
                      <motion.div
                        key={faq.id}
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={faqsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-base md:text-lg font-['Arial'] font-semibold text-black pr-4">
                            {faq.question}
                          </span>
                          <div className="shrink-0 w-8 h-8 rounded-full bg-[#97c4ff] flex items-center justify-center text-white">
                            {isExpanded ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        {/* Answer */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2">
                            <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
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