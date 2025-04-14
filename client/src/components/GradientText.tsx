import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GradientText({ 
  children, 
  className = "", 
  delay = 0 
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.span>
  );
}
