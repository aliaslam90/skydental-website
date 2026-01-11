'use client'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Use requestAnimationFrame to ensure it runs after any page initialization
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })

    // Also set a small timeout as a fallback for pages that might set scroll position later
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
