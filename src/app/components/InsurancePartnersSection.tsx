'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Shield } from 'lucide-react'

const insurancePartners = [
  { id: '1', name: 'NextCare' },
  { id: '2', name: 'NAS' },
  { id: '3', name: 'NAS' },
  { id: '4', name: 'Mednet' },
  { id: '5', name: 'MetLife' },
  { id: '6', name: 'Cigna' },
  { id: '7', name: 'DAMAN' },
  { id: '8', name: 'AXA GULF' },
  { id: '9', name: 'Neuron' },
  { id: '10', name: 'ALIAR' },
]

export default function InsurancePartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      className="py-24 overflow-hidden"
      style={{
        background: '#CBFF8F',
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 border border-[#e5e7eb]">
            <Shield className="w-4 h-4 text-[#4b5563]" />
            <span className="text-xs text-[#4b5563] font-['Arial'] font-medium uppercase tracking-wider">
              DIRECT BILLING AVAILABLE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-['Gilda_Display'] text-black tracking-tight mb-6">
            Insurance Partners
          </h2>
          <p className="text-[15px] text-[#4b5563] font-['Arial'] leading-relaxed max-w-3xl mx-auto">
            To make premium dental care more accessible, we collaborate with a wide network of trusted local and international insurance providers. Our team handles benefits verification, approvals, and claims support.
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={shouldReduceMotion ? {} : {
                x: [0, -1920],
              }}
              transition={shouldReduceMotion ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of partners */}
              {insurancePartners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="bg-white rounded-2xl px-12 py-8 flex items-center justify-center min-w-[200px] shrink-0"
                >
                  <p className="text-base text-[#9ca3af] font-['Arial'] font-semibold whitespace-nowrap">
                    {partner.name}
                  </p>
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {insurancePartners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="bg-white rounded-2xl px-12 py-8 flex items-center justify-center min-w-[200px] shrink-0"
                >
                  <p className="text-base text-[#9ca3af] font-['Arial'] font-semibold whitespace-nowrap">
                    {partner.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
