// components/animations/SlideIn.tsx
import { motion } from "framer-motion";

export default function SlideIn({ children, from = "left" }: { children: React.ReactNode; from?: "left" | "right" }) {
  const x = from === "left" ? -50 : 50;
  return (
    <motion.div initial={{ opacity: 0, x }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
