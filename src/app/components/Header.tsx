'use client'

import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import svgPaths from '../../imports/svg-p4rwj0t9df'
import imgRectangle161125373 from '../../assets/531a2b1be40c3f390e42e72de4c6233edf51733e.png'
import MaskGroup from '../../imports/MaskGroup'
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const navigate = useNavigate()
  const location = useLocation()
  const { openBookingSidebar } = useBooking()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Only do scroll spy on home page
      if (location.pathname === '/') {
        // Scroll spy logic
        const sections = ['home', 'about', 'services', 'doctors', 'contact']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 150 && rect.bottom >= 150
          }
          return false
        })
        
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        setMobileMenuOpen(false)
      }
    }
  }

  const handleAboutUsClick = () => {
    navigate('/about-us')
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHomeClick = () => {
    navigate('/')
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOurDoctorsClick = () => {
    navigate('/our-doctors')
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleServicesClick = () => {
    navigate('/services')
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactClick = () => {
    navigate('/contact')
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        className={`fixed top-[10px] xl:top-[25px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] xl:w-[calc(100%-50px)] max-w-[1340px] transition-all duration-300
          rounded-2xl xl:rounded-[100px] border border-[#0061AF]/40 xl:border-[#0061AF]
          backdrop-blur-md bg-white/95 shadow-md
          xl:bg-transparent xl:backdrop-blur-none xl:shadow-none
          ${scrolled ? 'xl:bg-white/95 xl:backdrop-blur-md xl:shadow-lg' : ''}
        `}
      >
        <div className="px-3 py-2 xl:px-6 xl:py-2.5">
          <div className="flex items-center justify-between w-full gap-2">
            {/* Logo - compact on mobile, larger on desktop */}
            <button onClick={() => scrollToSection('home')} className="flex items-center shrink-0 ml-0 xl:ml-6">
              <div className="flex items-center justify-center overflow-hidden w-[58px] h-[52px] xl:w-[76px] xl:h-[70px]">
                <div className="origin-center flex-shrink-0 scale-[0.6] xl:scale-[0.76]" style={{ width: 96.592, height: 91.833 }}>
                  <MaskGroup />
                </div>
              </div>
            </button>

            {/* Desktop Navigation - Hidden on tablets and mobile: Home - Services - Doctors - Packages & Offers - About Us - Contact - More */}
            <nav className="hidden xl:flex items-center gap-4">
              <button
                onClick={handleHomeClick}
                className={`px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                  location.pathname === '/'
                    ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                    : 'text-black hover:text-[#0C0060]'
                }`}
              >
                Home
              </button>
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => { setMoreDropdownOpen(false); setServicesDropdownOpen(!servicesDropdownOpen); }}
                  className={`flex items-center gap-[5px] px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                    servicesDropdownOpen || location.pathname.startsWith('/services')
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  <span>Services</span>
                  <svg className="w-[6px] h-[3px]" fill="none" viewBox="0 0 7.2 4.2">
                    <path d="M0.6 0.6L3.6 3.6L6.6 0.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-xl border border-[#0061AF]/20 py-2 min-w-[220px] z-[60]"
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to="/services/general-dentistry"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/services/general-dentistry' ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        General Dentistry
                      </Link>
                      <Link
                        to="/services/cosmetic-dentistry"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/services/cosmetic-dentistry' ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Cosmetic Dentistry
                      </Link>
                      <Link
                        to="/services/orthodontics"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/services/orthodontics' ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Orthodontics
                      </Link>
                      <Link
                        to="/services/pediatric-dentistry"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/services/pediatric-dentistry' ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Pediatric Dentistry
                      </Link>
                      <Link
                        to="/services/advanced-restorative"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/services/advanced-restorative' ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Implant & Advanced Care
                      </Link>
                      <div className="border-t border-[#0061AF]/10 mt-2 pt-2 px-2">
                        <Link
                          to="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block w-full text-center px-4 py-2.5 rounded-full text-[14px] font-bold bg-[#CBFF8F] text-[#0C0060] hover:bg-[#B1FF57] transition-colors"
                        >
                          View all services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={handleOurDoctorsClick}
                className={`px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                  location.pathname.startsWith('/our-doctors')
                    ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                    : 'text-black hover:text-[#0C0060]'
                }`}
              >
                Doctors
              </button>
              <Link
                to="/packages"
                className={`px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                  location.pathname === '/packages'
                    ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                    : 'text-black hover:text-[#0C0060]'
                }`}
              >
                Packages & Offers
              </Link>
              <button
                onClick={handleAboutUsClick}
                className={`px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                  location.pathname === '/about-us'
                    ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                    : 'text-black hover:text-[#0C0060]'
                }`}
              >
                About Us
              </button>
              <button
                onClick={handleContactClick}
                className={`px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
                  location.pathname === '/contact'
                    ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                    : 'text-black hover:text-[#0C0060]'
                }`}
              >
                Contact
              </button>
              {/* More Dropdown */}
              <div className="relative">
                <NavDropdown
                  label="More"
                  active={moreDropdownOpen || ['/patient-guide', '/careers', '/faqs', '/privacy-policy'].includes(location.pathname)}
                  onClick={() => { setServicesDropdownOpen(false); setMoreDropdownOpen(!moreDropdownOpen); }}
                />

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {moreDropdownOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl border border-[#0061AF]/20 py-2 min-w-[200px] z-[60]"
                      onMouseLeave={() => setMoreDropdownOpen(false)}
                    >
                      <Link
                        to="/patient-guide"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/patient-guide'
                            ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                            : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Patient Guide
                      </Link>
                      <Link
                        to="/careers"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/careers'
                            ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                            : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/faqs"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/faqs'
                            ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                            : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        FAQs
                      </Link>
                      <Link
                        to="/privacy-policy"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-5 py-3 text-[14px] rounded-full transition-colors ${
                          location.pathname === '/privacy-policy'
                            ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                            : 'text-black hover:bg-[#f8f9fa] hover:text-[#0C0060]'
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right side - Request Appointment (desktop only) + Hamburger (mobile only) */}
            <div className="flex items-center gap-4">
              {/* CTA Button - Desktop only; on mobile use hamburger menu */}
              <button 
                onClick={() => openBookingSidebar()}
                className="hidden xl:flex bg-[#CBFF8F] items-center gap-3 xl:gap-6 pl-4 xl:pl-6 pr-[10px] py-2 rounded-[35px] group hover:bg-[#B1FF57] transition-colors"
              >
                <span className="text-[#0C0060] font-bold text-[14px] xl:text-[16px] whitespace-nowrap">Request Appointment</span>
                <div className="bg-[#0C0060] w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path 
                      d="M5 15L15 5" 
                      stroke="#CBFF8F" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M6.875 5H15V13.125" 
                      stroke="#CBFF8F" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              </button>

              {/* Hamburger - Mobile/tablet: opens menu with all nav + Request Appointment */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] text-[#0C0060] rounded-full hover:bg-[#CBFF8F]/20 transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Side Menu Drawer - Completely separate, slides from RIGHT */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              className="fixed inset-0 bg-black/40 z-[100] xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Side Drawer from RIGHT */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[400px] bg-white z-[101] shadow-2xl xl:hidden overflow-y-auto"
              style={{
                border: '0.2px solid #0061AF'
              }}
            >
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-[#0061AF]/20">
                <div className="flex items-center justify-center overflow-hidden" style={{ width: 76, height: 70 }}>
                  <div className="origin-center flex-shrink-0" style={{ width: 96.592, height: 91.833, transform: 'scale(0.76)' }}>
                    <MaskGroup />
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-[40px] h-[40px] text-[#0C0060]"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items: Home - Services - Doctors - Packages & Offers - About Us - Contact - More */}
              <nav className="flex flex-col gap-6 p-6">
                <button
                  onClick={handleHomeClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname === '/' || activeSection === 'home'
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={handleServicesClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname.startsWith('/services')
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={handleOurDoctorsClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname.startsWith('/our-doctors')
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  Doctors
                </button>
                <Link
                  to="/packages"
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname === '/packages'
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  Packages & Offers
                </Link>
                <button
                  onClick={handleAboutUsClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname === '/about-us'
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={handleContactClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    location.pathname === '/contact'
                      ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                      : 'text-black hover:text-[#0C0060]'
                  }`}
                >
                  Contact
                </button>
                {/* More Section in Mobile */}
                <div className="border-t border-[#0061AF]/20 pt-4 mt-2">
                  <p className="px-[20px] text-[12px] text-gray-400 font-semibold uppercase tracking-wider mb-3">More</p>
                  <Link
                    to="/patient-guide"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-[20px] py-[10px] rounded-full text-[15px] transition-all ${
                      location.pathname === '/patient-guide'
                        ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                        : 'text-black hover:text-[#0C0060]'
                    }`}
                  >
                    Patient Guide
                  </Link>
                  <Link
                    to="/careers"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-[20px] py-[10px] rounded-full text-[15px] transition-all ${
                      location.pathname === '/careers'
                        ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                        : 'text-black hover:text-[#0C0060]'
                    }`}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-[20px] py-[10px] rounded-full text-[15px] transition-all ${
                      location.pathname === '/faqs'
                        ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                        : 'text-black hover:text-[#0C0060]'
                    }`}
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/privacy-policy"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-[20px] py-[10px] rounded-full text-[15px] transition-all ${
                      location.pathname === '/privacy-policy'
                        ? 'bg-[#CBFF8F] text-[#0C0060] font-bold'
                        : 'text-black hover:text-[#0C0060]'
                    }`}
                  >
                    Privacy Policy
                  </Link>
                </div>
                
                {/* Bottom Request Appointment Button */}
                <button 
                  onClick={() => {
                    openBookingSidebar()
                    setMobileMenuOpen(false)
                  }}
                  className="bg-[#CBFF8F] flex items-center justify-center gap-4 px-6 py-4 rounded-[35px] mt-6 hover:bg-[#B1FF57] transition-colors">
                  <span className="text-[#0C0060] font-bold text-[16px]">Request Appointment</span>
                  <div className="bg-[#0C0060] w-[34px] h-[34px] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path 
                        d="M5 15L15 5" 
                        stroke="#CBFF8F" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M6.875 5H15V13.125" 
                        stroke="#CBFF8F" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function NavDropdown({ label, active, onClick }: { label: string; active: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[5px] px-[14px] py-[6px] rounded-full text-[14px] transition-all whitespace-nowrap ${
        active ? 'bg-[#CBFF8F] text-[#0C0060] font-bold' : 'text-black hover:text-[#0C0060]'
      }`}
    >
      <span>{label}</span>
      <svg className="w-[6px] h-[3px]" fill="none" viewBox="0 0 7.2 4.2">
        <path
          d="M0.6 0.6L3.6 3.6L6.6 0.6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}