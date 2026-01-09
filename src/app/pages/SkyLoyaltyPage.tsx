'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Check, ArrowUpRight, Shield, Star, Crown, Gift, Zap, Award } from 'lucide-react'
import imgPremiumDentalCare from "figma:asset/4f8e41bd74fa3fbba3008a03ef58695f6730a222.png"
import imgImage from "figma:asset/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "figma:asset/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "figma:asset/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

interface TierBenefit {
  text: string
  included: boolean
}

interface MembershipTier {
  id: string
  name: string
  icon: React.ReactNode
  tagline: string
  benefits: TierBenefit[]
  buttonText: string
  featured?: boolean
}

interface Benefit {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const membershipTiers: MembershipTier[] = [
  {
    id: 'silver',
    name: 'Silver Tier',
    icon: <Shield className="w-8 h-8" />,
    tagline: 'Essential Care',
    benefits: [
      { text: 'Quarterly dental checkups', included: true },
      { text: 'Exclusive discount on advanced cosmetic treatments', included: true },
      { text: '20% discount on emergency care', included: true },
      { text: 'Complimentary dental hygiene consultations', included: true },
      { text: 'Complimentary annual whitening sessions', included: false },
      { text: 'Priority access to new treatments and technologies', included: false },
      { text: 'Invitations to exclusive Sky Dental events', included: false },
      { text: 'Complimentary annual specialist check', included: false },
    ],
    buttonText: 'Join Silver Tier',
  },
  {
    id: 'gold',
    name: 'Gold Tier',
    icon: <Star className="w-8 h-8" />,
    tagline: 'Premium Experience',
    benefits: [
      { text: 'Priority access to appointments', included: true },
      { text: 'Exclusive discount on advanced cosmetic treatments', included: true },
      { text: 'Complimentary annual whitening sessions', included: true },
      { text: 'Quarterly dental checkups', included: true },
      { text: 'Complimentary annual specialist check', included: true },
      { text: 'Invitations to exclusive Sky Dental events', included: true },
      { text: 'Priority access to new treatments and technologies', included: true },
      { text: 'Access to VIP lounge and refreshments', included: false },
    ],
    buttonText: 'Join Gold Tier',
    featured: true,
  },
  {
    id: 'platinum',
    name: 'Platinum Tier',
    icon: <Crown className="w-8 h-8" />,
    tagline: 'Ultimate Luxury',
    benefits: [
      { text: 'Complimentary annual specialist check', included: true },
      { text: 'Dedicated account manager for personalized care', included: true },
      { text: 'Invitations to exclusive Sky Dental events', included: true },
      { text: 'Priority access to new treatments and technologies', included: true },
      { text: 'Extended opening hours for appointments', included: true },
      { text: 'Complimentary home visit consultations', included: true },
      { text: 'Access to VIP lounge and refreshments', included: true },
      { text: 'Concierge service for specialty referrals', included: true },
    ],
    buttonText: 'Join Platinum Tier',
  },
]

const benefits: Benefit[] = [
  {
    id: 'rewards',
    icon: <Gift className="w-6 h-6" />,
    title: 'Save with Rewards',
    description: 'Earn points with every visit and procedure that can be redeemed for discounts on future treatments.',
    color: 'bg-[#f0f9ff]',
  },
  {
    id: 'support',
    icon: <Zap className="w-6 h-6" />,
    title: 'Long-Term Support',
    description: 'Enjoy continuous care and ongoing support with personalized treatment plans designed specifically for you.',
    color: 'bg-[#fffbeb]',
  },
  {
    id: 'priority',
    icon: <Star className="w-6 h-6" />,
    title: 'Priority Appointment',
    description: 'Members gain priority access to appointment slots, ensuring you receive care when you need it most.',
    color: 'bg-[#f0fdf4]',
  },
  {
    id: 'trial',
    icon: <Award className="w-6 h-6" />,
    title: 'Priority & Free of Trial',
    description: 'Get complimentary trials of new treatments and technologies before they become available to the general public.',
    color: 'bg-[#faf5ff]',
  },
]

export default function SkyLoyaltyPage() {
  const shouldReduceMotion = useReducedMotion()

  const heroRef = useRef(null)
  const tiersRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const tiersInView = useInView(tiersRef, { once: true })
  const benefitsInView = useInView(benefitsRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })
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
              Sky Loyalty Program
            </h1>

            {/* Description */}
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              Welcome to an elite membership crafted exclusively to elevate your experience with exclusive offers rewards. At Sky Dental Center, our loyalty program is built on trust, exceptional service, and exclusive rewards tailored to your lifestyle.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="bg-[#cbff8f] px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                <span className="text-sm text-black font-['Arial'] font-medium">Exclusive Benefits</span>
              </div>
              <div className="bg-[#cbff8f] px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                <span className="text-sm text-black font-['Arial'] font-medium">Member Rewards</span>
              </div>
              <div className="bg-[#cbff8f] px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                <span className="text-sm text-black font-['Arial'] font-medium">Premium Experience</span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <Home className="w-4 h-4" />
                <span className="font-['Arial']">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#97c4ff] font-['Arial']">Sky Loyalty Program</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section ref={tiersRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={tiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Membership Tiers
            </h2>
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed max-w-3xl mx-auto mb-8">
              Our three membership categories offers a rewarding family of luxury, exclusivity, and wellness. Each tier is meticulously designed to provide a personalized experience.
            </p>
            <button className="bg-[#0c0060] text-white px-6 py-3 rounded-full font-['Arial'] font-medium hover:bg-[#0a0050] transition-colors">
              Join Now
            </button>
          </motion.div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {membershipTiers.map((tier, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '-100px' })

              return (
                <motion.div
                  key={tier.id}
                  ref={ref}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`${
                    tier.featured
                      ? 'bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border-[#fbbf24]'
                      : 'bg-white border-[#f3f4f6]'
                  } border rounded-[32px] p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${tier.featured ? 'bg-[#fbbf24]' : 'bg-[#cbff8f]'} rounded-2xl flex items-center justify-center text-${tier.featured ? 'white' : 'black'} mb-6`}>
                    {tier.icon}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-['Gilda_Display'] text-black mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[#6b7280] font-['Arial'] uppercase tracking-wider mb-6">
                    {tier.tagline}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 shrink-0 ${benefit.included ? 'text-green-500' : 'text-gray-300'}`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className={`text-sm font-['Arial'] ${benefit.included ? 'text-black' : 'text-gray-400'}`}>
                          {benefit.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="bg-[#cbff8f] text-[#97c4ff] font-bold px-6 py-3.5 rounded-full w-full inline-flex items-center justify-between hover:bg-[#b8ff6d] transition-colors font-['Arial'] text-[15px]"
                  >
                    <span>{tier.buttonText}</span>
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

      {/* Why Join Section */}
      <section
        ref={benefitsRef}
        className="py-24"
        style={{
          background: 'linear-gradient(180deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Gilda_Display'] text-black tracking-tight">
              Why Join the Sky Loyalty<br />Program?
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const ref = useRef(null)
                  const isInView = useInView(ref, { once: true, margin: '-100px' })

                  return (
                    <motion.div
                      key={benefit.id}
                      ref={ref}
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${benefit.color} border border-[#f3f4f6] rounded-3xl p-6`}
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black mb-4 shadow-sm">
                        {benefit.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-['Gilda_Display'] text-black mb-3">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#4b5563] font-['Arial'] leading-relaxed">
                        {benefit.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Image */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <img
                  src={imgPremiumDentalCare}
                  alt="Premium Dental Care"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgb(203, 255, 143) 0%, rgb(224, 255, 180) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              A New Standard of Loyalty
            </h2>
            <p className="text-lg text-black font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              At Sky Dental Center, membership is more than a program—it\'s your gateway to a lifetime of exceptional care delivered with world-class precision, loyalty, and respect.
            </p>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="bg-white text-black font-bold px-8 py-4 rounded-full inline-flex items-center gap-4 hover:shadow-xl transition-all font-['Arial'] text-base"
            >
              <span>Become a Member Today</span>
              <div className="w-10 h-10 bg-[#97c4ff] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.button>
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
