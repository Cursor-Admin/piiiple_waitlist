"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Props = {
  img: string;
  caption: string;
  text: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] }, // easeOut
  },
};

export default function BenefitCard({ img, caption, text }: Props) {
  return (
    <motion.div
      className="border border-[#EAECEF] rounded-lg px-2 py-2 gap-1 md:p-6 sm:gap-2 bg-white"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 },
      }}
    >
      <Image
        src={img}
        width={32}
        height={32}
        alt={caption}
      />
      <h1 className="font-[600] text-[20px] mt-10 mb-3">{caption}</h1>
      <p className="text-[#767C8D] font-[450]">{text}</p>
    </motion.div>
  );
}
