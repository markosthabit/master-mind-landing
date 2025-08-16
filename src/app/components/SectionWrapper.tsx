"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ id, children }: { id: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center scroll-snap-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
