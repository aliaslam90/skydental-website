'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { getServiceById } from '../data/servicesData'
import { useBooking } from '../context/BookingContext'
import { serviceIcons } from '../components/ServiceIcons'

// Guest experience images
const guestExperiences = [
  'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
]

// Solution tabs data for Implant & Advanced Care
const solutionTabs = [
  {
    id: 'multiple',
    title: 'Multiple missing Teeth',
    description: 'Losing three teeth doesn\'t always mean you\'ll need three separate implants. Schedule a consultation with our specialist to explore the best solutions available to restore your smile.',
    icon: '/multiple-missing-teeth-icon.svg',
    beforeImage: '/Multiple-missing-Teeth-before-2.webp',
    afterImage: '/Multiple-missing-Teeth-after-2.webp'
  },
  {
    id: 'none',
    title: 'No Teeth at all',
    description: 'While having no teeth may seem overwhelming, it\'s a condition that requires expert planning and care. Living without teeth can greatly impact daily life, but there are advanced solutions beyond traditional dentures. Our team is here to guide you toward a permanent, reliable solution that brings back both the function and beauty of your smile, helping you feel confident once again.',
    icon: '/download-2-1.svg',
    beforeImage: '/No-Teeth-at-all-before-1.webp',
    afterImage: '/No-Teeth-at-all-after-1.webp'
  },
  {
    id: 'single',
    title: 'One missing Tooth',
    description: 'Did you crack a tooth biting something hard? Is there bleeding? Suffer an injury during sports? Our expert team can help restore your smile with a single dental implant that looks and feels just like your natural tooth.',
    icon: '/download-1-1.svg',
    beforeImage: '/One-missing-Tooth-before-2.webp',
    afterImage: '/One-missing-Tooth-after-2.webp'
  }
]

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId || '')
  const shouldReduceMotion = useReducedMotion()
  const { openBookingSidebar } = useBooking()
  
  const [activeTab, setActiveTab] = useState('multiple')
  const [sliderPosition, setSliderPosition] = useState(50)
  
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const servicesRef = useRef(null)
  const whyChooseRef = useRef(null)
  const solutionRef = useRef(null)
  const ctaRef = useRef(null)
  const experiencesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const benefitsInView = useInView(benefitsRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const whyChooseInView = useInView(whyChooseRef, { once: true })
  const solutionInView = useInView(solutionRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })
  const experiencesInView = useInView(experiencesRef, { once: true })
  
  const activeTabData = solutionTabs.find(tab => tab.id === activeTab) || solutionTabs[0]
  
  const [isDragging, setIsDragging] = useState(false)
  const [imageRetries, setImageRetries] = useState<{ [key: string]: number }>({})
  const tabButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  
  // Force update tab button styles when activeTab changes to override Tailwind CSS
  useEffect(() => {
    solutionTabs.forEach(tab => {
      const btn = tabButtonRefs.current[tab.id]
      if (btn) {
        if (tab.id === activeTab) {
          btn.style.setProperty('background-color', '#cbff8f', 'important')
          btn.style.setProperty('color', '#000000', 'important')
        } else {
          btn.style.setProperty('background-color', '#f3f4f6', 'important')
          btn.style.setProperty('color', '#000000', 'important')
        }
      }
    })
  }, [activeTab])
  
  const updateSliderPosition = (clientX: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }
  
  const handleImageError = (imageSrc: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    const retryCount = imageRetries[imageSrc] || 0
    
    console.error('Image load error:', imageSrc, 'Retry count:', retryCount, 'Full URL:', window.location.origin + imageSrc)
    
    if (retryCount < 2) {
      // Retry loading the image after a short delay with cache busting
      setTimeout(() => {
        setImageRetries(prev => ({ ...prev, [imageSrc]: retryCount + 1 }))
        // Force reload with cache busting
        const newSrc = imageSrc + (imageSrc.includes('?') ? '&' : '?') + `_retry=${retryCount + 1}&_t=${Date.now()}`
        target.src = newSrc
      }, 300)
    } else {
      // After retries, show a placeholder
      console.error('Image failed to load after retries:', imageSrc)
      target.style.opacity = '0.3'
    }
  }
  
  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e.clientX, e.currentTarget)
    }
  }
  
  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSliderPosition(e.clientX, e.currentTarget)
  }
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX, e.currentTarget)
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0C0060] mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#56FC8A] hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const ServiceIcon = serviceIcons[service.id as keyof typeof serviceIcons]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-b from-[#0C0060] to-[#1a0d7a] overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#56FC8A' }}>
                {ServiceIcon && <ServiceIcon className="w-12 h-12 text-[#0C0060]" />}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-white/90 font-['Arial'] leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-['Gilda_Display'] text-[#0C0060] text-center mb-12">
                Why Choose Our {service.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                      animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-8 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <BenefitIcon className="w-12 h-12 text-[#0C0060]" />
                      </div>
                      <h3 className="text-2xl font-['Gilda_Display'] text-[#0C0060] mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-black/70 font-['Arial'] leading-relaxed">
                        {benefit.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {service.services && service.services.length > 0 && (
        <section ref={servicesRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-['Gilda_Display'] text-[#0C0060] text-center mb-12">
                Our {service.name} Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.services.map((serviceItem, index) => {
                  const ServiceItemIcon = serviceItem.icon
                  return (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-center mb-4">
                        <ServiceItemIcon className="w-10 h-10 text-[#0C0060]" />
                      </div>
                      <h3 className="text-xl font-['Gilda_Display'] text-[#0C0060] mb-3 text-center">
                        {serviceItem.title}
                      </h3>
                      <p className="text-base text-black/70 font-['Arial'] leading-relaxed text-center">
                        {serviceItem.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {service.whyChoose && (
        <section ref={whyChooseRef} className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-['Gilda_Display'] text-[#0C0060] text-center mb-12">
                Why Choose Our {service.name}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="text-base text-black/70 font-['Arial'] leading-relaxed whitespace-pre-line">
                  {service.whyChoose}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solution To Your Problems Section - Only for Implant & Advanced Care */}
      {serviceId === 'advanced-restorative' && (
        <section ref={solutionRef} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-[#0C0060] mb-6">
                  Solution To Your Problems
                </h2>
                <p className="text-lg text-black/70 font-['Arial'] leading-relaxed max-w-3xl mx-auto">
                  Share your issue with us, and we'll find the perfect solution for you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Sidebar - Tabs */}
                <div className="space-y-3">
                  {solutionTabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      ref={(el) => {
                        tabButtonRefs.current[tab.id] = el
                        if (el && activeTab === tab.id) {
                          el.style.setProperty('background-color', '#cbff8f', 'important')
                          el.style.setProperty('color', '#000000', 'important')
                        } else if (el) {
                          el.style.setProperty('background-color', '#f3f4f6', 'important')
                          el.style.setProperty('color', '#000000', 'important')
                        }
                      }}
                      onClick={() => {
                        setActiveTab(tab.id)
                        setSliderPosition(50) // Reset slider when tab changes
                        // Reset image retries when switching tabs
                        setImageRetries({})
                        // Force update styles after state change
                        setTimeout(() => {
                          solutionTabs.forEach(t => {
                            const btn = tabButtonRefs.current[t.id]
                            if (btn) {
                              if (t.id === tab.id) {
                                btn.style.setProperty('background-color', '#cbff8f', 'important')
                                btn.style.setProperty('color', '#000000', 'important')
                              } else {
                                btn.style.setProperty('background-color', '#f3f4f6', 'important')
                                btn.style.setProperty('color', '#000000', 'important')
                              }
                            }
                          })
                        }, 0)
                      }}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'shadow-lg text-black'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? '#cbff8f' : '#f3f4f6',
                        color: '#000000',
                        border: 'none',
                        outline: 'none'
                      }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        {tab.icon && (
                          <img 
                            src={tab.icon} 
                            alt={tab.title}
                            className="w-16 h-16 object-contain flex-shrink-0"
                          />
                        )}
                        {!tab.icon && (
                          <span className="text-4xl flex-shrink-0">
                            {tab.id === 'none' && '😬'}
                            {tab.id === 'single' && '🦷'}
                          </span>
                        )}
                        <span className="font-['Arial'] font-semibold text-lg">
                          {tab.title}
                        </span>
                        {activeTab === tab.id && (
                          <ChevronRightIcon className="w-5 h-5 ml-auto" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Right Side - Before/After Slider */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                  animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Before/After Image Slider */}
                    <div
                      className="relative w-full aspect-[4/3] cursor-col-resize select-none bg-gray-200"
                      onClick={handleSliderClick}
                      onMouseMove={handleSliderMove}
                      onMouseDown={() => setIsDragging(true)}
                      onMouseUp={() => setIsDragging(false)}
                      onMouseLeave={() => {
                        setIsDragging(false)
                      }}
                      onTouchStart={() => setIsDragging(true)}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={() => setIsDragging(false)}
                    >
                      {/* Before Image (Background) */}
                      <div className="absolute inset-0">
                        <img
                          key={`before-${activeTabData.id}-${imageRetries[activeTabData.beforeImage] || 0}`}
                          src={activeTabData.beforeImage}
                          alt="Before"
                          className="w-full h-full object-cover"
                          style={{ 
                            minHeight: '100%', 
                            minWidth: '100%',
                            display: 'block'
                          }}
                          loading="eager"
                          onError={(e) => {
                            console.error('Failed to load before image:', activeTabData.beforeImage)
                            handleImageError(activeTabData.beforeImage, e)
                          }}
                          onLoad={(e) => {
                            console.log('Before image loaded successfully:', activeTabData.beforeImage)
                            const img = e.target as HTMLImageElement
                            img.style.opacity = '1'
                            img.style.display = 'block'
                          }}
                        />
                        <div className="absolute bottom-4 left-4 bg-[#8B4513] text-white px-4 py-2 rounded-lg font-['Arial'] font-medium">
                          Before
                        </div>
                      </div>

                      {/* After Image (Clipped) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                      >
                        <img
                          key={`after-${activeTabData.id}-${imageRetries[activeTabData.afterImage] || 0}`}
                          src={activeTabData.afterImage}
                          alt="After"
                          className="w-full h-full object-cover"
                          style={{ 
                            minHeight: '100%', 
                            minWidth: '100%',
                            display: 'block'
                          }}
                          loading="eager"
                          onError={(e) => {
                            console.error('Failed to load after image:', activeTabData.afterImage)
                            handleImageError(activeTabData.afterImage, e)
                          }}
                          onLoad={(e) => {
                            console.log('After image loaded successfully:', activeTabData.afterImage)
                            const img = e.target as HTMLImageElement
                            img.style.opacity = '1'
                            img.style.display = 'block'
                          }}
                        />
                        <div className="absolute bottom-4 right-4 bg-[#8B4513] text-white px-4 py-2 rounded-lg font-['Arial'] font-medium">
                          After
                        </div>
                      </div>

                      {/* Slider Control */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="flex gap-1">
                            <ChevronLeft className="w-4 h-4 text-[#0C0060]" />
                            <ChevronRight className="w-4 h-4 text-[#0C0060]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title and Description Below Image */}
                    <div className="px-6 pt-6 pb-6">
                      <h3 className="text-3xl font-['Gilda_Display'] text-black mb-4">
                        {activeTabData.title}
                      </h3>
                      <p className="text-base text-black/70 font-['Arial'] leading-relaxed">
                        {activeTabData.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-b from-[#0C0060] to-[#1a0d7a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-white mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-white/90 font-['Arial'] leading-relaxed mb-8">
              Book your consultation today and take the first step towards a healthier, more confident smile.
            </p>
            <button
              onClick={openBookingSidebar}
              className="bg-[#56FC8A] text-[#0C0060] px-8 py-4 rounded-xl font-['Arial'] font-bold text-lg hover:bg-[#4ae077] transition-colors inline-flex items-center gap-2"
            >
              Book Appointment
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Guest Experience Section */}
      <section ref={experiencesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-['Gilda_Display'] text-[#0C0060] text-center mb-12">
              Our Guest Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guestExperiences.map((image, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Guest experience ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
