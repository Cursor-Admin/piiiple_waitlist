"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  img: string | StaticImageData;
  caption: string;
  text: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
};

export default function FeaturesCard({ img, caption, text }: Props) {
  return (
    <motion.div
      className="rounded-xl p-2 gap-1 feature-cards sm:rounded-2xl sm:p-3 sm:gap-2 flex flex-col justify-center items-center bg-white shadow-sm"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <h1 className="font-[600] text-[20px] self-start">{caption}</h1>
      <p className="font-[450]">{text}</p>
      <div className="flex-1 items-center justify-center flex">
       <Image src={img} width={260} height={190} alt={caption} />
      </div>
    </motion.div>
  );
}
