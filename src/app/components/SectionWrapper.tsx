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
      className={`min-h-[calc(100vh-4rem)] flex items-center justify-center scroll-snap-start ${className || ""}`}
      style={{ scrollMarginTop: "4rem" }}
      initial={{ opacity: 0, y: 0 }} // Changed for visibility
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Lowered amount for easier trigger
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}