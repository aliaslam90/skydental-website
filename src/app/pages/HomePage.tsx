'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseSection from '../components/WhyChooseSection'
import TechnologySection from '../components/TechnologySection'
import InsurancePartnersSection from '../components/InsurancePartnersSection'
import ResultsSection from '../components/ResultsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import DoctorsSection from '../components/DoctorsSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <TechnologySection />
      <ResultsSection />
      <TestimonialsSection />
      <DoctorsSection />
      <InsurancePartnersSection />
      <ContactSection />
    </main>
  )
}
