"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center scroll-snap-start ${className || ""}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
