import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import NetworkAnimation from "@/components/NetworkAnimation";
import ScrollReveal from "@/components/ScrollReveal";

export default function CallToAction() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background with particles */}
      <NetworkAnimation className="opacity-10 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal 
          className="max-w-4xl mx-auto text-center"
          direction="scale"
          effect="spring"
          duration={0.8}
          threshold={0.2}
        >
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-5xl mb-6 leading-tight"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(30, 144, 255, 0)",
                "0 0 15px rgba(30, 144, 255, 0.3)",
                "0 0 5px rgba(30, 144, 255, 0)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            Ready to <GradientText>Join</GradientText> the Future of Tech?
          </motion.h2>
          
          <ScrollReveal 
            className="text-gray-300 text-lg mb-8 leading-relaxed"
            direction="up"
            effect="slide"
            delay={0.2}
          >
            <p>
              Become a part of DATUM and embark on your journey to technological excellence. Connect with like-minded individuals, learn from the best, and create innovations that matter.
            </p>
          </ScrollReveal>
          
          <ScrollReveal 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            effect="stagger"
            staggerChildren={0.15}
            delay={0.3}
          >
            <div>
              <Button 
                className="blue-gradient px-10 py-6 rounded-lg font-poppins font-medium shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-2 hover:scale-105"
                onClick={() => {
                  const contact = document.querySelector("#contact");
                  if (contact) {
                    window.scrollTo({
                      top: (contact as HTMLElement).offsetTop - 80,
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
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Apply for Membership
                </motion.span>
              </Button>
            </div>
            <div>
              <Button 
                variant="outline"
                className="bg-transparent border border-accent/50 px-10 py-6 rounded-lg font-poppins font-medium hover:bg-accent/10 hover:border-accent text-white transition-all transform hover:-translate-y-2 hover:scale-105"
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
                Attend an Event
              </Button>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>
      
      {/* Decorative elements that appear on scroll */}
      <ScrollReveal
        className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32"
        direction="left"
        effect="spring"
        duration={1.2}
        delay={0.5}
        distance={100}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/10 to-secondary/5 blur-3xl"></div>
      </ScrollReveal>
      
      <ScrollReveal
        className="absolute top-0 right-0 w-96 h-96 -mt-48 -mr-48"
        direction="right"
        effect="spring"
        duration={1.2}
        delay={0.5}
        distance={100}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-bl from-secondary/10 to-accent/5 blur-3xl"></div>
      </ScrollReveal>
    </section>
  );
}
