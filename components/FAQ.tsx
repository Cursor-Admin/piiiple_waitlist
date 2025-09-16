import React from 'react'
import Accordion from './Accordion'

export default function FAQ() {
  const faqData = [
    {
      question: "What is Piiiple?",
      answer: "Piiiple is a platform designed to streamline third-party integrations and business operations, particularly customer onboarding process with our AI platform. Reduce time-to-value, increase customer satisfaction, and scale your operations effortlessly."
    },
    {
      question: "Who is Piiiple for?",
      answer: "Piiiple is designed for businesses looking to improve their customer onboarding and integration processes. It's particularly valuable for companies that work with multiple third-party services and want to streamline operations."
    },
    {
      question: "How does Piiiple help with onboarding?",
      answer: "Piiiple streamlines the onboarding process by automating integration steps, providing clear guidance, and using AI to anticipate and solve common issues before they arise, resulting in faster implementation and higher customer satisfaction."
    },
    {
      question: "When will Piiiple be available?",
      answer: "Piiiple is currently in development and will be available soon. Join our waitlist to be notified when we launch and to get early access to our platform."
    }
  ];

  return (
    <div className="w-full py-6 flex flex-col gap-6 sm:py-16 sm:px-0 sm:flex-row sm:justify-between max-w-6xl mx-auto px-6 md:px-0" id='faqs'>
      <div className="mb-2 sm:mb-0 w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-lg font-bold mb-1 sm:text-3xl lg:text-4xl sm:mb-4">Frequently Asked <br className='hidden md:block'/> Questions</h1>
        <p className="grey-text text-xs sm:text-sm lg:text-base">Here are answers to some questions you might have.</p>
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-2/3 md:w-2/3 lg:w-3/4">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
        <p className='font-[500] text-[#767C8D]'>Have more questions, contact <a href="mailto:hello@piiiple.com" className='font-[600] text-[#2F88FF]'>hello@piiiple.com</a> via email.</p>
      </div>
    </div>
  )
}
