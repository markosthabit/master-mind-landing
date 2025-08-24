"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

export default function AboutVision() {
  return (
    <section
      id="about-vision"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-20 text-white"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
        {/* Left text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-sky-400">SMART</span> <br />
            STRATEGIES, <br />
            <span className="text-sky-400">BRILLIANT</span> <br />
            RESULTS
          </h2>
          <div className="mt-4 sm:mt-6 h-[3px] sm:h-[5px] w-2/3 sm:w-3/4 bg-sky-400"></div>
        </motion.div>

        {/* Right content */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Vision */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-400 mb-2 sm:mb-3">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed border-l-4 border-sky-400 pl-3 sm:pl-4">
              To set the global standard for innovation in marketing where
              customer insight fuels bold design, flawless execution, and
              transformative brand experiences across every medium.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-400 mb-2 sm:mb-3">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed border-l-4 border-sky-400 pl-3 sm:pl-4">
              To empower brands through customer-centric creativity delivering
              tailored design, premium production, and precision-crafted print
              solutions that resonate deeply with audiences and drive lasting
              value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
