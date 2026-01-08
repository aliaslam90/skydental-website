'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import imgImage10 from '../../assets/6b7905bb93d0f824d8be0a8badf26d7ebf6ec721.png'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="contact" className="py-[70px] px-[25px]">
      <div className="max-w-[1390px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="rounded-[24px] p-[48px]"
        >
          <div className="flex gap-[64px]">
            {/* Left - Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="flex-1"
            >
              <div className="flex flex-col gap-[24px]">
                <h2
                  className="text-black text-[48px] leading-[1.2] tracking-[-1.44px]"
                  style={{ fontFamily: "'Gilda Display', serif" }}
                >
                  Schedule a Consultation Today!
                </h2>

                <p className="text-black text-[16px] leading-[1.6] max-w-[500px]">
                  Your perfect smile starts here! Book your appointment today for expert care in a comfortable and modern setting.
                </p>

                {/* Social Links */}
                <div className="flex gap-[16px] mt-[8px]">
                  <SocialIcon>
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="black" />
                  </SocialIcon>
                  <SocialIcon>
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="black" />
                  </SocialIcon>
                  <SocialIcon>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="black" />
                  </SocialIcon>
                  <SocialIcon>
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="black" />
                  </SocialIcon>
                </div>

                <div className="rounded-[20px] overflow-hidden mt-[16px]">
                  <img
                    src={imgImage10}
                    alt="Dental consultation"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.8 }}
              className="flex-1"
            >
              <form className="flex flex-col gap-[25px]">
                <div className="grid grid-cols-2 gap-[21px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-[21px]">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black"
                  />
                </div>

                <select className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNDEgOC41OEwxMiAxMy4xN0wxNi41OSA4LjU4TDE4IDEwTDEyIDE2TDYgMTBMNy40MSA4LjU4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_24px_center]">
                  <option>Choose Services</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Orthodontics</option>
                </select>

                <select className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNDEgOC41OEwxMiAxMy4xN0wxNi41OSA4LjU4TDE4IDEwTDEyIDE2TDYgMTBMNy40MSA4LjU4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_24px_center]">
                  <option>Select Doctor</option>
                  <option>Dr. Ahmed Hassan</option>
                  <option>Dr. Maria Rodriguez</option>
                  <option>Dr. James Wilson</option>
                </select>

                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="bg-[#f1f1f1] h-[55px] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="bg-[#f1f1f1] px-[24px] py-[16px] rounded-[12px] text-[14px] text-black resize-none"
                />

                <motion.button
                  type="submit"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.6 }}
                  className="bg-[#cbff8f] flex items-center gap-6 justify-center pl-6 pr-[10px] py-3 rounded-[35px] hover:bg-[#B1FF57] transition-colors"
                >
                  <span className="text-[#97c4ff] font-bold text-[16px]">Send Message</span>
                  <div className="bg-[#97c4ff] w-[34px] h-[34px] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path 
                        d="M5 15L15 5" 
                        stroke="#CBFF8F" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M6.875 5H15V13.125" 
                        stroke="#CBFF8F" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-[24px] h-[24px] transition-opacity hover:opacity-70"
    >
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  )
}