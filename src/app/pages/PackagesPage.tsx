'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, ArrowUpRight, Check, GraduationCap, HeartPulse, Sparkles, Smile, MessageCircle, Percent } from 'lucide-react'
import imgImage from "../../assets/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "../../assets/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "../../assets/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

interface Package {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

interface Privilege {
  id: string
  icon: string
  title: string
  description: string
}

const packages: Package[] = [
  {
    id: 'back-to-school',
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Back To School',
    description: 'Give your child the perfect start to the academic year with our premium Back to School package designed to safeguard oral health, boost confidence, and support long-term wellbeing.',
    features: [
      'Advanced dental assessments',
      'Professional cleaning',
      'Preventive care for young patients'
    ]
  },
  {
    id: 'healthy-smiles',
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Sky Healthy Smiles',
    description: 'Our signature package delivers a full-spectrum wellness experience for individuals and families committed to superior oral health.',
    features: [
      'Expert examinations',
      'Deep cleaning',
      'Preventive guidance'
    ]
  },
  {
    id: 'hollywood-smile',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Hollywood Smile',
    description: 'Transform your smile into a work of art with our luxury Hollywood Smile package crafted using cutting-edge cosmetic dentistry and premium veneer artistry.',
    features: [
      'Digital smile design',
      'Premium veneer artistry',
      'Customised facial harmony'
    ]
  },
  {
    id: 'whitening-cleaning',
    icon: <Smile className="w-6 h-6" />,
    title: 'Whitening & Cleaning',
    description: 'Unveil the brilliance of your smile with our professional Whitening & Cleaning package. Meticulously designed treatment for immediate, luminous results.',
    features: [
      'Advanced stain removal',
      'Clinical whitening technology',
      'Immediate luminous results'
    ]
  },
  {
    id: 'consultation',
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Free Braces Consultation',
    description: 'Begin your orthodontic transformation with absolute clarity and confidence. Your dream smile starts with a conversation free of charge.',
    features: [
      'Detailed bite analysis',
      'Orthodontic assessment',
      'Personalised treatment roadmap'
    ]
  },
  {
    id: 'discount',
    icon: <Percent className="w-6 h-6" />,
    title: 'Member Discount 40%',
    description: 'Sky Dental Center celebrates loyalty with an exclusive 40% discount for members on selected treatments. World-class dentistry, enhanced with exceptional value.',
    features: [
      '40% off selected treatments',
      'Exclusive member benefits',
      'Consistent high-quality care'
    ]
  }
]

const privileges: Privilege[] = [
  {
    id: 'loyalty',
    icon: '🎁',
    title: 'Free Holidays',
    description: 'Sky members enjoy complimentary holidays as a token of appreciation for their trust and continued patronage—granting exclusive access to some of the world\'s most sought-after destinations.'
  },
  {
    id: 'priority',
    icon: '⭐',
    title: 'Dental At Home',
    description: 'Embrace the future of dentistry by welcoming premium dental services directly into the comfort and privacy of your home, tailored to your schedule and delivered with impeccable professionalism.'
  },
  {
    id: 'treatments',
    icon: '💼',
    title: 'Corporate/Business Meetings',
    description: 'Elevate productivity in an ideal environment tailored for executive meetings and business gatherings—combining premium hospitality with cutting-edge facilities designed for success.'
  }
]

export default function PackagesPage() {
  const shouldReduceMotion = useReducedMotion()
  
  const heroRef = useRef(null)
  const packagesRef = useRef(null)
  const privilegesRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const packagesInView = useInView(packagesRef, { once: true })
  const privilegesInView = useInView(privilegesRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[500px] overflow-hidden pt-32 pb-20"
        style={{
          background: 'linear-gradient(160.216deg, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 50%, rgb(224, 237, 255) 100%)'
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
            <h1 className="text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight">
              Packages & Premium Offers
            </h1>

            {/* Subtitle */}
            <p className="text-lg italic text-[rgba(12,0,96,0.8)] mb-6 font-['Arial']">
              "Exclusive Dental Packages & Premium Smile Offers in Abu Dhabi"
            </p>

            {/* Description */}
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              At Sky Dental Center, we curate a distinguished collection of exclusive dental packages and luxury smile offers designed to elevate every aspect of your oral health and aesthetics.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="bg-white border border-[rgba(12,0,96,0.05)] px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm text-[#97c4ff] font-['Poppins'] font-medium">Premium Care</span>
              </div>
              <div className="bg-white border border-[rgba(12,0,96,0.05)] px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm text-[#97c4ff] font-['Poppins'] font-medium">Exclusive Benefits</span>
              </div>
              <div className="bg-white border border-[rgba(12,0,96,0.05)] px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm text-[#97c4ff] font-['Poppins'] font-medium">World-Class Dentistry</span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <Home className="w-4 h-4" />
                <span className="font-['Arial']">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#97c4ff] font-['Arial']">Packages & Offers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Dental Packages Section */}
      <section ref={packagesRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={packagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Premium Dental Packages
            </h2>
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              Whether you're seeking a radiant Hollywood smile, orthodontic transformation, or family wellness, our offers are tailored to meet your needs.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: "-100px" })
              // Special styling for Sky Healthy Smiles (middle card in top row)
              const isHighlighted = pkg.id === 'healthy-smiles'
              
              return (
                <motion.div
                  key={pkg.id}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${
                    isHighlighted 
                      ? 'bg-[#dff0ff] border-[#c5e4ff]' 
                      : 'bg-white border-[#f3f4f6]'
                  } border rounded-[32px] p-8 hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#cbff8f] rounded-[18px] flex items-center justify-center text-2xl mb-5">
                    {pkg.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-['Gilda_Display'] text-black mb-4 leading-tight">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-[1.7] mb-6">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-[7px] shrink-0" />
                        <span className="text-[14px] text-black font-['Arial'] leading-[1.6]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="bg-[#cbff8f] text-[#97c4ff] font-bold px-6 py-3.5 rounded-full w-full inline-flex items-center justify-between hover:bg-[#b8ff6d] transition-colors font-['Arial'] text-[15px]"
                  >
                    <span>Book Now</span>
                    <div className="w-8 h-8 bg-[#97c4ff] rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-[18px] h-[18px] text-[#cbff8f]" />
                    </div>
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Exclusive Member Privileges Section */}
      <section 
        ref={privilegesRef}
        className="py-24"
        style={{
          background: 'linear-gradient(180deg, rgb(245, 253, 237) 0%, rgb(255, 255, 255) 100%)'
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={privilegesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Exclusive Member Privileges
            </h2>
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              We proudly extend special privileges to our esteemed, specially selected members who have entrusted us at Sky Dental Center with their oral health and aesthetics.
            </p>
          </motion.div>

          {/* Privileges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {privileges.map((privilege, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: "-100px" })
              
              return (
                <motion.div
                  key={privilege.id}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white border border-[#f3f4f6] rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#cbff8f] rounded-2xl flex items-center justify-center text-3xl mb-6">
                    {privilege.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">
                    {privilege.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#4b5563] font-['Arial'] leading-relaxed mb-8">
                    {privilege.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="bg-[#cbff8f] text-[#97c4ff] font-bold px-6 py-3 rounded-full w-full inline-flex items-center justify-between hover:bg-[#b8ff6d] transition-colors font-['Arial']"
                  >
                    <span>Learn More</span>
                    <div className="w-9 h-9 bg-[#97c4ff] rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-[#cbff8f]" />
                    </div>
                  </motion.button>
                </motion.div>
              )
            })}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={privilegesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-600 font-['Arial'] italic">
              *Terms and conditions apply. Please present valid identification to redeem offers.
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
            <h2 className="text-5xl font-['Gilda_Display'] text-black tracking-tight">
              A Collection of Unforgettable<br />Guest Experiences
            </h2>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[imgImage, imgImage1, imgImage2].map((image, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: "-100px" })
              
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