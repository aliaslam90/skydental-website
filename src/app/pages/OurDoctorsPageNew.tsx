'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, Heart, Target, Users, Award } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

// Doctor data - First 4 match homepage, rest can be added later
const doctorsData = [
  {
    id: 'dr-saifaldin-tawakul',
    name: 'Dr. Saif Eldin Tawakul',
    specialty: 'Specialist Oral Surgeon',
    experience: '20+ years',
    image: '/doctor1.png',
    available: true
  },
  {
    id: 'dr-basma-al-rawi',
    name: 'Dr. Basma Alrawi',
    specialty: 'Oral Surgery',
    experience: '12+ years',
    image: '/doctor2.png',
    available: true
  },
  {
    id: 'dr-claude-istanbouli',
    name: 'Dr. Claude Istanbouli',
    specialty: 'Master of Implant Dentistry',
    experience: '10+ years',
    image: '/doctor3.png',
    available: true
  },
  {
    id: 'dr-elias-daoud-hanna',
    name: 'Dr. Elias Hanna',
    specialty: 'Prosthodontist',
    experience: '20+ years',
    image: '/doctor4.png',
    available: true
  },
  {
    id: 'dr-amr-husson',
    name: 'Dr. Amr Husson',
    specialty: 'Orthodontist',
    experience: '8+ years',
    image: '/doctor5.png',
    available: true
  },
  {
    id: 'dr-shridhar-munje',
    name: 'Dr. Shridhar Munje',
    specialty: 'Orthodontist',
    experience: '18+ years',
    image: '/doctor6.png',
    available: true
  },
  {
    id: 'dr-mohammad-abdulrazak',
    name: 'Dr. Mohammad Abdulrazak',
    specialty: 'Specialist Periodontist',
    experience: '14+ years',
    image: '/doctor7.png',
    available: true
  },
  {
    id: 'dr-hazem-reslan',
    name: 'Dr. Hazem Reslan',
    specialty: 'Specialist Pedodontist',
    experience: '11+ years',
    image: '/doctor8.png',
    available: true
  },
  {
    id: 'dr-nasrin-badreldin',
    name: 'Dr. Nasrin Badreldin Mahgoub',
    specialty: 'Specialist Endodontist',
    experience: '9+ years',
    image: '/doctor9.png',
    available: true
  },
  {
    id: 'dr-kinan-mohammed',
    name: 'Dr. Kinan Mohammed Mohdi',
    specialty: 'Prosthodontist',
    experience: '7+ years',
    image: '/doctor10.png',
    available: true
  },
  {
    id: 'dr-mohanned-albasha',
    name: 'Dr. Mohanned Albasha',
    specialty: 'General dentist',
    experience: '13+ years',
    image: '/doctor11.png',
    available: true
  },
  {
    id: 'dr-arwa-rashed',
    name: 'Dr. Arwa Rashed Almarshoodi',
    specialty: 'General Dental Practitioner',
    experience: '10+ years',
    image: '/doctor12.png',
    available: true
  },
  {
    id: 'dr-reem-al-hammadi',
    name: 'Dr. Reem Al-Hammadi',
    specialty: 'General Dentist',
    experience: '6+ years',
    image: '/doctor13.png',
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
  const { openBookingSidebar } = useBooking()

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
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] overflow-hidden pt-24 pb-16"
        style={{
          background: 'linear-gradient(160deg, rgb(237, 248, 255) 0%, rgb(255, 255, 255) 50%, rgb(237, 248, 255) 100%)'
        }}
      >
        {/* Decorative blurs */}
        <div className="absolute -left-32 top-20 w-96 h-96 bg-[rgba(203,255,143,0.3)] rounded-full blur-[100px]" />
        <div className="absolute -right-32 top-40 w-96 h-96 bg-[rgba(151,196,255,0.2)] rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(203,255,143,0.3)] px-5 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#0C0060]" />
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full font-['Arial'] text-sm focus:outline-none focus:border-[#0C0060] transition-colors"
                />
              </div>

              {/* Specialty Filter */}
              <div className="relative md:w-64">
                <button
                  onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-full font-['Arial'] text-sm hover:border-[#0C0060] transition-colors bg-white"
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
                          selectedSpecialty === specialty ? 'bg-[#edf8ff] text-[#0C0060]' : 'text-black'
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
      <section className="py-[50px] md:py-[60px] lg:py-[70px] px-[16px] md:px-[20px] lg:px-[25px] bg-[#e0edff]">
        <div className="max-w-[1390px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px] lg:gap-[32px]">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className="group flex flex-col"
              >
                {/* Image Card - Only contains image and tag */}
                <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                    {/* Specialty Badge */}
                    <div className="absolute bottom-[16px] left-[16px] bg-black/70 backdrop-blur-sm px-[16px] py-[8px] rounded-[20px]">
                      <span className="text-white text-[12px] md:text-[13px] font-medium">{doctor.specialty}</span>
                    </div>
                  </div>
                </div>
                
                {/* Name and Buttons - Outside the card */}
                <div className="mt-[20px] md:mt-[24px] text-center flex flex-col gap-[12px]">
                  <h3
                    className="text-black text-[18px] md:text-[20px] leading-[1.2]"
                    style={{ fontFamily: "'Gilda Display', serif" }}
                  >
                    {doctor.name}
                  </h3>
                  {/* Buttons - Side by side on larger screens, stacked on mobile */}
                  <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-center justify-center">
                    <Link 
                      to={`/our-doctors/${doctor.id}`}
                      className="bg-white text-[#0C0060] text-[13px] md:text-[14px] font-medium py-[10px] px-[20px] rounded-[12px] hover:bg-[#0C0060] hover:text-white transition-colors text-center whitespace-nowrap"
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={() => openBookingSidebar(doctor.name)}
                      className="flex-1 sm:flex-1 bg-[#cbff8f] text-[#0C0060] text-[13px] md:text-[14px] font-medium py-[10px] px-[16px] rounded-[12px] hover:bg-[#B1FF57] transition-colors text-center"
                    >
                      Request Appointment
                    </button>
                  </div>
                </div>
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
                className="mt-4 text-[#0C0060] font-['Arial'] text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
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
