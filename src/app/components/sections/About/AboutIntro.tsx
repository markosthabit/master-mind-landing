"use client"; 

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <SectionWrapper id="about-intro" className="text-center">
          <Image
                src="/images/left-overlay.webp"
                alt=""
                width={700}
                height={700}
                className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
              />
      <div className="flex flex-col items-center"> {/* 👈 wrapper ensures vertical stack */}

        {/* Main Heading */}
        <motion.h2
          className="text-white text-2xl md:text-4xl font-extrabold leading-snug max-w-4xl mx-auto my-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We are a new-generation marketing agency built at the intersection of
          creativity, strategy, and craftsmanship.
        </motion.h2>

        {/* Highlighted Subtext */}
        <motion.p
          className="text-blue-400 text-2xl md:text-4xl font-bold max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          What sets us apart is not just what we create, but how we think.
        </motion.p>

      </div>
    </SectionWrapper>
  );
}
