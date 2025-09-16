'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 w-full max-w-md sm:max-w-2xl">
      <div
        className={`border border-[#F3F4F5] rounded-lg bg-[#F9F9F9] py-4 px-2 sm:py-6 sm:px-4 ${isOpen ? 'pb-2' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-[18px] font-[600]">{question}</h3>
          <motion.button
            className="text-xl sm:text-2xl"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? '\u2212' : '+'}
          </motion.button>
        </div>

        {/* Animate Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="mt-3 text-[#767C8D] md:mt-4 font-[450]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
