"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
export default function AboutTeam() {
  return (
    <SectionWrapper
      id="about-team"
      className="relative text-left px-16 justify-start items-center"
    >
      <Image
        src="/images/top-right-overlay.webp"
        alt=""
        width={728}
        height={728}
        className="absolute -top-128 -right-48 object-contain pointer-events-none -z-10"
      />
      <Image
        src="/images/left-overlay.webp"
        alt=""
        width={700}
        height={700}
        className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
      />
      <motion.p
        className="text-white text-left font-bold text-4xl md:text-5xl max-w-6xl mt-6 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        We don’t follow trends — we build them. <br />
        We don’t just communicate — we connect. <br />
        We don’t just deliver — we elevate.
      </motion.p>

      
    </SectionWrapper>
  );
}
