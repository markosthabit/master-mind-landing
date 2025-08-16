import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
