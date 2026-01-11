'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import imgImage from "../../assets/e2295a1a1a2bc348414dcc117de577c691164137.png"
import imgImage1 from "../../assets/c5fbf2bb2ed01ea6f6ce38835da33519e2db95fe.png"
import imgImage2 from "../../assets/27cea6501d6677b5b8f9f08502ce76c7a193f7f8.png"

export default function ContactUsPage() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const heroRef = useRef(null)
  const contactCardsRef = useRef(null)
  const formRef = useRef(null)
  const visitClinicRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const contactCardsInView = useInView(contactCardsRef, { once: true })
  const formInView = useInView(formRef, { once: true })
  const visitClinicInView = useInView(visitClinicRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        subject: '',
        message: ''
      })
      setFormSubmitted(false)
    }, 3000)
  }

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

        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
              Sky Dental Center
            </h1>

            {/* Description */}
            <p className="text-lg text-[#1b1b1b] font-['Arial'] leading-relaxed mb-10 max-w-3xl mx-auto">
              We're here to answer your questions and help you schedule your appointment.
              <br />
              Reach out to us through any of the channels below.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="bg-[#cbff8f] px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm font-['Arial'] font-bold text-[#97c4ff]">Quick Response</span>
              </div>
              <div className="bg-[#cbff8f] px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm font-['Arial'] font-bold text-[#97c4ff]">Professional Support</span>
              </div>
              <div className="bg-[#cbff8f] px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#97c4ff]" />
                <span className="text-sm font-['Arial'] font-bold text-[#97c4ff]">Easy Booking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section ref={contactCardsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={contactCardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4">
              Get In Touch
            </h2>
            <p className="text-base text-black font-['Arial']">
              Choose the most convenient way to reach us. Our team is ready to assist you.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Phone Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={contactCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#e0edff] rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Phone</h3>
              <p className="text-base font-['Arial'] font-bold text-[#0c0060] mb-1">+971 2 123 4567</p>
              <p className="text-xs font-['Arial'] text-black mb-4">+971 50 123 4567</p>
              <p className="text-xs font-['Arial'] text-black opacity-70">
                Call us for appointments or inquiries
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={contactCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#e0edff] rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Email</h3>
              <p className="text-base font-['Arial'] font-bold text-[#0c0060] mb-1">info@skydental.ae</p>
              <p className="text-xs font-['Arial'] text-black mb-4">appointments@skydental.ae</p>
              <p className="text-xs font-['Arial'] text-black opacity-70">
                Send us a message anytime
              </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={contactCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#e0edff] rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Location</h3>
              <p className="text-base font-['Arial'] font-bold text-[#0c0060] mb-1">Sky Dental Center</p>
              <p className="text-xs font-['Arial'] text-black mb-4">Abu Dhabi, United Arab Emirates</p>
              <p className="text-xs font-['Arial'] text-black opacity-70">
                Visit us for in-person consultations
              </p>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={contactCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#e0edff] rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#cbff8f] rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#97c4ff]" />
              </div>
              <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Working Hours</h3>
              <p className="text-base font-['Arial'] font-bold text-[#0c0060] mb-1">Sat - Wed: 9 AM - 9 PM</p>
              <p className="text-xs font-['Arial'] text-black mb-4">Thu: 9 AM - 6 PM</p>
              <p className="text-xs font-['Arial'] text-black opacity-70">
                Friday Closed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section ref={formRef} className="py-20" style={{ background: 'linear-gradient(to bottom, rgb(224, 237, 255) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4">
              Send Us a Message
            </h2>
            <p className="text-base text-black font-['Arial']">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {formSubmitted ? (
              <div className="bg-[#cbff8f] rounded-3xl p-12 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#97c4ff]" />
                </div>
                <h3 className="text-3xl font-['Gilda_Display'] text-black mb-4">Message Sent Successfully!</h3>
                <p className="text-base font-['Arial'] text-black">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-['Arial'] text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#97c4ff] font-['Arial'] text-black bg-[#f9fafb]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-sm font-['Arial'] text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#97c4ff] font-['Arial'] text-black bg-[#f9fafb]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-['Arial'] text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#97c4ff] font-['Arial'] text-black bg-[#f9fafb]"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-['Arial'] text-black mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#97c4ff] font-['Arial'] text-black bg-[#f9fafb]"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-['Arial'] text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#97c4ff] font-['Arial'] text-black bg-[#f9fafb] resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#cbff8f] hover:bg-[#b8e680] text-[#97c4ff] font-['Arial'] font-bold py-4 px-6 rounded-full flex items-center justify-center gap-3 transition-all duration-300 group"
                >
                  <span className="text-base">Send Message</span>
                  <div className="w-8 h-8 bg-[#97c4ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Send className="w-4 h-4 text-[#cbff8f]" />
                  </div>
                </button>

                <p className="text-xs font-['Arial'] text-gray-500 text-center mt-4">
                  * Required fields
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Visit Our Clinic Section */}
      <section ref={visitClinicRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={visitClinicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-base text-black font-['Arial']">
              Located in the heart of Abu Dhabi, we welcome you to experience world-class dental care in a comfortable and modern setting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Address & Opening Hours */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              animate={visitClinicInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f9fafb] rounded-3xl p-8"
            >
              {/* Our Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#cbff8f] rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#97c4ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Gilda_Display'] text-black mb-2">Our Address</h3>
                    <p className="text-base font-['Arial'] text-black font-bold">Sky Dental Center</p>
                    <p className="text-sm font-['Arial'] text-black">Abu Dhabi</p>
                    <p className="text-sm font-['Arial'] text-black">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#cbff8f] rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#97c4ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Gilda_Display'] text-black mb-3">Opening Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#cbff8f] rounded-full"></div>
                        <p className="text-sm font-['Arial'] text-black">
                          <span className="font-bold">Sat - Wed:</span> Open 9:00 AM - 9:00 PM
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#cbff8f] rounded-full"></div>
                        <p className="text-sm font-['Arial'] text-black">
                          <span className="font-bold">Thursday:</span> Open 9:00 AM - 6:00 PM
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <p className="text-sm font-['Arial'] text-black">
                          <span className="font-bold">Friday:</span> Closed
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#cbff8f] rounded-full"></div>
                        <p className="text-sm font-['Arial'] text-black">
                          <span className="font-bold">Weekends:</span> Available on request
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
              animate={visitClinicInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#e0edff] rounded-3xl overflow-hidden flex items-center justify-center relative group"
              style={{ minHeight: '400px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-[#cbff8f] rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-[#97c4ff]" />
                </div>
                <h3 className="text-2xl font-['Gilda_Display'] text-black mb-4">Sky Dental Center</h3>
                <p className="text-base font-['Arial'] text-black mb-6">Abu Dhabi, UAE</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#cbff8f] hover:bg-[#b8e680] text-[#97c4ff] font-['Arial'] font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
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
