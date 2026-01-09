'use client'

import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import OurDoctorsImported from '../../imports/OurDoctors'
import '../../styles/our-doctors-responsive.css'

export default function OurDoctorsPage() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Add click handlers to doctor cards to enable routing
    const addDoctorCardLinks = () => {
      // Map doctor names to IDs
      const doctorMap: { [key: string]: string } = {
        'Dr. Arwa Rashed Almarshoodi': 'dr-arwa-rashed',
        'Dr. Sarah Johnson': 'dr-sarah-johnson',
        'Dr. Michael Chen': 'dr-michael-chen'
      }
      
      // Find all doctor name elements and add click handlers
      const doctorNameElements = document.querySelectorAll('[data-name="Text"] p')
      doctorNameElements.forEach(element => {
        const doctorName = element.textContent?.trim() || ''
        const doctorId = doctorMap[doctorName]
        
        if (doctorId && element.parentElement) {
          // Find the parent card container
          let cardElement = element.closest('[data-name="Card"]')
          if (!cardElement) {
            // Try finding by className pattern
            cardElement = element.closest('.bg-white.rounded-\\[24px\\]') || 
                         element.closest('[class*="bg-white"]')
          }
          
          if (cardElement) {
            // Make the card clickable
            (cardElement as HTMLElement).style.cursor = 'pointer'
            ;(cardElement as HTMLElement).onclick = () => {
              window.location.href = `/our-doctors/${doctorId}`
            }
          }
        }
      })
    }
    
    // Run after a short delay to ensure DOM is ready
    setTimeout(addDoctorCardLinks, 100)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      className="min-h-screen overflow-x-hidden max-w-full"
      style={{ marginTop: '100px' }}
    >
      <div className="overflow-x-hidden max-w-full">
        <OurDoctorsImported />
      </div>
    </motion.div>
  )
}