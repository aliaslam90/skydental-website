'use client'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
}

/** Wraps content so one scroll move snaps to this section (use with Lenis + body scroll-snap). */
export default function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  return (
    <div className={`scroll-snap-section ${className}`.trim()}>
      {children}
    </div>
  )
}
