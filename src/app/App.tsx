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

  // Lenis smooth scroll + JS-driven section snap (native CSS scroll-snap is incompatible with Lenis)
  useEffect(() => {
    if (!mounted || shouldReduceMotion) return

    const lenis = new Lenis({
      duration: 2,
      lerp: 0.07,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    const SNAP_OFFSET_TOP = 96 // clear fixed header (6rem)
    let snapTimeoutId: ReturnType<typeof setTimeout> | null = null
    let isSnapping = false

    const snapToNearestSection = () => {
      const sections = document.querySelectorAll<HTMLElement>('.scroll-snap-section')
      if (sections.length === 0) return
      const scrollY = window.scrollY ?? document.documentElement.scrollTop
      const viewportHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      // Don't snap when user is in the footer / bottom of page (avoids auto-scroll back up)
      const footerThreshold = 280
      if (scrollY + viewportHeight >= docHeight - footerThreshold) return

      let nearest = sections[0]
      let nearestDist = Math.abs(sections[0].offsetTop - scrollY - SNAP_OFFSET_TOP)
      for (let i = 1; i < sections.length; i++) {
        const top = sections[i].offsetTop
        const dist = Math.abs(top - scrollY - SNAP_OFFSET_TOP)
        if (dist < nearestDist) {
          nearestDist = dist
          nearest = sections[i]
        }
      }
      // Only snap if we're meaningfully away from the nearest section (avoids jitter and unwanted jumps)
      const minSnapDistance = 60
      if (nearestDist < minSnapDistance) return

      isSnapping = true
      lenis.scrollTo(nearest, { offset: -SNAP_OFFSET_TOP, duration: 1, onComplete: () => { isSnapping = false } })
    }

    const scheduleSnap = () => {
      if (isSnapping) return
      if (snapTimeoutId) clearTimeout(snapTimeoutId)
      snapTimeoutId = setTimeout(() => {
        snapTimeoutId = null
        snapToNearestSection()
      }, 150)
    }

    lenis.on('scroll', scheduleSnap)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      if (snapTimeoutId) clearTimeout(snapTimeoutId)
      lenis.off('scroll', scheduleSnap)
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