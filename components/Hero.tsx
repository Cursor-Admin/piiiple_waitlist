"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";
import Headshots from "./Headshots";
import Assets from "@/constants/assets.constants";

export default function Hero() {
  return (
    <div className="bg-radial-white w-full px-6 md:px-0">
      {/* Navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Hero container */}
      <div className="flex flex-col items-center justify-center pt-16.5 md:pt-15 w-full max-w-6xl mx-auto gap-5">
        {/* Heading */}
        <motion.h1
          className="font-[600] text-2xl sm:text-4xl lg:text-5xl text-center leading-tight lg:leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Smart customer{" "}
          <span className="text-[#2F88FF] italic font-messina">onboarding,</span> <br />
          Scalable operational{" "}
          <span className="text-[#2F88FF] italic font-messina">efficiency</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h3
          className="font-[450] text-center text-[#767C8D] text-lg min-w-[300px] max-w-[744px] mb-[12px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Piiiple is a platform designed to streamline third-party integrations
          and business operations,
          <br className="hidden sm:block" />
          particularly customer onboarding process with our AI platform. Reduce
          time-to-value, increase <br className="hidden sm:block" />
          customer satisfaction, and scale your operations effortlessly.
        </motion.h3>

        {/* Headshots + waitlist text */}
        <motion.div
          className="flex flex-col sm:flex-row-reverse items-center justify-center mb-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.span
            className="grey-text text-xs sm:text-sm lg:text-base pl-0 sm:pl-2 mt-2 md:mt-0 mb-5 md:mb-0"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Join 54+ companies already on our waitlist
          </motion.span>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Headshots />
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
          className="md:mb-10"
        >
          <Button cta="Join waitlist" />
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative w-full md:w-[1000px] md:h-[599px] overflow-hidden"
        >
          <Image
            src={Assets.heroImage}
            alt="checkmark"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
