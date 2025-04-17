import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import GradientText from "@/components/GradientText";
import NetworkAnimation from "@/components/NetworkAnimation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  };

  // Pulse animation for glow effects
  const pulseAnimation = {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  };

  // Typing animation variants
  const typingContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const typingText = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Text content for typing animation
  const text = "Connecting minds, algorithms, and innovation".split(" ");

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20"
    >
      {/* Background animation with enhanced mouse effect */}
      <NetworkAnimation
        className="opacity-20 z-0"
        particleCount={70}
        connectionDistance={180}
        mouseEffect={true}
        mouseRadius={150}
        mouseStrength={6}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-24 left-16 h-64 w-64 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 blur-3xl opacity-50"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-24 right-16 h-80 w-80 rounded-full bg-gradient-to-l from-secondary/10 to-accent/10 blur-3xl opacity-30"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Rest of your Hero component remains the same */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <ScrollReveal
              direction="down"
              effect="spring"
              duration={1.2}
              className="mb-4"
            >
              <h1 className="font-poppins font-bold text-4xl md:text-6xl leading-tight">
                Discover <GradientText>DATUM</GradientText>
                <br />
                GLA University's
                <br />
                Premier Tech Club
              </h1>
            </ScrollReveal>

            <motion.div
              className="text-gray-300 text-lg md:text-xl mb-8"
              variants={typingContainer}
              initial="hidden"
              animate="visible"
            >
              {text.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-1.5"
                  variants={typingText}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <ScrollReveal
              effect="stagger"
              staggerChildren={0.15}
              delay={0.8}
              className="flex space-x-4"
            >
              <div>
                <Button
                  className="blue-gradient px-8 py-6 rounded-lg font-poppins font-medium shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-2 hover:scale-105"
                  onClick={() => {
                    const about = document.querySelector("#about");
                    if (about) {
                      window.scrollTo({
                        top: (about as HTMLElement).offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2,
                    }}
                  >
                    Explore
                  </motion.span>
                </Button>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="bg-transparent border border-accent/50 px-8 py-6 rounded-lg font-poppins font-medium hover:bg-accent/10 hover:border-accent text-white transition-all transform hover:-translate-y-2 hover:scale-105"
                  onClick={() => {
                    const events = document.querySelector("#events");
                    if (events) {
                      window.scrollTo({
                        top: (events as HTMLElement).offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Our Events
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            direction="right"
            effect="spring"
            duration={1}
            delay={0.3}
            distance={80}
          >
            <motion.div className="relative" animate={floatingAnimation}>
              <Logo width={320} height={320} />

              {/* Multi-layered glowing effects */}
              <motion.div
                className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"
                animate={pulseAnimation}
              />

              <motion.div
                className="absolute inset-4 bg-secondary/10 rounded-full blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <motion.div
                className="absolute inset-8 bg-accent/20 rounded-full blur-xl"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
