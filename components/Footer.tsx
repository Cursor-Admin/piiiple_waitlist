'use client'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Assets from '@/constants/assets.constants'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-0">
      {/* CTA Banner */}
      <motion.div
        className="bg-blue-500 py-12 rounded-xl flex flex-col items-center justify-center sm:py-12 sm:rounded-2xl lg:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className='flex w-full items-center'>
          <motion.p
            className="text-white text-xl sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-tight max-w-4xl mx-auto text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A new way to <span className="italic font-messina">onboard</span> third-party business operations and{' '}<span className="italic font-messina"> integrations</span>
          </motion.p>
        </div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button cta="Get early access" isWhite />
        </motion.div>
      </motion.div>

      {/* Footer Grid */}
      <motion.div
        className="grid pt-15 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Logo + Socials */}
        <motion.div
          className="flex justify-between gap-2 sm:flex-row sm:justify-between sm:items-center w-full"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Image
            src={Assets.logo}
            alt="checkmark"
            width={83}
            height={36}
            className=""
          />
          <div className="flex gap-2">
            {[Assets.instagram, Assets.X, Assets.linkedin].map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * (i + 1), duration: 0.4 }}
              >
                <Image src={icon} alt="social icon" width={24} height={24} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="flex justify-between sm:flex-row sm:justify-between w-full mb-14.5"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <span className="italic font-messina text-[20px]">For Actual People</span>
          <p className="font-[600]">hello@piiiple.com</p>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          className="flex flex-col-reverse items-center text-[10px] sm:text-xs lg:text-sm text-[#101727] border-t border-[#E7E7E7] py-4 sm:flex-row sm:justify-between sm:py-7 w-full"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <span className="font-[450]">
            &copy; 2025 Piiiple. All rights reserved
          </span>
          <div className="flex gap-2 sm:gap-3 mb-2 sm:mb font-[450]">
            <span className="">Terms of use</span>
            <span className="">Privacy Policy</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
