"use client"; 

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";

export default function AboutTeam() {
  return (
    <SectionWrapper id="about-team" className="text-left px-16 justify-start items-center">
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
