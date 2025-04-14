import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal 
            className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
            direction="left"
            effect="spring"
            distance={100}
            threshold={0.3}
          >
            <div className="relative w-full h-96 overflow-hidden rounded-xl">
              <ScrollReveal
                effect="fade"
                duration={1.5}
                delay={0.2}
              >
                <img 
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Tech workshop at DATUM" 
                  className="w-full h-full object-cover rounded-xl transform transition-all duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </ScrollReveal>
              
              <div className="absolute bottom-0 left-0 p-6">
                <ScrollReveal
                  direction="up"
                  effect="bounce"
                  delay={0.6}
                >
                  <p className="text-sm font-medium text-accent">
                    LEARN • COLLABORATE • INNOVATE
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="md:w-1/2">
            <ScrollReveal 
              direction="right"
              effect="spring"
              distance={100}
              threshold={0.3}
            >
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                About <GradientText>DATUM</GradientText>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal 
              direction="up"
              effect="slide"
              delay={0.2}
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                DATUM is GLA University's premier technology club, dedicated to fostering innovation and technical excellence among students. Our mission is to create a collaborative environment where members can explore cutting-edge technologies, develop practical skills, and build solutions that address real-world challenges.
              </p>
            </ScrollReveal>
            
            <ScrollReveal 
              effect="stagger" 
              delay={0.3}
              staggerChildren={0.15}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <Card className="bg-card border-blue-gradient-dark/20 h-full transform transition-all duration-500 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-poppins font-semibold text-xl text-accent">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    To cultivate technical curiosity and provide hands-on experience with emerging technologies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-blue-gradient-dark/20 h-full transform transition-all duration-500 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-poppins font-semibold text-xl text-accent">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Empowering the next generation of tech leaders through knowledge sharing and practical innovation
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal
              direction="up"
              effect="bounce"
              delay={0.6}
            >
              <Button 
                variant="outline" 
                className="bg-transparent border border-accent px-6 py-2 rounded-lg font-poppins font-medium hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 text-white transition-all transform hover:-translate-y-1"
                onClick={() => {
                  const team = document.querySelector("#team");
                  if (team) {
                    window.scrollTo({
                      top: (team as HTMLElement).offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Meet Our Team
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
