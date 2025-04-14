import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Events from "@/sections/Events";
import Team from "@/sections/Team";
import CallToAction from "@/sections/CallToAction";
import Contact from "@/sections/Contact";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Features />
      <Events />
      <Team />
      <CallToAction />
      <Contact />
    </motion.div>
  );
}
