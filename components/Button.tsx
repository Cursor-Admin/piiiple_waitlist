/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import WaitlistModal from './WaitlistModal'

export default function Button({cta, isWhite}:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a 
        href='#' 
        onClick={openModal}
        className={`px-5 py-4 rounded-md ${
          isWhite ? "bg-white text-[#2F88FF]": "bg-[#2F88FF] text-white"
        }`}
      >
        {cta}
      </a>
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
