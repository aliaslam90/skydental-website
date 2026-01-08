'use client'

import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import svgPaths from '../../imports/svg-p4rwj0t9df'
import imgRectangle161125373 from 'figma:asset/531a2b1be40c3f390e42e72de4c6233edf51733e.png'
import Group2147224205 from '../../imports/Group2147224205'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const navigate = useNavigate()
  const location = useLocation()

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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        className={`fixed top-[25px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-50px)] max-w-[1340px] transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-white/95 shadow-lg' : ''
        }`}
        style={{
          borderRadius: '100px',
          border: scrolled ? '0.2px solid #0061AF' : '0.2px solid #0061AF'
        }}
      >
        <div className="px-6 py-2">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <div className="relative w-[53px] h-[53px]">
                <Group2147224205 />
              </div>
            </button>

            {/* Desktop Navigation - Hidden on tablets and mobile */}
            <nav className="hidden xl:flex items-center gap-8">
              <button
                onClick={handleHomeClick}
                className={`px-[14px] py-[4px] rounded-full text-[14px] transition-all ${
                  location.pathname === '/'
                    ? 'bg-[#cbff8f] text-[#97c4ff] font-bold'
                    : 'text-black hover:text-[#97c4ff]'
                }`}
              >
                Home
              </button>
              <button
                onClick={handleAboutUsClick}
                className={`text-[14px] transition-all ${
                  location.pathname === '/about-us' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                }`}
              >
                About Us
              </button>
              
              <NavDropdown label="Our Doctors" active={activeSection === 'doctors'} onClick={() => scrollToSection('doctors')} />
              <NavDropdown label="Services" active={activeSection === 'services'} onClick={() => scrollToSection('services')} />
              <NavDropdown label="Packages & Offers" active={false} />
              
              <button className="text-[14px] text-black hover:text-[#97c4ff] transition-all">
                Sky Loyalty Program
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-[14px] transition-all ${
                  activeSection === 'contact' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                }`}
              >
                Contact
              </button>
              <NavDropdown label="More" active={false} />
            </nav>

            {/* Right side - Book Appointment Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button - Always visible */}
              <button className="bg-[#cbff8f] flex items-center gap-3 xl:gap-6 pl-4 xl:pl-6 pr-[10px] py-2 rounded-[35px] group hover:bg-[#B1FF57] transition-colors">
                <span className="text-[#97c4ff] font-bold text-[14px] xl:text-[16px] whitespace-nowrap">Book Appoitment</span>
                <div className="bg-[#97c4ff] w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0">
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

              {/* Mobile Menu Button - Always shows hamburger icon */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-[40px] h-[40px] text-[#97c4ff]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                <div className="relative w-[53px] h-[53px]">
                  <Group2147224205 />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-[40px] h-[40px] text-[#97c4ff]"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col gap-6 p-6">
                <button
                  onClick={handleHomeClick}
                  className={`px-[20px] py-[12px] rounded-full text-[16px] transition-all text-left ${
                    activeSection === 'home'
                      ? 'bg-[#cbff8f] text-[#97c4ff] font-bold'
                      : 'text-black hover:text-[#97c4ff]'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={handleAboutUsClick}
                  className={`px-[20px] py-[12px] text-[16px] transition-all text-left ${
                    location.pathname === '/about-us' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className={`px-[20px] py-[12px] text-[16px] transition-all text-left ${
                    activeSection === 'doctors' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                  }`}
                >
                  Our Doctors
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`px-[20px] py-[12px] text-[16px] transition-all text-left ${
                    activeSection === 'services' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                  }`}
                >
                  Services
                </button>
                <button className="px-[20px] py-[12px] text-[16px] text-black hover:text-[#97c4ff] transition-all text-left">
                  Packages & Offers
                </button>
                <button className="px-[20px] py-[12px] text-[16px] text-black hover:text-[#97c4ff] transition-all text-left">
                  Sky Loyalty Program
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-[20px] py-[12px] text-[16px] transition-all text-left ${
                    activeSection === 'contact' ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
                  }`}
                >
                  Contact
                </button>
                
                {/* Bottom Book Appointment Button */}
                <button className="bg-[#cbff8f] flex items-center justify-center gap-4 px-6 py-4 rounded-[35px] mt-6 hover:bg-[#B1FF57] transition-colors">
                  <span className="text-[#97c4ff] font-bold text-[16px]">Book Appoitment</span>
                  <div className="bg-[#97c4ff] w-[34px] h-[34px] rounded-full flex items-center justify-center">
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
      className={`flex items-center gap-[5px] text-[14px] transition-all ${
        active ? 'text-[#97c4ff] font-semibold' : 'text-black hover:text-[#97c4ff]'
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