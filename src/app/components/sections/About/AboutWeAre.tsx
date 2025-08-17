"use client"; 

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";

export default function AboutTeam() {
  return (
    <SectionWrapper id="about-team" className="bg-[#0A0F54] text-center py-20 px-6">
      {/* Title */}
      <motion.h3
        className="text-white text-lg font-medium mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About us
      </motion.h3>

      {/* Main Heading */}
      <motion.h2
        className="text-white text-2xl md:text-4xl font-extrabold leading-snug max-w-4xl mx-auto mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We are a new-generation marketing agency built at the intersection of
        creativity, strategy, and craftsmanship.
      </motion.h2>

      {/* Highlighted Subtext */}
      <motion.p
        className="text-blue-400 text-lg md:text-2xl font-semibold max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        What sets us apart is not just what we create, but how we think.
      </motion.p>

      {/* Paragraph 1 */}
      <motion.p
        className="text-white text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        From bold brand identities to immersive campaigns, and from high-impact
        digital solutions to premium print executions, we are relentless in our
        pursuit of excellence. At our core, we are customer-obsessed creators,
        dedicated to understanding our clients&apos; unique challenges and
        transforming them into powerful, purposeful solutions. Every concept is
        tailored, every design intentional, and every deliverable executed to
        perfection.
      </motion.p>

      {/* Paragraph 2 */}
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
