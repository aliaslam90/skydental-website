// Line icons for services - inspired by modern dental clinic designs

export function GeneralDentistryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth shape with crown and roots */}
      <path d="M12 3C9 3 7 5 7 8C7 11 9 13 12 13C15 13 17 11 17 8C17 5 15 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function CosmeticDentistryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Smiling tooth */}
      <path d="M12 3C9 3 7 5 7 8C7 11 9 13 12 13C15 13 17 11 17 8C17 5 15 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8C9 8 10 9 12 9C14 9 15 8 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function OrthodonticsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth with braces */}
      <path d="M12 3C9 3 7 5 7 8C7 11 9 13 12 13C15 13 17 11 17 8C17 5 15 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 9L10 10L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 9L14 10L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function PediatricDentistryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Child-friendly tooth */}
      <path d="M12 3C9 3 7 5 7 8C7 11 9 13 12 13C15 13 17 11 17 8C17 5 15 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8C9 8 10 9 12 9C14 9 15 8 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Small decorative elements for child-friendly feel */}
      <circle cx="9" cy="6.5" r="0.8" fill="currentColor"/>
      <circle cx="15" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  )
}

export function ImplantAdvancedCareIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth with implant/screw */}
      <path d="M12 3C9 3 7 5 7 8C7 11 9 13 12 13C15 13 17 11 17 8C17 5 15 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Implant screw threads */}
      <path d="M12 11L13.5 12.5L12 14L10.5 12.5L12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// Icon mapping for easy use
export const serviceIcons = {
  'general-dentistry': GeneralDentistryIcon,
  'cosmetic-dentistry': CosmeticDentistryIcon,
  'orthodontics': OrthodonticsIcon,
  'pediatric-dentistry': PediatricDentistryIcon,
  'advanced-restorative': ImplantAdvancedCareIcon,
}
