'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Plus, Minus } from 'lucide-react'
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
        id: 'general-1',
        question: 'What should I expect during my first dental visit?',
        answer: 'Your first visit includes a comprehensive oral examination, digital X-rays (if needed), and a personalised treatment plan. Our team ensures a comfortable and seamless experience so you leave with clarity and confidence about your oral health.',
      },
      {
        id: 'general-2',
        question: 'How often should I have a dental check-up and cleaning?',
        answer: 'We recommend a check-up every 6 months to maintain healthy teeth and gums and prevent dental issues before they develop.',
      },
      {
        id: 'general-3',
        question: 'Do tooth-coloured fillings last long?',
        answer: 'Yes. Our modern composite fillings are durable, aesthetically pleasing, and blend naturally with your tooth structure for long-lasting results.',
      },
    ],
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: '✨',
    faqs: [
      {
        id: 'cosmetic-1',
        question: 'What is the difference between veneers and a Hollywood Smile?',
        answer: 'Veneers enhance individual teeth, while a Hollywood Smile is a full smile makeover using veneers or crowns to create a dramatic transformation. Both options are customised based on your facial harmony and desired aesthetic.',
      },
      {
        id: 'cosmetic-2',
        question: 'Is teeth whitening safe?',
        answer: 'Absolutely. Our professional whitening treatments are safe, effective, and designed to protect tooth enamel while delivering brighter results in a single session.',
      },
      {
        id: 'cosmetic-3',
        question: 'How long does a Smile Design take?',
        answer: 'Digital Smile Design typically takes 1–2 sessions. You'll preview your future smile before treatment begins.',
      },
    ],
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    icon: '🦷',
    faqs: [
      {
        id: 'orthodontics-1',
        question: 'Do braces work for adults?',
        answer: 'Yes! Braces and clear aligners such as Invisalign and Spark are highly effective for adults seeking alignment and bite correction.',
      },
      {
        id: 'orthodontics-2',
        question: 'How long does orthodontic treatment take?',
        answer: 'Treatment duration varies from 6 months to 24 months, depending on the complexity of the case and the chosen orthodontic method.',
      },
      {
        id: 'orthodontics-3',
        question: 'Are clear aligners as effective as traditional braces?',
        answer: 'For many cases, yes. Clear aligners offer discreet, comfortable treatment and excellent results when worn consistently.',
      },
    ],
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    icon: '👶',
    faqs: [
      {
        id: 'pediatric-1',
        question: 'When should my child see a dentist for the first time?',
        answer: 'The first visit is recommended at age 1 or within 6 months of the first tooth erupting. Early care helps prevent oral issues and builds comfort.',
      },
      {
        id: 'pediatric-2',
        question: 'What are dental sealants, and do children need them?',
        answer: 'Sealants are protective coatings placed on molars to prevent cavities. They are highly recommended for children aged 6–12.',
      },
      {
        id: 'pediatric-3',
        question: 'How do you manage anxious children during treatment?',
        answer: 'Our paediatric specialists use gentle communication, child-friendly techniques, and behavioural guidance to ensure a calm and pleasant experience.',
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced & Restorative Care',
    icon: '🔬',
    faqs: [
      {
        id: 'advanced-1',
        question: 'Who is eligible for dental implants?',
        answer: 'Most adults with healthy gums and sufficient bone structure qualify for implants. Our specialists conduct a thorough assessment to determine suitability.',
      },
      {
        id: 'advanced-2',
        question: 'What is full-mouth rehabilitation?',
        answer: 'It is a comprehensive treatment that restores function, aesthetics, and oral health using crowns, implants, veneers, or other restorative techniques.',
      },
      {
        id: 'advanced-3',
        question: 'Are digital X-rays safe?',
        answer: 'Yes. Digital imaging uses significantly lower radiation than traditional X-rays and provides highly accurate diagnostic results.',
      },
    ],
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    icon: '🦷',
    faqs: [
      {
        id: 'endodontics-1',
        question: 'Is root canal treatment painful?',
        answer: 'Not at all. Thanks to modern techniques and anaesthesia, root canal therapy is comfortable and often relieves pain rather than causing it.',
      },
      {
        id: 'endodontics-2',
        question: 'How long does a root canal take?',
        answer: 'Most treatments are completed in one visit, depending on the tooth and complexity.',
      },
    ],
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    icon: '🦷',
    faqs: [
      {
        id: 'prosthodontics-1',
        question: 'What is the difference between crowns and bridges?',
        answer: 'A crown covers a single tooth, while a bridge replaces one or more missing teeth using neighbouring teeth for support.',
      },
      {
        id: 'prosthodontics-2',
        question: 'Are dentures still used today?',
        answer: 'Yes—modern dentures are far more comfortable and natural-looking. We offer removable, fixed, and implant-supported options.',
      },
    ],
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    icon: '⚕️',
    faqs: [
      {
        id: 'oral-surgery-1',
        question: 'When is wisdom tooth removal necessary?',
        answer: 'Extraction is recommended when wisdom teeth are impacted, causing pain, swelling, or crowding. Our oral surgeons ensure safe and smooth removal.',
      },
      {
        id: 'oral-surgery-2',
        question: 'How long is recovery after an extraction?',
        answer: 'Most patients recover within 2–3 days with proper care.',
      },
    ],
  },
  {
    id: 'dental-tourism',
    title: 'Dental Tourism',
    icon: '✈️',
    faqs: [
      {
        id: 'dental-tourism-1',
        question: 'Do you assist international patients with travel planning?',
        answer: 'Yes. We provide full support including appointment coordination, treatment planning, hotel guidance, and follow-up care.',
      },
      {
        id: 'dental-tourism-2',
        question: 'Why choose Abu Dhabi for dental treatment?',
        answer: 'Abu Dhabi offers world-class healthcare, luxury hospitality, and highly skilled dental specialists—all within a safe and modern environment.',
      },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance',
    icon: '🛡️',
    faqs: [
      {
        id: 'insurance-1',
        question: 'Which insurance partners do you work with?',
        answer: 'Sky Dental Center collaborates with a wide network of local and international insurance companies. Our team assists with verification, approvals, and direct billing (when available).',
      },
      {
        id: 'insurance-2',
        question: 'How do I know what my insurance covers?',
        answer: 'Simply share your insurance details with our reception team—we will explain your benefits clearly and guide you through all covered services.',
      },
    ],
  },
  {
    id: 'loyalty',
    title: 'Sky Loyalty Program',
    icon: '⭐',
    faqs: [
      {
        id: 'loyalty-1',
        question: 'How can I join the Sky Loyalty Program?',
        answer: 'Membership is open to all patients. Simply register during your visit and enjoy exclusive discounts, benefits, and reward points.',
      },
      {
        id: 'loyalty-2',
        question: 'What are the differences between Silver, Gold, and Platinum tiers?',
        answer: 'Each tier offers increasing levels of luxury, privileges, and rewards—from basic discounts in Silver to VIP access and exclusive benefits in Platinum.',
      },
    ],
  },
  {
    id: 'appointments',
    title: 'Appointments & Clinic',
    icon: '📅',
    faqs: [
      {
        id: 'appointments-1',
        question: 'How can I book an appointment?',
        answer: 'You can book easily through: WhatsApp, Phone, Website booking form, Or by visiting our reception',
      },
      {
        id: 'appointments-2',
        question: 'Do you offer same-day appointments for emergencies?',
        answer: 'Yes. We prioritise urgent cases and aim to provide same-day treatment whenever possible.',
      },
      {
        id: 'appointments-3',
        question: 'Is Sky Dental Center suitable for families?',
        answer: 'Absolutely. We offer comprehensive care for adults and children, making us a leading family-friendly dental centre in Abu Dhabi.',
      },
    ],
  },
]

export default function FAQsPage() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState<string>('general')
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

        <div className="container mx-auto px-6 relative z-10 py-20">
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
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-[#cbff8f] text-[#97c4ff] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#97c4ff]" />
                <span>Expert Answers</span>
              </div>
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-[#cbff8f] text-[#97c4ff] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#97c4ff]" />
                <span>Comprehensive Guide</span>
              </div>
              <div className="px-6 py-2.5 rounded-full text-[14px] font-['Arial'] font-medium flex items-center gap-2 bg-[#cbff8f] text-[#97c4ff] shadow-sm">
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