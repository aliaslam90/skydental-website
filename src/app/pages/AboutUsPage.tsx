'use client'

import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import AboutUsImported from '../../imports/AboutUs-32-415'

export default function AboutUsPage() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
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
        <AboutUsImported />
      </div>
    </motion.div>
  )
}