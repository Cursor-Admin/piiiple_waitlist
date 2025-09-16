import React from 'react'
import Image from 'next/image'
import Button from './Button'
import FeaturesCard from './FeaturesCard'
import Assets from '@/constants/assets.constants'

export default function Features() {
  return (
    <div id='features' className='px-6 md:px-0'>
      <div className="features-text text-center text-neutral-400 flex flex-col gap-5 w-full max-w-5xl mx-auto">
        <h2 className="text-base font-[600]">FEATURES</h2>
        <h1 className="font-[600] text-xl md:text-[60px] text-black">Streamlined integration <br className='block sm:hidden'/> platform</h1>
        <p className="md:text-[18px] text-[#767C8D] mb-5">
          Our AI platform simplifies the entire business integration <br className='block sm:hidden'/> process,<br className="hidden sm:block" /> from initial contact to successful onboarding.
        </p>
        <div><Button cta="Get early access" /></div>
      </div>
      <div className="box-grid grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 pt-15 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
        <FeaturesCard
          caption="Seamless Integration"
          text="Connect with hundreds of third-party applications through our no-code integration platform."
          img={Assets.frame2}
        />
        <FeaturesCard
          caption="Custom Onboarding Flows"
          text="Create tailored onboarding journeys with clear documentation and completion criteria."
          img={Assets.frame1}
        />
        <FeaturesCard
          caption="Client Management"
          text="Add and manage businesses through your personalized dashboard for streamlined operations."
          img={Assets.frame5}
        />
        <FeaturesCard
          caption="Document Processing"
          text="Automate information gathering and contract review with AI-powered document handling."
          img={Assets.frame4}
        />
        <FeaturesCard
          caption="Compliance Automation"
          text="Streamline legal and compliance checks with built-in verification and approval workflows."
          img={Assets.frame6}
        />
        <FeaturesCard
          caption="Real-time Feedback"
          text="Provide instant feedback on documents and processes through collaborative interfaces."
          img={Assets.frame3}
        />
      </div>
    </div>
  )
}
