"use client"; 

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";

export default function AboutIntro() {
  return (
    <SectionWrapper id="about-intro" className="bg-[#0A0F54] text-center py-20 px-6">
 
      <motion.p
        className="text-white text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed"
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
