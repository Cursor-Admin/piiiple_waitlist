'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Headshots from './Headshots'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 filter backdrop-blur-3xl bg-black/30 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.9, opacity: 0, y: -40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!submitted ? (
              <>
                <div className="mb-6 text-left">
                  <h1 className="font-bold text-2xl mb-2">Join the waitlist</h1>
                  <p className="text-sm text-gray-600">
                    Be the first to get notified when we go live.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex flex-col">
                    <label className="font-medium mb-1">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="border border-gray-300 rounded-md p-2 text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="border border-gray-300 rounded-md p-2 text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@sample.com"
                      className="border border-gray-300 rounded-md p-2 text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Company name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="border border-gray-300 rounded-md p-2 text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#007AFF] text-white py-3 px-4 rounded-md text-sm font-medium mt-4 hover:bg-blue-600 transition-colors"
                  >
                    Join waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-xl p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h1 className="font-[600] text-2xl mb-2">
                  You have been added to our waitlist
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                  Thank you for joining, you will be the first to know when we
                  are ready to go live!
                </p>

                <Headshots />
                <p className="text-sm text-gray-500">
                  You’ve joined other companies on our waitlist
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
