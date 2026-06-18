"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
