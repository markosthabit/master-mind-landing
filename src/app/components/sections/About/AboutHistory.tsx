"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
export default function AboutHistroy() {
  return (
    <SectionWrapper id="about-histroy"
      className=" text-center py-10 px-4 sm:py-16 sm:px-8 md:py-20 md:px-16 lg:px-32"
>
      <Image
        src="/images/left-overlay.webp"
        alt=""
        width={512}
        height={512}
        className="absolute -right-7/32 -top-3/32 object-contain pointer-events-none -rotate-12 -z-50"
      />
            <Image
        src="/images/left-overlay.webp"
        alt=""
        width={512}
        height={512}
        className="absolute -right-5/32 -bottom-24/32 object-contain pointer-events-none rotate-45 -z-50"
      />
          <Image
                src="/images/left-overlay.webp"
                alt=""
                width={700}
                height={700}
                className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
              />
      {/* Paragraph 1 */}
      <motion.p
        className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed"
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
    </SectionWrapper>
  );
}
