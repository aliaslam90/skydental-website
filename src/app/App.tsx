'use client'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import Lenis from 'lenis'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import OurDoctorsPageNew from './pages/OurDoctorsPageNew'
import DoctorDetailPage from './pages/DoctorDetailPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PackagesPage from './pages/PackagesPage'
import PatientGuidePage from './pages/PatientGuidePage'
import FAQsPage from './pages/FAQsPage'
import CareersPage from './pages/CareersPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ContactUsPage from './pages/ContactUsPage'
import Footer from './components/Footer'
import { BookingProvider } from './context/BookingContext'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    setMounted(true)
  }, [])

  // Lenis smooth scroll (luxury-style damped scroll, like premium templates)
  useEffect(() => {
    if (!mounted || shouldReduceMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [mounted, shouldReduceMotion])

  if (!mounted) {
    return null
  }

  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <CustomCursor />
        <div className="bg-white min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/our-doctors" element={<OurDoctorsPageNew />} />
            <Route path="/our-doctors/:doctorId" element={<DoctorDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/patient-guide" element={<PatientGuidePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </BookingProvider>
    </BrowserRouter>
  )
}