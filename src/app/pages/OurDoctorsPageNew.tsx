'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, Heart, Target, Users, Award } from 'lucide-react'
import imgImage from "figma:asset/6bcd7b1b14451ea069e378e86538986311521fdb.png"
import imgImage1 from "figma:asset/5acfcfbb197f8e51d36fe2ef16afabdd1303f102.png"
import imgImage2 from "figma:asset/c732a079e104af15d7dd4e2053f9ad2a683392cf.png"
import imgImage3 from "figma:asset/9fbf72269945d89340291423575f203d2365fd2d.png"
import imgImage4 from "figma:asset/9820c349dd5b4ac1658cc8b535bf4db2bebb8ebb.png"
import imgImage5 from "figma:asset/77ae170107d77646f52d92aa2eb7f49fce9af7ad.png"
import imgImage6 from "figma:asset/7354fce0048b8c11bb7fcdd7a0ab2cd907a3d792.png"
import imgImage7 from "figma:asset/09dfd6008361ed084838521d23cd6404d570744c.png"
import imgImage8 from "figma:asset/5027978346984890af8db65202bd8d2976612444.png"
import imgImage9 from "figma:asset/8e5d5d334628947ffcff13589fb416cb10c316ca.png"
import imgImage10 from "figma:asset/d0a174de16cf4fb8302d79cf8289e73cb1677432.png"
import imgImage11 from "figma:asset/0d3ac11072075d113c29833278eb30849c46faed.png"
import imgImage12 from "figma:asset/6b7905bb93d0f824d8be0a8badf26d7ebf6ec721.png"

// Doctor data from Figma design
const doctorsData = [
  {
    id: 'dr-saifaldin-tawakul',
    name: 'Dr. Saifaldin Tawakul',
    specialty: 'Orthodontist',
    experience: '15+ years',
    image: imgImage,
    available: true
  },
  {
    id: 'dr-basma-al-rawi',
    name: 'Dr. Basma Al Rawi',
    specialty: 'Cosmetic Dentistry',
    experience: '12+ years',
    image: imgImage1,
    available: true
  },
  {
    id: 'dr-claude-istanbouli',
    name: 'Dr. Claude Istanbouli',
    specialty: 'Endodontist',
    experience: '10+ years',
    image: null, // Placeholder
    available: false
  },
  {
    id: 'dr-elias-daoud-hanna',
    name: 'Dr. Elias Daoud Hanna',
    specialty: 'Oral Surgeon',
    experience: '20+ years',
    image: imgImage2,
    available: true
  },
  {
    id: 'dr-amr-husson',
    name: 'Dr. Amr Husson',
    specialty: 'Periodontist',
    experience: '8+ years',
    image: imgImage3,
    available: true
  },
  {
    id: 'dr-shridhar-munje',
    name: 'Dr. Shridhar Munje',
    specialty: 'General Dentistry',
    experience: '18+ years',
    image: imgImage4,
    available: true
  },
  {
    id: 'dr-mohammad-abdulrazak',
    name: 'Dr. Mohammad Abdulrazak',
    specialty: 'Prosthodontist',
    experience: '14+ years',
    image: null, // Placeholder
    available: false
  },
  {
    id: 'dr-hazem-reslan',
    name: 'Dr. Hazem Reslan',
    specialty: 'Orthodontist',
    experience: '11+ years',
    image: imgImage5,
    available: true
  },
  {
    id: 'dr-nasrin-badreldin',
    name: 'Dr. Nasrin Badreldin Mahgoub',
    specialty: 'Pediatric Dentistry',
    experience: '9+ years',
    image: null, // Placeholder
    available: false
  },
  {
    id: 'dr-kinan-mohammed',
    name: 'Dr. Kinan Mohammed Mohdi',
    specialty: 'General Dentistry',
    experience: '7+ years',
    image: imgImage6,
    available: true
  },
  {
    id: 'dr-mohanned-albasha',
    name: 'Dr. Mohanned Albasha',
    specialty: 'Oral Surgeon',
    experience: '13+ years',
    image: null, // Placeholder
    available: false
  },
  {
    id: 'dr-arwa-rashed',
    name: 'Dr. Arwa Rashed Almarshoodi',
    specialty: 'Cosmetic Dentistry',
    experience: '10+ years',
    image: imgImage7,
    available: true
  },
  {
    id: 'dr-reem-al-hammadi',
    name: 'Dr. Reem Al-Hammadi',
    specialty: 'Endodontist',
    experience: '6+ years',
    image: imgImage8,
    available: true
  }
]

const specialties = [
  'All Specialties',
  'Orthodontist',
  'Cosmetic Dentistry',
  'Endodontist',
  'Oral Surgeon',
  'Periodontist',
  'General Dentistry',
  'Prosthodontist',
  'Pediatric Dentistry'
]

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'We treat every patient with the same kindness and care we would want for our own families.'
  },
  {
    icon: Target,
    title: 'Integrity & Trust',
    description: 'Honesty and transparency are at the core of every medical decision we make.'
  },
  {
    icon: Users,
    title: 'Always Available',
    description: '24/7 emergency care and support because health concerns don\'t watch the clock.'
  },
  {
    icon: Award,
    title: 'Patient-Centric',
    description: 'Your needs, comfort, and recovery are the primary focus of our entire team.'
  }
]

// Guest Experience Images
const guestExperiences = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop'
]

export default function OurDoctorsPageNew() {
  const shouldReduceMotion = useReducedMotion()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter doctors based on search and specialty
  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty
      return matchesSearch && matchesSpecialty
    })
  }, [searchQuery, selectedSpecialty])

  return (
    <div className="bg-white overflow-x-hidden" style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] overflow-hidden pt-20 pb-16"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(203,255,143,0.3)] px-5 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#97c4ff]" />
              <span className="text-sm text-black font-['Arial']">Our Doctors</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Gilda_Display'] text-black mb-6 tracking-tight leading-tight px-4">
              Professional, Experienced Doctors Fluent in All Modern Treatment Methods
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-black/70 font-['Arial'] leading-relaxed max-w-3xl mx-auto mb-8">
              Meet our team of dedicated dental professionals committed to your oral health and beautiful smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input
                  type="text"
                  placeholder="Search Doctors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors"
                />
              </div>

              {/* Specialty Filter */}
              <div className="relative md:w-64">
                <button
                  onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-full font-['Arial'] text-sm hover:border-[#97c4ff] transition-colors bg-white"
                >
                  <span className="text-black">{selectedSpecialty}</span>
                  <ChevronDown className={`w-4 h-4 text-black/60 transition-transform ${isSpecialtyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSpecialtyOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 max-h-64 overflow-y-auto">
                    {specialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => {
                          setSelectedSpecialty(specialty)
                          setIsSpecialtyOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 font-['Arial'] text-sm hover:bg-gray-50 transition-colors ${
                          selectedSpecialty === specialty ? 'bg-[#edf8ff] text-[#97c4ff]' : 'text-black'
                        }`}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Results Count */}
              <div className="text-sm font-['Arial'] text-black/60">
                Found <span className="font-bold text-black">{filteredDoctors.length}</span> Doctors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-[#f5fded]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/our-doctors/${doctor.id}`}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      {/* Doctor Image */}
                      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                        )}
                        {!doctor.available && (
                          <div className="absolute top-3 right-3 bg-gray-800/80 text-white text-xs px-3 py-1 rounded-full font-['Arial']">
                            Coming Soon
                          </div>
                        )}
                      </div>

                      {/* Doctor Info */}
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-['Gilda_Display'] text-black mb-2 tracking-tight">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-[#97c4ff] font-['Arial'] mb-1">
                          {doctor.specialty}
                        </p>
                        <p className="text-xs text-black/60 font-['Arial'] mb-4">
                          {doctor.experience}
                        </p>
                        
                        {doctor.available && (
                          <button className="w-full bg-[#cbff8f] hover:bg-[#b8e67c] text-black font-['Arial'] text-sm py-2 px-4 rounded-full transition-colors">
                            View Profile
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredDoctors.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-black/60 font-['Arial']">
                  No doctors found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedSpecialty('All Specialties')
                  }}
                  className="mt-4 text-[#97c4ff] font-['Arial'] text-sm hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section 
        className="py-24"
        style={{
          background: 'linear-gradient(180deg, rgb(237, 248, 255) 0%, rgb(255, 255, 255) 100%)'
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-[#cbff8f] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Gilda_Display'] text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-black/70 font-['Arial'] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Schedule a Consultation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Form */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black mb-6 tracking-tight">
                  Schedule a Consultation Today!
                </h2>
                <p className="text-base text-black/70 font-['Arial'] leading-relaxed mb-8">
                  Take the first step toward better dental health. Book your appointment with our expert team.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors"
                  />
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-2xl font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors appearance-none bg-white">
                      <option>Select Doctor</option>
                      {doctorsData.filter(d => d.available).map(doctor => (
                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60 pointer-events-none" />
                  </div>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl font-['Arial'] text-sm focus:outline-none focus:border-[#97c4ff] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#cbff8f] hover:bg-[#b8e67c] text-black font-['Arial'] font-semibold py-4 px-6 rounded-full transition-colors"
                  >
                    Book Appointment
                  </button>
                </form>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop"
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experiences Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black tracking-tight">
              A Collection of Unforgettable<br />Guest Experiences
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guestExperiences.map((image, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
