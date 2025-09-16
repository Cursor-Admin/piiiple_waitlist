'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 filter backdrop-blur-3xl bg-black bg-opacity-40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full relative text-center"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>

            <motion.div
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div
                className="bg-green-100 rounded-xl p-3 mb-4"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <motion.h1
                className="font-[600] text-2xl mb-2"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                You have been added to our waitlist
              </motion.h1>

              <motion.p
                className="text-gray-600 mb-6 text-center"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Thank you for joining, you will be the first to know when we are ready to go live!
              </motion.p>

              <motion.div
                className="flex justify-center mb-2 -space-x-2"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <img src="/avatars/avatar1.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/avatars/avatar2.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/avatars/avatar3.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/avatars/avatar4.png" className="w-8 h-8 rounded-full border-2 border-white" />
              </motion.div>

              <motion.p
                className="text-sm text-gray-500"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                You’ve joined other companies on our waitlist
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
