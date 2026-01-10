'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useEffect } from 'react'
import { Heart, Target, Users, Award, Zap, Shield, Clock, CheckCircle } from 'lucide-react'

// Core Values Data
const coreValues = [
  {
    icon: Heart,
    title: 'Compassion is Key',
    description: "We listen and understand each patient's unique needs and fears, creating a nurturing environment where patients feel comfortable.",
    bgColor: '#cbff8f'
  },
  {
    icon: Target,
    title: 'Integrity & Trust',
    description: 'Honesty and transparency in all our actions, building lifelong relationships based on mutual respect and reliability.',
    bgColor: '#cbff8f'
  },
  {
    icon: Users,
    title: 'Patient-Led Care',
    description: 'Care tailored to the individual. We involve our patients in decision-making and honor their preferences and concerns.',
    bgColor: '#cbff8f'
  },
  {
    icon: Award,
    title: 'Pursuit of Excellence',
    description: 'Delivering the highest standard of dental care through continuous learning, advanced technology, and best practices.',
    bgColor: '#cbff8f'
  }
]

// Innovation Features
const innovationFeatures = [
  {
    icon: Zap,
    title: 'Advanced diagnostic imaging',
    description: 'State-of-the-art 3D imaging technology for precise diagnosis'
  },
  {
    icon: Shield,
    title: 'Sterilization',
    description: 'Hospital-grade sterilization protocols for your safety'
  },
  {
    icon: Clock,
    title: 'Digital patient management systems',
    description: 'Seamless appointment scheduling and records management'
  },
  {
    icon: Heart,
    title: 'Comfortable treatment rooms',
    description: 'Relaxing environment designed for your comfort'
  }
]

// Journey Timeline
const journeySteps = [
  {
    title: 'Initial Visit',
    description: 'We get to know you! A thorough consultation covers your dental history, concerns, and goals.',
    icon: '🏥'
  },
  {
    title: 'Detailed Assessment',
    description: 'Comprehensive examinations utilizing the latest technology for accurate diagnosis and treatment planning.',
    icon: '🔍'
  },
  {
    title: 'Customized Treatment',
    description: 'Personalized care plans designed specifically for your unique needs and lifestyle.',
    icon: '⚕️'
  },
  {
    title: 'Long-Term Partnership',
    description: 'Ongoing support and preventive care to maintain your optimal oral health for years to come.',
    icon: '🤝'
  }
]

// Your Journey Steps
const patientJourneySteps = [
  {
    title: 'Book Booking',
    description: 'Schedule your appointment online'
  },
  {
    title: 'Expert Diagnosis',
    description: 'Comprehensive oral examination'
  },
  {
    title: 'Personalized Care',
    description: 'Custom treatment plan just for you'
  },
  {
    title: 'Long-Term Wellness',
    description: 'Ongoing support and maintenance'
  }
]

// Guest Experience Images
const guestExperiences = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?w=800&h=600&fit=crop'
]

export default function AboutUsPageNew() {
  const shouldReduceMotion = useReducedMotion()
  
  const heroRef = useRef(null)
  const visionRef = useRef(null)
  const valuesRef = useRef(null)
  const innovationRef = useRef(null)
  const journeyRef = useRef(null)
  const patientJourneyRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const visionInView = useInView(visionRef, { once: true })
  const valuesInView = useInView(valuesRef, { once: true })
  const innovationInView = useInView(innovationRef, { once: true })
  const journeyInView = useInView(journeyRef, { once: true })
  const patientJourneyInView = useInView(patientJourneyRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[400px] overflow-hidden pt-24 pb-20"
        style={{
          background: 'linear-gradient(160deg, rgb(237, 248, 255) 0%, rgb(255, 255, 255) 50%, rgb(237, 248, 255) 100%)'
        }}
      >
        {/* Decorative blurs */}
        <div className="absolute -left-32 top-20 w-96 h-96 bg-[rgba(203,255,143,0.3)] rounded-full blur-[100px]" />
        <div className="absolute -right-32 top-40 w-96 h-96 bg-[rgba(151,196,255,0.2)] rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(203,255,143,0.3)] px-5 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#97c4ff]" />
              <span className="text-sm text-black font-['Arial']">About Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight leading-tight">
              Caring for You, Every Step of the Way
            </h1>

            {/* Description */}
            <p className="text-lg text-black/70 font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              Our commitment is to deliver world-class dental care in a welcoming and comfortable environment, where every smile matters and every patient feels like family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight">
                Our Vision & Mission
              </h2>
              <p className="text-base text-black/60 font-['Arial'] max-w-2xl mx-auto">
                Driven by compassion and a commitment to excellence, we strive to transform lives one smile at a time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Mission Card */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#cbff8f] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#97c4ff]" />
                </div>
                <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Mission</h3>
                <p className="text-base text-black/70 font-['Arial'] leading-relaxed">
                  To provide comprehensive, compassionate dental care using the most advanced technology, techniques, and evidence-based practices. We believe in building trust through transparency, education, and personalized treatment plans that prioritize patient comfort and long-term oral health.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#cbff8f] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#97c4ff]" />
                </div>
                <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Vision</h3>
                <p className="text-base text-black/70 font-['Arial'] leading-relaxed">
                  To be recognized as a leader in dental excellence, setting the standard for patient-centered care in our community. We envision a future where every individual has access to the highest quality dental services and feels empowered to achieve optimal oral health.
                </p>
              </motion.div>

              {/* Image Section - Spans Both Columns on Large Screens */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                      alt="Dental team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop"
                      alt="Patient care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        ref={valuesRef}
        className="py-24"
        style={{
          background: 'linear-gradient(180deg, rgb(237, 248, 255) 0%, rgb(255, 255, 255) 100%)'
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-base text-black/60 font-['Arial'] max-w-3xl mx-auto">
              These principles guide our actions and shape the culture of care we provide to our community every single day.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Compassion First */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                Compassion First
              </h3>
              <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                We treat every patient with the same kindness and care we would want for our own families.
              </p>
            </motion.div>

            {/* Integrity & Trust */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                Integrity & Trust
              </h3>
              <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                Honesty and transparency are at the core of every medical decision we make.
              </p>
            </motion.div>

            {/* Always Available */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                Always Available
              </h3>
              <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                24/7 emergency care and support because health concerns don't watch the clock.
              </p>
            </motion.div>

            {/* Patient-Centric */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                Patient-Centric
              </h3>
              <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                Your needs, comfort, and recovery are the primary focus of our entire team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powered by Innovation Section */}
      <section 
        ref={innovationRef}
        className="py-24"
        style={{
          background: 'linear-gradient(180deg, rgb(245, 253, 237) 0%, rgb(255, 255, 255) 100%)'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={innovationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight">
                Powered by Innovation
              </h2>
              <p className="text-base text-black/60 font-['Arial'] max-w-2xl mx-auto">
                Leveraging cutting-edge technology to deliver the best outcomes and patient experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={innovationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {innovationFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                      animate={innovationInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-[#cbff8f] rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#97c4ff]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-['Gilda_Display'] text-black mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-black/70 font-['Arial']">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Images Grid */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={innovationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop"
                      alt="Advanced technology"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=400&fit=crop"
                      alt="Modern clinic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=400&fit=crop"
                      alt="Patient care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=500&fit=crop"
                      alt="Dental equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey of Compassion & Care Section */}
      <section ref={journeyRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image with Quote */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=900&fit=crop"
                    alt="Patient care"
                    className="w-full h-[500px] md:h-[600px] object-cover"
                  />
                  {/* Quote Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-lg md:text-xl font-['Arial'] text-black mb-2">
                      "Healing with heart, leading with science."
                    </p>
                    <p className="text-sm text-black/60 font-['Arial']">
                      - Dr. Sarah Mitchell, Founder
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Timeline */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight leading-tight">
                    Our Journey of Compassion & Care
                  </h2>
                  <p className="text-base text-black/70 font-['Arial'] leading-relaxed">
                    From a small community clinic to a leading multi-specialty hospital, our story is defined by the lives we've touched and the trust we've built over the years.
                  </p>
                </div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* 2010 - The Beginning */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-[#cbff8f] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#97c4ff] font-['Arial'] font-semibold mb-1">2010</p>
                      <h3 className="text-xl font-['Gilda_Display'] text-black mb-2">
                        The Beginning
                      </h3>
                      <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                        Founded with a vision to provide accessible healthcare to everyone in our community.
                      </p>
                    </div>
                  </motion.div>

                  {/* 2015 - Expansion */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-[#cbff8f] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#97c4ff] font-['Arial'] font-semibold mb-1">2015</p>
                      <h3 className="text-xl font-['Gilda_Display'] text-black mb-2">
                        Expansion
                      </h3>
                      <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                        Opened two new specialized wings for cardiology and pediatrics.
                      </p>
                    </div>
                  </motion.div>

                  {/* 2023 - Excellence Award */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 bg-[#cbff8f] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#97c4ff] font-['Arial'] font-semibold mb-1">2023</p>
                      <h3 className="text-xl font-['Gilda_Display'] text-black mb-2">
                        Excellence Award
                      </h3>
                      <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                        Recognized as the top regional healthcare provider for patient safety.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Journey With Us Section */}
      <section 
        ref={patientJourneyRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={patientJourneyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4 tracking-tight">
              Your Journey With Us
            </h2>
            <p className="text-base text-black/60 font-['Arial'] max-w-3xl mx-auto">
              We've streamlined our process to ensure your experience is as comfortable and stress-free as possible.
            </p>
          </motion.div>

          {/* Journey Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 - Easy Booking */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={patientJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-[#edf8ff] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#cbff8f] rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-black">1</span>
                </div>
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-3">
                Easy Booking
              </h3>
              <p className="text-sm text-black/70 font-['Arial']">
                Schedule online or via phone in minutes.
              </p>
            </motion.div>

            {/* Step 2 - Expert Diagnosis */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={patientJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-[#edf8ff] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a6 6 0 0 0-6 6v3H4v10h16V11h-2V8a6 6 0 0 0-6-6z" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#cbff8f] rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-black">2</span>
                </div>
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-3">
                Expert Diagnosis
              </h3>
              <p className="text-sm text-black/70 font-['Arial']">
                Thorough check-up by specialists.
              </p>
            </motion.div>

            {/* Step 3 - Personalized Care */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={patientJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2 * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-[#edf8ff] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    <path d="M12 9v6" />
                    <path d="M9 12h6" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#cbff8f] rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-black">3</span>
                </div>
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-3">
                Personalized Care
              </h3>
              <p className="text-sm text-black/70 font-['Arial']">
                Treatment tailored just for you.
              </p>
            </motion.div>

            {/* Step 4 - Ongoing Support */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={patientJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 3 * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-[#edf8ff] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#97c4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#cbff8f] rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-black">4</span>
                </div>
              </div>
              <h3 className="text-xl font-['Gilda_Display'] text-black mb-3">
                Ongoing Support
              </h3>
              <p className="text-sm text-black/70 font-['Arial']">
                Follow-ups to ensure full recovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guest Experiences Gallery */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guestExperiences.map((image, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
              >
                <img
                  src={image}
                  alt={`Guest experience ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}