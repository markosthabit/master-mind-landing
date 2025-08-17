"use client";
import { motion } from "framer-motion";

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
      className="min-h-screen bg-[#0A0F54] flex flex-col items-center justify-center px-6 py-20 text-white"
    >
      {/* About us */}
      <motion.h3
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: false, amount: 0.4 }}
        className="text-lg font-semibold mb-10"
      >
        About us
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            <span className="text-sky-400">SMART</span> <br />
            STRATEGIES, <br />
            <span className="text-sky-400">BRILLIANT</span> <br />
            RESULTS
          </h2>
          <div className="mt-6 h-[5px] w-3/4 bg-sky-400"></div>
        </motion.div>

        {/* Right content */}
        <div className="space-y-12">
          {/* Vision */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-3xl font-extrabold text-sky-400 mb-3">
              Our Vision
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed border-l-4 border-sky-400 pl-4">
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
            <h3 className="text-3xl font-extrabold text-sky-400 mb-3">
              Our Mission
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed border-l-4 border-sky-400 pl-4">
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
