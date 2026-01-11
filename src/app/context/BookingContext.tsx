'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import BookingFormSidebar from '../components/BookingFormSidebar'

interface BookingContextType {
  openBookingSidebar: (preselectedDoctor?: string | null) => void
  closeBookingSidebar: () => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | null>(null)

  const openBookingSidebar = (doctor?: string | null) => {
    setPreselectedDoctor(doctor || null)
    setIsOpen(true)
  }

  const closeBookingSidebar = () => {
    setIsOpen(false)
    setPreselectedDoctor(null)
  }

  return (
    <BookingContext.Provider value={{ openBookingSidebar, closeBookingSidebar }}>
      {children}
      <BookingFormSidebar
        isOpen={isOpen}
        onClose={closeBookingSidebar}
        preselectedDoctor={preselectedDoctor}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
