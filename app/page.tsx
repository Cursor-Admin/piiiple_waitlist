import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function page() {
  return (
    <div className="font-ltsuperior flex flex-col gap-25 items-center justify-center w-full">
      <Hero />
      <Features />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  )

}

