import React from 'react'
import BenefitCard from './BenefitCard'
import Assets from '@/constants/assets.constants'

export default function Benefits() {
    return (
        <div id='benefits' className='flex flex-col gap-15 px-6 md:px-0'>
            <div className="features-text text-center text-neutral-400 flex flex-col gap-5 w-full max-w-5xl mx-auto items-center">
                <h2 className="text-base font-[600]">BENEFITS</h2>
                <h1 className="font-[600] text-xl md:text-[60px] text-black">Why join the waitlist?</h1>
                <p className="md:text-[18px] text-[#767C8D] max-w-[536px]">
                    Join our waitlist today and be among <br className="block sm:hidden" /> the first to experience the future of AI- <br className="block sm:hidden" /> powered business operations.
                </p>
            </div>
            <div className="box-grid grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
                <BenefitCard
                    img={Assets.cpu}
                    caption="Early Access"
                    text="Be the first to experience features designed to streamline your business operations and improve integration flows."
                />
                <BenefitCard
                    img={Assets.percent}
                    caption="Exclusive Launch Discounts "
                    text="Access discounts when we launch that helps you save as you scale your business with smart, AI-driven tools."
                />
                <BenefitCard
                    img={Assets.shape}
                    caption="Shape the Product"
                    text="Your feedback helps shape the final features and functionalities of the platform to meet the needs of businesses like yours."
                />
            </div>
        </div>
    )
}
