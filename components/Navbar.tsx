'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import Assets from '@/constants/assets.constants'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="flex items-center justify-between sticky top-0 px-4 py-2 md:px-12 md:py-8 z-50">
        <Image
          src={Assets.logo}
          alt="logo"
          width={120}
          height={52}
          className="w-25 h-9 sm:w-18 sm:h-9"
        />
        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-center w-8 h-8 focus:outline-none sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src={Assets.menu}
            alt="menu"
            width={24}
            height={24}
            className="w-25 h-9 sm:w-18 sm:h-9"
          />
        </button>
        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center space-x-6 md:space-x-10 lg:space-x-14 grey-text text-xs md:text-sm lg:text-base">
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
        <div className="hidden sm:block">
          <Button cta="Join waitlist" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-[60vh] z-[100] flex sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[70vw] h-full bg-white shadow-lg flex flex-col justify-center items-center relative ml-auto rounded-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            >
              <motion.button
                className="absolute top-4 right-4 text-4xl text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
              >
                &times;
              </motion.button>

              <motion.ul
                className="flex flex-col items-center space-y-8 grey-text text-xl mt-2 [&>li>a:hover]:text-blue-500"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                {['features', 'benefits', 'faqs'].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                <Button cta="Join waitlist" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
