import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code, UsersRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: Lightbulb,
    title: "Workshops & Training",
    description: "Hands-on sessions on AI, machine learning, data science, web development, and emerging technologies.",
    direction: "up" as const,
  },
  {
    icon: Code,
    title: "Hackathons & Contests",
    description: "Competitive events to solve problems, build projects, and showcase your technical skills.",
    direction: "up" as const,
  },
  {
    icon: UsersRound,
    title: "Networking & Mentorship",
    description: "Connect with industry professionals, alumni, and peers to expand your professional network.",
    direction: "up" as const,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal 
          className="text-center mb-16"
          direction="scale"
          effect="spring"
          duration={0.8}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            What We <GradientText>Offer</GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us to experience a variety of tech-focused activities and opportunities for growth
          </p>
        </ScrollReveal>
        
        <ScrollReveal 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          effect="stagger"
          staggerChildren={0.15}
          threshold={0.1}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="flex">
                <Card className="bg-background border border-accent/20 h-full transform transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <ScrollReveal 
                      direction="scale" 
                      effect="bounce"
                      delay={0.1}
                    >
                      <div className="p-3 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 transform transition-all duration-500 hover:bg-secondary/20">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" effect="slide" delay={0.2}>
                      <CardTitle className="font-poppins font-semibold text-xl mb-3">
                        {feature.title}
                      </CardTitle>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" effect="slide" delay={0.3}>
                      <p className="text-gray-300">{feature.description}</p>
                    </ScrollReveal>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
